import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

export default class DrawerMenu extends React.Component {
    render() {
        return (
            <Drawer
                onRequestChange={this.props.onRequestChange}
                docked={false}
                width={300}
                open={this.props.open}
            >
                <List>
                    <ListItem onTouchTap={() => this.props.onClick('Home')} primaryText="Home" leftIcon={<ActionHome />} />
                    <ListItem onTouchTap={() => this.props.onClick('Add New')} primaryText="Add New" leftIcon={<ActionInfo />} />
                </List>
                <Divider />
                <List>
                    <ListItem onTouchTap={() => this.props.onClick('About')} primaryText="About" rightIcon={<ActionInfo />} />
                </List>
            </Drawer>
        );
    }
}