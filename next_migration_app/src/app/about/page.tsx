import Image from 'next/image';
import skkulogo from '@/static/icon/skkulogo.jpeg';

export const metadata = {
  title: 'About - Next Migration Demo',
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold mb-4">📖 About (Next.js)</h1>

      <p className="mb-6">
        This page is an example of replacing the <code>/about</code> of the legacy React app with <strong> Next App Router</strong>.
      </p>

      <Image
        src={skkulogo}
        alt="Demo image"
        width={160}
        height={160}
        className="rounded-lg border"
      />
    </main>
  );
}
