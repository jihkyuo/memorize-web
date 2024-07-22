import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { Button } from '@/features/memorizationDetail/addRecording/Button';

export function AddRecording() {
  const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const handleRecording = () => {
    if (listening) {
      // 녹음 종료
      SpeechRecognition.stopListening();
    } else {
      // 늑음 시작
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <div className={'p-3 font-bold text-red-500'}>{`Browser doesn't support speech recognition.`}</div>;
  }

  return (
    <>
      {transcript}
      <div className={'fixed bottom-10 right-5'}>
        <Button onClick={handleRecording} isRecording={listening} />
      </div>
    </>
  );
}
