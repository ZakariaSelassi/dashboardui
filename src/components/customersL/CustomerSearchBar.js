import { Grid, Input, Paper, TextField } from '@material-ui/core'
import React from 'react'
import { Box } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@material-ui/core';
import {
    makeStyles,
    createStyles,
    fade,
    Theme,
} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  })
);

const CustomerSearchBar = () => {
    const classes = useStyles();
  return (
    <Grid container >
        <Grid item xs={12} sm={12} md={12} lg={4}>
            <Box className={classes.search} style={{width:'auto',margin:'2rem',border:'1px solid black'}}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase

                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Box>
        </Grid>
    </Grid>
    );
}

export default CustomerSearchBar