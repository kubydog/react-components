import React, { useRef } from 'react';
import { Data, Header, TableProps } from './types';
import * as Styled from './styled';
import Delete from './Delete/Delete';
import Edit from './Edit/Edit';
import { Status } from './interface';
import Plus from './Plus/Plus';
import Back from './Back/Back';
import { Overlay, OverlayTrigger } from 'react-bootstrap';
import TextInput from '../textInput/TextInput';
import MSave from './Save/MSave';
import InputFieldCell from './InputFieldCell';
import InfoIcon from './InfoIcon';

const Table = React.forwardRef(({
  headers,
  data,
  markPosition,
  onEdit,
  onBack,
  onSave,
  onChange,
}: TableProps, ref: any) => {
  // const onDelete = () => {
  //   console.log('delete');
  // };
  
  const onAdd = () => {
    console.log('add');
  };

  const cellOverlay = (isValid: boolean) => {
    if (isValid) {
      return <></>;
    }
    return <Styled.InvalidTooltip>Tooltip information</Styled.InvalidTooltip>;
  };

  const onCellChange = (header: Header, record: Data, value: number) => {
    if (!record.newValue) {
      record.newValue = {};
    }
    record.newValue[header.id] = {
      value: value,
      canEdit: true,
      isValid: true,
    }
    
  };

  const TableBodyCell = ({ header, record, onChange }: any) => {
    switch(header.componentType) {
      case 'text':
        return record.value[header.id].value;
      case 'input':
      default:
        if (record.value[header.id].canEdit) {
          return (
            <Styled.EditCell>
              <InputFieldCell
                initValue={record.newValue[header.id]?.value || record.value[header.id].value}
                name={`${header.id}-${record.id}`}
                header={header}
                record={record}
                onChange={onCellChange}
              />
              <OverlayTrigger
                placement="right"
                trigger="hover"
                overlay={cellOverlay(false)}
              >
                <Styled.WarningIcon>
                  <InfoIcon />
                </Styled.WarningIcon>
              </OverlayTrigger>
            </Styled.EditCell>
          );
        } else {
          return record.value[header.id].value;
        }
    }
  };

  const renderCell = (idx: number, record: Data, header: Header) => {
    if (record.status === Status.ReadyOnly) {
      if (idx === 0) {
        if (record.value[header.id].value) {
          if (record.canEdit) {
            return (
              <Styled.ActionGroupsWrapper>
                {/* <Delete recorderId={record.id} onDelete={onDelete} /> */}
                <Edit recorderId={record.id} onEdit={onEdit} />
              </Styled.ActionGroupsWrapper>
            );
          }
        } else {
          return (
            <Plus onAdd={onAdd} />
          );
        }
      } else {
        return record.value[header.id].value;
      }
    } else if (record.status === Status.Editable) {
      if (idx === 0) {
        return (
          <Styled.ActionGroupsEditableWrapper>
            <Back recorderId={record.id} onBack={onBack} />
            <MSave record={record} onSave={onSave} />
          </Styled.ActionGroupsEditableWrapper>
        );
      } else {
        return (
          <TableBodyCell
            header={header}
            record={record}
            onChange={onChange(header.id, record.id)}
          />
        );
      }
    }
  };

  const onmouseenter = () => {
    console.log('MouseEnter');
  }
  
  const table = useRef(null);

  return (
  <Styled.Wrapper>
    <OverlayTrigger
      placement="top"
      overlay={cellOverlay(false)}
    >
      <Styled.Mark 
          height={`${headers.length * 51}px`} 
          left={`${markPosition}px`}
          onMouseEnter={onmouseenter}
        />
    </OverlayTrigger>
    
    <Styled.Table ref={table}>
      <tbody>
      {headers?.map((header, idx) => (
        <Styled.BodyRow odd={idx === 0 || idx % 2 !== 0} key={header.id}>
          <Styled.LeftHeaderCell>{header.label}</Styled.LeftHeaderCell>
          {data?.map((record) => (
            record.hasMark
            ? <Styled.BodyCell isEditMode={record.status === Status.Editable} key={record.id} ref={ref}>{renderCell(idx, record, header)}</Styled.BodyCell>
            : <Styled.BodyCell isEditMode={record.status === Status.Editable} key={record.id}>{renderCell(idx, record, header)}</Styled.BodyCell>
          ))}
        </Styled.BodyRow>
      ))}
      </tbody>
    </Styled.Table>
  </Styled.Wrapper>
  );
});

export default Table;
