import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { Button } from '@/features/memorizationDetail/addRecording/Button';
import { useCreateRecordMutation } from '@/features/memorizationDetail/addRecording/hooks/useCreateRecordMutation';
import { Route as MemorizationDetailRoute } from '@/routes/memorization/$memorizationId';

export function AddRecording() {
  const { memorizationId } = MemorizationDetailRoute.useParams();
  const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const { mutate: createRecord } = useCreateRecordMutation();

  const handleRecording = () => {
    if (listening) {
      // 녹음 종료
      SpeechRecognition.stopListening();

      // 녹음 내용 저장
      createRecord({
        memorizationId,
        title: 'test', // TODO: 모달로 녹음 제목 설정
        transcript,
      });
    } else {
      // 늑음 시작
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <div className={'p-3 font-bold text-red-500'}>{`Browser doesn't support speech recognition.`}</div>;
  }

  return (
    <div className={'fixed bottom-10 right-5'}>
      <Button onClick={handleRecording} isRecording={listening} />
    </div>
  );
}
