const styles = theme => ({
  details: {
    display: 'flex',
    alignItems: 'center',
    // background: theme.palette.background.primary,
  },
  detailsPaused: {
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.background.paused,
  },
  detailsRetired: {
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.background.retired,
  },
  mobilePadding: {
    paddingTop: '20px',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 0,
    },
  },
  item: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
      maxWidth: '50%',
    },
    [theme.breakpoints.up('lg')]: {
      flexBasis: '30%',
      maxWidth: '30%',
    },
  },
  itemBalances: {
    [theme.breakpoints.up('sm')]: {
      flexBasis: '25%',
      maxWidth: '25%',
    },
    [theme.breakpoints.up('lg')]: {
      flexBasis: '14%',
      maxWidth: '14%',
    },
  },
  itemStats: {
    [theme.breakpoints.up('lg')]: {
      flexBasis: '14%',
      maxWidth: '14%',
    },
  },
  itemInner: {
    textAlign: 'center',
  },
});

export default styles;
