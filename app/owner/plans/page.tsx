import Link from "next/link";
import SiteHeader from "@/components/site-header";

const plans = [
  { name: "Monthly", price: "₹999", period: "/ month", note: "Flexible month-to-month access", features: ["Add and manage Box Cricket listings", "Receive booking enquiries", "Manage venue details and hourly prices", "Owner booking dashboard"], featured: false },
  { name: "Yearly", price: "₹9,999", period: "/ year", note: "A full year of owner access", features: ["Everything in Monthly", "One-year subscription period", "Manage all your listed venues", "Owner booking dashboard"], featured: true },
];

export default function OwnerPlansPage() {
  return (
    <main className="app-shell"><SiteHeader /><section className="dashboard-wrap">
      <div className="dashboard-welcome"><div><div className="eyebrow">OWNER SUBSCRIPTION</div><h1>Choose a plan. <span>Get in the game.</span></h1><p>An active subscription will allow an owner to add Box Cricket details and publish listings.</p></div><Link className="button button-secondary" href="/owner">← Owner dashboard</Link></div>
      <div className="demo-banner"><span>ⓘ</span><div><strong>Demo pricing only</strong><p>These example prices are not final. Plan selection and payment are visual previews; no money is charged and no subscription is activated.</p></div></div>
      <div className="subscription-grid">{plans.map((plan) => <article className={plan.featured ? "subscription-card subscription-featured" : "subscription-card"} key={plan.name}>{plan.featured && <span className="popular-tag">BEST VALUE · DEMO</span>}<span className="plan-kicker">{plan.name.toUpperCase()} PLAN</span><h2>{plan.name}</h2><p className="subscription-note">{plan.note}</p><div className="subscription-price">{plan.price}<span>{plan.period}</span></div><ul>{plan.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul><button className={plan.featured ? "button subscription-button" : "button button-secondary subscription-button"} type="button" onClick={() => alert("Demo only: subscription checkout will be connected after backend and payment setup.")}>Choose {plan.name} plan <span>→</span></button></article>)}</div>
      <div className="plan-rule"><span>✓</span><div><strong>Listing access rule</strong><p>After a real payment is verified and the plan becomes active, the owner can add venue details. New listings are published immediately while the plan is active. Expired plans cannot create new listings.</p></div></div>
    </section><footer><Link className="brand" href="/"><span className="brand-mark">CB</span><span>cricket<span className="brand-blue">box</span></span></Link><span>CricketBox · Subscription preview</span></footer></main>
  );
}
