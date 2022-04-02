import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyIcon from '@mui/icons-material/Money';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LinearProgress from '@mui/material/LinearProgress';
export const PaperData = [
    {
        id: 1,
        title:'budget',
        budget:'$24k',
        rating:'16%',
        ratingIcon : <ArrowUpwardIcon fontSize='small' color="success"/>,
        background:"#DB5353",
        icon: <MoneyIcon/>
        
    },
    {
        id: 2,
        title:'Total Customers',
        budget:'1,6k',
        rating:'12% ',
        ratingIcon : <ArrowDownwardIcon fontSize='small' color="warning"/>,
        background:"#14B8A6",
        icon: <PeopleOutlineRoundedIcon/>
    },
    {
        id: 3,
        title:'Task Progress',
        budget:'75.5%',

        background:"#FFB020",
        icon: <AssessmentOutlinedIcon/>
    },
    {
        id: 4,
        title:'Title Profit',
        budget:'$23k',
        background:"#5048E5",
        icon: <AttachMoneyIcon/>
    },
]