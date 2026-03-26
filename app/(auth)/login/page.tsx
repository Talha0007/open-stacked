"use client";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { Chrome, Loader2, UserPlus, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Only for signup
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (isLogin) {
      await authClient.signIn.email(
        {
          email,
          password,
          // Update 1: Callback URL for social/session persistence
          callbackURL: "/admin/publish",
        },
        {
          onError: (ctx) => {
            alert(ctx.error.message);
            setLoading(false);
          },
          // Update 2: Manual redirect after successful email login
          onSuccess: () => router.push("/admin/publish"),
        },
      );
    } else {
      await authClient.signUp.email(
        {
          email,
          password,
          name,
          callbackURL: "/admin/publish",
        },
        {
          onError: (ctx) => {
            alert(ctx.error.message);
            setLoading(false);
          },
          onSuccess: () => router.push("/admin/publish"),
        },
      );
    }
  };

  const loginWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/admin/publish", // Ensure Google redirect ends up here
    });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      {/* Design Accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 blur-[100px] rounded-full" />

      <div className="w-full max-w-md bg-neutral-950 border border-neutral-800 p-8 rounded-3xl shadow-2xl z-10">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-neutral-500 text-sm mt-1">
            {isLogin
              ? "Precision access to your pipeline."
              : "Start your technical journey with Open Stacked."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="text-xs font-medium text-neutral-400 uppercase tracking-widest ml-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-black border border-neutral-800 rounded-xl p-3 mt-1 text-white focus:ring-1 focus:ring-sky-500 outline-none transition-all"
                placeholder="Talha..."
                required
              />
            </div>
          )}
          <div>
            <label className="text-xs font-medium text-neutral-400 uppercase tracking-widest ml-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black border border-neutral-800 rounded-xl p-3 mt-1 text-white focus:ring-1 focus:ring-sky-500 outline-none transition-all"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label className="text-xs font-medium text-neutral-400 uppercase tracking-widest ml-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black border border-neutral-800 rounded-xl p-3 mt-1 text-white focus:ring-1 focus:ring-sky-500 outline-none transition-all"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 rounded-xl transition-all flex justify-center items-center gap-2"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : isLogin ? (
              <LogIn className="w-4 h-4" />
            ) : (
              <UserPlus className="w-4 h-4" />
            )}
            {isLogin ? "Sign In" : "Register"}
          </button>
        </form>

        <div className="relative py-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-neutral-900"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-neutral-950 px-3 text-neutral-600">Or</span>
          </div>
        </div>

        <button
          onClick={loginWithGoogle}
          className="w-full flex items-center justify-center gap-3 bg-neutral-900 border border-neutral-800 text-white py-3 rounded-xl hover:bg-neutral-800 transition-all mb-6"
        >
          <Chrome className="w-5 h-5" />
          Continue with Google
        </button>

        <p className="text-center text-sm text-neutral-500">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sky-500 font-medium ml-2 hover:underline"
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </p>
      </div>
    </div>
  );
}
