import { Tooltip } from 'react-bootstrap';
import styled from 'styled-components';

export const Table = styled.table`
  border-spacing: 0;
  border-collapse: separate;
  border-radius: 4px;
  border: 1px solid #D1D1D1;
  width: 100%;


  th:not(:last-child),
  td:not(:last-child){
    border-right: 1px solid #D1D1D1;
  }

  tr:not(:last-child)>th,
  tr:not(:last-child)>td,
  tr:not(:last-child)>th,
  tr:not(:last-child)>td,
  tr:not(:last-child)>th,
  tr:not(:last-child)>td,
  tr:not(:last-child)>td,
  tr:not(:last-child)>th,
  &:not(:last-child),
  &:not(:last-child),
  &:not(:last-child) {
  border-bottom: 1px solid #D1D1D1;
  }
`;

export const HeaderRow = styled.tr`
  background: #F2F2F2;
`;
interface BodyRowProps {
  odd: boolean;
}
export const BodyRow = styled.tr<BodyRowProps>`
  ${({ odd }) => odd && `
    background: #F2F2F2;
  `}
`;

export const LeftHeaderCell = styled.th`
  color: #676767;
  width: 204px;
  padding-left: 16px;
  padding-right: 8px;
  line-height: 48px;
  text-alight: left;
  font-size: 12px;  

`;

export const TopHeaderCell = styled.th<HeaderCellProps>`
  font-weight: 700; 
  height: 48px;
  min-width: 81px;
  color: #676767;
  width:81px;
  text-align:center;
  font-size: 12px;

  ${({ isEditMode }) => isEditMode
    && `
     width: 200px;
     background: #F2F2F2;
    `}
`;
interface HeaderCellProps {
  isEditMode?: boolean;
}
export const HeaderCell = styled.th<HeaderCellProps>`
    height: 48px;
    min-width: 81px;
    color: #676767;
    width:89px;
    text-align:center;
    font-size: 12px;

    ${({ isEditMode }) => isEditMode
    && `
     min-width: 200px;
     background: #F2F2F2;
    `}
    
    svg { cursor: pointer; }

`;

export const BodyCell = styled.td<{ isEditMode?: boolean;}>`
  height: 48px;
  min-width:81px;
  color: #676767;
  width:89px;
  text-align:center;
  font-size: 12px;
  position: relative;
  ${({ isEditMode }) => isEditMode
  && `
   min-width: 200px;
   background: #F2F2F2;
  `}
`;

export const ActionGroupsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

`;
export const ActionGroupsEditableWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  svg{
    margin-right:13px;
  }

`;

interface SettingCellProps {
  isFirst?: boolean;
  isBottom?: boolean;
}
export const SettingCell = styled.th<SettingCellProps>`
  color: #676767;
  min-width: 48px;
  max-width: 48px;
  text-align: center;
  font-size: 12px;
  background: #f2f2f2;
  border-bottom: 1px solid #d1d1d1;

  ${({ isFirst }) => isFirst
    && `
  border-bottom: none;
`}

  ${({ isBottom }) => isBottom
    && `
    border-bottom: none;
`}

  svg {
    margin: 10px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: auto;
`;

export const DisplayCell = styled.div<{ deleted: boolean }>`
  ${({ deleted }) => deleted
    && `
    &:before {
      content: ' ';
      border-style: dashed;
      border-width: 2px;
      border-color: #FBBBBB;
      height: 100%;
      position: absolute;
      top: 0;
      left: 50%;
      }
`}
`;

export const InvalidTooltip = styled(Tooltip)`
  & .tooltip-arrow::before {
    border-right-color: #FF0000;
  }

  & .tooltip-inner {
    background-color: #FF0000;
    color: #FFFFFF;
  }
`;

export const MarkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Mark = styled.div<{ height: string; left: string; }>`
  width: 4px;
  border: 1px solid red;
  background-color: red;
  height: ${({ height }) => height};
  left: ${({ left }) => left};
  position: relative;
  z-index: 99999;
`;

export const EditCell = styled.div`
  display: flex;
  align-items: center;
`;

export const WarningIcon = styled.div`
  margin-left: -30px;
  z-index: 1000;
  background-color: red;
`;
