import CheckboxList, { FilterData } from '@/components/ui/checkbox-list';
import FilterSection from './FilterSection';

type RatingSectionProps = {
  data: FilterData[];
  onSelected?: (data: FilterData[] | undefined) => void;
};
const RatingSection = ({ data, onSelected }: RatingSectionProps) => {
  return (
    <FilterSection header="Ratings">
      <CheckboxList data={data} isRatting={true} onSelected={onSelected} />
    </FilterSection>
  );
};

export default RatingSection;
