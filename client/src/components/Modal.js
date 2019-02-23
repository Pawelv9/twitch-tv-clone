import ReactDOM from 'react-dom';
import React from 'react'

const Modal = props => {
  return ReactDOM.createPortal (
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
            Modal
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal;