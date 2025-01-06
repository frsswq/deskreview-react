export interface workItemTypes {
  companyName: string;
  servicesItems: string[];
  year: string;
  industry: string;
  detail: string;
  images?: string[];
}

export interface workItemDetailTypes extends workItemTypes {
  isOpen: boolean;
  onClick: () => void;
}

export interface servicesTypes {
  type: string;
  service: string[];
}
