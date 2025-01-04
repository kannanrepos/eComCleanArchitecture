'use client';
import { useState } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const TopBanner = () => {
  const [showAlert, setShowAlert] = useState(true);
  return showAlert ? (
    <div className="bg-accent/20  text-center px-2 py-2 sm:px-4 xl:px-0">
      <div className="relative max-w-frame mx-auto">
        <p className="text-xs sm:text-sm">
          🔥 Sign up and get 20% off to your first order{' '}
          <Link href="/signup" className="underline font-medium">
            Sign Up Now
          </Link>
        </p>
        <Button
          variant="ghost"
          className="hover:bg-transparent text-primary absolute right-0 top-1/2 -translate-y-1/2 w-fit h-fit p-1 hidden sm:flex"
          size="icon"
          type="button"
          aria-label="close banner"
          onClick={() => setShowAlert(false)}
        >
          X
        </Button>
      </div>
    </div>
  ) : null;
};
export default TopBanner;
