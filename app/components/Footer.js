export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-[var(--muted)] px-4">
      <p className="font-semibold">Zenteq Private Limited</p>
      <p className="mt-1">DevOps & Cloud Engineering Company</p>
      <p className="mt-1">www.zenteq.in</p>
      <p className="mt-4">
        © {new Date().getFullYear()} Zenteq Private Limited. All rights reserved.
      </p>
    </footer>
  );
}
