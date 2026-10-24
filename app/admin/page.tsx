import Link from "next/link";
import SiteHeader from "@/components/site-header";

const metrics = [
  { label: "Registered owners", value: "128", delta: "+12 this month", icon: "♙" },
  { label: "Active subscriptions", value: "94", delta: "Monthly + yearly", icon: "◇" },
  { label: "Published venues", value: "216", delta: "Across sample cities", icon: "⌖" },
  { label: "Total bookings", value: "1,482", delta: "Demo records only", icon: "▦" },
];

const owners = [
  { initials: "KP", name: "Kunal Patel", venue: "Champions Box Cricket", plan: "Monthly Pro", expiry: "30 Nov 2026", status: "Active" },
  { initials: "AS", name: "Aarav Shah", venue: "PowerPlay Turf Arena", plan: "Yearly Pro", expiry: "12 Jun 2027", status: "Active" },
  { initials: "MJ", name: "Mehul Joshi", venue: "Sixers Cricket Zone", plan: "Monthly Pro", expiry: "18 Oct 2026", status: "Expired" },
  { initials: "RD", name: "Riya Desai", venue: "Boundary Box Arena", plan: "Yearly Pro", expiry: "05 Aug 2027", status: "Active" },
];

export default function AdminDashboardPage() {
  return (
    <main className="app-shell admin-shell"><SiteHeader /><section className="dashboard-wrap">
      <div className="admin-heading"><div><div className="eyebrow"><span className="dot" /> PLATFORM CONTROL CENTRE</div><h1>CricketBox <span>Admin.</span></h1><p>Monitor owners, subscriptions, venues and platform activity.</p></div><span className="admin-role">SUPER ADMIN · PREVIEW</span></div>
      <div className="demo-banner"><span>ⓘ</span><div><strong>Admin frontend preview</strong><p>All figures and owner records below are fictional sample data. Authentication, admin permissions, database updates and payment verification are not connected.</p></div></div>
      <div className="dashboard-stats admin-metrics">{metrics.map((metric) => <article key={metric.label}><span className="stat-icon">{metric.icon}</span><span>{metric.label}</span><strong>{metric.value}</strong><small>{metric.delta}</small></article>)}</div>
      <div className="admin-content-grid"><section className="panel admin-table-panel"><div className="panel-heading"><div><h2>Owner subscriptions</h2><p>Example owner accounts and plan validity.</p></div><span className="panel-icon">◇</span></div>
        <div className="table-scroll"><table className="admin-table"><thead><tr><th>Owner</th><th>Plan</th><th>Expiry date</th><th>Status</th></tr></thead><tbody>{owners.map((owner) => <tr key={owner.name}><td><div className="admin-owner-cell"><span className="booking-avatar">{owner.initials}</span><div><strong>{owner.name}</strong><small>{owner.venue}</small></div></div></td><td>{owner.plan}</td><td>{owner.expiry}</td><td><span className={owner.status === "Active" ? "status-pill status-active" : "status-pill status-expired"}>{owner.status}</span></td></tr>)}</tbody></table></div>
        <div className="panel-bottom-link"><Link href="/owner/plans">View plan structure <span>→</span></Link></div>
      </section>
      <aside className="panel admin-quick-panel"><div className="panel-heading"><div><h2>Admin tools</h2><p>Management areas planned for live setup.</p></div></div><Link href="/owner"><span>▦</span><div><strong>Owner dashboard</strong><small>Preview owner experience</small></div><b>→</b></Link><Link href="/owner/plans"><span>◇</span><div><strong>Plans & pricing</strong><small>Monthly and yearly options</small></div><b>→</b></Link><Link href="/owner/listings/new"><span>⌖</span><div><strong>Venue listing form</strong><small>Preview submitted details</small></div><b>→</b></Link><Link href="/owner/bookings"><span>◷</span><div><strong>Booking management</strong><small>Owner booking preview</small></div><b>→</b></Link></aside></div>
      <section className="admin-rule"><span>!</span><div><strong>Important business rule</strong><p>Owners can publish new venue listings only while their subscription is active. Monthly and yearly plans must be verified server-side after payment. When a plan expires, block new listings; protect existing confirmed customer bookings.</p></div></section>
    </section><footer><Link className="brand" href="/"><span className="brand-mark">CB</span><span>cricket<span className="brand-blue">box</span></span></Link><span>CricketBox · Admin preview</span><Link href="/" className="text-link">Back to website</Link></footer></main>
  );
}
