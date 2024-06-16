import EmptyImageIcon from '~/src/assets/icon/EmptyImageIcon';

export default function EmptyImageView() {
  return (
    <div className="flex h-80 w-full items-center justify-center rounded-3xl border-2 border-dashed border-slate/300 bg-slate/100">
      <EmptyImageIcon />
    </div>
  );
}
