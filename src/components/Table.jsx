import React, { PropTypes } from 'react';

import LoaderHOC from '../HOC/LoaderHOC';

const Table = ({ body, header, isLoaded, onDeleteClick, onInfoClick, hasInfo, hasDelete, keys }) => {
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
        <tr key={ current._id || i }>
          { !keys ?
          Object.keys(current).map((prop, index) => {
            if (prop === '_id') {
              return null;
            }
            return (<td key={ index }>{ current[prop] }</td>)
          }) : keys.map((key, i) => <td key={ i }>{ current[key] }</td>) 
           }
          { hasInfo ? 
          <td className="has-text-centered">
            <button onClick={ () => onInfoClick(current) } className="button is-info">
              <span className="icon">
                <i className="fa fa-user"></i>
              </span>
            </button>
          </td> :
          null }
          { hasDelete ?
          <td className="has-text-centered">
            <button onClick={ () => onDeleteClick(current) } className="button is-danger">
              <span className="icon">
                <i className="fa fa-trash"></i>
              </span>
            </button>
          </td> : 
          null }  
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
  onInfoClick: PropTypes.func,
  hasInfo: PropTypes.bool,
  hasDelete: PropTypes.bool,
  keys: PropTypes.array
}

export default LoaderHOC(Table);