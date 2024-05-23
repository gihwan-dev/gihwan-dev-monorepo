"use client";

import { widgetList } from "~/features/widget";
import SideBarWidgetItem from "~/features/sidebar/components/SideBar/SideBarWidgetItem";

export default function SideBarWidgetList() {
  return (
    <ul className="gap-4 grid grid-cols-fluid">
      {widgetList.map((widget) => (
        <SideBarWidgetItem key={`sidebar-widget-${widget.name}`} {...widget} />
      ))}
    </ul>
  );
}
