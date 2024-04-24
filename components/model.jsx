import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  const openJobberForm = () => {
    onClose(true)
    // Open a new window for the Jobber form
    window.open('https://clienthub.getjobber.com/client_hubs/57afc737-74dd-43e4-90cc-fb6f589ec820/public/work_request/new?source=social_media', '_blank');
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>Close</button>
        <button className="open-jobber-form-btn border-btn-rounded mt-4 d-flex align-items-center justify-content-center" onClick={openJobberForm}>
          Fill Form on Jobber Website
        </button>
      </div>
    </div>
  );
};

export default Modal;
