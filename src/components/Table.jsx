import React, { PropTypes } from 'react';

import LoaderHOC from '../HOC/LoaderHOC';

const Table = ({ body, header, isLoaded, onDeleteClick, onInfoClick }) => {
  function fillHeader() {
    const headers = header.map((current, i) => {
      return (
        <th key={ i }>{ current }</th>        
      )
    });

    return headers;
  }

  function fillBody() {
    return body.map((current, i) => {
      return (
        <tr key={ current._id }>
          <td>{ current.name }</td>
          <td>{ current.email }</td>
          <td>{ current.cellphone }</td>
          <td>{ current.city }</td>
          <td className="has-text-centered">
            <button onClick={ () => onInfoClick(current) } className="button is-info">
              <span className="icon">
                <i className="fa fa-user"></i>
              </span>
            </button>
          </td>
          <td className="has-text-centered">
            <button onClick={ () => onDeleteClick(current) } className="button is-danger">
              <span className="icon">
                <i className="fa fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      )
    });
  }

  return (
    <table className="table">
      <thead>
        <tr>
          { fillHeader() }
        </tr>
      </thead>
      <tbody>
        { fillBody() }
      </tbody>
    </table>
  )
} 

Table.propTypes = {
  body: PropTypes.array.isRequired,
  header: PropTypes.array.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  onDeleteClick: PropTypes.func,
  onInfoClick: PropTypes.func
}

export default LoaderHOC(Table);