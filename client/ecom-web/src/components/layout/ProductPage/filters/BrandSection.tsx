import React from 'react';
import FilterSection from './FilterSection';
import CheckboxList, { FilterData } from '@/components/ui/checkbox-list';

type BrandSectionProps = {
  data: FilterData[];
  onSelected?: (data: FilterData[] | undefined) => void;
};
const BrandSection = ({ data, onSelected }: BrandSectionProps) => {
  return (
    <FilterSection header="Brands">
      <CheckboxList data={data} onSelected={onSelected} />
    </FilterSection>
  );
};

export default BrandSection;
