import { SideBar } from "~/features/sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";

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
      <ResizablePanel className="flex-1 h-screen" defaultSize={70} />
    </ResizablePanelGroup>
  );
}
