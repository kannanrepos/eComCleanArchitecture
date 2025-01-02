import Link from 'next/link';
import Image from 'next/image';

import { parkinsansCF } from '@/styles/fonts';
import { cn } from '@/lib/utils';
type Props = {
  imgHight?: number;
  imgWidth?: number;
  TextClassName?: string;
  SubClassName?: string;
  imgClassName?: string;
  showSubText?: boolean;
};
const LogoLink = ({
  imgHight,
  imgWidth,
  TextClassName,
  SubClassName,
  showSubText,
  imgClassName,
}: Props) => {
  showSubText = showSubText ?? true;
  return (
    <>
      <Link href="/" className={cn([parkinsansCF.className, 'text-2xl'])}>
        <div className="flex gap-3">
          <Image
            src={'/images/logo.png'}
            width={imgHight ?? 50}
            height={imgWidth ?? 25}
            alt="logo"
            className={cn([imgClassName])}
          />
          <div className="flex flex-col items-center justify-center">
            <p className={TextClassName ?? 'text-4xl'}>ZentroCart</p>
            {showSubText && (
              <p
                className={cn(
                  [
                    'text-gray-400 dark:text-gray-200 tracking-widest font-parkinsansCF',
                  ],
                  SubClassName ?? 'text-[10px]'
                )}
              >
                Centralize Your Shopping Experience
              </p>
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default LogoLink;
