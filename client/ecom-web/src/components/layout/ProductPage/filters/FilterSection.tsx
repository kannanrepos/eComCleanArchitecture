import { ReactNode } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
type FilterSectionProps = {
  header: string;
  children: ReactNode;
};
const FilterSection = ({ header, children }: FilterSectionProps) => {
  return (
    <Accordion type="single" collapsible defaultValue="filter-price">
      <AccordionItem value="filter-price" className="border-none">
        <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">
          {header}
        </AccordionTrigger>
        <AccordionContent className="pt-4 pb-0">{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterSection;
