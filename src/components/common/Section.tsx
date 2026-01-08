export default function Section({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen w-full">{children}</div>
  )
}