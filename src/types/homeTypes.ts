export interface workItemDataTypes {
  clientName: string;
  servicesItems: string[];
  projectYear: string;
  clientIndustry: string;
  projectDetail: string;
  projectImages?: string[];
}

export interface workItemButtonProps {
  clientName: string;
  isOpen: boolean;
  onClick: () => void;
}

export interface workItemDetailProps {
  servicesItems: string[];
  projectYear: string;
  clientIndustry: string;
  projectDetail: string;
  projectImages?: string[];
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
