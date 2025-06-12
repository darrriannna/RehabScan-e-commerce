import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ALL_TIME_SLOTS = [
  '08:00',
  '08:45',
  '09:30',
  '10:15',
  '11:00',
  '11:45',
  '12:30',
  '13:15',
  '14:00',
  '14:45',
  '15:30',
  '16:15',
  '17:00',
  '17:45',
  '18:30',

];

const BLOCKED_DAYS = [0, 6, 2, 5];

const INITIALLY_BOOKED = {
  '2025-06-10': ['09:00 AM', '01:00 PM'],
  '2025-06-11': ['10:00 AM'],
};

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

const BookingCalendar = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [bookedSlots, setBookedSlots] = useState(INITIALLY_BOOKED);

  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    personnummer: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const formatDate = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;


  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const calendarDays = [];
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(new Date(viewYear, viewMonth, i));
  }

  const isDateBlocked = (date) => {
    const isWeekend = BLOCKED_DAYS.includes(date.getDay());
    const isBeforeToday = formatDate(date) < formatDate(today);
    return isWeekend || isBeforeToday;
  };

  const bookedSlotsForDate = (date) => bookedSlots[formatDate(date)] || [];

  const validatePersonnummer = () => {
    const { personnummer } = formData;
    const swedishRegex = /^\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])-\d{4}$/;
    const danishRegex = /^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])\d{2}-\d{4}$/;

    let isValidFormat = swedishRegex.test(personnummer) || danishRegex.test(personnummer);
    if (!isValidFormat) {
      setErrors((prev) => ({
        ...prev,
        personnummer: 'Format: ÅÅMMDD-XXXX (SE) eller DDMMÅÅ-XXXX (DK)',
      }));
      return false;
    }

    let day, month, year;
    if (swedishRegex.test(personnummer)) {
      year = parseInt(personnummer.slice(0, 2), 10);
      month = parseInt(personnummer.slice(2, 4), 10);
      day = parseInt(personnummer.slice(4, 6), 10);
    } else {
      day = parseInt(personnummer.slice(0, 2), 10);
      month = parseInt(personnummer.slice(2, 4), 10);
      year = parseInt(personnummer.slice(4, 6), 10);
    }

    const currentYear = new Date().getFullYear() % 100;
    const fullYear = year <= currentYear ? 2000 + year : 1900 + year;

    const isValidDate = (y, m, d) => {
      const date = new Date(`${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`);
      return date.getFullYear() === y && date.getMonth() + 1 === m && date.getDate() === d;
    };

    if (!isValidDate(fullYear, month, day)) {
      setErrors((prev) => ({ ...prev, personnummer: 'Invalid date in personnummer.' }));
      return false;
    }

    setErrors((prev) => ({ ...prev, personnummer: null }));
    return true;
  };

  const validatePhone = () => {
    const isValid = /^\+?\d{7,15}$/.test(formData.user_phone);
    if (!isValid) {
      setErrors((prev) => ({
        ...prev,
        user_phone: 'Enter valid phone number (min 7 digits)',
      }));
    } else {
      setErrors((prev) => ({ ...prev, user_phone: null }));
    }
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime) {
      alert('Välj datum och tid.');
      return;
    }

    const isValid = validatePersonnummer() & validatePhone();

    if (!isValid) return;

    emailjs
      .sendForm('service_1nb9swg', 'template_ge4696x', form.current, 'wgAk0hmRkusR4CnTE')
      .then(() => {
        setStatus('SUCCESS');
        const dateStr = formatDate(selectedDate);
        setBookedSlots((prev) => ({
          ...prev,
          [dateStr]: [...(prev[dateStr] || []), selectedTime],
        }));

        setFormData({
          user_name: '',
          user_email: '',
          user_phone: '',
          personnummer: '',
          message: '',
        });
        setSelectedDate(null);
        setSelectedTime('');
        form.current.reset();
      })
      .catch(() => {
        setStatus('FAILED');
      });
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Boka Tid</h2>

      {/* Month navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
        <button
          onClick={() => {
            if (viewMonth === 0) {
              setViewMonth(11);
              setViewYear(viewYear - 1);
            } else {
              setViewMonth(viewMonth - 1);
            }
          }}
          disabled={viewYear === today.getFullYear() && viewMonth === today.getMonth()}
        >
          ← Föregående
        </button>

        <strong>{new Date(viewYear, viewMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}</strong>

        <button
          onClick={() => {
            if (viewMonth === 11) {
              setViewMonth(0);
              setViewYear(viewYear + 1);
            } else {
              setViewMonth(viewMonth + 1);
            }
          }}
        >
          Nästa →
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8, marginBottom: 20 }}>
        {['Sön', 'Mån', 'Tis', 'Ons', 'Tors', 'Fre', 'Lör'].map((day) => (
          <div key={day} style={{ fontWeight: 'bold', textAlign: 'center' }}>{day}</div>
        ))}

        {new Date(viewYear, viewMonth, 1).getDay() > 0 &&
          Array(new Date(viewYear, viewMonth, 1).getDay()).fill(null).map((_, idx) => (
            <div key={'empty-' + idx}></div>
          ))}

        {calendarDays.map((date) => {
          const dateStr = formatDate(date);
          const isBlocked = isDateBlocked(date);
          const isSelected = selectedDate && formatDate(selectedDate) === dateStr;
          const isToday = formatDate(date) === formatDate(today);

          return (
            <button
              key={dateStr}
              disabled={isBlocked}
              onClick={() => setSelectedDate(date)}
              style={{
                padding: 8,
                backgroundColor: isSelected
                  ? '#007bff'
                  : isBlocked
                  ? '#f0f0f0'
                  : isToday
                  ? '#a0d8f0'
                  : '#fff',
                color: isBlocked ? '#999' : isSelected ? 'white' : 'black',
                border: '1px solid #ccc',
                borderRadius: 4,
                cursor: isBlocked ? 'not-allowed' : 'pointer',
              }}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>

      {selectedDate && (
        <form ref={form} onSubmit={sendEmail}>
          <input type="hidden" name="booking_date" value={formatDate(selectedDate)} />
          <div style={{ marginBottom: 10 }}>
            <strong>Datum:</strong> {formatDate(selectedDate)}
          </div>

          <label>Välj Tid:</label>
          <select
            name="booking_time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
            style={{ width: '100%', padding: 8, marginBottom: 20 }}
          >
            <option value="" disabled>-- Välj tid --</option>
            {ALL_TIME_SLOTS.map(slot => (
              <option
                key={slot}
                value={slot}
                disabled={bookedSlotsForDate(selectedDate).includes(slot)}
              >
                {slot} {bookedSlotsForDate(selectedDate).includes(slot) ? '(Bokad)' : ''}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="user_name"
            placeholder="Namn Efternamn"
            value={formData.user_name}
            onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
            required
            style={{ width: '100%', marginBottom: 10, padding: 8 }}
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email"
            value={formData.user_email}
            onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
            required
            style={{ width: '100%', marginBottom: 10, padding: 8 }}
          />

          <input
            type="text"
            name="user_phone"
            placeholder="Telefonnummer"
            value={formData.user_phone}
            onChange={(e) => setFormData({ ...formData, user_phone: e.target.value })}
            required
            style={{ width: '100%', marginBottom: 10, padding: 8 }}
          />
          {errors.user_phone && <div style={{ color: 'red', marginBottom: 10 }}>{errors.user_phone}</div>}

          <input
            type="text"
            name="personnummer"
            placeholder="Personnummer"
            value={formData.personnummer}
            onChange={(e) => setFormData({ ...formData, personnummer: e.target.value })}
            required
            style={{ width: '100%', marginBottom: 10, padding: 8 }}
          />
          {errors.personnummer && <div style={{ color: 'red', marginBottom: 10 }}>{errors.personnummer}</div>}

          <textarea
            name="message"
            placeholder="Meddelande till Naprapat"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            style={{ width: '100%', marginBottom: 10, padding: 8 }}
          />

          <button
            type="submit"
            style={{
              padding: '10px 20px',
              background: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            Boka nu
          </button>
        </form>
      )}

      {status === 'SUCCESS' && <p style={{ color: 'green', marginTop: 10 }}>Bokning skickad!</p>}
      {status === 'FAILED' && <p style={{ color: 'red', marginTop: 10 }}>Något gick fel.</p>}
    </div>
  );
};

export default BookingCalendar;


