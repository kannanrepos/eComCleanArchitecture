import React from 'react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './command';
import Ratings from './ratings';
import { Checkbox } from './checkbox';
export type FilterData = {
  id: string;
  value: string;
  label: string;
};
type CheckboxProps = {
  data: FilterData[];
  isRatting?: boolean;
  onSelected?: (data: FilterData[] | undefined) => void;
};
const CheckboxList = ({ data, isRatting, onSelected }: CheckboxProps) => {
  const [selectedStatus, setSelectedStatus] = React.useState<FilterData[]>([]);

  return (
    <div className="">
      <Command>
        <CommandInput placeholder="Change status..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {data.map((status) => (
              <CommandItem
                key={status.value}
                value={status.value}
                onSelect={() => {
                  const updatedStatus = selectedStatus.some(
                    (item) => item.value === status.value
                  )
                    ? selectedStatus.filter(
                        (item) => item.value !== status.value
                      )
                    : [...selectedStatus, status];
                  setSelectedStatus(updatedStatus);
                  onSelected?.(updatedStatus);
                }}
              >
                <div className="flex items-center gap-2">
                  <Checkbox
                    id={status.id}
                    checked={selectedStatus.some(
                      (item) => item.value === status.value
                    )}
                  />
                  <label htmlFor={status.id}>
                    {isRatting ? (
                      <Ratings
                        initialValue={parseInt(status.value)}
                        allowFraction
                        SVGclassName="inline-block"
                        emptyClassName="fill-gray-50"
                        size={19}
                        readonly
                      />
                    ) : (
                      <>{status.label}</>
                    )}
                  </label>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default CheckboxList;
