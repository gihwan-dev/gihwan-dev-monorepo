import PanelGridItem from "./PanelGridItem";

export default function PanelGridContainer() {
  const itemAmount = 12 * 12;

  return (
    <ul className="w-full h-full grid grid-cols-12 grid-rows-12">
      {Array.from({ length: itemAmount }, (v, k) => k).map((value) => (
        <PanelGridItem key={`panel-grid-item-${value}`} />
      ))}
    </ul>
  );
}
