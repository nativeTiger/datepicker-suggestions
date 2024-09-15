import type { Meta, StoryObj } from "@storybook/react";
import { DateRangeWithSuggestion } from "../date-range-suggestion";

const meta: Meta = {
  title: "components/DatePicker with Suggestion",
  component: DateRangeWithSuggestion,
  tags: ["autodocs"],
} satisfies Meta<typeof DateRangeWithSuggestion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultDateRangePickerWithSuggestion: Story = {};
