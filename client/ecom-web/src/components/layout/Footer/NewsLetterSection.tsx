'use client';

import React from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import InputGroup from '@/components/ui/input-group';
import { cn } from '@/lib/utils';
import { parkinsansCF } from '@/styles/fonts';

const NewsLetterSection = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 py-9 md:py-11 px-6 md:px-16 max-w-frame mx-auto bg-primary rounded-t-[170px]">
      <p
        className={cn([
          parkinsansCF.className,
          'font-bold text-[32px] md:text-[40px] text-primary-foreground mb-9 md:mb-0 ml-10',
        ])}
      >
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </p>

      <div className="flex items-center">
        <div className="flex flex-col max-w-[349px] mx-auto">
          <InputGroup className="flex bg-primary-foreground mb-[14px]">
            <InputGroup.Text>
              <Image
                priority
                src="/icons/envelope.svg"
                height={20}
                width={20}
                alt="email"
                className="min-w-5 min-h-5"
              />
            </InputGroup.Text>
            <InputGroup.Input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="bg-transparent placeholder:text-black/40 placeholder:text-sm sm:placeholder:text-base"
            />
          </InputGroup>
          <Button
            className="text-sm sm:text-base font-medium  h-12  px-4 py-3 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            aria-label="Subscribe to Newsletter"
            type="button"
          >
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSection;
