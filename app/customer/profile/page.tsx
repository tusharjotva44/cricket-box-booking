import Link from "next/link";
import SiteHeader from "@/components/site-header";

export default function CustomerProfilePage() {
  return <main className="app-shell"><SiteHeader /><section className="dashboard-wrap compact-page"><div className="eyebrow"><span className="dot" /> PLAYER SPACE</div><h1>Your <span>profile.</span></h1><p className="page-intro">Your account details and preferences will be managed here.</p><div className="demo-banner"><span>ⓘ</span><div><strong>Profile preview</strong><p>Authentication is not connected yet. We will only show and update personal details after secure login is implemented.</p></div></div><section className="panel profile-preview"><div className="profile-preview-icon">♙</div><h2>Player profile</h2><p>Sign-in, contact details and account preferences will be added in the authentication phase.</p><Link className="button button-secondary" href="/customer">Back to dashboard</Link></section></section><footer><a className="brand" href="/"><span className="brand-mark">CB</span><span>cricket<span className="brand-blue">box</span></span></a><span>CricketBox · Built for the game.</span></footer></main>;
}
