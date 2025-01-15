import { format } from "date-fns";

export const parseDateUtil = (dateString: string): Date => {
  const [day, month, year] = dateString.split("-");
  return new Date(`${year}-${month}-${day}`);
};

export const formatDateUtil = (dateString: string): string => {
  return format(parseDateUtil(dateString), "dd-MM-yyyy");
};

export const formatDateBlogUtil = (dateString: string): string => {
  return format(parseDateUtil(dateString), "MMMM dd, yyyy");
};
