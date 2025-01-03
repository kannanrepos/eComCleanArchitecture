import Link from 'next/link';

import { parkinsansCF } from '@/styles/fonts';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
type Props = {
  imgHight?: number;
  imgWidth?: number;
  TextClassName?: string;
  SubClassName?: string;
  imgClassName?: string;
  showSubText?: boolean;
};
const LogoLink = ({ TextClassName, imgClassName }: Props) => {
  return (
    <>
      <Link href="/" className={cn([parkinsansCF.className, 'text-2xl'])}>
        <div className="flex gap-3">
          <Avatar
            className={cn([
              imgClassName,
              'bg-transparent lg:bg-primary-foreground p-1',
            ])}
          >
            <AvatarImage src={'/images/logo.png'} />
            <AvatarFallback>ZC</AvatarFallback>
          </Avatar>

          <div className="flex flex-col items-center justify-center  lg:text-primary-foreground">
            <p className={TextClassName ?? 'text-2xl'}>ZentroCart</p>
            {/* {showSubText && (
              <p
                className={cn(
                  [
                    'text-gray-400 dark:text-gray-200 tracking-widest font-parkinsansCF',
                  ],
                  SubClassName ?? 'text-[5px]'
                )}
              >
                Centralize Your Shopping Experience
              </p>
            )} */}
          </div>
        </div>
      </Link>
    </>
  );
};

export default LogoLink;
