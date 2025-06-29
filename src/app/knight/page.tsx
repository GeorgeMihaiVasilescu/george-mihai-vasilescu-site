'use client';

import { useState } from "react";
import Link from "next/link";

export default function KnightPage() {
  const [code, setCode] = useState("");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white font-mono px-4">
      <div className="text-5xl font-semibold mb-6">AK</div>

      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="px-4 py-2 mb-4 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        placeholder="Type your code here"
      />

      <Link href="/">
        <span className="text-sm text-white hover:underline">← Back to Home</span>
      </Link>
    </main>
  );
}

