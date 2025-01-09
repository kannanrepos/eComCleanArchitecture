import * as motion from 'framer-motion/client';

import { cn } from '@/lib/utils';
import { parkinsansCF } from '@/styles/fonts';

const HeaderTag = ({
  title,
  subTitile,
}: {
  title: string;
  subTitile?: string;
}) => {
  return (
    <>
      <motion.h1
        initial={{ y: '100px', opacity: 0 }}
        whileInView={{ y: '0', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className={cn([
          parkinsansCF.className,
          'text-2xl font-bold text-black',
        ])}
      >
        {title}
      </motion.h1>
      {subTitile && (
        <p className="text-base font-normal text-black/60">{subTitile}</p>
      )}
    </>
  );
};

export default HeaderTag;
