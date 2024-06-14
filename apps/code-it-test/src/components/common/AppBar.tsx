import React from 'react';
import LargeLogo from '~/src/app/assets/logo/LargeLogo';
import SmallLogo from '~/src/app/assets/logo/SmallLogo';
import Container from '~/src/components/common/Container';

export default function AppBar(): React.JSX.Element {
  return (
    <nav className="w-full border-b border-slate/200 bg-white py-2.5">
      <Container>
        <LargeLogo />
        <SmallLogo />
      </Container>
    </nav>
  );
}
