export interface TableProps {
  headers: Header[];
  data: Data[];
  markPosition: number;
  onEdit: (id: number) => void;
  onBack: (id: number) => void;
  onSave: (record: Data) => void;
  onChange: (headerId: string, recordId: number) => void;
}

export interface Header {
  id: string;
  label: string;
  componentType: string;
}

export enum Status {
  ReadyOnly = 'ReadyOnly',
  Editable = 'Editable',
  Deleted = 'Deleted',
}

export interface Data {
  id: number;
  status: Status;
  canEdit: boolean;
  hasMark?: boolean;
  value: {
    [key: string]: {
      value: any;
      isValid: boolean;
      canEdit: boolean;
    };
  };
  newValue: {
    [key: string]: {
      value: any;
      isValid: boolean;
      canEdit: boolean;
    };
  }
}