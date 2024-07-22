import { StatusSwitchButton } from '@/features/memorizationList/memorizationStatusSwitch/StatusSwitchButton';
import { RadioButton, RadioGroup } from '@/shared/ui/Radio';

interface Props {
  isMemorizedStatus: boolean;
  setIsMemorizedStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MemorizationStatusSwitch({ isMemorizedStatus, setIsMemorizedStatus }: Props) {
  const onChangeStatus = (value: string) => setIsMemorizedStatus(JSON.parse(value));

  return (
    <div className={'px-4 py-1'}>
      <RadioGroup
        value={String(isMemorizedStatus)}
        innerProps={{ onChange: value => onChangeStatus(value.target.value) }}>
        <div className={'flex gap-1'}>
          {[
            { value: 'false', label: '암기 중' },
            { value: 'true', label: '암기 완료' },
          ].map(({ value, label }) => (
            <RadioButton key={value} value={value}>
              <StatusSwitchButton>{label}</StatusSwitchButton>
            </RadioButton>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
