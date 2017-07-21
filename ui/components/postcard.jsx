import React from 'react';
import Axios from 'axios';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class CardExampleWithAvatar extends React.Component {
    render() {
        return (
            <Card>
                <CardMedia
                    overlay={<CardTitle title={this.props.title} subtitle={this.props.author} />}
                >
                    <img src={this.props.image} alt={this.props.title} />
                </CardMedia>
                <CardText>
                    {this.props.post}
                </CardText>
                <CardActions>
                    <FlatButton label="Love it" primary={true} />
                    <FlatButton onTouchTap={() => {
                            Axios.delete('/api/image', {
                                body: JSON.stringify({id: this.props.id})
                            })
                                .then(res => {
                                    alert('Removed');
                                })
                                .catch(err => {
                                    alert(err);
                                })
                        }} label="Meh, delete it" secondary={true} />
                </CardActions>
            </Card>
        );
    }
}