import { Box, Divider, Paper } from '@material-ui/core'
import React from 'react'
import {products} from '../../utils/dataProducts'
import Button from '@material-ui/core/Button'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Proptypes from 'prop-types'
const Products = ({title}) => {
  return (
    <>
            <Paper>
                <h1 style={{    fontWeight:'600',fontSize:'1.125rem',lineHeight:'1.375',margin:0,padding:'1rem'}}>{title}</h1>
                <Divider/>
                {
                    products.map((product, index) => {
                        return (
                          <>
                          
                          <Box style={{display:'flex',padding:'1rem'}} key={product.id}>
                            <Box>
                               <img src={product.icon} alt="React Logo" width={36.5} />
                            </Box>
                            <Box style={{width:'100%',paddingLeft:'1rem',display:'flex', flexDirection:'column',justifyContent:'space-around'}}>
                              <span>{product.name}</span>
                              <span style={{fontSize:'0.72rem'}}>{product.description} </span>
                            </Box>
                            <Box style={{display:'flex' , justifyContent:'flex-end', alignContent:'center',width:'100%'}}>
                               <img src={product.more} alt="React Logo" width={20} />
                            </Box>
                          </Box>
                          <Divider/>
                          </>
                        )
                    })       
                    
                }
                <Divider/>
                <Box display="flex" justifyContent="flex-end"  alignItems="center" padding="1rem">
        <Button  style={{fontSize:'0.7rem'}}>
        View all 
        <ArrowRightIcon style={{width:'20px',margin:'auto'}}/>
        </Button>
      
         </Box>
               
            </Paper>
       
    </>
  )
}

Products.defaultProps = {
  title: 'Latest Products'
}
export default Products