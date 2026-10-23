import Link from "next/link";
import SiteHeader from "@/components/site-header";

export default function CustomerPage() {
  return (
    <main className="app-shell">
      <SiteHeader />
      <section className="dashboard-wrap">
        <div className="dashboard-welcome"><div><div className="eyebrow"><span className="dot" /> PLAYER SPACE</div><h1>Your cricket, <span>your plans.</span></h1><p>Keep track of your matches and find your next ground.</p></div><div className="avatar-placeholder" aria-label="Demo player profile">P</div></div>
        <div className="demo-banner"><span aria-hidden="true">ⓘ</span><div><strong>Preview mode</strong><p>This is a visual dashboard preview. Sign-in, personal data and live bookings will be connected when backend setup is complete.</p></div></div>
        <div className="dashboard-stats"><article><span className="stat-icon">▦</span><span>Upcoming bookings</span><strong>—</strong><small>Available after login setup</small></article><article><span className="stat-icon">◷</span><span>Hours played</span><strong>—</strong><small>Your match history</small></article><article><span className="stat-icon">♡</span><span>Saved turfs</span><strong>—</strong><small>Your favourite venues</small></article></div>
        <div className="customer-content-grid"><section className="panel"><div className="panel-heading"><div><h2>Your next match</h2><p>Your confirmed bookings will appear here.</p></div><span className="panel-icon">🏏</span></div><div className="empty-bookings"><div className="empty-ball">🏏</div><h3>No bookings yet</h3><p>When booking is enabled, your upcoming matches will be listed here.</p><Link className="button" href="/explore">Explore turfs <span aria-hidden="true">→</span></Link></div></section><aside className="panel quick-links"><h2>Quick links</h2><Link href="/explore"><span>⌕</span><div><strong>Find a turf</strong><small>Explore venues across India</small></div><b>→</b></Link><Link href="/customer/bookings"><span>▦</span><div><strong>My bookings</strong><small>View booking history</small></div><b>→</b></Link><Link href="/customer/profile"><span>♙</span><div><strong>My profile</strong><small>Manage your details</small></div><b>→</b></Link></aside></div>
      </section>
      <footer><a className="brand" href="/"><span className="brand-mark">CB</span><span>cricket<span className="brand-blue">box</span></span></a><span>CricketBox · Built for the game.</span></footer>
    </main>
  );
}
