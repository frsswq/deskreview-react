import { workItemDataTypes } from "../../types/homeTypes";

const modules = import.meta.glob("./portfolio/*.json", { eager: true });

export const workItemData: workItemDataTypes[] = Object.values(modules).map(
  (module: any) => module.default
);

export const sortedWorkItemData = workItemData.sort((a, b) => {
  if (a.date !== b.date) {
    return b.date.localeCompare(a.date);
  }

  return a.clientName.localeCompare(b.clientName);
});
