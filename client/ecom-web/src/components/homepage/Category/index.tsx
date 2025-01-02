import { Carousel, CarouselContent, CarouselItem } from '../../ui/carousel';
import { MonitorSmartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import Autoplay from 'embla-carousel-autoplay';

const categoriesData = [
  {
    id: 1,
    title: 'Grocery',
    srcUrl: '🛍️',
  },
  {
    id: 2,
    title: 'Mobiles',
    srcUrl: '📱',
  },
  {
    id: 3,
    title: 'Fashion',
    srcUrl: '👗',
  },
  {
    id: 4,
    title: 'Electronics',
    srcUrl: '💻',
  },
  {
    id: 5,
    title: 'Furniture',
    srcUrl: '🛋️',
  },
  {
    id: 6,
    title: 'Shoes',
    srcUrl: '👟',
  },
  {
    id: 7,
    title: 'Kids',
    srcUrl: '👶',
  },
];

const Categories = () => {
  return (
    <div className="w-full mx-auto bg-secondary/20 flex flex-wrap items-center justify-center md:justify-between pt-1 sm:px-4 xl:px-0 my-0">
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
                  <div className="bg-muted rounded-full p-3 items-center justify-center flex flex-col gap-2   cursor-pointer">
                    {/* <Image
                  src={category.srcUrl}
                  alt={category.title}
                  width={50}
                  height={50}
                  onError={(e) => {
                    e.currentTarget.src = '/images/categories/default.png';
                  }}
                /> */}
                    <div className="flex flex-col hover:scale-110 items-center justify-center">
                      <div className="text-[25px] md:text-[50px]">
                        {category.srcUrl}
                      </div>
                      <p className="text-[10px] hidden lg:block">
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
