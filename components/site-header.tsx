import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="topbar">
      <Link className="brand" href="/" aria-label="CricketBox home">
        <span className="brand-mark">CB</span>
        <span>cricket<span className="brand-blue">box</span></span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/explore">Explore turfs</Link>
        <Link href="/customer">My account</Link>
        <a href="/#owners">For turf owners</a>
      </nav>
      <Link className="button button-small" href="/explore">Find a turf <span aria-hidden="true">↗</span></Link>
    </header>
  );
}
