import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import ErrorIcon from '@mui/icons-material/Error';
export const dataNavbar = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <SignalCellularAltIcon />,
        path: '/dashboard',
    },
    {
        id: 2,
        title: 'Customers',
        icon: <PeopleAltIcon />,
        path: '/customers',
    },
    {
        id: 3,
        title: 'Products',
        icon: <ShoppingBagIcon/>,
        path: '/products',
    },
    {
        id: 4,
        title: 'Accounts',
        icon:  <PersonIcon />,
        path: '/accounts',
    },
    {
        id: 5,
        title: 'Settings',
        icon: <SettingsIcon />,
        path: '/settings',
    },
    {
        id: 6,
        title: 'Login',
        icon: <LoginIcon/>,
        path: '/login',
    },
    {
        id: 7,
        title: 'Register',
        icon: <PersonAddIcon/>,
        path: '/register',
    },
    {
        id: 8,
        title: 'Error',
        icon: <ErrorIcon/>,
        path: '/error',
    }
];