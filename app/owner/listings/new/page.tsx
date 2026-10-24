"use client";

import Link from "next/link";
import { useState } from "react";
import SiteHeader from "@/components/site-header";

export default function NewVenuePage() {
  const [saved, setSaved] = useState(false);
  const [venueName, setVenueName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("900");
  const [facilities, setFacilities] = useState<string[]>(["Floodlights", "Parking"]);

  const toggleFacility = (facility: string) => setFacilities((current) => current.includes(facility) ? current.filter((item) => item !== facility) : [...current, facility]);

  return (
    <main className="app-shell"><SiteHeader /><section className="dashboard-wrap listing-form-wrap">
      <div className="dashboard-welcome"><div><div className="eyebrow">OWNER SPACE · VENUE LISTING</div><h1>Add your <span>Box Cricket.</span></h1><p>Fill in the details customers need to find the right ground.</p></div><Link className="button button-secondary" href="/owner">← Dashboard</Link></div>
      <div className="demo-banner"><span>ⓘ</span><div><strong>Active plan shown for preview</strong><p>Listings will publish immediately when a real subscription is active. This form is frontend-only for now; submitted details are not stored yet.</p></div></div>
      {saved && <div className="form-success" role="status"><strong>Preview form completed!</strong><p>Your details have not been saved to a database. Backend saving and live publishing will be added in a later phase.</p><button className="text-link" onClick={() => setSaved(false)}>Edit details</button></div>}
      <form className="listing-form panel" onSubmit={(event) => { event.preventDefault(); setSaved(true); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <div className="form-section-title"><span>01</span><div><h2>Basic information</h2><p>Tell customers about your venue.</p></div></div>
        <div className="form-grid"><label>Box Cricket name *<input required value={venueName} onChange={(event) => setVenueName(event.target.value)} placeholder="e.g. Champions Box Cricket" /></label><label>Venue type<select defaultValue="box"><option value="box">Box cricket</option><option value="open">Open cricket turf</option><option value="both">Both</option></select></label><label>City *<input required value={city} onChange={(event) => setCity(event.target.value)} placeholder="e.g. Ahmedabad" /></label><label>Hourly price (₹) *<input required type="number" min="1" value={price} onChange={(event) => setPrice(event.target.value)} /></label><label className="form-full">Full address *<textarea required value={address} onChange={(event) => setAddress(event.target.value)} placeholder="Area, street, landmark and PIN code" rows={3} /></label><label className="form-full">Description<textarea placeholder="Describe your playing surface, size and what makes your venue special." rows={4} /></label></div>
        <div className="form-section-title"><span>02</span><div><h2>Facilities</h2><p>Select all facilities available at your ground.</p></div></div>
        <div className="facility-options">{["Floodlights", "Parking", "Washroom", "Drinking water", "Changing room", "Equipment rental", "Covered ground", "Cafeteria"].map((facility) => <label key={facility}><input type="checkbox" checked={facilities.includes(facility)} onChange={() => toggleFacility(facility)} />{facility}</label>)}</div>
        <div className="form-section-title"><span>03</span><div><h2>Photos and contact</h2><p>Photo upload and owner contact verification will be connected later.</p></div></div>
        <div className="upload-placeholder"><span>＋</span><strong>Add venue photos</strong><small>Image upload will be enabled after storage setup.</small></div>
        <div className="form-grid"><label>Contact person<input placeholder="Owner or manager name" /></label><label>Contact mobile<input type="tel" inputMode="tel" placeholder="10-digit mobile number" /></label></div>
        <div className="form-actions"><Link className="button button-secondary" href="/owner">Cancel</Link><button className="button" type="submit">Preview listing submission <span>→</span></button></div>
      </form>
    </section><footer><Link className="brand" href="/"><span className="brand-mark">CB</span><span>cricket<span className="brand-blue">box</span></span></Link><span>CricketBox · Listing form preview</span></footer></main>
  );
}
