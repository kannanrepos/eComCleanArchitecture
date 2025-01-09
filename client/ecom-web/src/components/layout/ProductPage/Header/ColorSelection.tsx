import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

import { colorsData } from '@/lib/data';

const ColorSelection = () => {
  const [selectedColor, setSelectedColor] = useState('');
  return (
    <div className="flex flex-col">
      <span className="text-sm sm:text-base text-black/60 mb-4">
        Select Colors
      </span>
      <div className="flex items-center flex-wrap space-x-3 sm:space-x-4">
        {colorsData.map((color, index) => (
          <div
            onClick={() => setSelectedColor(color.code)}
            key={index}
            className={`w-10 h-10 rounded-full ${color.code} cursor-pointer hover:scale-11 items-center justify-center flex `}
          >
            {selectedColor === color.code ? (
              <CheckCircle className="text-white font-black" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ColorSelection;
