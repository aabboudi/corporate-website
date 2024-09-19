import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

type MultiSelectProps = {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder: string;
};

export const MultiSelect = ({
  options,
  selected,
  onChange,
  placeholder,
}: MultiSelectProps) => {
  return (
    <Select
      onValueChange={(value) => {
        if (selected.includes(value)) {
          onChange(selected.filter((item) => item !== value));
        } else {
          onChange([...selected, value]);
        }
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder={placeholder}>
          {selected.length > 0 ? `${selected.length} selected` : placeholder}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            <div className="flex items-center space-x-2">
              <Checkbox checked={selected.includes(option)} />
              <span>{option}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
