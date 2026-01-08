export default function ContentWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full px-4 sm:w-11/12 md:w-5/6 mx-auto py-4">{children}</div>
  )
}