import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export const useRecording = () => {
  const speechRecognition = useSpeechRecognition();
  const [ isRecordingMode, setIsRecordingMode ] = useState(false);

  const startRecording = () => {
    if (isRecordingMode) return;
    setIsRecordingMode(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const pauseRecording = () => {
    SpeechRecognition.stopListening();
  };

  const cancelRecording = () => {
    setIsRecordingMode(false);
    SpeechRecognition.abortListening();
    speechRecognition.resetTranscript();
  };

  const playRecording = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  return {
    speechRecognition,
    isRecordingMode,
    handler: { startRecording, pauseRecording, cancelRecording, playRecording },
  };
};
