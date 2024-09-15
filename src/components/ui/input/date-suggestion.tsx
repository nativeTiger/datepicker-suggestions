import { useState } from "react";
import { ActionMeta, GroupBase, OptionsOrGroups } from "react-select";

import {
  getDate,
  getSuggestion,
  TDateSuggestion,
  createOptionForDate,
} from "../../../utils";
import { Select } from "../select/select";

interface DateSuggestionInputProps {
  readonly value: unknown;
  readonly onChange:
    | ((newValue: unknown, actionMeta: ActionMeta<unknown>) => void)
    | undefined;
}

export function DateSuggestionInput({
  value,
  onChange,
}: DateSuggestionInputProps) {
  const [options, setOptions] = useState<
    OptionsOrGroups<unknown, GroupBase<unknown>> | undefined
  >([]);

  const handleInputChange = (newValue: string) => {
    if (!newValue) return setOptions([]);

    const suggestion = getSuggestion(newValue.toLowerCase()) as TDateSuggestion;

    const date = getDate(suggestion);
    if (!date) return setOptions([]);

    setOptions([createOptionForDate(date)]);
  };

  return (
    <Select
      value={value}
      isMulti={false}
      filterOption={null}
      options={options}
      onChange={onChange}
      noOptionsMessage={() => null}
      components={{ DropdownIndicator: null }}
      onInputChange={handleInputChange}
      placeholder="MM-dd-yyyy"
    />
  );
}
