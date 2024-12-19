import { useMutation } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { useState, type TextareaHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { addMemorization } from '@/entities/memorizationList/api/memorizationList.resolver';
import { Header } from '@/shared/ui/Header/Header';

export const Route = createFileRoute('/add')({
  component: AddComponent,
});

function AddComponent() {
  const navigate = Route.useNavigate();

  const [ mainText, setMainText ] = useState('');
  const [ title, setTitle ] = useState('');

  const { mutate: addMemorizationMutation } = useMutation({
    mutationFn: addMemorization,
  });

  const isDisabled = !title || !mainText;

  const handleSave = () => {
    if (isDisabled) return;

    addMemorizationMutation(
      { title, mainText },
      {
        onSuccess: () => {
          navigate({ to: '/' });
          alert('암기 추가 완료');
        },
      }
    );
  };

  return (
    <>
      <Header
        title={'암기 추가'}
        navOption={{ type: 'back', onClick: () => navigate({ to: '/' }) }}
        extra={(
          <div
            className={`text-lg font-medium transition-all duration-300 ${
              isDisabled ? 'cursor-not-allowed opacity-30' : 'cursor-pointer text-blue-500'
            }`}
            onClick={handleSave}>
            저장
          </div>
        )}/>

      <div className={'flex h-full flex-col gap-4 p-10'}>
        <TextArea className={'h-1/5'} label={'제목'} onChange={e => setTitle(e.target.value)} value={title} />
        <TextArea label={'암기 본문'} onChange={e => setMainText(e.target.value)} value={mainText} />
      </div>
    </>
  );
}

interface TextAreaProps {
  label: string;
}

function TextArea({ label, className, ...rest }: TextAreaProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const [ isFocused, setIsFocused ] = useState(false);
  return (
    <label
      className={twMerge(
        'flex h-full cursor-text flex-col gap-4 rounded-[10px] border border-[#0000001A] p-4',
        isFocused ? 'border-blue-500' : '',
        className
      )}>
      <div className={'text-base'}>{label}</div>
      <textarea
        className={'h-full w-full resize-none border-none focus:outline-none'}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}/>
    </label>
  );
}
