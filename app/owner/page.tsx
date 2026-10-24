import Link from "next/link";
import SiteHeader from "@/components/site-header";

const quickStats = [
  { label: "Total bookings", value: "24", detail: "Demo data", icon: "▦" },
  { label: "Upcoming matches", value: "08", detail: "Across your venues", icon: "◷" },
  { label: "Listed venues", value: "02", detail: "Sample listings", icon: "⌖" },
  { label: "Estimated revenue", value: "₹18,400", detail: "Illustrative only", icon: "₹" },
];

export default function OwnerDashboardPage() {
  return (
    <main className="app-shell">
      <SiteHeader />
      <section className="dashboard-wrap owner-dashboard">
        <div className="dashboard-welcome">
          <div><div className="eyebrow"><span className="dot" /> TURF OWNER SPACE</div><h1>Manage your ground, <span>grow your game.</span></h1><p>Your control room for venues, bookings and your subscription plan.</p></div>
          <Link className="button" href="/owner/listings/new">+ Add Box Cricket</Link>
        </div>
        <div className="demo-banner"><span aria-hidden="true">ⓘ</span><div><strong>Frontend preview</strong><p>The numbers and booking records on this page are sample data. Login, subscription payments and live booking data are not connected yet.</p></div></div>
        <section className="owner-plan-strip">
          <div className="plan-badge">✓</div><div className="owner-plan-copy"><span className="plan-kicker">YOUR DEMO SUBSCRIPTION</span><h2>Monthly Pro <span className="status-pill status-active">Active demo</span></h2><p>Illustrative expiry: 30 Nov 2026 · Listing access shown for preview</p></div><Link className="button button-secondary" href="/owner/plans">Manage plan <span>→</span></Link>
        </section>
        <div className="dashboard-stats">{quickStats.map((item) => <article key={item.label}><span className="stat-icon">{item.icon}</span><span>{item.label}</span><strong>{item.value}</strong><small>{item.detail}</small></article>)}</div>
        <div className="owner-dashboard-grid">
          <section className="panel">
            <div className="panel-heading"><div><h2>Your Box Cricket venues</h2><p>Manage venue details and listing status.</p></div><Link href="/owner/listings/new" className="text-link">+ Add venue</Link></div>
            <div className="venue-manage-card"><div className="venue-mini-art">🏏</div><div className="venue-manage-info"><strong>Champions Box Cricket</strong><span>Ahmedabad, Gujarat · ₹900/hour</span><small><span className="status-pill status-active">Published demo</span> · 12 sample bookings</small></div><Link className="icon-link" href="/owner/listings/new" aria-label="Edit Champions Box Cricket">↗</Link></div>
            <div className="venue-manage-card"><div className="venue-mini-art venue-art-two">🏟️</div><div className="venue-manage-info"><strong>PowerPlay Turf Arena</strong><span>Surat, Gujarat · ₹1,200/hour</span><small><span className="status-pill status-active">Published demo</span> · 12 sample bookings</small></div><Link className="icon-link" href="/owner/listings/new" aria-label="Edit PowerPlay Turf Arena">↗</Link></div>
            <div className="panel-bottom-link"><Link href="/owner/listings/new">Add another venue <span>→</span></Link></div>
          </section>
          <aside className="panel">
            <div className="panel-heading"><div><h2>Latest bookings</h2><p>Recent sample reservations.</p></div><span className="panel-icon">▦</span></div>
            <div className="booking-row"><div className="booking-avatar">RK</div><div className="booking-person"><strong>Rahul K.</strong><span>Today · 6:00–7:00 PM</span></div><span className="status-pill status-pending">Pending</span></div>
            <div className="booking-row"><div className="booking-avatar avatar-blue">AS</div><div className="booking-person"><strong>Amit S.</strong><span>Tomorrow · 7:00–8:00 PM</span></div><span className="status-pill status-active">Confirmed</span></div>
            <div className="booking-row"><div className="booking-avatar avatar-purple">JM</div><div className="booking-person"><strong>Jay M.</strong><span>25 Oct · 8:00–9:00 PM</span></div><span className="status-pill status-active">Confirmed</span></div>
            <div className="panel-bottom-link"><Link href="/owner/bookings">View all bookings <span>→</span></Link></div>
          </aside>
        </div>
        <section className="owner-shortcuts"><Link href="/owner/listings/new"><span>＋</span><div><strong>Add a Box Cricket</strong><small>Enter name, location, photos, facilities and hourly price</small></div><b>→</b></Link><Link href="/owner/bookings"><span>▦</span><div><strong>Manage bookings</strong><small>Review times, customer details and booking status</small></div><b>→</b></Link><Link href="/owner/plans"><span>◇</span><div><strong>Subscription plans</strong><small>Compare monthly and yearly plans</small></div><b>→</b></Link></section>
      </section>
      <footer><Link className="brand" href="/"><span className="brand-mark">CB</span><span>cricket<span className="brand-blue">box</span></span></Link><span>CricketBox · Owner preview</span><Link href="/admin" className="text-link">Admin panel preview</Link></footer>
    </main>
  );
}
