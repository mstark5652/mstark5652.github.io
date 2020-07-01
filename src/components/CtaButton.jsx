import React from 'react'
import Button from '@material-ui/core/Button'

const CtaButton = ({ text, to, color }) => {
  return (
    <Button size='small' color={color || 'primary'} href={to}>
      {text}
    </Button>
  )
}

export default CtaButton
