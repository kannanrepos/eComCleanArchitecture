import React from 'react';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
import { AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';
import { NavMenu } from '@/types/navbar.types';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent } from '@/components/ui/accordion';
import LogoLink from './LogoLink';

type Props = {
  data: NavMenu;
};
const MobileMenubar = ({ data }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <Button
          variant={'ghost'}
          className="hover:bg-primary text-primary-foreground hover:scale-110 "
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'} className="overflow-y-auto">
        <SheetHeader className="mb-10">
          <SheetTitle asChild>
            <SheetClose asChild>
              <LogoLink />
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-start">
          {data.map((item) => (
            <React.Fragment key={item.id}>
              {item.type === 'MenuItem' && (
                <SheetClose asChild>
                  <Link
                    href={item.url ?? '/'}
                    className="hover:bg-primary/10 w-full cursor-pointer p-3 mb-2"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              )}
              {item.type === 'MenuList' && (
                <div className="mb-4 w-full">
                  <Accordion type="single" collapsible>
                    <AccordionItem value={item.label}>
                      <AccordionTrigger className="text-left p-3 font-normal text-base hover:bg-primary/10 w-full cursor-pointer">
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className="p-4 pb-0 border-l flex flex-col">
                        {item.children.map((itemChild) => (
                          <SheetClose
                            key={itemChild.id}
                            asChild
                            className="w-fit py-2 text-base"
                          >
                            <Link
                              href={itemChild.url ?? '/'}
                              className="hover:bg-primary/10 w-full cursor-pointer px-3"
                            >
                              {itemChild.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenubar;
