export interface DropDownProps {
  data?: string[];
  defaultValue: string;
  onChange: (value: string) => void;
  className?: string;
  hoverDropdown?: boolean;
  children?: React.ReactNode;
  type?: string;
  defaultLabel?: string;
  name?: string;
  id?: string;
  value?: string;
}
