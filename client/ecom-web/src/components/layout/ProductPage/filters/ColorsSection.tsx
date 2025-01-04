'use client';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

import FilterSection from './FilterSection';

const ColorsSection = () => {
  const [selected, setSelected] = useState<string>('');
  return (
    <FilterSection header="Color">
      <div className="flex space-2.5 flex-wrap md:grid grid-cols-5 gap-2.5">
        {[
          'bg-[#7A6DFF]',
          'bg-[#F27F8D]',
          'bg-[#53E3A6]',
          'bg-[#D48D2B]',
          'bg-[#6C3E94]',
          'bg-[#F19B35]',
          'bg-[#3D72E2]',
          'bg-[#F5B7A6]',
          'bg-[#A8F8C0]',
          'bg-[#9E44D8]',
        ].map((color, index) => (
          <Button
            variant={'ghost'}
            key={index}
            className={cn([
              color,
              'rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border border-primary/20 hover:scale-110',
              `hover:${color}`,
            ])}
            onClick={() => setSelected(color)}
          >
            {selected === color && (
              <CheckCircle className="text-base text-white" />
            )}
          </Button>
        ))}
      </div>
    </FilterSection>
  );
};
export default ColorsSection;
