'use client';

import dynamic from 'next/dynamic';

const LegacyApp = dynamic(() => import('@/legacy/App'), { ssr: false });

export default function LegacyCatchAll() {
  return <LegacyApp />;
}
