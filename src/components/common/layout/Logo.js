import PropTypes from 'prop-types'
import React from 'react'

const Logo = ({ className }) => {
  return (
    <img  src={require('./logo/logo.png')}/>
  )
}

Logo.defaultProps = {
  className: '',
}

Logo.propTypes = {
  className: PropTypes.string,
}

export default Logo
