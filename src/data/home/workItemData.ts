import { workItemDataTypes } from "../../types/homeTypes";

const modules = import.meta.glob("./portfolio/*.json", { eager: true });

export const workItemData: workItemDataTypes[] = Object.values(modules).map(
  (module: any) => module.default
);

export const sortedWorkItemData = workItemData.sort((a, b) => {
  if (a.projectYear !== b.projectYear) {
    return b.projectYear.localeCompare(a.projectYear);
  }

  return a.clientName.localeCompare(b.clientName);
});
