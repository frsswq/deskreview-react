export interface workItemDataTypes {
  companyName: string;
  servicesItems: string[];
  year: string;
  industry: string;
  detail: string;
  images?: string[];
}

export interface workItemButtonProps {
  companyName: string;
  isOpen: boolean;
  onClick: () => void;
}

export interface workItemDetailProps {
  servicesItems: string[];
  year: string;
  industry: string;
  detail: string;
  images?: string[];
  isOpen: boolean;
}

export interface servicesDataTypes {
  type: string;
  service: string[];
}
