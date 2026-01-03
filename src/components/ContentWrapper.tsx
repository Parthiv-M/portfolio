export default function ContentWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="w-5/6 p-4 mx-auto">{children}</div>
    )
}