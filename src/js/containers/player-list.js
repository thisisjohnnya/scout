import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectPlayer} from '../actions/select'

class PlayerList extends Component {
    createListItems() {
        return this.props.players.map((player) => {
            return (
                <li key={player.id}
                    onClick={() => this.props.selectPlayer(player)}>
                    {player.first} {player.last}
                </li>
            )
        })
    }
    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        players: state.players
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectPlayer: selectPlayer}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PlayerList);
