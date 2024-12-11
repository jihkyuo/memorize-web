import IconMicrophone from '@/assets/icons/icon-microphone.svg';
import { Recording } from '@/features/memorizationDetail/addRecording/ui/RecordingButton/Recording';

interface Props {
  isRecordingMode: boolean;
  listening: boolean;
  onStart: () => void;
  onPlay: () => void;
  onPause: () => void;
  onCancel: () => void;
  onSave: () => void;
}

export function RecordingButton({ isRecordingMode, listening, onStart, onPlay, onPause, onCancel, onSave }: Props) {
  return (
    <button
      onClick={onStart}
      className={`flex h-14 min-w-14 items-center justify-center rounded-full bg-primary ${isRecordingMode ? 'cursor-default' : 'cursor-pointer'}`}>
      {isRecordingMode ? (
        <Recording listening={listening} onPlay={onPlay} onPause={onPause} onCancel={onCancel} onSave={onSave} />
      ) : (
        <IconMicrophone />
      )}
    </button>
  );
}
