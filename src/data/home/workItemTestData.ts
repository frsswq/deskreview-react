import { workItemTestDataTypes } from "../../types/homeTypes";

const modules = import.meta.glob("./portfolio/*.json", { eager: true });

export const WorkItemTestData: workItemTestDataTypes[] = Object.values(
  modules
).map((module: any) => module.default);
