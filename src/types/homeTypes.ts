export interface workItemTypes {
  companyName: string;
  servicesItems: string[];
  year: string;
  industry: string;
  detail: string;
  images?: string[];
}

export interface workItemButtonTypes {
  companyName: string;
  isOpen: boolean;
  onClick: () => void;
}

export interface workItemDetailTypes {
  servicesItems: string[];
  year: string;
  industry: string;
  detail: string;
  images?: string[];
  isOpen: boolean;
}

export interface servicesTypes {
  type: string;
  service: string[];
}
