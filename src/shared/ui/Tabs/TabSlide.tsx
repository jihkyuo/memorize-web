interface Props {
  widthRatio: number;
  translateRatio: number;
}
export function TabSlide({ widthRatio, translateRatio }: Props) {
  return (
    <div
      className={`absolute top-0 h-full w-[${widthRatio}%] border-b-2 border-primary transition-transform duration-300 translate-x-[${translateRatio}%]`}/>
  );
}
