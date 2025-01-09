'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { EasyZoomOnHover } from 'easy-magnify';

import { Product } from '@/types/product.types';
type PhotoSectionProps = {
  data: Product;
};
const PhotoSection = ({ data }: PhotoSectionProps) => {
  const [selected, setSelected] = useState<string>(data.srcUrl);

  return (
    <div className="flex flex-col-reverse lg:flex-row lg:space-x-3.5 ">
      {data?.gallery && data.gallery.length > 0 && (
        <div className="flex lg:flex-col space-x-3 lg:space-x-0 lg:space-y-3.5 w-full lg:w-fit items-center lg:justify-start justify-center  mt-3 lg:mt-0">
          {data.gallery.map((image, index) => (
            <div
              key={index}
              className={`w-14 h-14 lg:w-20 lg:h-20 border border-primary/20 rounded-md cursor-pointer ${
                selected === image ? 'border-primary' : ''
              }`}
              onClick={() => setSelected(image)}
            >
              <Image
                src={image}
                alt={data.title}
                width={152}
                height={167}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center justify-center m-0">
        <EasyZoomOnHover
          mainImage={{
            src: selected,
            alt: data.title,
            width: 444,
            height: 530,
          }}
          zoomImage={{
            src: selected,
            alt: data.title,
          }}
          zoomContainerWidth={700}
          zoomContainerHeight={700}
          // distance={20}
          // zoomLensScale={5}
          // delayTimer={1000}
          // loadingIndicator={<EasySkeleton height={100} width={100} />}
        />
      </div>
    </div>
  );
};
export default PhotoSection;
