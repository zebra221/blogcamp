import React from 'react';
import { hashHistory } from 'react-router';
import Axios from 'axios';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

import Drawer from '../components/drawer';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      author: '',
      title: '',
      post: '',
      image: ''
    }
  }

  handleClick(selectedItem) {
    switch (selectedItem) {
      case 'Home':
        hashHistory.push('/');
        break;
      case 'Add New':
        hashHistory.push('/new');
        break;
      case 'About':
        hashHistory.push('/about');
        break;
    }
    this.setState({
      open: !this.state.open,
    })
  }

  savePost() {
    Axios.post('/api/image', {
      author: this.state.author,
      title: this.state.title,
      post: this.state.post,
      image: this.state.image
    })
      .then(response => {
        hashHistory.push('/');
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {

    return (
      <div className="container">
        <AppBar
          title="Add New"
          onLeftIconButtonTouchTap={this.handleClick.bind(this)}
        />
        <Drawer onRequestChange={(open) => this.setState({ open })} open={this.state.open} onClick={this.handleClick.bind(this)} />
        <div>
          <div style={{}}>
            <TextField
              onChange={(e, text) => this.setState({ title: text })}
              style={{ marginRight: 10, }}
              hintText="Funny Adventure"
              floatingLabelText="Title"
            />
            <TextField
              onChange={(e, text) => this.setState({ author: text })}
              style={{ marginRight: 10, }}
              hintText="James Smith"
              floatingLabelText="Author"
            />
            <TextField
              onChange={(e, text) => this.setState({ image: text })}
              style={{ marginRight: 10, }}
              hintText="http://random.cat/i/SuaQS.jpg"
              floatingLabelText="Image url"
            />
          </div>
          <Divider />
          <TextField
            multiLine
            fullWidth
            hintText="Once upon a time.."
            onChange={(e, text) => this.setState({ post: text })}
          /> <br />
          <Divider />
          <FlatButton onTouchTap={this.savePost.bind(this)} label="Save" primary fullWidth />
        </div>
      </div >
    );
  }
}

export default About;
