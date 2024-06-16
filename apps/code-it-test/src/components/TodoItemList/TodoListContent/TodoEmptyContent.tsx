import useWindowWidth from '~/src/hooks/useWindowWidth';
import TodoEmptyLarge from '~/src/assets/icon/TodoEmptyLarge';
import TodoEmptySmall from '~/src/assets/icon/TodoEmptySmall';

export default function TodoEmptyContent() {
  const { isMobile } = useWindowWidth();
  return (
    <div className="flex w-full flex-col items-center gap-4">
      {isMobile() ? <TodoEmptySmall /> : <TodoEmptyLarge />}
      <p className="text-center leading-5 text-slate/400">
        할 일이 없어요. <br /> TODO를 새롭게 추가해주세요!{' '}
      </p>
    </div>
  );
}
