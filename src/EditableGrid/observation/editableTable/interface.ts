/* eslint-disable no-unused-vars */
export interface HeaderProps {
   recorderId: number;
   status: string;
   observer: string;
}

export interface HeaderActionGroups {
  header: HeaderProps,
  onDelete: (recorderId: number) => void;
  onEdit: (recorderId: number) => void;
  onBack: (recorderId: number) => void;
  onRevert: (recorderId: number) => void;
  onSave: (recorderId: number) => Promise<void>;
}

export enum Status {
  ReadyOnly = 'ReadyOnly',
  Editable = 'Editable',
  Deleted = 'Deleted',
}

export interface Item {
  status: Status;
  recorderId: number;
  propertyId: number;
  value: string;
  component?: string;
  valid?: boolean;
}

export interface IData {
  recorderId: number;
  propertyId: number;
  value: string;
  status: Status;
}

interface Option {
  label: string;
  value: string | number;
}
export interface Property {
  id: number;
  component: string;
  accept: string;
  orderNumber: number;
  label: string;
  options: Option[]
}

export interface TableProps {
  tableName: string;
  headers: HeaderProps[];
  lastColumnHeader: string;
  leftHeader: string;
  data: IData[];
  rows: string[];
  getProperty: (propertyName: string) => Partial<Property>;
  newRecordTemplate: IData[];
  onAdd: () => void;
  onDelete: (recorderId: number) => void;
  onEdit: (recorderId: number) => void;
  onBack: (recorderId: number) => void;
  onRevert: (recorderId: number) => void;
  onSave: (recorderId: number) => Promise<void>;
  onChange: (recorderId: number, propertyId: number) => (e: any) => void;
  onHandleSettingClick: () => void;
  validations?: ((value: number | string) => boolean)[];
}
