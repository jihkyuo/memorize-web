interface Props {
  widthRatio: number;
  translateRatio: number;
}
export function TabSlide({ widthRatio, translateRatio }: Props) {
  return (
    <div
      // issue tailwindcss 동적 클래스 사용 시, 자동으로 컴파일 단계에서 Purge(삭제) 됨
      // reference : https://velog.io/@arthur/Tailwind-CSS-%EC%97%90%EC%84%9C-%EB%8F%99%EC%A0%81%EC%9C%BC%EB%A1%9C-%ED%81%B4%EB%9E%98%EC%8A%A4-%ED%95%A0%EB%8B%B9%ED%95%98%EA%B8%B0
      // className={`absolute top-0 h-full w-[${widthRatio}%] border-b-2 border-primary transition-transform duration-300 translate-x-[${translateRatio}%]`}
      className={`absolute bottom-[-2px] h-full border-b-2 border-primary transition-transform duration-300`}
      style={{
        width: `${widthRatio}%`,
        transform: `translateX(${translateRatio}%)`,
      }}/>
  );
}
