import { Box, Divider, Paper } from '@material-ui/core'
import React from 'react'
import {products} from '../../utils/FakeData/dataProducts'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ButtonMUI from '../common/ButtonMUI';
import {useCommonStyle} from '../../utils/Style/commonStyle'
const Products = ({title}) => {
    const classes = useCommonStyle()
  return (
    <>
            <Paper>
                <h1 className={classes.titleDashboard}>{title}</h1>
                <Divider/>
                {
                    products.map((product, index) => {
                        return (
                          <>
                
                          <Box className={classes.containerProducts} key={product.id}>
                            <Box>
                               <img src={product.icon} alt="React Logo" width={36.5} />
                            </Box>
                              <Box className={classes.descriptionsProducts}>
                                <span>{product.name}</span>
                                <span style={{fontSize:'0.72rem'}}>{product.description} </span>
                              </Box>
                            <Box className={classes.dotsProducts}>
                               <img src={product.more} alt="React Logo" width={20} />
                            </Box>
                          </Box>
                          <Divider/>
                          </>
                        )
                    })       
                    
                }
                <Divider/>
                <ButtonMUI>
                    View All
                  <ArrowRightIcon style={{width:'20px',margin:'auto'}}/>
                </ButtonMUI>
            </Paper>
       
    </>
  )
}

Products.defaultProps = {
  title: 'Latest Products'
}
export default Products