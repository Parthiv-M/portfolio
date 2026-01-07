export default function Section({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="relative h-screen w-full my-4">{children}</div>
    )
}