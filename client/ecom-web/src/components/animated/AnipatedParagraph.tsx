import * as motion from 'framer-motion/client';
type Props = {
  text: string;
};
const AnipatedParagraph = ({ text }: Props) => {
  return (
    <motion.p
      initial={{ y: '100px', opacity: 0 }}
      whileInView={{ y: '0', opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]"
    >
      {text}
    </motion.p>
  );
};

export default AnipatedParagraph;
