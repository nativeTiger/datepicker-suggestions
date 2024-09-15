import { useState } from "react";
import { DateRange } from "react-day-picker";
import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "../datepicker";

const meta: Meta = {
  title: "components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

function DatePickerComponents() {
  const [singleSelected, setSingleSelected] = useState<Date | undefined>(
    undefined
  );

  return (
    <div className="container flex gap-10 py-20">
      <DatePicker
        mode="single"
        numberOfMonths={1}
        pagedNavigation
        selected={singleSelected}
        onSelect={setSingleSelected}
        showOutsideDays={true}
      />
    </div>
  );
}

function DateRangePickerComponents() {
  const [selected, setSelected] = useState<DateRange | undefined>(undefined);

  return (
    <div className="container flex gap-10 py-20">
      <DatePicker
        mode="range"
        numberOfMonths={2}
        pagedNavigation
        selected={selected}
        onSelect={setSelected}
        showOutsideDays={true}
      />
    </div>
  );
}

export const DefaultDatePicker: Story = {
  render: DatePickerComponents,
};

export const DateRangePicker: Story = {
  render: DateRangePickerComponents,
};
