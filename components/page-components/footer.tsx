export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full h-16 bg-slate-700 text-white flex items-center justify-center">
      &copy; {currentYear} Bespeak. All rights reserved.
    </footer>
  );
}
