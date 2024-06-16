import SmallLogo from '~/src/assets/logo/SmallLogo';
import LargeLogo from '~/src/assets/logo/LargeLogo';

export default function Loading() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <SmallLogo />
      <LargeLogo />
      <p>Loading...</p>
    </div>
  );
}
