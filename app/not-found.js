import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Zenteq",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <p className="text-lg text-[var(--muted)] mb-8">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
}
