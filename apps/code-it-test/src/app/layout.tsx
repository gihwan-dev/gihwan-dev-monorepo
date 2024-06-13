import type { Metadata } from 'next';
import './globals.css';
import Head from 'next/head';

export const metadata: Metadata = {
  title: '코드잇 스프린트 프론트엔드 단기 심화 1기 과제 - 최기환',
  description:
    '코드잇 스프린트 프론트엔드 단기 심화 1기 과제 제출용 입니다. - 최기환',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
