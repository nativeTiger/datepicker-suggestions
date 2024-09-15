import {
  parse,
  format,
  setDay,
  isValid,
  addDays,
  subDays,
  setMonth,
  addYears,
  subYears,
  isBefore,
  addMonths,
  subMonths,
  nextSunday,
  nextMonday,
  nextFriday,
  nextTuesday,
  nextThursday,
  nextSaturday,
  nextWednesday,
  previousSunday,
  previousMonday,
  previousFriday,
  previousTuesday,
  previousThursday,
  previousSaturday,
  previousWednesday,
} from "date-fns";

const DateSuggestions = [
  "may",
  "june",
  "july",
  "march",
  "april",
  "today",
  "sunday",
  "monday",
  "friday",
  "august",
  "tuesday",
  "january",
  "october",
  "thursday",
  "saturday",
  "february",
  "november",
  "december",
  "tomorrow",
  "wednesday",
  "september",
  "yesterday",
  "next year",
  "next month",
  "next sunday",
  "next monday",
  "next friday",
  "next tuesday",
  "previous year",
  "next thursday",
  "next saturday",
  "next wednesday",
  "previous month",
  "previous sunday",
  "previous monday",
  "previous friday",
  "previous tuesday",
  "previous thursday",
  "previous saturday",
  "previous wednesday",
] as const;

export type TDateSuggestion = (typeof DateSuggestions)[number];

const suggestions = DateSuggestions.reduce<Record<string, string>>(
  (acc, str) => {
    for (let i = 1; i <= str.length; i++) {
      acc[str.substring(0, i)] = str;
    }
    return acc;
  },
  {}
);

const parseDate = (value: string): Date | undefined => {
  const parsedDate = parse(value, "MM-dd-yyyy", new Date());

  const startDate = new Date(1970, 0, 1);
  if (!isValid(parsedDate) || isBefore(parsedDate, startDate)) {
    return undefined;
  }
  return parsedDate;
};

export const createOptionForDate = (date: Date | string) => {
  const label = (() => format(date, "MM-dd-yyyy"))();
  return {
    value: date,
    label,
  };
};

export const getSuggestion = (str: string) => {
  const words = str.split(" ");
  let suggestion = "";
  let key = "";
  words.forEach((word, index) => {
    key += (index > 0 ? " " : "") + word;
    if (suggestions[key]) {
      suggestion = suggestions[key];
    } else {
      suggestion = key;
    }
  });
  return suggestion;
};

export function getDate(inputValue: TDateSuggestion) {
  const date = new Date();
  switch (inputValue) {
    case "today":
      return date;
    case "tomorrow":
      return addDays(date, 1);
    case "yesterday":
      return subDays(date, 1);
    case "sunday":
      return setDay(date, 0);
    case "monday":
      return setDay(date, 1);
    case "tuesday":
      return setDay(date, 2);
    case "wednesday":
      return setDay(date, 3);
    case "thursday":
      return setDay(date, 4);
    case "friday":
      return setDay(date, 5);
    case "saturday":
      return setDay(date, 6);
    case "next sunday":
      return nextSunday(date);
    case "next monday":
      return nextMonday(date);
    case "next tuesday":
      return nextTuesday(date);
    case "next wednesday":
      return nextWednesday(date);
    case "next thursday":
      return nextThursday(date);
    case "next friday":
      return nextFriday(date);
    case "next saturday":
      return nextSaturday(date);
    case "previous sunday":
      return previousSunday(date);
    case "previous monday":
      return previousMonday(date);
    case "previous tuesday":
      return previousTuesday(date);
    case "previous wednesday":
      return previousWednesday(date);
    case "previous thursday":
      return previousThursday(date);
    case "previous friday":
      return previousFriday(date);
    case "previous saturday":
      return previousSaturday(date);
    case "january":
      return setMonth(date, 0);
    case "february":
      return setMonth(date, 1);
    case "march":
      return setMonth(date, 2);
    case "april":
      return setMonth(date, 3);
    case "may":
      return setMonth(date, 4);
    case "june":
      return setMonth(date, 5);
    case "july":
      return setMonth(date, 6);
    case "august":
      return setMonth(date, 7);
    case "september":
      return setMonth(date, 8);
    case "october":
      return setMonth(date, 9);
    case "november":
      return setMonth(date, 10);
    case "december":
      return setMonth(date, 11);
    case "next month":
      return addMonths(date, 1);
    case "previous month":
      return subMonths(date, 1);
    case "next year":
      return addYears(date, 1);
    case "previous year":
      return subYears(date, 1);
    default:
      return parseDate(inputValue);
  }
}
