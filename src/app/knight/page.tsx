// /pages/knight.tsx - Hidden 'Knight' page for secret visitors

import Link from "next/link";

export default function KnightPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white font-mono p-10 text-center">
      <div>
        <h1 className="text-4xl font-bold mb-6">Alexander Knight</h1>
        <Link href="/">
          <span className="text-sm text-blue-400 hover:underline">← Back to Home</span>
        </Link>
      </div>
    </main>
  );
}
