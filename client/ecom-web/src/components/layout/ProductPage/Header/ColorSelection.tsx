import React, { useState } from 'react';
import { Color } from '../../../../lib/features/products/productsSlice';
import { CheckCircle } from 'lucide-react';
const colorsData: Color[] = [
  {
    name: 'Brown',
    code: 'bg-[#4F4631]',
  },
  {
    name: 'Green',
    code: 'bg-[#314F4A]',
  },
  {
    name: 'Blue',
    code: 'bg-[#31344F]',
  },
];
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
