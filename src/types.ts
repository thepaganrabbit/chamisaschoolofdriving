export enum EmployeeType {
  ADMIN = 'ADMIN',
  GENERAL = 'GENERAL',
  SUPER = 'SUPER',
}

export interface SignInProps {
  username: string;
  password: string;
  clockIn?: boolean;
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

export interface LogInClockin {
  onAction: (e: SignInProps) => void;
}