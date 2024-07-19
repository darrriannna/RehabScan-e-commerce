import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from 'emailjs-com';
import '../styles/bookform.css';

const BookingForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      time: time
    };

    emailjs.send('service_t43b9l3', 'template_nhom3d2', templateParams, 'jpDNG96sg4J956g8G')
      .then((result) => {
        console.log("Email successfully sent! Response:", result.text);
        setIsSubmitted(true);
      }, (error) => {
        console.error("Failed to send email. Error:", error.text);
      });

    // Reset form
    setFormData({ name: '', email: '', phone: '' });
    setStartDate(new Date());
    setTime('');
  };

  return (
    <div>
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
            <select value={time} onChange={e => setTime(e.target.value)} required>
              <option value="">Select Time</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
            </select>
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
