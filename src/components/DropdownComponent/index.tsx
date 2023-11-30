import React from "react";
import "./styles.scss";
import { DropdownInterface } from "interfaces/util-interface";
import { truncateString } from "utils/text-util";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";

interface DropdownComponentProps {
  placeholder?: string;
  dropdownOption: DropdownInterface[];
  selectedOption: string;
  truncateCharLength?: number;
  borderColor?: string;
  borderRadius?: number;
  handleChange: Function;
  paddingX?: number;
  textColor?: string;
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({
  dropdownOption = [],
  selectedOption = "",
  truncateCharLength = 35,
  placeholder = "Select a value",
  borderColor = "#0A0A0A",
  borderRadius = 6,
  handleChange,
  paddingX = 10,
  textColor = "#0A0A0A"
}) => {
  const [open, setOpen] = React.useState(false);
  const generateNameFromValue = (
    array: { value: string; name: string }[],
    value: string
  ) => {
    const result = array.filter((e) => value === e.value);
    return result;
  };
  return (
    <div data-testid="dropDownComponent" className="custom-dropdown">
      <div
        data-testid="dropDownComponentTrigger"
        className="cursor-pointer flex justify-between items-center h-[44px]"
        onClick={() => setOpen(!open)}
        style={{
          border: `1px solid ${borderColor}`,
          borderRadius: `${borderRadius}px`,
          padding: `0 ${paddingX}px`
        }}
      >
        <p
          data-testid="dropDownValue"
          className="mr-3 text-[14.5px]"
          style={{ color: textColor }}
        >
          {(dropdownOption.length > 0 &&
            selectedOption !== "" &&
            truncateString(
              generateNameFromValue(dropdownOption, selectedOption)[0]?.name,
              truncateCharLength
            )) ||
            placeholder?.substring(0, 35)}
        </p>

        {open ? (
          <PiCaretDownBold color="#162930" size={14} />
        ) : (
          <PiCaretUpBold color="#162930" size={14} />
        )}
      </div>
      {open && (
        <div data-testid="dropDownMenu" className="dropdown-menu">
          {dropdownOption.map((el, index) => (
            <p
              key={index + el.name}
              onClick={() => {
                setOpen(false);
                handleChange(el?.value);
              }}
              className="dropdown-options h-[40px] flex items-center px-4"
            >
              {el.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownComponent;
