import { motion } from 'framer-motion';
import Autoplay from 'embla-carousel-autoplay';
import { Product } from '../../types/product.types';
import { cn } from '../../lib/utils';
import { parkinsansCF } from '../../styles/fonts';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import ProductCard from './ProductCard';
import Link from 'next/link';
import { Button } from '../ui/button';

type ProductListSecProps = {
  title: string;
  data: Product[];
  viewAllLink?: string;
};
const ProductListSection = ({
  title,
  data,
  viewAllLink,
}: ProductListSecProps) => {
  return (
    <section className="max-w-frame mx-auto">
      <div className="w-full flex items-center justify-between content-between mb-4">
        <div className="items-center justify-between flex-col md:flex-row">
          <motion.h2
            initial={{ y: '100px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn([
              parkinsansCF.className,
              'text-[15px] md:text-2xl font-bold capitalize',
            ])}
          >
            {title}
          </motion.h2>
        </div>
        <div>
          {viewAllLink && (
            <div className="w-full px-4 sm:px-0 text-center">
              <Link href={viewAllLink}>
                <Button className="px-8 py-2 bg-transparent border-2 border-primary text-primary rounded-sm hover:bg-primary hover:text-primary-foreground">
                  View All
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
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
              delay: 2000,
            }),
          ]}
          className="w-full mb-6 md:mb-9"
        >
          <CarouselContent className="mx-4 xl:mx-0 space-x-4 sm:space-x-5">
            {data.map((product) => (
              <CarouselItem
                key={product.id}
                className="w-full max-w-[198px] sm:max-w-[295px] pl-0"
              >
                <ProductCard data={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </section>
  );
};

export default ProductListSection;
