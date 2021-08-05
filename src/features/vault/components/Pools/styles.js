const styles = theme => ({
  container: {
    paddingTop: '4px',
  },
  tvl: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: '32px',
    letterSpacing: '0',
    lineHeight: '32px',
    fontWeight: '550',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
  },
  titleLoader: {
    marginLeft: '12px',
  },
  subtitle: {
    fontSize: '14px',
    letterSpacing: '0',
    lineHeight: '8px',
    display: 'contents',
    [theme.breakpoints.down('xs')]: {
      lineHeight: '16px',
    },
    fontWeight: '550',
    color: '#fff',
    marginTop: '0',
  },
  text: {
    fontSize: '24px',
    letterSpacing: '0',
    lineHeight: '32px',
    fontWeight: '550',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
  },
});

export default styles;
