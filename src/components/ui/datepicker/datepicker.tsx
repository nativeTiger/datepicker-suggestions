import { ComponentProps } from "react";
import { DayPicker } from "react-day-picker";
import { cn } from "../../../utils";

export type DatePickerProps = ComponentProps<typeof DayPicker>;

export function DatePicker({
  className,
  classNames,
  ...props
}: DatePickerProps) {
  return (
    <DayPicker
      {...props}
      className={cn(className)}
      classNames={{
        months:
          "flex flex-row gap-7 mb-5 sm:flex-row space-y-4 sm:space-x-2 sm:space-y-0 relative",
        month:
          "space-y-4 w-full [&>table]:w-full [&>table]:min-w-[20rem] [&>table]:flex [&>table]:flex-col [&>table>thead]:py-3 [&>table>thead>tr]:flex [&>table>thead>tr]:justify-between [&>table>thead>tr]:p-2 [&>table>tbody]:flex [&>table>tbody]:flex-col [&>table>tbody]:gap-4 [&>table>tbody>tr>td]:w-full [&>table>tbody>tr>td>button]:h-full [&>table>tbody>tr>td>button]:w-full [&>table>tbody>tr]:flex",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-gray-700 text-base leading-6 font-bold",
        nav: "space-x-1 absolute right-0 flex items-center",
        nav_button: cn(
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "!w-full border-collapse space-y-1",
        weekdays: "[&>th]:!text-base [&>th]:!font-medium",
        head_row: "flex",
        head_cell: "text-gray-700 w-9 font-semibold text-xs",
        row: "flex w-full mt-2 w-full",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected])]:bg-transparent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          "h-10 w-10 text-center text-blue-900 aria-selected:text-blue-900 p-0 font-medium text-base leading-4 not-italic hover:bg-blue-700 hover:rounded-md hover:text-white"
        ),
        range_end: "",
        selected: "bg-blue-700 !text-white rounded-md",
        today: "bg-blue-100 rounded-md font-black hover:!text-slate-50",
        disabled: "text-slate-500 opacity-50",
        range_middle:
          "!bg-blue-100 aria-selected:!bg-blue-100 !text-black aria-selected:!text-black hover:!text-black !rounded-none",
        day_hidden: "invisible",
        outside:
          "!text-slate-500 aria-selected:!text-slate-500 hover:!text-black/80 !opacity-50 aria-selected:!opacity-50 !bg-transparent",

        ...classNames,
      }}
    />
  );
}

DatePicker.displayName = "DatePicker";
