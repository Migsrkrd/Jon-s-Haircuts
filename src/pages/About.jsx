import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { ScissorsIcon, CarIcon, MapPinIcon, CheckIcon } from '../components/icons'

const values = [
  'Licensed & insured mobile barber',
  'Sanitized tools and fresh capes every visit',
  'Flexible scheduling — early mornings to evenings',
  'Kid-friendly and patient with first-time clients',
]

const timeline = [
  { year: '2016', text: 'Started cutting hair for friends and family while learning the craft.' },
  { year: '2019', text: 'Completed barber certification and began building a loyal client base.' },
  { year: '2022', text: 'Launched mobile service — bringing the chair to clients across the metro.' },
  { year: 'Today', text: 'Hundreds of house calls and counting, with a focus on consistency and convenience.' },
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
              Jon built his reputation on sharp fades, clean line-ups, and showing up when he says he will.
              As a travel barber, he meets clients where they are — no waiting room required.
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
              What started as weekend cuts for friends turned into a full-time passion. Jon saw how hard
              it was for busy parents, professionals, and anyone without easy access to a great barber —
              so he took the shop on the road.
            </p>
            <p>
              Every appointment gets the same attention you&apos;d expect in a chair at a premium barbershop:
              a consultation, a precise cut, and a finish you&apos;re proud to walk out with (even if
              &ldquo;out&rdquo; is just your living room).
            </p>
          </div>
          <ImagePlaceholder
            label="Jon setting up mobile barber station"
            hint="Tools, chair, and mirror in a home setting"
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
            <p>Years of practice behind every house call.</p>
          </div>
          <ol className="timeline">
            {timeline.map((item) => (
              <li key={item.year} className="timeline__item">
                <span className="timeline__year">{item.year}</span>
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
