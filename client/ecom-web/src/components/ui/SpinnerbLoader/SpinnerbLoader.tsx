import cn from 'clsx';
import s from './SpinnerbLoader.module.css';
const SpinnerbLoader = ({ className }: { className?: string }) => {
  return <span className={cn(s.Loader, {}, className)}></span>;
};

export default SpinnerbLoader;
