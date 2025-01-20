export interface workItemDataTypes {
  companyName: string;
  servicesItems: string[];
  year: string;
  industry: string;
  detail: string;
  images?: string[];
}

export interface workItemTestDataTypes {
  clientName: string;
  filename: string;
  servicesItems: string[];
  date: string;
  industry: string;
  detail: string;
  images?: string[];
}

export interface workItemButtonProps {
  clientName: string;
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

export interface blogPageDataTypes {
  title: string;
  category: string;
  pageImage: string;
}
