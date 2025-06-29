"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AccessPage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === "callisto") {
      router.push("/secret");
    } else {
      setError("Invalid code. Try again.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white font-mono p-10 text-center">
      <h1 className="mb-4 text-2xl">Access Code Required</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="px-4 py-2 text-black rounded"
          placeholder="Enter code"
        />
        <button
          type="submit"
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300"
        >
          Enter
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </main>
  );
}
