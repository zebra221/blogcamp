import React from 'react';
import { hashHistory } from 'react-router';
import Axios from 'axios';
import { Container, Row, Col, ClearFix } from 'react-grid-system';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import { GridList, GridTile } from 'material-ui/GridList';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import Options from '../components/options';
import Drawer from '../components/drawer';
import PostCard from '../components/postcard';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      posts: []
    }
  }

  componentWillMount() {
    Axios.get('/api/image')
      .then(results => {
        this.setState({ posts: results.data });
      })
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

  render() {
    return (
      <div className="container">
        <AppBar
          title="Blogger - For everything"
          onLeftIconButtonTouchTap={this.handleClick.bind(this)}
          iconElementRight={<Options />}
        />
        <Drawer onRequestChange={(open) => this.setState({ open })} open={this.state.open} onClick={this.handleClick.bind(this)} />
        <Row>
          {this.state.posts.map(
            x => 
              <Col key={x.id} xs={12} md={6} lg={4} xl={3}>
                <PostCard id={x.id} author={x.author} title={x.title} image={x.image} post={x.post} />
              </Col>)}
        </Row>
      </div>
    );
  }
}

export default Main;
