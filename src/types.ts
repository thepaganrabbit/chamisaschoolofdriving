import { ReactElement } from 'react';

// Enums
export enum EmployeeType {
  ADMIN = 'ADMIN',
  GENERAL = 'GENERAL',
  SUPER = 'SUPER',
}

export enum InOut {
  IN = 'Clock In',
  OUT = 'Clock Out',
}
export interface SignInProps {
  username: string;
  password: string;
  clockIn?: boolean;
}

// types
export type Action = {
  id: string;
  label: string;
  action: (e?: any) => void;
  color?: string;
};

// Props

export interface Clickable<T, E = unknown> {
  onClick: (e: E) => T;
}

export interface HasText {
  text: string;
}

export interface HasChildren {
  children: any;
}

export interface Interactable<T> {
  state: boolean;
  action: (e: T) => void;
}

export interface TableActionProps {
  id: string | any;
  firstAction: (e: any) => any;
  secondAction: (e: any) => any;
}

export interface LogInClockin {
  onAction: (e: SignInProps) => void;
}

export interface ModalProps extends HasChildren, Interactable<boolean> {
  title: string;
  modalActions: ReactElement;
}

export interface ActionsProps {
  actions: Action[];
}

export interface ToolTipProps extends HasChildren {
  timeOut?: number;
}

export interface ClockInProps {
  inOut: InOut | null;
}
