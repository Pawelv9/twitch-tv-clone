import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends Component {
  
  componentDidMount = () => {
    this.props.fetchStreams();
  }
  
  render() {
    return (
      <div>
        StreamList
      </div>
    );
  }
}

mapStateOfProps = () => {
  return { streams };
}

export default connect(null, { fetchStreams })(StreamList)
