import { useState } from "react";
import { DateRange } from "react-day-picker";
import { isBefore, isAfter } from "date-fns";
import { formatDateToMonthDayYear } from "../../../utils";
import { DatePicker } from "./datepicker";
import { Button } from "../button/button";
import { DateSuggestionInput } from "../input/date-suggestion";

export function DateRangeWithSuggestion() {
  const [month, setMonth] = useState(new Date());
  const [endDate, setEndDate] = useState<unknown>();
  const [startDate, setStartDate] = useState<unknown>();
  const [selectedDateRange, setSelectedDateRange] = useState<
    DateRange | undefined
  >();

  const handleReset = () => {
    setSelectedDateRange(undefined);
    setStartDate(null);
    setEndDate(null);
  };

  const handleDateChange = (date: DateRange | undefined) => {
    if (!date) return handleReset();

    setSelectedDateRange(date);

    if (date.from && date.to) {
      setStartDate({
        value: date.from,
        label: formatDateToMonthDayYear(date.from),
      });
      setEndDate({ value: date.to, label: formatDateToMonthDayYear(date.to) });
    }
  };

  const handleInputChangeFrom = (newValue: unknown) => {
    const selectedValue = (newValue as { value: unknown }).value as Date;

    if (selectedDateRange?.to && isAfter(selectedValue, selectedDateRange.to))
      return handleReset();

    setStartDate(newValue);
    setMonth(selectedValue);
    setSelectedDateRange({ from: selectedValue, to: selectedDateRange?.to });
  };

  const handleInputChangeTo = (newValue: unknown) => {
    const selectedValue = (newValue as { value: unknown }).value as Date;

    if (
      selectedDateRange?.from &&
      isBefore(selectedValue, selectedDateRange.from)
    )
      return handleReset();

    setEndDate(newValue);
    setMonth(selectedValue);
    setSelectedDateRange({ from: selectedDateRange?.from, to: selectedValue });
  };

  const handleApply = () => {};

  return (
    <div className="w-[600px] min-w-fit rounded-lg px-4 py-3 shadow-xl">
      <DatePicker
        mode="range"
        month={month}
        pagedNavigation
        numberOfMonths={2}
        showOutsideDays={true}
        onMonthChange={setMonth}
        onSelect={handleDateChange}
        selected={selectedDateRange}
      />
      <div className="flex justify-between">
        <div className="flex w-3/4">
          <DateSuggestionInput
            value={startDate}
            onChange={handleInputChangeFrom}
          />
          <DateSuggestionInput value={endDate} onChange={handleInputChangeTo} />
        </div>
        <Button
          variant="primary"
          disabled={!startDate || !endDate}
          onClick={handleApply}
        >
          Apply
        </Button>
      </div>
    </div>
  );
}
