import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import LineChartExample from './recharts/Line';
import EditableTable from './EditableGrid/observation/editableTable/EditableTable';
import { Status } from './EditableGrid/observation/editableTable';
import Table from './EditableGrid/observation/editableTable/Table';
import { Data, Header } from './EditableGrid/observation/editableTable/types';
import Select from 'react-select';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import { STATUS_CODES } from 'http';

function App() {
  // const properties = {
  //   dateTime: {
  //     id: 1,
  //     component: 'input',
  //     accept: 'string',
  //     orderNumber: 1,
  //     observerId: 'number',
  //     label: 'Date/Time',
  //   },
  //   fluidTake: {
  //     id: 2,
  //     component: 'input',
  //     accept: 'number',
  //     orderNumber: 2,
  //     observerId: 'number',
  //     label: 'Fluid InTake',
  //   },
  //   oralTotal: {
  //     id: 3,
  //     component: 'select',
  //     accept: 'number',
  //     orderNumber: 3,
  //     observerId: 'number',
  //     label: 'Oral (Total)',
  //     options: [
  //       { value: '100', label: '100' },
  //       { value: '200', label: '200' },
  //       { value: '300', label: '300' },
  //       { value: '400', label: '400' },
  //       { value: '500', label: '500' }],
  //   },
  //   tea: {
  //     id: 4,
  //     component: 'input',
  //     accept: 'number',
  //     orderNumber: 4,
  //     observerId: 'number',
  //     label: 'Tea',
  //   },
  //   water: {
  //     id: 5,
  //     component: 'input',
  //     accept: 'number',
  //     orderNumber: 5,
  //     observerId: 'number',
  //     label: 'Water',
  //   },
  //   coffee: {
  //     id: 6,
  //     component: 'input',
  //     accept: 'number',
  //     orderNumber: 6,
  //     observerId: 'number',
  //     label: 'Coffee',
  //   },
  //   ivFluidTotal: {
  //     id: 7,
  //     component: 'input',
  //     accept: 'number',
  //     orderNumber: 7,
  //     observerId: 'number',
  //     label: 'IV Fluid (Total)',
  //   },
  //   dextrose: {
  //     id: 8,
  //     component: 'input',
  //     accept: 'number',
  //     orderNumber: 8,
  //     observerId: 'number',
  //     label: 'Dextrose',
  //   },

  // };

  // const rows = Object.keys(properties);

  // const getProperty = (propertyName: string) => {
  //   switch (propertyName) {
  //     case 'dateTime':
  //       return properties.dateTime;
  //     case 'fluidTake':
  //       return properties.fluidTake;
  //     case 'oralTotal':
  //       return properties.oralTotal;
  //     case 'tea':
  //       return properties.tea;
  //     case 'water':
  //       return properties.water;
  //     case 'coffee':
  //       return properties.coffee;
  //     case 'ivFluidTotal':
  //       return properties.ivFluidTotal;
  //     case 'dextrose':
  //       return properties.dextrose;
  //     default:
  //       return {};
  //   }
  // };

  // const predefined = [{
  //   recorderId: 2,
  //   observerId: 1,
  //   propertyId: 1,
  //   value: '02:00',
  // },
  // {
  //   recorderId: 3,
  //   observerId: 1,
  //   propertyId: 1,
  //   value: '03:00',
  // },
  // {
  //   recorderId: 4,
  //   observerId: 1,
  //   propertyId: 1,
  //   value: '04:00',
  // },
  // {
  //   recorderId: 5,
  //   observerId: 1,
  //   propertyId: 1,
  //   value: '05:00',
  // },
  // {
  //   recorderId: 6,
  //   observerId: 1,
  //   propertyId: 1,
  //   value: '06:00',
  // },{
  //   recorderId: 7,
  //   observerId: 1,
  //   propertyId: 1,
  //   value: '07:00',
  // },
  // ].map((i) => ({ ...i, status: Status.ReadyOnly }));

  // const newData = [
  //   {
  //     recorderId: 2,
  //     observerId: 1,
  //     propertyId: 1,
  //     value: 'ml',
  //   },
  //   {
  //     recorderId: 2,
  //     observerId: 1,
  //     propertyId: 2,
  //     value: 'ml',
  //   },
  //   {
  //     recorderId: 2,
  //     observerId: 1,
  //     propertyId: 3,
  //     value: 'ml',
  //   },
  //   {
  //     recorderId: 2,
  //     observerId: 1,
  //     propertyId: 4,
  //     value: 'ml',
  //   },
  //   {
  //     recorderId: 2,
  //     observerId: 1,
  //     propertyId: 5,
  //     value: 'ml',
  //   },
  //   {
  //     recorderId: 2,
  //     observerId: 1,
  //     propertyId: 6,
  //     value: 'ml',
  //   },
  //   {
  //     recorderId: 2,
  //     observerId: 1,
  //     propertyId: 7,
  //     value: 'ml',
  //   },
  //   {
  //     recorderId: 2,
  //     observerId: 1,
  //     propertyId: 8,
  //     value: 'ml',
  //   },
  // ].map((i) => ({ ...i, status: Status.ReadyOnly }));

  // const header = [{
  //   recorderId: 1,
  //   status: Status.ReadyOnly,
  //   observer: 'Dr John Collinson',
  // }];
  
  // const init = [{
  //   recorderId: 1,
  //   observerId: 1,
  //   propertyId: 1,
  //   value: '01:00',
  // },
  // {
  //   recorderId: 1,
  //   observerId: 1,
  //   propertyId: 2,
  //   value: '',
  // },
  // {
  //   recorderId: 1,
  //   observerId: 1,
  //   propertyId: 3,
  //   value: '200',
  // },
  // {
  //   recorderId: 1,
  //   observerId: 1,
  //   propertyId: 4,
  //   value: '100',
  // },
  // {
  //   recorderId: 1,
  //   observerId: 1,
  //   propertyId: 5,
  //   value: '110',
  // },
  // {
  //   recorderId: 1,
  //   observerId: 1,
  //   propertyId: 6,
  //   value: '120',
  // },
  // {
  //   recorderId: 1,
  //   observerId: 1,
  //   propertyId: 7,
  //   value: '100',
  // },
  // {
  //   recorderId: 1,
  //   observerId: 1,
  //   propertyId: 8,
  //   value: '120',
  // },
  // ].map((i) => ({ ...i, status: Status.ReadyOnly }));

  // const columnHeaders = [
  //   {
  //     id: 'observations',
  //     label: 'Observations',
  //   },
  //   {
  //     id: 'observer',
  //     label: 'Observer',
  //   },
  //   {
  //     id: 'dateTime',
  //     label: 'Date/Time',
  //   },
  //   {
  //     id: 'water',
  //     label: 'Water',
  //   },
  //   {
  //     id: 'coffee',
  //     label: 'Coffee', 
  //   }
  // ];

  // const [initHeader] = useState(header);
  // const [initData] = useState(init.concat(predefined));
  // const [lastColumnHeader] = useState('24 h Total');
  // const [headers, setHeaders] = useState(header);
  // const [data, setData] = useState(initData);
  // const [currentRecorderId, setCurrentRecorderId] = useState(1);
  // const [interval, setInterval] = useState(1);
  // const [predefinedData, setPredefinedData] = useState(predefined);


  // const onAdd = () => {
  //   const newHeader = {
  //     status: Status.Editable,
  //     observer: 'Dr John Collinson',
  //     recorderId: currentRecorderId + 1,
  //   };
  //   setData([...data, ...newData.map((i) => ({ ...i, recorderId: currentRecorderId + 1, status: Status.Editable }))]);
  //   setHeaders([...headers, newHeader]);
  //   setCurrentRecorderId(currentRecorderId + 1);
  // };

  // const onDelete = (recorderId: number) => {
  //   setHeaders(headers.map((h) => (h.recorderId === recorderId ? ({ ...h, status: Status.Deleted }) : h)));
  //   setData(data.map((r) => (r.recorderId === recorderId ? ({ ...r, status: Status.Deleted }) : r)));
  // };

  // const onRevert = (recorderId: number) => {
  //   setHeaders(headers.map((h) => (h.recorderId === recorderId ? ({ ...h, status: Status.ReadyOnly }) : h)));
  //   setData(data.map((r) => (r.recorderId === recorderId ? ({ ...r, status: Status.ReadyOnly }) : r)));
  // };

  // const onEdit = (recorderId: number) => {
  //   setHeaders(headers.map((h) => (h.recorderId === recorderId ? ({ ...h, status: Status.Editable }) : h)));
  //   setData(data.map((r) => (r.recorderId === recorderId ? ({ ...r, status: Status.Editable }) : r)));
  // };

  // const onBack = (recorderId: number) => {
  //   const originalHeader = initHeader.filter((h) => h.recorderId === recorderId)[0];
  //   if (originalHeader) {
  //     setHeaders(headers.map((h) => (h.recorderId === recorderId ? ({ ...h, status: Status.ReadyOnly }) : h)));

  //     const list = data.filter((r) => r.recorderId);

  //     const updates = data.reduce((acc : any, curr : any) => {
  //       let result = curr.value;
  //       if (list.find((l) => l.propertyId === curr.propertyId && l.recorderId === curr.recorderId)) {
  //         result = initData.find((i) => i.propertyId === curr.propertyId && i.recorderId === curr.recorderId)?.value || '';
  //       }
  //       return [...acc,
  //         {
  //           ...curr,
  //           status: Status.ReadyOnly,
  //           value: result,
  //         },
  //       ];
  //     }, []);
  //     setData(updates);
  //   } else {
  //     setData(data.filter((r) => r.recorderId !== recorderId));
  //     setHeaders(headers.filter((h) => h.recorderId !== recorderId));
  //   }
  // };

  // const onSave = async (recorderId: number) => {
  //   setHeaders(headers.map((h) => (h.recorderId === recorderId ? ({ ...h, status: Status.ReadyOnly }) : h)));
  //   setData(data.map((r) => (r.recorderId === recorderId ? ({ ...r, status: Status.ReadyOnly }) : r)));
  // };

  // const onChange = (recorderId: number, propertyId: number) => (e: any) => {
  //   const newValue = e?.value || e.target.value;
  //   setData(data.map((r) => ((r.recorderId === recorderId && r.propertyId === propertyId) ? ({ ...r, value: newValue }) : r)));
  // };

  // const onHandleSettingClick = () => {
  //   // eslint-disable-next-line no-alert
  //   alert('setting icon clicked');
  // };

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
      hasMark: true,
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
    <div className="App">
      {/* <EditableTable
        tableName='Observations'
        leftHeader='Observer'
        headers={headers}
        lastColumnHeader={lastColumnHeader}
        data={data}
        rows={rows}
        getProperty={getProperty}
        newRecordTemplate={newData}
        onAdd={onAdd}
        onDelete={onDelete}
        onEdit={onEdit}
        onBack={onBack}
        onSave={onSave}
        onRevert={onRevert}
        onChange={onChange}
        onHandleSettingClick={onHandleSettingClick}
      /> */}
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

export default App;
