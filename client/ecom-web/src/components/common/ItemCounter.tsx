'usee client';
import React, { useState } from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
type ItemCounterProps = {
  isZeroDelete?: boolean;
  onAdd?: (value: number) => void;
  onRemove?: (value: number) => void;
  className?: string;
  initialValue?: number;
};
const ItemCounter = ({
  isZeroDelete,
  onAdd,
  onRemove,
  className,
  initialValue = 1,
}: ItemCounterProps) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const addToCart = () => {
    if (onAdd) {
      onAdd(counter + 1);
    }
    setCounter(counter + 1);
  };

  const remove = () => {
    if ((counter === 1 && !isZeroDelete) || counter <= 0) return;

    if (onRemove) {
      onRemove(counter - 1);
    }
    if (counter - 1 <= 0) return;
    setCounter(counter - 1);
  };
  return (
    <div
      className={cn(
        'bg-primary/10 w-full min-w-[100px] max-w-[100px] sm:max-w-[150px] py-2 md:py-2.5 px-3 sm:px-4  flex items-center justify-between',
        className
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        type="button"
        className="h-3 w-3 text-xl hover:bg-transparent"
        onClick={() => remove()}
      >
        <MinusIcon />
      </Button>
      <span className="font-medium text-sm sm:text-base">
        {!isZeroDelete ? counter : initialValue}
      </span>
      <Button
        variant="ghost"
        size="icon"
        type="button"
        className="h-3 w-3 text-xl hover:bg-transparent"
        onClick={() => addToCart()}
      >
        <PlusIcon />
      </Button>
    </div>
  );
};

export default ItemCounter;
