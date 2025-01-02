'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const TopBanner = () => {
  const [showAlert, setShowAlert] = useState(true);
  return showAlert ? (
    <div className="bg-primary text-primary-foreground text-center px-2 py-2 sm:px-4 xl:px-0">
      <div className="relative max-w-frame mx-auto">
        <p className="text-xs sm:text-sm">
          🔥 Sign up and get 20% off to your first order{' '}
          <Link href="/signup" className="underline font-medium">
            Sign Up Now
          </Link>
        </p>
        <Button
          variant="ghost"
          className="hover:bg-transparent absolute right-0 top-1/2 -translate-y-1/2 w-fit h-fit p-1 hidden sm:flex"
          size="icon"
          type="button"
          aria-label="close banner"
          onClick={() => setShowAlert(false)}
        >
          <Image
            priority
            src="/icons/times.svg"
            height={13}
            width={13}
            alt="close banner"
          />
        </Button>
      </div>
    </div>
  ) : null;
};
export default TopBanner;
