import React from 'react'
import Button from '@mui/material/Button'

const CtaButton = ({ text, to, color }) => {
  return (
    <Button size='small' color={color || 'primary'} href={to}>
      {text}
    </Button>
  )
}

export default CtaButton
