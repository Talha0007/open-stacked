import NotFoundClient from "@/components/ui/NotFoundClient";

// Note: Next.js doesn't support full metadata export in not-found.tsx
// but we can structure the page semantically for crawlers.

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black">
      <NotFoundClient />
    </main>
  );
}
