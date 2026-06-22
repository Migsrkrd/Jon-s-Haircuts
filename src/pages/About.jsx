import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { ScissorsIcon, CarIcon, MapPinIcon, CheckIcon } from '../components/icons'

const values = [
  'Experienced Great Clips barber — now on his own',
  'Sanitized tools and fresh capes every visit',
  'Flexible scheduling — early mornings to evenings',
  'Kid-friendly and patient with first-time clients',
]

const timeline = [
  { label: 'Great Clips', text: 'Jon honed his craft behind the chair at Great Clips, where consistency and a friendly chair-side manner mattered every shift.' },
  { label: 'His regulars', text: 'He built a large group of loyal customers who swore by his cuts and always requested him by name — not just any available barber.' },
  { label: 'Going solo', text: 'That following is what pushed him to start his own business: same trusted barber, but he comes to you instead of you coming to the salon.' },
  { label: 'Today', text: 'Jon brings that experience to house calls across the metro — for clients who already know his work and anyone ready to find out why.' },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div className="page-hero__content">
            <p className="eyebrow">About Jon</p>
            <h1>Your barber,<br />on the road.</h1>
            <p className="page-hero__lead">
              Jon spent years as a barber at Great Clips, where a large group of regulars swore by his
              work and always asked for him by name. That&apos;s why he went out on his own — same barber
              you trust, now at your door.
            </p>
            <Link to="/book" className="btn btn--primary">Book with Jon</Link>
          </div>
          <ImagePlaceholder
            label="Portrait photo of Jon"
            hint="Professional headshot or candid at work"
            aspectRatio="3 / 4"
            rounded
            className="page-hero__image"
          />
        </div>
      </section>

      <section className="section">
        <div className="container about-story">
          <div className="about-story__text">
            <h2>The story</h2>
            <p>
              Jon&apos;s path didn&apos;t start in someone&apos;s living room — it started at Great Clips. Shift
              after shift, he built a reputation for reliable, great cuts and easy conversation in the chair.
              Over time, a large group of regular customers made a point of coming back for Jon specifically,
              often waiting to get in his chair rather than take whoever was free.
            </p>
            <p>
              That loyalty is exactly why he launched Jon&apos;s Haircuts. His clients already trusted him;
              they just wanted the convenience of having him come to them. Now he runs his own mobile
              business — the same barber his regulars swore by at Great Clips, without the trip to the salon.
            </p>
          </div>
          <ImagePlaceholder
            label="Photo of Jon at work — Great Clips era or mobile setup"
            hint="Candid behind the chair or current house-call setup"
            aspectRatio="16 / 10"
          />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-header section-header--center">
            <h2>Why mobile barbering?</h2>
          </div>
          <div className="features-grid">
            <article className="feature-card">
              <div className="feature-card__icon"><HomeIconWrap /></div>
              <h3>Convenience</h3>
              <p>No commute, no waiting. Get a cut while the kids nap or between meetings.</p>
            </article>
            <article className="feature-card">
              <div className="feature-card__icon"><ScissorsIcon size={28} /></div>
              <h3>Quality</h3>
              <p>Full pro setup — clippers, capes, sanitizer, and styling products included.</p>
            </article>
            <article className="feature-card">
              <div className="feature-card__icon"><CarIcon size={28} /></div>
              <h3>Reliability</h3>
              <p>On-time arrivals and clear communication from booking to checkout.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-values">
          <div>
            <h2>What you can expect</h2>
            <ul className="check-list">
              {values.map((item) => (
                <li key={item}>
                  <CheckIcon size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ImagePlaceholder
            label="Close-up of a fresh fade or line-up"
            hint="Detail shot for portfolio credibility"
            aspectRatio="1 / 1"
            rounded
          />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <h2>Journey</h2>
            <p>From Great Clips regular to your living room.</p>
          </div>
          <ol className="timeline">
            {timeline.map((item) => (
              <li key={item.label} className="timeline__item">
                <span className="timeline__year">{item.label}</span>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container service-area">
          <div className="service-area__text">
            <h2>
              <MapPinIcon size={28} />
              Service area
            </h2>
            <p>
              Jon serves the greater metro area and surrounding suburbs. Not sure if you&apos;re in range?
              Enter your address when booking — we&apos;ll confirm travel availability.
            </p>
            <p className="service-area__note">
              Extended travel may include a small mileage fee. You&apos;ll see any extras before confirming.
            </p>
          </div>
          <ImagePlaceholder
            label="Map graphic — service area coverage"
            hint="Replace with styled map or zone illustration"
            aspectRatio="16 / 11"
          />
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Let&apos;s get you on the calendar</h2>
            <p>Pick a date and Jon will come to you.</p>
          </div>
          <Link to="/book" className="btn btn--primary btn--light">Book appointment</Link>
        </div>
      </section>
    </>
  )
}

function HomeIconWrap() {
  return (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
      <path d="M9 21V12h6v9" />
    </svg>
  )
}
