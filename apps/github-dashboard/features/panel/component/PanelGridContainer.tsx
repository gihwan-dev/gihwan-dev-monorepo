export default function PanelGridContainer() {
  const itemAmount = 12 * 12;

  return (
    <ul className="w-full h-full grid grid-cols-12 grid-rows-12">
      {Array.from({ length: itemAmount }, (v, k) => k).map((value) => (
        <li className="border border-muted" key={`panel-grid-item-${value}`} />
      ))}
    </ul>
  );
}
