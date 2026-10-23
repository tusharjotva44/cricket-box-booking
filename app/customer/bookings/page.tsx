import Link from "next/link";
import SiteHeader from "@/components/site-header";

export default function CustomerBookingsPage() {
  return <main className="app-shell"><SiteHeader /><section className="dashboard-wrap compact-page"><div className="eyebrow"><span className="dot" /> PLAYER SPACE</div><h1>My <span>bookings.</span></h1><p className="page-intro">Your upcoming matches and past bookings will live here.</p><div className="demo-banner"><span>ⓘ</span><div><strong>Bookings are not live yet</strong><p>This page is ready for backend integration. No real booking or payment information is stored in this preview.</p></div></div><div className="panel empty-page-state"><div className="empty-ball">▦</div><h2>No bookings to show</h2><p>Once the booking system is connected, your confirmed and past bookings will appear here.</p><Link className="button" href="/explore">Explore turfs <span aria-hidden="true">→</span></Link></div></section><footer><a className="brand" href="/"><span className="brand-mark">CB</span><span>cricket<span className="brand-blue">box</span></span></a><span>CricketBox · Built for the game.</span></footer></main>;
}
