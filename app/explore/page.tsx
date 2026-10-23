"use client";

import { useEffect, useMemo, useState } from "react";
import SiteHeader from "@/components/site-header";
import VenueCard from "@/components/venue-card";
import { demoVenues } from "@/lib/demo-venues";

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All cities");
  const [sort, setSort] = useState("recommended");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("q") || params.get("city") || "";
    if (query) setSearch(query);
  }, []);
  const cities = ["All cities", ...Array.from(new Set(demoVenues.map((venue) => venue.city))).sort()];
  const venues = useMemo(() => {
    const query = search.trim().toLowerCase();
    const filtered = demoVenues.filter((venue) => {
      const matchesCity = city === "All cities" || venue.city === city;
      const matchesQuery = !query || [venue.name, venue.city, venue.area, venue.surface, ...venue.amenities].some((value) => value.toLowerCase().includes(query));
      return matchesCity && matchesQuery;
    });
    if (sort === "price-low") return [...filtered].sort((a, b) => a.pricePerHour - b.pricePerHour);
    if (sort === "rating") return [...filtered].sort((a, b) => b.rating - a.rating);
    return filtered;
  }, [search, city, sort]);

  return (
    <main className="app-shell">
      <SiteHeader />
      <section className="page-hero explore-hero">
        <div className="eyebrow"><span className="dot" /> FIND YOUR NEXT MATCH</div>
        <h1>Explore cricket <span>turfs.</span></h1>
        <p>Compare venues, check facilities and find a ground that fits your team.</p>
        <div className="explore-search">
          <label className="field-control"><span>Search venue or area</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Try Ahmedabad, Baner, floodlights…" /></label>
          <label className="field-control"><span>City</span><select value={city} onChange={(event) => setCity(event.target.value)}>{cities.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label className="field-control"><span>Sort by</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="recommended">Recommended</option><option value="price-low">Price: low to high</option><option value="rating">Top rated</option></select></label>
        </div>
      </section>
      <section className="listing-section">
        <div className="listing-heading"><div><h2>Turfs to explore</h2><p>{venues.length} demo {venues.length === 1 ? "venue" : "venues"} shown</p></div><span className="demo-pill">DEMO LISTINGS</span></div>
        {venues.length ? <div className="venue-grid">{venues.map((venue) => <VenueCard key={venue.id} venue={venue} />)}</div> : <div className="empty-state"><span aria-hidden="true">⌕</span><h3>No turfs found</h3><p>Try another city or search term.</p><button className="button button-small" onClick={() => { setSearch(""); setCity("All cities"); }}>Clear filters</button></div>}
        <p className="demo-disclaimer">These are sample listings for layout testing only. They are not verified venues and do not accept real bookings yet.</p>
      </section>
      <footer><a className="brand" href="/"><span className="brand-mark">CB</span><span>cricket<span className="brand-blue">box</span></span></a><span>CricketBox · Built for the game.</span></footer>
    </main>
  );
}
