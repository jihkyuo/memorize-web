import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

import { Header } from '@/shared/ui/Header/Header';

export const Route = createFileRoute('/add')({
  component: AddComponent,
});

function AddComponent() {
  const navigate = Route.useNavigate();
  const [ isFocused, setIsFocused ] = useState(false);
  const [ content, setContent ] = useState('');

  return (
    <>
      <Header
        title={'암기 추가'}
        navOption={{ type: 'back', onClick: () => navigate({ to: '/' }) }}
        extra={(
          <div
            className={`text-lg font-medium transition-all duration-300 ${
              content ? 'cursor-pointer text-blue-500' : 'cursor-not-allowed opacity-30'
            }`}>
            저장
          </div>
        )}/>

      <label
        className={`m-10 flex h-full cursor-text flex-col gap-4 rounded-[10px] border border-[#0000001A] p-4 ${
          isFocused ? 'border-blue-500' : ''
        }`}>
        <div className={'text-base'}>암기 내용 입력</div>
        <textarea
          className={'h-full w-full resize-none border-none focus:outline-none'}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={e => setContent(e.target.value)}
          value={content}/>
      </label>
    </>
  );
}
