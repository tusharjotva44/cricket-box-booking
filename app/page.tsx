import Link from "next/link";
import SiteHeader from "@/components/site-header";

const steps = [
  { number: "01", title: "Find your ground", detail: "Explore box cricket and turf venues by city and area." },
  { number: "02", title: "Compare your options", detail: "Check facilities and hourly prices before you decide." },
  { number: "03", title: "Get ready to play", detail: "Booking and secure payments will follow in the next build phase." }
];

export default function HomePage() {
  return (
    <main className="app-shell">
      <SiteHeader />
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="dot" /> MADE FOR THE LOVE OF CRICKET</div>
          <h1>Find your ground.<br /><span>Own the game.</span></h1>
          <p>Discover box cricket and turf grounds around India. Compare your options, find the right space for your team, and make every match count.</p>
          <form className="search" action="/explore">
            <label><span>YOUR CITY OR AREA</span><input name="q" placeholder="e.g. Ahmedabad, Mumbai" /></label>
            <button className="button" type="submit">Explore turfs <span aria-hidden="true">→</span></button>
          </form>
          <div className="hero-trust"><span>✓</span> Explore venues in one place <span className="trust-separator">•</span> Built for teams across India</div>
        </div>
        <div className="hero-visual" aria-label="Illustration of a cricket ground">
          <div className="sun" /><div className="visual-label">YOUR TEAM. YOUR TURF.</div>
          <div className="field"><div className="field-circle" /><div className="pitch"><i /><i /></div><div className="cricket-ball" /></div>
          <div className="visual-footer"><span>READY FOR THE NEXT MATCH?</span><span>LET'S PLAY ✦</span></div>
          <div className="floating-score"><span className="score-icon">🏏</span><div><strong>Match day starts here</strong><small>Find a turf for your team</small></div></div>
        </div>
      </section>
      <section className="stats"><div><strong>Explore with ease</strong><span>Search venues by city and area</span></div><div><strong>Compare facilities</strong><span>Find the right fit for your team</span></div><div><strong>Clear pricing</strong><span>See demo hourly rates</span></div></section>
      <section className="how section" id="how"><div className="eyebrow">YOUR NEXT MATCH, MADE SIMPLE</div><h2>From search to sixes.</h2><div className="feature-grid">{steps.map((step) => <article className="feature" key={step.number}><span className="feature-number">{step.number}</span><h3>{step.title}</h3><p>{step.detail}</p></article>)}</div><div className="section-cta"><span>Ready to find your next ground?</span><Link className="button" href="/explore">Explore turfs <span aria-hidden="true">→</span></Link></div></section>
      <section className="owner" id="owners"><div><div className="eyebrow">FOR TURF OWNERS</div><h2>Bring your ground into the game.</h2><p>Owner onboarding, venue listings and booking management are planned as part of the platform.</p></div><span className="owner-icon" aria-hidden="true">🏟️</span></section>
      <section className="customer-callout"><div><span className="eyebrow">YOUR PLAYER SPACE</span><h2>Keep your match plans together.</h2><p>A dedicated customer dashboard is taking shape for bookings, profile details and match history.</p></div><Link className="button button-secondary" href="/customer">Preview customer dashboard <span aria-hidden="true">→</span></Link></section>
      <p className="site-demo-note">Preview build: venue listings and dashboards currently use sample data. Login, live availability, booking confirmation and payments are not enabled yet.</p>
      <footer><Link className="brand" href="/"><span className="brand-mark">CB</span><span>cricket<span className="brand-blue">box</span></span></Link><span>CricketBox · Built for the game.</span><div className="footer-links"><Link href="/explore">Explore</Link><Link href="/customer">Customer space</Link></div></footer>
    </main>
  );
}
