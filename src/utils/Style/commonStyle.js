/** Make common style  */
import { makeStyles } from '@material-ui/core/styles';

export const useCommonStyle = makeStyles(theme => ({
    
    /* Products elements */
    containerProducts:{
        display:'flex',
        padding:'1rem'
    },
    descriptionsProducts:{
        width:'100%',
        paddingLeft:'1rem',
        display:'flex',
         flexDirection:'column',
         justifyContent:'space-around'
    },
    dotsProducts:{
        display:'flex' , 
        justifyContent:'flex-end', 
        alignContent:'center',
        width:'100%'
    },
    /* Products end */

    /* Dashboard elements */
    titleDashboard:{
        fontWeight:'500',
        fontSize:'1.125rem',
        lineHeight:'1.375',
        margin:0,padding:'1rem'
    },
    mainPaper:{
        display:'flex',
        justifyContent:'space-between',
        padding:'1.5rem'
    },
    iconPaper:{
        color:'white',
        width:'56px',
        height:'56px',
        borderRadius:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    /* Dashboard end */
    /* DougnutChart elements */
    titleChart:{
        fontWeight:'600',
        fontSize:'1.125rem',
        lineHeight:'1.375',
        margin:0,
        padding:'1rem'
    },
    containerDougnutChart:{
        display:'flex',
        justifyContent:'center',
        paddingTop: '16px'
    },
    descriptionsDougnutChart:{
        textAlign:'center',padding: '8px'
    }
    /* DougnutChart end */

}));