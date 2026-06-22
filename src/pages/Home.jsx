import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Carousel from '../components/Carousel'
import { HomeIcon, CarIcon, ScissorsIcon, CalendarIcon } from '../components/icons'

const steps = [
  {
    icon: <CalendarIcon size={28} />,
    title: 'Pick a time',
    text: 'Choose a date and slot that works for your schedule — mornings, lunch breaks, or evenings.',
  },
  {
    icon: <HomeIcon size={28} />,
    title: 'Share your address',
    text: 'Home, office, or hotel — Jon sets up a clean mobile station wherever you are.',
  },
  {
    icon: <ScissorsIcon size={28} />,
    title: 'Enjoy the cut',
    text: 'Relax while Jon delivers a sharp, professional cut without leaving your door.',
  },
]

const services = [
  { name: 'Classic Cut', price: '$35', desc: 'Scissor or clipper cut, styled to your preference.' },
  { name: 'Fade & Style', price: '$45', desc: 'Skin taper, mid fade, or burst — finished with product.' },
  { name: 'Beard Trim', price: '$20', desc: 'Line-up, shape, and hot towel finish.' },
  { name: 'Cut + Beard', price: '$55', desc: 'Full grooming package at one visit.' },
]

const testimonials = [
  {
    quote: "Jon showed up on time with everything he needed. Best haircut I've had without leaving the house.",
    name: 'Marcus T.',
    role: 'Repeat client',
  },
  {
    quote: 'Booked during my lunch break at the office. Professional, fast, and my team keeps asking who my barber is.',
    name: 'Daniel R.',
    role: 'Corporate client',
  },
  {
    quote: "My son was nervous about a home visit, but Jon was patient and great with kids. We'll definitely rebook.",
    name: 'Sarah M.',
    role: 'Parent',
  },
]

const galleryLabels = [
  'Before & after — fade',
  'Mobile setup at client home',
  'Beard trim & line-up',
  'Kids cut — friendly service',
]

export default function Home() {
  const testimonialSlides = testimonials.map((t) => ({
    content: (
      <blockquote className="testimonial-card">
        <p>&ldquo;{t.quote}&rdquo;</p>
        <footer>
          <div className="testimonial-card__avatar" aria-hidden="true">
            <span>{t.name.charAt(0)}</span>
          </div>
          <div>
            <cite>{t.name}</cite>
            <span>{t.role}</span>
          </div>
        </footer>
      </blockquote>
    ),
  }))

  const gallerySlides = galleryLabels.map((label) => ({
    content: (
      <ImagePlaceholder
        label={label}
        hint="Replace with portfolio photo"
        aspectRatio="4 / 3"
      />
    ),
  }))

  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <p className="eyebrow">
              <CarIcon size={18} />
              Mobile barber · We come to you
            </p>
            <h1>Premium cuts.<br />At your door.</h1>
            <p className="hero__lead">
              Jon brings the barbershop experience to your home, office, or wherever life keeps you busy.
              Book online in minutes.
            </p>
            <div className="hero__actions">
              <Link to="/book" className="btn btn--primary">Book appointment</Link>
              <Link to="/about" className="btn btn--ghost">Meet Jon</Link>
            </div>
          </div>
          <div className="hero__visual">
            <ImagePlaceholder
              label="Hero photo — Jon cutting hair at a client's home"
              hint="Wide lifestyle shot, warm lighting"
              aspectRatio="4 / 5"
              className="hero__image"
            />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-header section-header--center">
            <h2>How it works</h2>
            <p>Three simple steps from booking to a fresh cut.</p>
          </div>
          <div className="steps-grid">
            {steps.map((step, i) => (
              <article key={step.title} className="step-card">
                <span className="step-card__number">{i + 1}</span>
                <div className="step-card__icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Services & pricing</h2>
            <p>Transparent rates. Travel within the core service area included.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article key={service.name} className="service-card">
                <div className="service-card__top">
                  <h3>{service.name}</h3>
                  <span className="service-card__price">{service.price}</span>
                </div>
                <p>{service.desc}</p>
              </article>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/book" className="btn btn--primary">View availability</Link>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-header section-header--center">
            <h2>What clients say</h2>
            <p>Real feedback from people who booked a house call.</p>
          </div>
          <Carousel items={testimonialSlides} ariaLabel="Client testimonials" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <h2>Recent work</h2>
            <p>A peek at cuts and setups — swap in Jon&apos;s portfolio photos anytime.</p>
          </div>
          <Carousel items={gallerySlides} autoPlayMs={5000} ariaLabel="Portfolio gallery" />
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Ready for a fresh cut?</h2>
            <p>Pick a time that works — Jon handles the rest.</p>
          </div>
          <Link to="/book" className="btn btn--primary btn--light">Book now</Link>
        </div>
      </section>
    </>
  )
}
