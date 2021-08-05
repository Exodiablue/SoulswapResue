const styles = theme => ({
  container: {
    padding: '24px',
    margin: '8px 0 2rem',
    // border: '1px solid ' + theme.palette.background.border,
    backgroundColor: '#fcf5ff00',
    justifyContent: 'space-between',
    position: 'relative',
    borderRadius: '25px',
    border: '3px solid #000',
    '&:hover': {
      // backgroundColor: '#fcf5ff00',
      border: '3px solid #c11857',
      transition: 'all 0.30s ease-in-out',
    },
  },

  selectorContainer: {
    width: '100%',
  },

  selectorLabel: {
    color: '#fff',
    marginBottom: '10px',
  },

  selector: {
    padding: '0',
    margin: '0',
    color: '#fff',
  },

  label: {
    color: '#fff',
    '& .MuiTypography-root': {
      fontSize: '14px',
    }
  },
  boost: {
    color: '#5a8f69',
    fontWeight: 'bold',
    '& .MuiAvatar-root': {
      position: 'absolute',
      top: 0,
      right: '-20px',
    },
  },
  reset: {
    border: '1px solid ' + theme.palette.background.border,
    padding: '4px 8px',
    position: 'absolute',
    borderRadius: '25px',
    top: '5px',
    right: '5px',
    backgroundColor: '#000',
    '& .MuiButton-label': {
      fontWeight: 'bold',
      textTransform: 'capitalize',
    },
    '&:hover': {
      backgroundColor: '#c11857',
    },
  }
});

export default styles;
