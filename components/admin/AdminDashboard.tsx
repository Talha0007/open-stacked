"use client";
import React, { useState } from "react";
import CategoryManager from "./CategoryManager";
import EditorSection from "./EditorSection";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  const refreshData = () => {
    // This tells Next.js to re-fetch the Server Component data (BlogList)
    // without a full page reload.
    router.refresh();
  };

  return (
    <div className="space-y-12">
      <CategoryManager onCategoryAdded={refreshData} />
      <EditorSection />
    </div>
  );
}
