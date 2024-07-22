import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from 'emailjs-com';
import '../styles/bookform.css';

const BookingForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''  // New field for message
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Define available slots for each specific date
  const specificAvailableTimes = {
    '2024-07-20': ["9:00 AM", "10:00 AM", "1:00 PM", "3:00 PM"],
    '2024-07-21': ["11:00 AM", "2:00 PM", "4:00 PM"],
    '2024-07-22': ["9:00 AM", "12:00 PM", "2:00 PM", "5:00 PM"],
    // Add more dates and their available times as needed
  };

  // Retrieve booked slots from local storage or initialize an empty object
  const getBookedSlotsFromLocalStorage = () => {
    const storedSlots = localStorage.getItem('bookedSlots');
    return storedSlots ? JSON.parse(storedSlots) : {};
  };

  const [bookedSlots, setBookedSlots] = useState(getBookedSlotsFromLocalStorage);
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    // Filter available times based on booked slots
    const selectedDate = startDate.toISOString().split('T')[0];
    const bookedTimesForDate = bookedSlots[selectedDate] || [];
    const timesForSelectedDate = specificAvailableTimes[selectedDate] || [];
    const filteredTimes = timesForSelectedDate.filter(time => !bookedTimesForDate.includes(time));
    setAvailableTimes(filteredTimes);
  }, [startDate, bookedSlots]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      ...formData,
      date: startDate.toLocaleDateString(),
      time: selectedTime
    };

    emailjs.send('service_t43b9l3', 'template_nhom3d2', templateParams, 'jpDNG96sg4J956g8G')
      .then((result) => {
        console.log("Email successfully sent! Response:", result.text);
        setIsSubmitted(true);

        // Update booked slots and persist to local storage
        const selectedDate = startDate.toISOString().split('T')[0];
        const updatedBookedSlots = {
          ...bookedSlots,
          [selectedDate]: [...(bookedSlots[selectedDate] || []), selectedTime]
        };
        setBookedSlots(updatedBookedSlots);
        localStorage.setItem('bookedSlots', JSON.stringify(updatedBookedSlots));
      }, (error) => {
        console.error("Failed to send email. Error:", error.text);
      });

    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    setStartDate(new Date());
    setSelectedTime('');
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className='booking-form'>
      {isSubmitted ? (
        <div className="confirmation-message">
          Thank you! Your booking has been confirmed.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Phone:</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div>
            <label>Date:</label>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} required />
          </div>
          <div>
            <label>Time:</label>
            <div className="time-buttons">
              {availableTimes.map((timeSlot, index) => (
                <button
                  key={index}
                  type="button"
                  className={`time-button ${selectedTime === timeSlot ? 'selected' : ''}`}
                  onClick={() => handleTimeSelection(timeSlot)}
                  disabled={bookedSlots[startDate.toISOString().split('T')[0]]?.includes(timeSlot)}
                >
                  {timeSlot}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              cols="50"
              placeholder="Describe your problem..."
            ></textarea>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default BookingForm;
