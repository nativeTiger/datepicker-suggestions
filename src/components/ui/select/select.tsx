import { cva } from "class-variance-authority";
import ReactSelect, {
  GroupBase,
  OptionProps,
  StylesConfig,
  components,
} from "react-select";

import { cn } from "../../../utils";

export const inputVariants = cva(
  "outline-none w-full duration-300 border rounded border-gray-200 px-4 py-3 text-base font-normal hover:shadow-sm focus:border-gray-800 focus:shadow-base placeholder:text-gray-400 text-gray-800 disabled:bg-gray-100 disabled:cursor-not-allowed"
);

export const Styles:
  | StylesConfig<unknown, boolean, GroupBase<unknown>>
  | undefined = {
  container: (base) => ({
    ...base,
    width: "100%",
  }),
  control: (base) => ({
    ...base,
    boxShadow: "none",
    borderColor: " #e5e7eb",
    padding: "6px",
    ":hover": { borderColor: "#e5e7eb" },
  }),
  placeholder: (base) => ({
    ...base,
    color: "#9ca3af",
  }),
  option: (base) => ({
    ...base,
    backgroundColor: "transparent",
    padding: "1px 0",
    ":hover": { backgroundColor: "transparent" },
  }),
  menuList: (base) => ({
    ...base,
    padding: "4px",
    "::-webkit-scrollbar": {
      display: "none",
    },
  }),
};

interface SelectProps extends React.ComponentProps<typeof ReactSelect> {
  Option?:
    | React.ComponentType<OptionProps<unknown, boolean, GroupBase<unknown>>>
    | undefined;
}

function DefaultOption(props: OptionProps) {
  return (
    <components.Option {...props}>
      <div className="flex cursor-pointer items-center gap-x-2 rounded px-3 py-2 hover:bg-gray-100">
        <label
          className={`cursor-pointer text-sm text-gray-800 ${
            props.isSelected ? "font-semibold" : "font-normal"
          } `}
        >
          {props.label}
        </label>
      </div>
    </components.Option>
  );
}

export function Select({
  isMulti = false,
  closeMenuOnSelect = false,
  Option = DefaultOption,
  className,
  classNames,
  components: componentsProp,
  ...props
}: SelectProps) {
  return (
    <ReactSelect
      isSearchable
      isMulti={isMulti}
      hideSelectedOptions={false}
      closeMenuOnSelect={closeMenuOnSelect}
      components={{
        Option,
        IndicatorSeparator: null,
        ...componentsProp,
      }}
      classNames={{
        control: (state) =>
          cn(
            inputVariants({}),
            state.isFocused && "!border-gray-800 !shadow-base",
            className
          ),
        ...classNames,
      }}
      {...props}
      styles={{ ...Styles }}
      data-cy="select"
    />
  );
}
