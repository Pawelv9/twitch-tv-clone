import React, { Fragment } from 'react'
import Modal from '../Modal';
import history from '../../history';


const StreamDelete = () => {
  const actions = (
    <Fragment>
      <button className="ui primary button">Delete</button>
      <button className="ui button">Cancel</button>
    </Fragment>
    )
  
  return (
    <div>
      StreamDelete
      <Modal title="Delete Stream" content="Your Stream will be deleted" actions={actions} onDismiss={() => history.push('/')}/>
    </div>
  );
};

export default StreamDelete
