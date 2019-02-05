import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends Component {
  
  componentDidMount = () => {
    this.props.fetchStreams();
  }
  
  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">
            Edit
          </button>
          <button className="ui button negative">
            Delete
          </button>
        </div>

      )
    }
  }

  renderList() {
    this.props.streams.map(stream => {
      <div className="item" key={stream.id}>
        {this.renderAdmin(stream)}
        <i className="large middle aligned camera"/>
        <div className="content">
          {stream.title}
          <div className="description">
            {stream.description}
          </div>
        </div>
      </div>
    })
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
          <div className="ui celled list">
            {this.renderList()}    
          </div>
        {StreamList}
      </div>
    );
  }
}

mapStateOfProps = () => {
  return { 
    streams: Object.values(state.streams),
    userId: state.auth.userId
    };
}

export default connect(mapStateOfProps, { fetchStreams })(StreamList)
