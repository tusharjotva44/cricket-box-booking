const features = [
  { number: "01", title: "Find your ground", detail: "Explore box cricket and turf venues by city and area." },
  { number: "02", title: "Choose a slot", detail: "The booking flow will check availability before confirming." },
  { number: "03", title: "Play together", detail: "Manage bookings and venue details in one place." }
];
export default function HomePage() {
  return <main>
    <header className="topbar">
      <a className="brand" href="/" aria-label="CricketBox home"><span className="brand-mark">CB</span><span>cricket<span className="brand-blue">box</span></span></a>
      <nav><a href="#how">How it works</a><a href="#owners">For turf owners</a></nav>
      <a className="button button-small" href="#explore">Explore grounds <span aria-hidden="true">↗</span></a>
    </header>
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><span className="dot" /> MADE FOR THE LOVE OF CRICKET</div>
        <h1>Find your ground.<br/><span>Own the game.</span></h1>
        <p>Discover box cricket and turf grounds around India. Find a venue that fits your team and get ready to play.</p>
        <form className="search" action="#explore">
          <label><span>YOUR CITY OR AREA</span><input name="city" placeholder="e.g. Ahmedabad, Mumbai"/></label>
          <button className="button" type="submit">Explore grounds <span aria-hidden="true">→</span></button>
        </form>
        <p className="note">Bookings will be enabled after database and payment setup.</p>
      </div>
      <div className="hero-visual" aria-label="Stylized cricket ground illustration">
        <div className="sun"/><div className="visual-label">YOUR TEAM. YOUR TURF.</div>
        <div className="field"><div className="field-circle"/><div className="pitch"><i/><i/></div><div className="cricket-ball"/></div>
        <div className="visual-footer"><span>READY FOR THE NEXT MATCH?</span><span>LET'S PLAY ✦</span></div>
      </div>
    </section>
    <section className="stats" id="explore"><div><strong>All in one place</strong><span>Search and compare venues</span></div><div><strong>Clear pricing</strong><span>Understand hourly rates</span></div><div><strong>Secure by design</strong><span>Protected accounts and bookings</span></div></section>
    <section className="how section" id="how"><div className="eyebrow">SIMPLE FROM THE FIRST CLICK</div><h2>From search to sixes.</h2><div className="feature-grid">{features.map(feature => <article className="feature" key={feature.number}><span className="feature-number">{feature.number}</span><h3>{feature.title}</h3><p>{feature.detail}</p></article>)}</div></section>
    <section className="owner" id="owners"><div><div className="eyebrow">FOR TURF OWNERS</div><h2>Bring your ground into the game.</h2><p>Owner registration, venue approval and booking management are planned as part of the platform.</p></div><span className="owner-icon" aria-hidden="true">🏟️</span></section>
    <footer><a className="brand" href="/"><span className="brand-mark">CB</span><span>cricket<span className="brand-blue">box</span></span></a><span>CricketBox · Built for the game.</span></footer>
  </main>;
}