import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addService } from '../redux/action/serviceAction';
import '../styles/bookform.css';
import services from '../pages/ServicesData'; // Import your services data

const MRIForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const serviceId = location.state?.serviceId; // Retrieve the serviceId from location state

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    personnummer: '',
    message: '',
    policyConfirmed: false,
    noPacemakerConfirmed: false,
    serviceTitle: '',
    price: 0
  });

  const [error, setError] = useState('');
  const [pacemakerError, setPacemakerError] = useState('');

  useEffect(() => {
    if (serviceId) {
      const service = services.find(service => service.id === serviceId);
      if (service) {
        setFormData(prevData => ({
          ...prevData,
          serviceTitle: service.title,
          price: service.price
        }));
      }
    }
  }, [serviceId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    if (!formData.policyConfirmed) {
      setError('Du måste intyga att du har tagit del av integritetspolicyn för att gå vidare.');
      hasError = true;
    } else {
      setError('');
    }

    if (!formData.noPacemakerConfirmed) {
      setPacemakerError('Du måste intyga att du inte har pacemaker för att gå vidare.');
      hasError = true;
    } else {
      setPacemakerError('');
    }

    if (hasError) {
      return;
    }

    const mriService = {
      id: new Date().getTime(), // Unique identifier
      title: formData.serviceTitle,
      price: formData.price, // Use the price from the form data
      qty: 1,
      type: 'service',
      formData
    };

    dispatch(addService(mriService));
    navigate('/checkoutMRI');
  };

  return (
    <form onSubmit={handleSubmit} className="mri-form">
      <div className="form-section">
        <h2 className='header-mri'>Kundinformation</h2>
        <p className='text-form-mri'>
          Vi använder ditt personnummer för hanteringen av undersökningsinformation och för att hitta din folkbokföringsadress dit vi skickar kallelse och undersökningsresultat.
          Väljer du fakturabetalning skickas din faktura efter ditt besök.
        </p>
        <label>Service:</label>
        <input type="text" name="serviceTitle" value={formData.serviceTitle} readOnly />
      </div>
      
      <div className="form-section">
        <label>Namn:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      
      <div className="form-section">
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      
      <div className="form-section">
        <label>Personnummer <span>(ÅÅÅÅMMDDXXXX)</span></label>
        <input type="text" name="personnummer" value={formData.personnummer} onChange={handleChange} required />
      </div>
      
      <div className="form-section">
        <label>Meddelande:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </div>
      
      <div className="form-section">
        <label>
          <input type="checkbox" name="noPacemakerConfirmed" checked={formData.noPacemakerConfirmed} onChange={handleChange} />
          <span className='text-form-mri'>Jag har ingen pacemaker.</span>
        </label>
        {pacemakerError && <div className="error">{pacemakerError}</div>}
      </div>
      
      <div className="form-section">
        <label>
          <input type="checkbox" name="policyConfirmed" checked={formData.policyConfirmed} onChange={handleChange} required />
          <span className='text-form-mri'>Jag har tagit del av RehabScan integritetspolicy och godkänner villkoren för hur mina personuppgifter lagras samt försäkrar att jag läst köpvillkoren.</span>
        </label>
        {error && <div className="error">{error}</div>}
      </div>
      
      <div className="form-section">
        <button type="submit">Skicka</button>
      </div>
    </form>
  );
};

export default MRIForm;









