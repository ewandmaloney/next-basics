import Navbar from "@/components/navbar/Navbar";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>
        <span className="flex flex-col items-center">Layout general</span>
        {children}
      </main>
    </>
  );
}
