import useWindowWidth from '~/src/hooks/useWindowWidth';
import DoneEmptySmall from '~/src/assets/icon/DoneEmptySmall';
import DoneEmptyLarge from '~/src/assets/icon/DoneEmptyLarge';

export default function DoneEmptyContent() {
  const { isMobile } = useWindowWidth();
  return (
    <div className="flex w-full flex-col items-center gap-4">
      {isMobile() ? <DoneEmptySmall /> : <DoneEmptyLarge />}
      <p className="text-center leading-5 text-slate/400">
        아직 다 한 일이 없어요.
        <br />
        해야 할 일을 체크해보세요!
      </p>
    </div>
  );
}
