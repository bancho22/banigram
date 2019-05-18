import React from 'react'
import {string, func} from 'prop-types'

const Button = ({caption, onClick}) => (
  <button
    type='button'
    onClick={onClick}
    className='banigramUI-button'
  >
    {caption}
  </button>
)

Button.propTypes = {
  caption: string,
  onClick: func.isRequired
}

export default Button
