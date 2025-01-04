'use client';

import { useEffect, useState } from 'react';
import * as motion from 'framer-motion/client';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useIsClient, useMediaQuery } from 'usehooks-ts';

import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Review } from '@/types/review.types';
import ReviewCard from '@/components/common/ReviewCard';
import HeaderTag from '@/components/common/HeaderTag';

type ReviewsProps = { data: Review[] };

const Reviews = ({ data }: ReviewsProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isClient = useIsClient();

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (!isClient) return null;

  return (
    <section className="overflow-hidden">
      <motion.div
        initial={{ x: '100px', opacity: 0 }}
        whileInView={{ x: '0', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Carousel
          setApi={setApi}
          opts={{
            align: 'center',
            loop: true,
          }}
          className="relative w-full mb-6 md:mb-9"
        >
          <div className="relative flex items-end sm:items-center max-w-frame mx-auto mb-6 md:mb-10 px-4 xl:px-0">
            <HeaderTag title="OUR HAPPY CUSTOMERS" />
            <div className="flex items-center space-x-1 ml-2">
              <CarouselPrevious variant="ghost" className="text-2xl">
                <ArrowLeft />
              </CarouselPrevious>
              <CarouselNext variant="ghost" className="text-2xl">
                <ArrowRight />
              </CarouselNext>
            </div>
          </div>
          <CarouselContent>
            {data.map((review, index) => (
              <CarouselItem
                key={review.id}
                className="w-full max-w-[358px] sm:max-w-[400px] pl-5"
              >
                <ReviewCard
                  className="h-full"
                  data={review}
                  blurChild={
                    data.length >= 6 && (
                      <div
                        className={cn([
                          isDesktop
                            ? (current + 1 === count
                                ? 0
                                : current + 1 > count
                                ? 1
                                : current + 1) === index && 'backdrop-blur-sm'
                            : (current === count ? 0 : current) === index &&
                              'backdrop-blur-[2px]',
                          isDesktop
                            ? (current === 1
                                ? count - 2
                                : current === 2
                                ? count - 1
                                : current - 3) === index && 'backdrop-blur-sm'
                            : (current === 1
                                ? count - 1
                                : current === 2
                                ? 0
                                : current - 2) === index && 'backdrop-blur-sm',
                          'absolute bg-white/10 right-0 top-0 h-full w-full z-sm',
                        ])}
                      />
                    )
                  }
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </section>
  );
};

export default Reviews;
