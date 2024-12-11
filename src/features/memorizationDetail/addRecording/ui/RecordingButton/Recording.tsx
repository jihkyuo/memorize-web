import IconPause from '@/assets/icons/icon-pause-circle.svg';
import IconPlay from '@/assets/icons/icon-play-circle.svg';
import { Loader } from '@/features/memorizationDetail/addRecording/Loader';

interface Props {
  listening: boolean;
  onPlay: () => void;
  onPause: () => void;
  onCancel: () => void;
  onSave: () => void;
}

export function Recording({ listening, onPlay, onPause, onCancel, onSave }: Props) {
  return (
    <div className={'flex w-full items-center px-5'}>
      <span className={'cursor-pointer'}>
        {listening ? <IconPause onClick={onPause} /> : <IconPlay onClick={onPlay} />}
      </span>
      <Loader className={'mx-4'} isAnimate={listening} />

      <div className={'flex items-center text-sm text-white'}>
        <span onClick={onCancel} className={'cursor-pointer p-2'}>
          취소
        </span>
        <span className={'h-5 w-px bg-white'} />
        <span onClick={onSave} className={'cursor-pointer p-2'}>
          저장
        </span>
      </div>
    </div>
  );
}
