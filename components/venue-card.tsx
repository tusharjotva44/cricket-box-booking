import Link from "next/link";
import type { Venue } from "@/lib/demo-venues";

export default function VenueCard({ venue }: { venue: Venue }) {
  return (
    <article className="venue-card">
      <div className={`venue-art venue-art-${venue.color}`} aria-hidden="true">
        <span className="venue-art-badge">{venue.tag}</span>
        <div className="mini-field"><span className="mini-pitch" /></div>
        <span className="venue-art-caption">CRICKET • TURF • TEAM</span>
      </div>
      <div className="venue-card-body">
        <div className="venue-title-row">
          <div><p className="venue-location">{venue.area}, {venue.city}</p><h3>{venue.name}</h3></div>
          <span className="rating">★ {venue.rating.toFixed(1)} <small>({venue.reviews})</small></span>
        </div>
        <p className="venue-surface">{venue.surface}</p>
        <div className="amenity-list">{venue.amenities.slice(0, 3).map((amenity) => <span key={amenity}>{amenity}</span>)}</div>
        <div className="venue-card-bottom"><div><strong>₹{venue.pricePerHour.toLocaleString("en-IN")}</strong><span> / hour</span></div><Link className="button button-small" href={`/customer?venue=${venue.id}`}>View details <span aria-hidden="true">→</span></Link></div>
      </div>
    </article>
  );
}
