import IconMicrophone from '@/assets/icons/icon-microphone.svg';
import { Loader } from '@/features/memorizationDetail/addRecording/Loader';

interface Props {
  isRecording?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({ isRecording, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`flex h-14 ${isRecording ? 'w-44' : 'w-14'} min-w-14 items-center justify-center rounded-full bg-primary transition-all active:scale-90`}>
      {isRecording ? <Loader /> : <IconMicrophone />}
    </button>
  );
}
