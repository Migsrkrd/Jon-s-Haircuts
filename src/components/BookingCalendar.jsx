import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, CheckIcon } from './icons'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const SERVICES = [
  { id: 'classic', label: 'Classic Cut', duration: '30 min', price: '$35' },
  { id: 'fade', label: 'Fade & Style', duration: '45 min', price: '$45' },
  { id: 'beard', label: 'Beard Trim', duration: '20 min', price: '$20' },
  { id: 'combo', label: 'Cut + Beard', duration: '60 min', price: '$55' },
]

const TIME_SLOTS = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
]

function startOfDay(date) {
  const d = new Date(date)
  d.setHours(0, 0, 0, 0)
  return d
}

function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function getCalendarDays(year, month) {
  const first = new Date(year, month, 1)
  const startOffset = first.getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const days = []

  for (let i = 0; i < startOffset; i++) days.push(null)
  for (let d = 1; d <= daysInMonth; d++) days.push(new Date(year, month, d))

  return days
}

function formatSelectedDate(date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function BookingCalendar() {
  const today = startOfDay(new Date())
  const [viewDate, setViewDate] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1))
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: 'classic',
    notes: '',
  })

  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()
  const calendarDays = getCalendarDays(year, month)

  const isDisabled = (date) => {
    if (!date) return true
    const day = date.getDay()
    return date < today || day === 0
  }

  const handlePrevMonth = () => {
    setViewDate(new Date(year, month - 1, 1))
  }

  const handleNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime) return
    setSubmitted(true)
  }

  const updateField = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  if (submitted) {
    return (
      <div className="booking-success">
        <div className="booking-success__icon">
          <CheckIcon size={32} />
        </div>
        <h2>Request received!</h2>
        <p>
          Thanks, {form.name.split(' ')[0] || 'friend'}. Jon will confirm your appointment for{' '}
          <strong>{formatSelectedDate(selectedDate)}</strong> at <strong>{selectedTime}</strong>.
        </p>
        <p className="booking-success__note">
          This is a demo booking form — connect a backend or scheduling service later to send real confirmations.
        </p>
        <button
          type="button"
          className="btn btn--secondary"
          onClick={() => {
            setSubmitted(false)
            setSelectedDate(null)
            setSelectedTime(null)
            setForm({ name: '', email: '', phone: '', address: '', service: 'classic', notes: '' })
          }}
        >
          Book another appointment
        </button>
      </div>
    )
  }

  return (
    <div className="booking">
      <div className="booking__grid">
        <section className="booking__calendar-panel" aria-labelledby="calendar-heading">
          <h2 id="calendar-heading" className="sr-only">Select a date</h2>

          <div className="calendar">
            <div className="calendar__header">
              <button type="button" className="calendar__nav" onClick={handlePrevMonth} aria-label="Previous month">
                <ChevronLeftIcon />
              </button>
              <h3 className="calendar__title">
                {MONTHS[month]} {year}
              </h3>
              <button type="button" className="calendar__nav" onClick={handleNextMonth} aria-label="Next month">
                <ChevronRightIcon />
              </button>
            </div>

            <div className="calendar__weekdays">
              {WEEKDAYS.map((day) => (
                <span key={day} className="calendar__weekday">{day}</span>
              ))}
            </div>

            <div className="calendar__grid" role="grid" aria-label="Appointment calendar">
              {calendarDays.map((date, i) => {
                if (!date) {
                  return <span key={`empty-${i}`} className="calendar__day calendar__day--empty" />
                }

                const disabled = isDisabled(date)
                const selected = selectedDate && isSameDay(date, selectedDate)

                return (
                  <button
                    key={date.toISOString()}
                    type="button"
                    role="gridcell"
                    disabled={disabled}
                    className={`calendar__day${selected ? ' calendar__day--selected' : ''}${disabled ? ' calendar__day--disabled' : ''}`}
                    onClick={() => {
                      setSelectedDate(date)
                      setSelectedTime(null)
                    }}
                    aria-label={date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                    aria-selected={selected}
                  >
                    {date.getDate()}
                  </button>
                )
              })}
            </div>

            <p className="calendar__note">Sundays unavailable. Same-day booking subject to availability.</p>
          </div>

          {selectedDate && (
            <div className="time-slots">
              <h3>Available times — {formatSelectedDate(selectedDate)}</h3>
              <div className="time-slots__grid">
                {TIME_SLOTS.map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`time-slot${selectedTime === time ? ' time-slot--selected' : ''}`}
                    onClick={() => setSelectedTime(time)}
                    aria-pressed={selectedTime === time}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        <section className="booking__form-panel" aria-labelledby="booking-form-heading">
          <h2 id="booking-form-heading">Your details</h2>
          <p className="booking__form-intro">
            Jon comes to you — share where you&apos;d like the cut and we&apos;ll handle the rest.
          </p>

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Full name</label>
              <input id="name" type="text" required value={form.name} onChange={updateField('name')} placeholder="Alex Johnson" />
            </div>

            <div className="form-row form-row--split">
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" required value={form.email} onChange={updateField('email')} placeholder="you@email.com" />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" required value={form.phone} onChange={updateField('phone')} placeholder="(555) 123-4567" />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="address">Service address</label>
              <input id="address" type="text" required value={form.address} onChange={updateField('address')} placeholder="123 Main St, Apt 4B" />
            </div>

            <div className="form-row">
              <label htmlFor="service">Service</label>
              <select id="service" value={form.service} onChange={updateField('service')}>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label} — {s.duration} ({s.price})
                  </option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <label htmlFor="notes">Notes <span className="optional">(optional)</span></label>
              <textarea id="notes" rows={3} value={form.notes} onChange={updateField('notes')} placeholder="Parking info, preferred style, etc." />
            </div>

            <div className="booking-summary">
              <h3>Appointment summary</h3>
              <dl>
                <div>
                  <dt>Date</dt>
                  <dd>{selectedDate ? formatSelectedDate(selectedDate) : 'Select a date'}</dd>
                </div>
                <div>
                  <dt>Time</dt>
                  <dd>{selectedTime || 'Select a time'}</dd>
                </div>
                <div>
                  <dt>Service</dt>
                  <dd>{SERVICES.find((s) => s.id === form.service)?.label}</dd>
                </div>
              </dl>
            </div>

            <button
              type="submit"
              className="btn btn--primary btn--full"
              disabled={!selectedDate || !selectedTime}
            >
              Request appointment
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}
