import { createMuiTheme } from '@material-ui/core/styles';
import { NoEncryption } from '@material-ui/icons';
import { normalizeUnits } from 'moment';

const createTheme = (isNightMode) => createMuiTheme({
  palette: {
    type: isNightMode ? 'dark' : 'light',
    background: {
      // default: isNightMode ? '#242332' : '#fbf9f6',
      paper: isNightMode ? '#606077' : '#fff',
      primary: isNightMode ? '#505067' : '#FBF6F0',
      secondary: isNightMode ? '#3B3A4D' : '#F8F2EC',
      extra: isNightMode ? '#242332' : '#FBF6F0',
      // dark: isNightMode ? '#2B2A3D' : '#999',
      paused: isNightMode ? '#2B2A5A' : '#FCE57E',
      retired: isNightMode ? '#d32f2f' : '#e57373',
      hover: isNightMode ? '#2B2A3D' : '#EFE6DC',
      border: isNightMode ? '#2B2A3D' : '#DED9D5',
    },
    primary: {
      main: isNightMode ? '#fff' : '#fff',
    },
    secondary: {
      main: isNightMode ? '#fff' : '#F8F2EC',
    },
    text: {
      primary: isNightMode ? '#fff' : '#000',
      secondary: isNightMode ? '#B0B0DD' : '#00000066',
    },
  },
  overrides: {
    MuiButton: {
      label: {
        color: isNightMode ? '#fff' : '#fff',
        fontWeight: 'normal',
      },
    },
    MuiInput : {
      underline : {
        borderBottom: '2px solid #fff',
        '&:after': {
          borderBottom: '2px solid #fff',
        },
        '&:before': {
          borderBottom: '2px solid #fff',
        },
      },
    },
    MuiSelect : {
      icon : {
        color:"#c11828"
      },
      selectMenu : {
        textOverflow: "initial",
        whiteSpace: "normal",
        paddingRight: "40px !important"
      }
    },
    MuiAvatar : {
      root : {
        width:"50px",
        height:"50px"
      },
    },
    MuiIconButton : {
      label : {
        color:'White'
      },
    },
    MuiAutocomplete:{
      input: {
        color:'white',
      },
      popupIndicator: {
        color:'white',
      },
    },
    // for dropdown menu items
    MuiButtonBase: {
      root: {
        color: isNightMode ? '#fff' : '#000',
      },
    },
    MuiCheckbox: {
      colorPrimary: {
        color: isNightMode ? '#fff' : '#fff',
      },
      colorSecondary: {
        color: isNightMode ? '#fff' : '#000',
      },
    },
  },
});

export default createTheme;
