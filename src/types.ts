export enum EmployeeType {
  ADMIN = 'ADMIN',
  GENERAL = 'GENERAL',
  SUPER = 'SUPER',
}

// Props

export interface Clickable<T, E = unknown> {
  onClick: (e: E) => T;
}

export interface TableActionProps {
  id: string | any;
  firstAction: (e: any) => any;
  secondAction: (e: any) => any;
}
