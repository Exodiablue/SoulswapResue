const styles = theme => ({
  container: {
    marginBottom: '24px',
    // border: '1px solid ' + theme.palette.background.border,
  },
  accordion: {
    width: '100%',
    backgroundColor: '#fff5f8db',
    borderRadius: '25px',
    transition: 'all 0.30s ease-in-out',
    border: '3px solid #000',
    '&:hover': {
      border: '3px solid #c11828',
      transition: 'all 0.30s ease-in-out',
      backgroundColor: '#fff5f5',  
      // textDecoration: 'underline',
    },
  },
  divider: {
    margin: '0 30px',
  },
  inspiritAccordiion : {
    outline: 'none',
    // borderColor: '#9ecaed',
    // boxShadow: '0 0 50px #9ecaed',

      width: '100%',
      backgroundColor: '#fff5f8db',
      borderRadius: '25px',
      transition: 'all 0.30s ease-in-out',
      border: '3px solid #31df74',
      '&:hover': {
        border: '3px solid #c11828',
        transition: 'all 0.30s ease-in-out',
        backgroundColor: '#fff5f5',  
        // textDecoration: 'underline',
      },
  },
});

export default styles;
