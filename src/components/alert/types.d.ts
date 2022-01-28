export interface EmptyStateComponentProp {
  model: string;
  canAdd: boolean;
  message?: string;
}

export interface ErrorStateComponentProp {
  model: string;
  canReload: boolean;
  reload: () => void;
  message?: string;
}
