import React, { Fragment, Component } from 'react'
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom'; 

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params

    return (
      <Fragment>
        <button onClick={() => this.props.deleteStream(id)} className="ui primary button">Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </Fragment>
    );
  }
  
  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure?' 
    }
    return `Your Stream with title > ${this.props.stream.title} < will be deleted`
  }

  render() {
    return (
      <Modal title="Delete Stream" content={this.renderContent()} actions={this.renderActions()} onDismiss={() => history.push('/')}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);

