import Link from 'next/link';
import Image from 'next/image';
import * as motion from 'framer-motion/client';

import AnimatedHeader from '@/components/animated/AnimatedHeader';
import AnipatedParagraph from '@/components/animated/AnipatedParagraph';

import CustomerHighlights from './CustomerHighlights';

const Header = () => {
  return (
    <header className="bg-muted pt-10 md:pt-24 overflow-hidden">
      <div className="md:max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <section className="max-w-frame px-4">
          <AnimatedHeader text="FIND CLOTHES THAT MATCHES YOUR STYLE" />
          <AnipatedParagraph
            text="Browse through our diverse range of meticulously crafted garments,
      designed to bring out your individuality and cater to your sense of style."
          />
          <motion.div
            initial={{ y: '100px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link
              href="/shop"
              className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-primary hover:bg-primary/80 transition-all text-primary-foreground px-14 py-4 rounded-full hover:animate-pulse"
            >
              Shop Now
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: '100px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex md:h-full md:max-h-11 lg:max-h-[52px] xl:max-h-[68px] items-center justify-center md:justify-start flex-wrap sm:flex-nowrap md:space-x-3 lg:space-x-6 xl:space-x-8 md:mb-[116px]"
          >
            <CustomerHighlights />
          </motion.div>
        </section>
        <motion.section
          initial={{ y: '100px', opacity: 0, rotate: 10 }}
          whileInView={{ y: '0', opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className="relative md:px-4 min-h-[448px] md:min-h-[428px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat bg-[url('/images/homepage-banner-md.png')] md:bg-[url('/images/homepage-banner-sm.png')]"
        >
          <Image
            priority
            src="/icons/big-star.svg"
            height={104}
            width={104}
            alt="big star"
            className="absolute right-7 xl:right-0 top-60 max-w-[76px] max-h-[76px] lg:max-w-24 lg:max-h-max-w-24 xl:max-w-[104px] xl:max-h-[104px] animate-[spin_4s_infinite]"
          />
          <Image
            priority
            src="/icons/small-star.svg"
            height={56}
            width={56}
            alt="small star"
            className="absolute -left-7 md:-left-7 -top-16 sm:-top-64 md:-top-44 lg:-top-6 max-w-11 max-h-11 md:max-w-14 md:max-h-14 animate-[spin_3s_infinite]"
          />
        </motion.section>
      </div>
    </header>
  );
};

export default Header;
