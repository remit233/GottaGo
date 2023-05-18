import React, { useState } from 'react';
import './Filter.css';

export default function Filter({ accessibilityFilter, babyChangingFilter, genderNeutralFilter, onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleAccessibilityChange = () => {
    onFilterChange('accessibility', !accessibilityFilter);
  };

  const handleBabyChangingChange = () => {
    onFilterChange('babyChanging', !babyChangingFilter);
  };

  const handleGenderNeutralChange = () => {
    onFilterChange('genderNeutral', !genderNeutralFilter);
  };

  return (
    <div className={`filter-container ${isOpen ? 'open' : 'closed'}`}>
      <div className="filter-header" onClick={handleToggle}>
        <h3>Filter Options</h3>
        <span className="toggle-icon">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="filter-options">
          <div className="filter-option">
            <label htmlFor="accessibilityCheckbox">Accessibility</label>
            <input
              className="styled-checkbox"
              type="checkbox"
              id="accessibilityCheckbox"
              checked={accessibilityFilter}
              onChange={handleAccessibilityChange}
            />
          </div>
          <div className="filter-option">
            <label htmlFor="babyChangingCheckbox">Baby Changing Stations</label>
            <input
              className="styled-checkbox"
              type="checkbox"
              id="babyChangingCheckbox"
              checked={babyChangingFilter}
              onChange={handleBabyChangingChange}
            />
          </div>
          <div className="filter-option">
            <label htmlFor="genderNeutralCheckbox">Gender Neutral</label>
            <input
              className="styled-checkbox"
              type="checkbox"
              id="genderNeutralCheckbox"
              checked={genderNeutralFilter}
              onChange={handleGenderNeutralChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}
