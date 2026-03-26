import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import AdminDashboard from "@/components/admin/AdminDashboard";
import BlogList from "@/components/admin/BlogList";

export default async function PublishPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session || session.user.role !== "admin") {
    redirect("/login");
  }

  return (
    <div className="max-w-6xl mx-auto py-32 px-6 min-h-screen bg-black">
      <AdminDashboard />
      <BlogList />
    </div>
  );
}
