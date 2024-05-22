import GitBoardLogo from "~/assets/svgs/GitBoardLogo";

export default function SideBarLogo() {
  return (
    <>
      <GitBoardLogo height={30} width={30} />
      <p className="font-bold">GitBoard</p>
    </>
  );
}
