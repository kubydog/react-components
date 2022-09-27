/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import * as Styled from './styled';
import {
  HeaderActionGroups, Item, Status, TableProps,
  Property,
} from './interface';
import Save from './Save/Save';
import Back from './Back/Back';
import Edit from './Edit/Edit';
import Delete from './Delete/Delete';
import Plus from './Plus/Plus';
import Setting from './Setting/Setting';
import Revert from './Revert/Revert';
import TextInput from '../textInput/TextInput';

interface TableBodyCellProps {
  item: Item;
  onChange: (e: any) => void;
  property: Partial<Property>;
}

const cellOverlay = (isValid: boolean) => {
  if (isValid) {
    return <></>;
  }
  return <Styled.InvalidTooltip>Error Message</Styled.InvalidTooltip>;
};

const TableBodyCell = ({ item, onChange, property }: TableBodyCellProps) => {
  if (item.status === Status.Editable) {
    switch (property.component) {
      case 'input':
      default:
        return (
          <OverlayTrigger
            placement="right"
            trigger="focus"
            overlay={cellOverlay(false)}
          >
            <div>
              <TextInput
                type="string"
                placeholder="ml"
                name={`${item.propertyId}-${item.recorderId}`}
                value={item.value}
                tablecell
                onChange={onChange}
              />
            </div>

          </OverlayTrigger>

        );
    }
  }
  return <Styled.DisplayCell deleted={item.status === Status.Deleted}>{item.value}</Styled.DisplayCell>;
};

const ActionGroups = ({
  header,
  onDelete,
  onEdit,
  onBack,
  onSave,
  onRevert,
}: HeaderActionGroups) => {
  if (header.status === Status.ReadyOnly) {
    return (
      <Styled.ActionGroupsWrapper>
        <Delete recorderId={header.recorderId} onDelete={onDelete} />
        <Edit recorderId={header.recorderId} onEdit={onEdit} />
      </Styled.ActionGroupsWrapper>
    );
  }

  if (header.status === Status.Editable) {
    return (
      <Styled.ActionGroupsEditableWrapper>
        <Back recorderId={header.recorderId} onBack={onBack} />
        <Save recorderId={header.recorderId} onSave={onSave} />
      </Styled.ActionGroupsEditableWrapper>
    );
  }

  if (header.status === Status.Deleted) {
    return (
      <Styled.ActionGroupsEditableWrapper>
        <Revert recorderId={header.recorderId} onRevert={onRevert} />
      </Styled.ActionGroupsEditableWrapper>
    );
  }

  return null;
};

const EditableTable = ({
  tableName,
  headers,
  lastColumnHeader,
  leftHeader,
  data,
  rows,
  getProperty,
  onAdd,
  onDelete,
  onChange,
  onEdit,
  onSave,
  onBack,
  onRevert,
  onHandleSettingClick,
}: TableProps) => (
  <Styled.Wrapper>
    <Styled.Table>
      <Styled.HeaderRow>
        <Styled.LeftHeaderCell>{tableName}</Styled.LeftHeaderCell>
        {headers?.map((l) => (
          <Styled.HeaderCell
            isEditMode={l.status === Status.Editable}
            key={l.recorderId}
          >
            <ActionGroups
              header={l}
              onDelete={onDelete}
              onEdit={onEdit}
              onBack={onBack}
              onSave={onSave}
              onRevert={onRevert}
            />
          </Styled.HeaderCell>
        ))}

        <Styled.HeaderCell isEditMode={false}>
          <Plus onAdd={onAdd} />
        </Styled.HeaderCell>
        <Styled.HeaderCell>
          {lastColumnHeader}
        </Styled.HeaderCell>
        <Styled.SettingCell isFirst>
          <Setting onClick={onHandleSettingClick} />
        </Styled.SettingCell>
      </Styled.HeaderRow>
      <Styled.HeaderRow>
        <Styled.LeftHeaderCell>{leftHeader}</Styled.LeftHeaderCell>
        {headers?.map((h: any) => (
          <Styled.TopHeaderCell
            isEditMode={h.status === Status.Editable}
            key={h.recorderId}
          >
            {h.observer}
          </Styled.TopHeaderCell>
        ))}
        <th />
        <th />
        <Styled.SettingCell />
      </Styled.HeaderRow>
      {rows.map((propertyName, rowIdx) => {
        const property = getProperty(propertyName)!;
        const items = data.filter(
          (i) => i.propertyId === property.id,
        ) as Item[];
        return (
          <Styled.BodyRow
            key={`row-${property.orderNumber}-${property.id}`}
            odd={rowIdx % 2 !== 0}
          >
            <>
              <Styled.LeftHeaderCell>{property.label}</Styled.LeftHeaderCell>
              {items?.map((item) => (
                <Styled.BodyCell
                  isEditMode={item.status === Status.Editable}
                  key={`${item.recorderId}-${item.propertyId}`}
                >
                  <TableBodyCell
                    item={item}
                    property={property}
                    onChange={onChange(item.recorderId, item.propertyId)}
                  />
                </Styled.BodyCell>
              ))}
              <Styled.BodyCell />
              <Styled.BodyCell />
              <Styled.SettingCell
                isBottom={rowIdx === rows.length - 1}
              />
            </>
          </Styled.BodyRow>
        );
      })}
    </Styled.Table>
  </Styled.Wrapper>
);

export default EditableTable;
