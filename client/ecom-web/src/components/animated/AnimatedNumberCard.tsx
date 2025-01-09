import SlotCounter from 'react-slot-counter';

type Props = {
  value: number;
  text: string;
};
const AnimatedNumberCard = ({ value, text }: Props) => {
  return (
    <div className="flex flex-col">
      <span className="font-bold text-xl md:text-xl lg:text-3xl xl:text-[30px] xl:mb-2">
        <SlotCounter value={value} />+
      </span>
      <span className="text-xs xl:text-base text-black/60 text-nowrap">
        {text}
      </span>
    </div>
  );
};

export default AnimatedNumberCard;
