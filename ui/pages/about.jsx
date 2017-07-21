import React from 'react';
import { hashHistory } from 'react-router'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import Drawer from '../components/drawer';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  handleClick(selectedItem) {
    switch(selectedItem) {
      case 'Home' :
        hashHistory.push('/');
        break;
      case 'Add New' :
        hashHistory.push('/new');
        break;
      case 'About' :
        hashHistory.push('/about');
        break;
    }
    this.setState({
      open: !this.state.open,
    })
  }

  render() {

    return (
      <div className="container">
        <AppBar
          title="About"
          onLeftIconButtonTouchTap={this.handleClick.bind(this)}
        />
        <Drawer onRequestChange={(open) => this.setState({open})} open={this.state.open} onClick={this.handleClick.bind(this)}/>
      </div >
    );
  }
}

export default About;
