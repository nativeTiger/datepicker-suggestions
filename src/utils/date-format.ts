import { format } from "date-fns";

/**
 * @description Format date to MM-dd-yyyy
 */
export function formatDateToMonthDayYear(date: Date) {
  return format(date, "MM-dd-yyyy");
}
