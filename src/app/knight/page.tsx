import Link from "next/link";

export default function KnightPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-red-600 text-black font-mono p-10 text-center">
      <div className="mb-6 text-4xl font-semibold">AK</div>
      <Link href="/">
        <span className="text-sm text-black hover:underline">← Back to Home</span>
      </Link>
    </main>
  );
}
