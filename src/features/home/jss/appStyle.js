import { CenterFocusStrong } from '@material-ui/icons';
import { findByLabelText } from '@testing-library/dom';
import { blackColor, container, whiteColor } from 'assets/jss/material-kit-pro-react.js';

const appStyle = theme => ({
  page: {
    // backgroundColor: '#fbf9f6',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    ...container,
    zIndex: 1,
  },
  children: {
    minHeight: '77vh',
  },
  HeaderLinks: {
    color: '#fff' ,
  },
  Header: {
    backgroundColor: '#fafafa00',
  },
  grimMoon: {
    background:'url(GrimMoonCoffeeXparentBanner.png)', 
    bottom:"0", 
    right:"0",
    position:'fixed', 
    zIndex:'-1',
  },
});

export default appStyle;
