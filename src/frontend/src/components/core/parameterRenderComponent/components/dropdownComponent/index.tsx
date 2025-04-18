import Dropdown from "../../../dropdownComponent";
import { DropDownComponentType, InputProps } from "../../types";

export default function DropdownComponent({
  id,
  value,
  editNode,
  handleOnNewValue,
  disabled,
  combobox,
  options,
  name,
  dialogInputs,
  optionsMetaData,
  nodeClass,
  nodeId,
  handleNodeClass,
  ...baseInputProps
}: InputProps<string, DropDownComponentType>) {
  const onChange = (value: any, dbValue?: boolean, skipSnapshot?: boolean) => {
    handleOnNewValue({ value, load_from_db: dbValue }, { skipSnapshot });
  };

  return (
    <Dropdown
      disabled={disabled}
      editNode={editNode}
      options={options}
      nodeId={nodeId}
      nodeClass={nodeClass}
      handleNodeClass={handleNodeClass}
      optionsMetaData={optionsMetaData}
      onSelect={onChange}
      combobox={combobox}
      value={value || ""}
      id={`dropdown_${id}`}
      name={name}
      dialogInputs={dialogInputs}
      handleOnNewValue={handleOnNewValue}
      {...baseInputProps}
    />
  );
}
