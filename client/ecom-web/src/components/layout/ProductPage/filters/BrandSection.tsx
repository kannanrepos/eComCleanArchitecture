import CheckboxList, { FilterData } from '@/components/ui/checkbox-list';
import FilterSection from './FilterSection';

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
