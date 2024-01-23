import { ReactElement } from 'react';

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
  modalActions: ReactElement;
}

export interface ActionsProps {
  actions: Action[];
}
