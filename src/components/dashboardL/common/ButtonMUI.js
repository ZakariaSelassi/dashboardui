
import React from 'react'
import { Box, Button } from '@material-ui/core'
const ButtonMUI = ({children,...props}) => {
  return (
    <Box display="flex" justifyContent="flex-end"  alignItems="center" padding="1rem">
        <Button 
            {...props}
            /*  style={{fontSize:'0.7rem'}} */>
            {children}
        </Button>

    </Box>

  )
}

export default ButtonMUI