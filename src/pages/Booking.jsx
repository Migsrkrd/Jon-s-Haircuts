import BookingCalendar from '../components/BookingCalendar'
import { CalendarIcon } from '../components/icons'

export default function Booking() {
  return (
    <>
      <section className="page-hero page-hero--compact">
        <div className="container page-hero__content page-hero__content--center">
          <p className="eyebrow">
            <CalendarIcon size={18} />
            Online booking
          </p>
          <h1>Schedule your cut</h1>
          <p className="page-hero__lead">
            Choose a date, pick a time, and tell us where to meet you. Jon confirms every request personally.
          </p>
        </div>
      </section>

      <section className="section section--booking">
        <div className="container">
          <BookingCalendar />
        </div>
      </section>
    </>
  )
}
