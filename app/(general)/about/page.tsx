import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO Title",
  keywords: ["SEO", "Title", "Keywords"],
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center p-24">
        <span className="text-2xl">Hola mundo</span>
      <span className="text-7xl">About page</span>
    </main>
  );
}
