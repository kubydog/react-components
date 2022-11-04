import React, { useEffect, useRef, useState } from 'react';
import './Table.css';
import { Status } from './observation/editableTable';
import Table from './observation/editableTable/Table';
import { Data, Header } from './observation/editableTable/types';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

function Observation() {

    const headers: Header[] = [
        {
            id: 'observations',
            label: 'Observations',
            componentType: 'action',
        },
        {
            id: 'observer',
            label: 'Observer',
            componentType: 'text',
        },
        {
            id: 'time',
            label: 'Time',
            componentType: 'text',
        },
        {
            id: 'water',
            label: 'Water',
            componentType: 'input',
        },
        {
            id: 'coffee',
            label: 'Coffee',
            componentType: 'input',
        }
    ];

    const initData: Data[] =[
        {
            id: 1,
            status: Status.ReadyOnly,
            canEdit: true,
            value: {
                observations: {
                    value: true,
                    canEdit: false,
                    isValid: true,
                },
                observer: {
                    value: 'Dr John Collinson',
                    canEdit: false,
                    isValid: true,
                },
                time: {
                    value: '01:00',
                    canEdit: false,
                    isValid: true,
                },
                water: {
                    value: 110,
                    canEdit: true,
                    isValid: true,
                },
                coffee: {
                    value: 120,
                    canEdit: true,
                    isValid: true,
                },
            },
            newValue: {},
        },
        {
            id: 2,
            status: Status.ReadyOnly,
            canEdit: false,
            value: {
                observations: {
                    value: true,
                    canEdit: false,
                    isValid: true,
                },
                observer: {
                    value: 'Dr John Collinson',
                    canEdit: false,
                    isValid: true,
                },
                time: {
                    value: '02:00',
                    canEdit: false,
                    isValid: true,
                },
                water: {
                    value: 110,
                    canEdit: true,
                    isValid: true,
                },
                coffee: {
                    value: 120,
                    canEdit: false,
                    isValid: true,
                },
            },
            newValue: {},
        },
        {
            id: 3,
            status: Status.ReadyOnly,
            canEdit: true,
            // hasMark: true,
            value: {
                observations: {
                    value: true,
                    canEdit: false,
                    isValid: true,
                },
                observer: {
                    value: 'Dr John Collinson',
                    canEdit: false,
                    isValid: true,
                },
                time: {
                    value: '03:00',
                    canEdit: false,
                    isValid: true,
                },
                water: {
                    value: 110,
                    canEdit: true,
                    isValid: true,
                },
                coffee: {
                    value: 120,
                    canEdit: false,
                    isValid: true,
                },
            },
            newValue: {},
        },
    ];
    const [timeInterval, setTimeInterval] = useState(1);
    const getPreData = (interval: number): Data[] => {
        const columns = Math.floor((24 - init[init.length - 1].id) / interval);
        return new Array(columns).fill(0).map((d, idx) => {
            const lastItem = init[init.length -1];
            return ({
                id: lastItem.id + interval * (idx + 1),
                status: Status.ReadyOnly,
                canEdit: true,
                hasMark: idx === 16,
                value: {
                    observations: {
                        value: false,
                        canEdit: false,
                        isValid: true,
                    },
                    observer: {
                        value: undefined,
                        canEdit: false,
                        isValid: true,
                    },
                    time: {
                        value: `0${parseInt(lastItem.value.time.value?.toString() || '', 10) + interval * (idx + 1)}:00`.slice(-5),
                        canEdit: false,
                        isValid: true,
                    },
                    water: {
                        value: undefined,
                        canEdit: true,
                        isValid: true,
                    },
                    coffee: {
                        value: undefined,
                        canEdit: true,
                        isValid: true,
                    },
                },
                newValue: {},
            });
        })
    };

    const [init, setInit] = useState(initData);
    const [preData, setPreData] = useState(getPreData(timeInterval));
    const [data, setData] = useState(init.concat(preData));
    const [markPosition, setMarkPosition] = useState(0);


    const options = [
        {value: 1, label: '1'},
        {value: 2, label: '2'},
        {value: 4, label: '4'},
        {value: 12, label: '12'},
    ];

    const onChange = (event: any) => {
        setTimeInterval(event.value);
        console.log(timeInterval);
        const pre = getPreData(event.value);
        setPreData(pre);
        setData(init.concat(pre));
        if (tableRef.current) {
            const rect = tableRef.current.getBoundingClientRect();
            setMarkPosition(rect.right - 20);
        }
    };

    const onEdit = (id: number) => {
        setData(data.map((record) => record.id === id ? ({...record, status: Status.Editable} ) : record));
    };

    const onInputChange = (headerId: string, recordId: number) => (e: any) => {
        setData(data.map((record) => {
            if(record.id === recordId) {
                // record.value[headerId] = e.target.value;
            }
            return record;
        }))
    };

    const onBack = (recordId: number) => {
        setData(init.map((record) => record.id === recordId ? ({...record, status: Status.ReadyOnly}) : record).concat(preData));
    };

    const onSave = (newRecord: Data) => {
        const newInit = init.map((record) => record.id === newRecord.id ? ({...newRecord, status: Status.ReadyOnly}) : record);
        setInit(newInit);
        // setData(data.map((record) => record.id === newRecord.id ? ({...newRecord, status: Status.ReadyOnly}) : record));
        setData(newInit.concat(preData));
    }

    const tableRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (tableRef.current) {
            console.log('get current');
            const rect = tableRef.current.getBoundingClientRect();
            setMarkPosition(rect.right - 20);
        }
    })

    return (
        <div className="table">
            <Table
                headers={headers}
                data={data}
                onEdit={onEdit}
                onBack={onBack}
                onSave={onSave}
                onChange={onInputChange}
                markPosition={markPosition}
                ref={tableRef}
            />
            <Select
                options={options}
                defaultValue={options[0]}
                onChange={onChange}
            />
        </div>
    );
}

export default Observation;
