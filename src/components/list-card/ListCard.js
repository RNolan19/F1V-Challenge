import React, { Component } from 'react';
import { Card as Base } from '@material-ui/core';
// import PropTypes from 'prop-types';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
import './Listcard.scss'


class ListCard extends Component {

  render() {
    return (
      <Base className="card">
            <div className="header">
              <h2 className="header-text">{this.props.header}</h2>
            </div>

            <div className="items">
            <ul className="items-text">
              {this.props.items.map(item => <li>{item}</li>)}
            </ul>
            </div>
      </Base>
    );
  }
}

ListCard.propTypes = {
};

ListCard.defaultProps = {
};

export default ListCard;
