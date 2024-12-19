import { useQueryClient } from '@tanstack/react-query';

import { recordQueryKeys } from '@/entities/memorizationDetail/queries';
import type { RecordDto } from '@/entities/memorizationDetail/types/memorizationDetail.dto';
import { useCreateRecordMutation } from '@/features/memorizationDetail/addRecording/hooks/useCreateRecordMutation';
import { useRecording } from '@/features/memorizationDetail/addRecording/hooks/useRecording';
import { RecordingButton } from '@/features/memorizationDetail/addRecording/ui/RecordingButton';
import { Route as MemorizationDetailRoute } from '@/routes/memorization/$memorizationId';

export function AddRecording() {
  const queryClient = useQueryClient();
  const { memorizationId } = MemorizationDetailRoute.useParams();
  const { mutate: createRecordMutation } = useCreateRecordMutation();
  const { speechRecognition, isRecordingMode, handler } = useRecording();

  const recordList = queryClient.getQueryData<RecordDto[]>(recordQueryKeys.list(memorizationId).queryKey) ?? [];

  const saveRecording = () => {
    const nextCount = recordList.length + 1;
    createRecordMutation({
      memorizationId,
      title: `녹음 ${nextCount}`,
      transcript: speechRecognition.transcript,
    }, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: recordQueryKeys.list(memorizationId).queryKey,
        });
        alert('녹음 저장 완료');
      },
      onSettled: () => {
        handler.cancelRecording();
      },
    });
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
