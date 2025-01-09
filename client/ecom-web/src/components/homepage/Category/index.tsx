import { motion } from 'framer-motion';
import Autoplay from 'embla-carousel-autoplay';

import { cn } from '@/lib/utils';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { categoriesData } from '@/lib/data';

const Categories = () => {
  return (
    <div className="w-full mx-auto flex flex-wrap items-center justify-center md:justify-between pt-1 sm:px-4 xl:px-0 my-0">
      <div className="flex flex-col gap-3 justify-center my-3 mx-auto">
        <motion.div
          initial={{ y: '100px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Carousel
            opts={{
              align: 'start',
            }}
            plugins={[
              Autoplay({
                delay: 6000,
              }),
            ]}
          >
            <CarouselContent className="mx-4 xl:mx-0 space-x-4 sm:space-x-5">
              {categoriesData.map((category) => (
                <CarouselItem
                  key={category.id}
                  className="w-full max-w-[60px] md:max-w-[110px]  pl-0"
                >
                  <div
                    className={cn([
                      category.color,
                      'rounded-full p-3 items-center justify-center flex flex-col gap-2 cursor-pointer',
                    ])}
                  >
                    <div className="flex flex-col hover:scale-110 items-center justify-center">
                      <div className="text-[25px] md:text-[50px]">
                        {category.srcUrl}
                      </div>
                      <p className="text-[10px] hidden lg:block text-white">
                        {category.title}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
};

export default Categories;
