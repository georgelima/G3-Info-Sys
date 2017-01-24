import React, { Component, PropTypes } from 'react';

import LoaderHOC from '../HOC/LoaderHOC';

class Table extends Component {
  static propTypes = {
    body: PropTypes.array.isRequired,
    header: PropTypes.array.isRequired,
    isLoaded: PropTypes.bool.isRequired,
    onDeleteClick: PropTypes.func,
    onInfoClick: PropTypes.func
  }

  defaultProps = {
    isLoaded: true
  }

  fillHeader() {
    const headers = this.props.header.map((current, i) => {
      return (
        <th key={ i }>{ current }</th>        
      )
    });

    return headers;
  }

  fillBody() {
    const body = this.props.body.map((current, i) => {
      return (
        <tr key={ current._id }>
          <td>{ current.name }</td>
          <td>{ current.email }</td>
          <td>{ current.cellphone }</td>
          <td>{ current.city }</td>
          <td className="has-text-centered">
            <button onClick={ () => this.props.onInfoClick(current._id) } className="button is-info"><span className="icon"><i className="fa fa-user"></i></span></button>
          </td>
          <td className="has-text-centered">
            <button onClick={ () => this.props.onDeleteClick(current._id) } className="button is-danger"><span className="icon"><i className="fa fa-trash"></i></span></button>
          </td>
        </tr>
      )
    });
    return body;
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            { this.fillHeader() }
          </tr>
        </thead>
        <tbody>
          { this.fillBody() }
        </tbody>
      </table>
    )
  }
}

export default LoaderHOC(Table);