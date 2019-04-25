import React from 'react';
import {connect} from "react-redux";
import Congrats from './Congrats';

class App extends React.Component {
  render() {
    return <Congrats success={this.props.success}/>
  }
}

const mapStateToProps = (state) => {
  return {
    success: state.success
  }
}


export default connect(mapStateToProps)(App);