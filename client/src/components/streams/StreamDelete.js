import React, { Fragment, Component } from 'react'
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';


class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <Fragment>
        <button className="ui primary button">Delete</button>
        <button className="ui button">Cancel</button>
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

export default connect(mapStateToProps, { fetchStream })(StreamDelete);

