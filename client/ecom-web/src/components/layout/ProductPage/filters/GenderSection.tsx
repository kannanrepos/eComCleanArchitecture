import CheckboxList, { FilterData } from '@/components/ui/checkbox-list';
import FilterSection from './FilterSection';

type GenderSectionProps = {
  data: FilterData[];
  onSelected?: (data: FilterData[] | undefined) => void;
};
const GenderSection = ({ data, onSelected }: GenderSectionProps) => {
  return (
    <FilterSection header="Gender">
      <CheckboxList data={data} onSelected={onSelected} />
    </FilterSection>
  );
};

export default GenderSection;
