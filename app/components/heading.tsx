export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{children}</h1>
    </div>
  );
}
