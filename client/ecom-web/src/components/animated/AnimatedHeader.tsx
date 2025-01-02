import * as motion from 'framer-motion/client';
import { cn } from '@/lib/utils';
import { parkinsansCF } from '@/styles/fonts';
type Props = {
  text: string;
};
const AnimatedHeader = ({ text }: Props) => {
  return (
    <motion.h2
      initial={{ y: '100px', opacity: 0, rotate: 10 }}
      whileInView={{ y: '0', opacity: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn([
        parkinsansCF.className,
        'text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8',
      ])}
    >
      {text}
    </motion.h2>
  );
};

export default AnimatedHeader;
