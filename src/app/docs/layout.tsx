import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      <main className="pl-0 md:pl-64">
        <div className="mx-auto max-w-4xl px-4 py-8 md:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
