import { useCreateRecordMutation } from '@/features/memorizationDetail/addRecording/hooks/useCreateRecordMutation';
import { useRecording } from '@/features/memorizationDetail/addRecording/hooks/useRecording';
import { RecordingButton } from '@/features/memorizationDetail/addRecording/ui/RecordingButton';
import { Route as MemorizationDetailRoute } from '@/routes/memorization/$memorizationId';

export function AddRecording() {
  const { memorizationId } = MemorizationDetailRoute.useParams();
  const { mutate: createRecord } = useCreateRecordMutation();
  const { speechRecognition, isRecordingMode, handler } = useRecording();

  const saveRecording = () => {
    createRecord({
      memorizationId,
      title: 'test', // TODO: 모달로 녹음 제목 설정
      transcript: speechRecognition.transcript,
    });
    handler.cancelRecording();
  };

  if (!speechRecognition.browserSupportsSpeechRecognition) {
    return <div className={'p-3 font-bold text-red-500'}>{`Browser doesn't support speech recognition.`}</div>;
  }

  return (
    <div className={'fixed bottom-10 right-5'}>
      {speechRecognition.transcript}
      <RecordingButton
        onStart={handler.startRecording}
        onPause={handler.pauseRecording}
        onCancel={handler.cancelRecording}
        onSave={saveRecording}
        onPlay={handler.playRecording}
        listening={speechRecognition.listening}
        isRecordingMode={isRecordingMode}/>
    </div>
  );
}
