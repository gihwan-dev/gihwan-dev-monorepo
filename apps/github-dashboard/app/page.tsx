import { SideBar } from "~/features/sidebar";
import {
  ResizableHandle,
  ResizablePanelGroup,
} from "~/components/ui/resizable";
import Panel from "~/features/panel";

export default function Page(): JSX.Element {
  return (
    <ResizablePanelGroup
      className="w-full h-screen overflow-hidden bg-muted/40 flex flex-row"
      direction="horizontal"
    >
      <SideBar.Layout>
        <SideBar.Header>
          <SideBar.Logo />
        </SideBar.Header>
        <SideBar.WidgetContainer>
          <SideBar.WidgetList />
        </SideBar.WidgetContainer>
        <SideBar.Footer>
          <SideBar.ThemeToggle />
        </SideBar.Footer>
      </SideBar.Layout>
      <ResizableHandle />
      <Panel.Layout>
        <Panel.Container />
      </Panel.Layout>
    </ResizablePanelGroup>
  );
}
