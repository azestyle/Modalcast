import React from 'react';
import useOutsideclick from './getcostumhook/useoutsideclick';

function Modal({ show, onClose }) {
  const referans = useOutsideclick(onClose);

  if (!show) {
    return null;
  }

  return (
    <div className="modal-box" >
      <div className="list-box" ref={referans}>
        <p>
          El bilir ki, sən mənimsən,
          Yurdum, yuvam, məskənimsən,
          Anam, doğma vətənimsən!
          Ayrılarmı könül candan?
          Azərbaycan, Azərbaycan!
        </p>
      </div>
    </div>
  );
}

export default Modal;
