import React, { useState } from 'react';
import './BathroomForm.css'

const BathroomForm = () => {
  const [address, setAddress] = useState('');
  const [bathroomType, setBathroomType] = useState('');
  const [tags, setTags] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //  implement the logic to submit the bathroom information
    
    console.log('Address:', address);
    console.log('Bathroom Type:', bathroomType);
    console.log('Tags:', tags);
    console.log('Details:', details);
    // Reset the form fields
    setAddress('');
    setBathroomType('');
    setTags('');
    setDetails('');
  };

  return (
    <div className="bathroom-form-container">
      <h2>Suggest New Bathroom</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bathroomType">Bathroom Type:</label>
          <select
            id="bathroomType"
            value={bathroomType}
            onChange={(e) => setBathroomType(e.target.value)}
            required
          >
            <option value="">Select Bathroom Type</option>
            <option value="public">Public</option>
            <option value="business">Business</option>
            <option value="paid">Paid</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags:</label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="details">More Details / How to Get There:</label>
          <textarea
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BathroomForm;
