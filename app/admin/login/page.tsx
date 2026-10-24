"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const configMissing = !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !(process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const supabase = createClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
      if (signInError) throw new Error("Email અથવા password સાચો નથી.");
      const response = await fetch("/api/admin/verify", { method: "POST" });
      if (!response.ok) {
        await supabase.auth.signOut();
        throw new Error(response.status === 403 ? "આ account ને Super Admin access નથી." : "Admin access verify થઈ શક્યો નથી. Supabase configuration તપાસો.");
      }
      router.replace("/admin");
      router.refresh();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Login થઈ શક્યું નથી. ફરી પ્રયાસ કરો.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="admin-login-page">
      <section className="admin-login-card">
        <Link className="admin-login-brand" href="/"><span className="admin-login-mark">CB</span><span>cricket<span>box</span></span></Link>
        <div className="admin-login-emblem" aria-hidden="true">♙</div>
        <p className="admin-login-eyebrow">SECURE ADMIN ACCESS</p>
        <h1>Welcome back, Admin</h1>
        <p className="admin-login-description">Sign in to manage the CricketBox marketplace.</p>
        {searchParams.get("error") === "not-admin" && <div className="admin-login-error" role="alert">આ account ને Super Admin access નથી.</div>}
        {configMissing && <div className="admin-login-notice" role="status">Login ચાલુ કરવા માટે Supabase project બનાવો અને તેની values .env.local માં ઉમેરો. આ પેજ એકલું login verify કરી શકતું નથી.</div>}
        {error && <div className="admin-login-error" role="alert">{error}</div>}
        <form onSubmit={handleSubmit} className="admin-login-form">
          <label htmlFor="admin-email">Admin email</label>
          <input id="admin-email" type="email" autoComplete="username" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your admin email" />
          <label htmlFor="admin-password">Password</label>
          <div className="admin-password-wrap">
            <input id="admin-password" type={showPassword ? "text" : "password"} autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password" />
            <button type="button" onClick={() => setShowPassword((current) => !current)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? "Hide" : "Show"}</button>
          </div>
          <button className="admin-login-submit" type="submit" disabled={loading || configMissing}>{loading ? "Verifying…" : "Sign in securely →"}</button>
        </form>
        <div className="admin-login-security"><span>▣</span><div><strong>Protected Admin Area</strong><small>Access is checked against your account role on the server.</small></div></div>
        <Link className="admin-login-back" href="/">← Back to CricketBox</Link>
      </section>
    </main>
  );
}
