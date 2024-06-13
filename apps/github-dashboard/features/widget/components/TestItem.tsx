import type { JSX } from "react";

export default function TestItem(): JSX.Element {
  return (
    <div
      className="w-full h-full flex items-center justify-center bg-red-200"
      draggable
    >
      <p>Test Widget</p>
    </div>
  );
}
