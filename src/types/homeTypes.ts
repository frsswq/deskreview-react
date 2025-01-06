export interface WorkItemData {
  companyName: string;
  servicesItems: string[];
  year: string;
  industry: string;
  detail: string;
  images?: string[];
}

export interface WorkItemDetailData extends WorkItemData {
  isOpen: boolean;
  onClick: () => void;
}

export interface ServicesData {
  type: string;
  service: string[];
}
