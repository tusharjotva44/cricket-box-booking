import Link from "next/link";
import SiteHeader from "@/components/site-header";

const bookings = [
  { id: "CB-1042", customer: "Rahul K.", venue: "Champions Box Cricket", date: "24 Oct 2026", time: "6:00–7:00 PM", amount: "₹900", payment: "Pending", status: "Pending" },
  { id: "CB-1041", customer: "Amit S.", venue: "PowerPlay Turf Arena", date: "25 Oct 2026", time: "7:00–8:00 PM", amount: "₹1,200", payment: "Paid demo", status: "Confirmed" },
  { id: "CB-1038", customer: "Jay M.", venue: "Champions Box Cricket", date: "25 Oct 2026", time: "8:00–9:00 PM", amount: "₹900", payment: "Paid demo", status: "Confirmed" },
  { id: "CB-1035", customer: "Nirav P.", venue: "PowerPlay Turf Arena", date: "22 Oct 2026", time: "9:00–10:00 PM", amount: "₹1,200", payment: "Paid demo", status: "Completed" },
];

export default function OwnerBookingsPage() {
  return (
    <main className="app-shell"><SiteHeader /><section className="dashboard-wrap">
      <div className="dashboard-welcome"><div><div className="eyebrow">OWNER SPACE · BOOKINGS</div><h1>Every match, <span>in one place.</span></h1><p>Review reservations, customer details and payment status.</p></div><Link className="button button-secondary" href="/owner">← Owner dashboard</Link></div>
      <div className="demo-banner"><span>ⓘ</span><div><strong>Sample booking records</strong><p>These records are fictional preview data. Live customer details, booking status updates and payments will be connected with the backend later.</p></div></div>
      <div className="booking-summary-grid"><article><span>All bookings</span><strong>24</strong><small>Demo total</small></article><article><span>Upcoming</span><strong>08</strong><small>Sample reservations</small></article><article><span>Needs attention</span><strong>02</strong><small>Example pending items</small></article><article><span>Completed</span><strong>14</strong><small>Demo records</small></article></div>
      <section className="panel owner-bookings-panel"><div className="panel-heading"><div><h2>Booking list</h2><p>Customer and slot details for your sample venues.</p></div><span className="panel-icon">▦</span></div><div className="table-scroll"><table className="admin-table owner-booking-table"><thead><tr><th>Booking ID</th><th>Customer</th><th>Venue</th><th>Date & time</th><th>Amount</th><th>Payment</th><th>Status</th></tr></thead><tbody>{bookings.map((booking) => <tr key={booking.id}><td><strong>{booking.id}</strong></td><td>{booking.customer}</td><td>{booking.venue}</td><td>{booking.date}<small className="table-subtext">{booking.time}</small></td><td>{booking.amount}</td><td>{booking.payment}</td><td><span className={booking.status === "Pending" ? "status-pill status-pending" : "status-pill status-active"}>{booking.status}</span></td></tr>)}</tbody></table></div><p className="booking-table-note">In the live system, owner permissions will restrict this list to bookings for that owner's venues only.</p></section>
    </section><footer><Link className="brand" href="/"><span className="brand-mark">CB</span><span>cricket<span className="brand-blue">box</span></span></Link><span>CricketBox · Booking preview</span></footer></main>
  );
}
