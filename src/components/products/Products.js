import { Container, Grid, Paper } from '@material-ui/core'
import React from 'react'
import Dropbox from "../../icon/dropbox.svg"
import Github from "../../icon/github.svg"
import Slack from "../../icon/slack.svg"
const Products = () => {
  return (

            <Paper>
                <h2>Products</h2> 
                <img src={Dropbox} alt="React Logo" />
                <img src={Github} alt="React Logo" />
                <img src={Slack} alt="React Logo" />
            </Paper>
       
  
  )
}

export default Products