import { testRender } from '@/shared/test/render';
import { Tabs } from '@/shared/ui/Tabs';

const setup = (tabsProps = {}) => {
  return testRender(
    <Tabs
      items={[
        { value: 'test1', label: '테스트1' },
        { value: 'test2', label: '테스트2' },
      ]}
      onChange={() => {}}
      {...tabsProps}/>
  );
};

it('Tabs 컴포넌트가 렌더링 된다.', () => {
  const { screen } = setup();

  expect(screen.getByText('테스트1')).toBeInTheDocument();
  expect(screen.getByText('테스트2')).toBeInTheDocument();
});

it('테스트2 클릭 시, onChange 함수에 test2가 전달된다.', async () => {
  const handleChange = vi.fn();
  const { screen, user } = setup({ onChange: event => handleChange(event.target.value) });

  const test2Button = screen.getByLabelText('테스트2');
  await user.click(test2Button);

  expect(handleChange).toHaveBeenCalledWith('test2');
});

it('테스트2 클릭 시, 테스트2의 input이 선택된다.', async () => {
  const {
    screen,
    user,
    render: { rerender },
  } = testRender(
    <Tabs
      onChange={() => {}}
      items={[
        { value: 'test1', label: '테스트1' },
        { value: 'test2', label: '테스트2' },
      ]}/>
  );

  const test2Button = screen.getByLabelText('테스트1');
  await user.click(test2Button);

  // Tabs 컴포넌트 value 속성에 test2가 전달되어야 한다.
  rerender(
    <Tabs
      value={'test2'}
      items={[
        { value: 'test1', label: '테스트1' },
        { value: 'test2', label: '테스트2' },
      ]}/>
  );

  expect(test2Button).toBeChecked();
});

it.todo('테스트');