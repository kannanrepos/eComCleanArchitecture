import CheckboxList, { FilterData } from '@/components/ui/checkbox-list';
import FilterSection from './FilterSection';
type CategorySectionProps = {
  data: FilterData[];
  onSelected?: (data: FilterData[] | undefined) => void;
};
const CategorySection = ({ data, onSelected }: CategorySectionProps) => {
  return (
    <FilterSection header="Category">
      <CheckboxList data={data} onSelected={onSelected} />
    </FilterSection>
  );
};

export default CategorySection;
