import type { workItemButtonProps } from "../../types/homeTypes.ts";
import { CaretDownIcon } from "@radix-ui/react-icons";

export default function WorkItem({ clientName, isOpen, onClick }: workItemButtonProps) {
  return (
    <button
      className="grid w-full cursor-pointer grid-cols-[8fr_2fr] items-center border-none bg-transparent pr-2 text-left"
      onClick={onClick}
    >
      <p className="home-item-text">{clientName}</p>
      <CaretDownIcon
        className={`ml-auto transition-transform duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      />
    </button>
  );
}
