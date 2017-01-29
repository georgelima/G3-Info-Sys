import React, { PropTypes } from 'react';

const Select = ({ options, onSelect, propValue, propContent }) => {
  function renderSelect() {
    if (options.length === 0) {
      return (
        <div className="notification is-warning">
          Nenhum Cliente Cadastrado!
        </div>
      )
    } else {
      return (
        <p className="control">
          <span className="select">
            <select className="select" onChange={ (e) => onSelect(e.target.value) } defaultValue="Selecione um cliente">
              <option>Selecione uma opção...</option>
              {options.map((option, key) => {
                return (
                  <option key={ option[propValue] } value={ option[propValue] }>{ option[propContent] }</option>
                )
              })}
            </select>
          </span>
        </p>
      )
    }
  }

  return (
    renderSelect()
  )
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  propValue: PropTypes.string.isRequired,
  propContent: PropTypes.string.isRequired
}

export default Select; 