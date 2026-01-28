export function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-white py-6">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-neutral-500">
        <span>© {new Date().getFullYear()} Kosayuu</span>
        <span>个人作品集</span>
      </div>
    </footer>
  );
}
