import React from 'react';
import './LanguageToggle.css';

const LanguageToggle = ({ hindi, onToggleChange }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="switch">
        <input
          id="language-toggle"
          className="check-toggle check-toggle-round-flat"
          type="checkbox"
          checked={hindi}  // Use hindi state for checked attribute
          onChange={onToggleChange}  // Use function from props for toggle change
        />
        <label htmlFor="language-toggle"></label>
        <span className="on">EN</span>
        <span className="off">HI</span>
      </div>
    </div>
  );
};

export default LanguageToggle;
