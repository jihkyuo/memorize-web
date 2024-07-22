import type { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  label?: string;
}

export function TextBox({ label, children }: Props) {
  return (
    <div className={'min-h-36 whitespace-pre-line break-keep rounded-[10px] border border-[#0000001A] p-4'}>
      <div className={'mb-2 text-base'}>{label}</div>
      <div className={'whitespace-pre-line text-sm'}>{children}</div>
    </div>
  );
}
