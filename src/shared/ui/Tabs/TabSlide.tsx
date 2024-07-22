interface Props {
  widthRatio: number;
  translateRatio: number;
}
export function TabSlide({ widthRatio, translateRatio }: Props) {
  return (
    <div
      className={`absolute bottom-[-2px] h-full border-b-2 border-primary transition-transform duration-300`}
      style={{
        width: `${widthRatio}%`,
        transform: `translateX(${translateRatio}%)`,
      }}/>
  );
}
