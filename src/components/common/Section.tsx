export default function Section({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="h-screen w-full">{children}</div>
    )
}