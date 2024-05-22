import { Switch } from "~/components/ui/switch";
import { Label } from "~/components/ui/label";

export default function SideBarThemeToggle() {
  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="theme-toggle-switch">Night mode</Label>
      <Switch id="theme-toggle-switch" />
    </div>
  );
}
