import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
// import WbSunny from '@material-ui/icons/WbSunny';
// import NightsStay from '@material-ui/icons/NightsStay';

import styles from './styles';

const useStyles = makeStyles(styles);

const Header = ({ links, isNightMode, setNightMode }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();
  const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar className={`${classes.appBar} ${classes.dark}`}>
      <Toolbar className={classes.container}>
        <Button href="/" className={classes.title}>
          <Hidden xsDown>
            <img
              alt="GRIM"
              src={require(`images/grim.png`)}
              height={'40px'}
              className={classes.logo}
            />
            GRIM FINANCE
          </Hidden>
          <Hidden smUp>
            <img
              alt="GRIM"
              src={require(`images/grim.png`)}
              height={'35px'}
              className={classes.logo}
            />
          </Hidden>
        </Button>

        <div className={classes.middleNav}>
          <Hidden smDown>
            {Number(process.env.REACT_APP_NETWORK_ID) === 56 &&
              renderLink('barn', 'barn', 'warehouse', classes)}

            {renderLink('Arcade', 'Arcade', 'gamepad', classes)}
            {renderLink('Bridge', 'Bridge', 'sync-alt', classes)}
            {renderLink('Discord', 'Discord', 'discord', classes)}
            {renderLink('Docs', 'Docs', 'book', classes)}
            {renderLink('Lending', 'Lending', 'hand-holding-usd', classes)}
            {/* {renderLink('Github', 'Github', 'github', classes)} */}
            {/* {renderLink('Portfolio', 'Portfolio', 'chart-pie', classes)} */}
            {renderLink('Stats', 'Stats', 'sort-numeric-up', classes)}
            {renderLink('Store', 'Store', 'tshirt', classes)}
            {renderLink('Twitter', 'Twitter', 'twitter-square', classes)}
             {/* {renderLink('dashboard', t('stats'), 'chart-bar', classes)} */}
          </Hidden>
          {/* {renderLink('buy', t('buy'), 'dollar-sign', classes)} */}
          {/* {renderBoost(classes)} */}
        </div>

        <Hidden smDown implementation="css">
          <div className={classes.collapse}>{links}</div>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={classes.iconButton}
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
        <Button href="https://solidity.finance/audits/GrimVault/" target="_blank" className={classes.title}>
          <Hidden xsDown>
            <img
              alt="GRIM"
              src={require(`images/auditBadge.png`)}
              height={'40px'}
              className={classes.auditBadge}
            />
          </Hidden>
          <Hidden smUp>
            <img
              alt="GRIM"
              src={require(`images/auditBadge.png`)}
              height={'35px'}
              className={classes.auditBadge}
            />
          </Hidden>
        </Button>
      </Toolbar>

      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={'right'}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.closeButtonDrawer}
          >
            <Close />
          </IconButton>
          <div className={classes.appResponsive}>{links}</div>
          <div style={{ textAlign: 'center' }}>
            {Number(process.env.REACT_APP_NETWORK_ID) === 56 && (
              <LinkSidebar name="barn" label="barn" icon="warehouse" classes={classes} />
            )}
            <LinkSidebar name="Arcade" label="Arcade" icon="gamepad" classes={classes} />
            <LinkSidebar name="Bridge" label="Bridge" icon="sync-alt" classes={classes} />
            <LinkSidebar name="Discord" label="Discord" icon="discord" classes={classes} />
            <LinkSidebar name="Docs" label="Docs" icon="book" classes={classes} />
            <LinkSidebar name="Lending" label="Lending" icon="hand-holding-usd" classes={classes} />
            {/* <LinkSidebar name="Github" label="Github" icon="github" classes={classes} /> */}
            {/* <LinkSidebar name="Portfolio" label="Portfolio" icon="chart-pie" classes={classes} /> */}
            <LinkSidebar name="Stats" label="Stats" icon="sort-numeric-up" classes={classes} />
            <LinkSidebar name="Store" label="Store" icon="tshit" classes={classes} />
            <LinkSidebar name="Twitter" label="Twitter" icon="twitter-square" classes={classes} />
            {/* <LinkSidebar name="dashboard" label={t('stats')} icon="chart-bar" classes={classes} /> */}
            {/* <LinkSidebar name="buy" label={t('buy')} icon="dollar-sign" classes={classes} /> */}
            {/* <IconButton onClick={setNightMode} className={classes.icon}>
              {isNightMode ? <WbSunny /> : <NightsStay />}
            </IconButton> */}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

const renderLink = (name, label, icon, classes) => {
    if (name =='Bridge' || name == 'Portfolio' || name == 'Stats' || name == 'Docs' || name == 'Arcade' || name == 'Store' || name == 'Lending'){
      return (
        <a
        href={getLinkUrl(name)}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
        style={{ marginLeft: '5px', marginRight: '5px' }}
      >
        <i className={`fas fa-${icon} ${classes.icon}`} />
        <span>{label}</span>
      </a>
      );
    } else {
      return (
        <a
        href={getLinkUrl(name)}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
        style={{ marginLeft: '5px', marginRight: '5px' }}
      >
        <i className={`fab fa-${icon} ${classes.icon}`} />
        <span>{label}</span>
      </a>
      );
    }
};

const renderBoost = classes => {
  return (
    <a className={classes.btnBoost} href="/stake">
      <img alt="Boost" src={require('images/stake/boost.svg')} />
    </a>
  );
};

const LinkSidebar = ({ name, label, icon, classes }) => (
  <div style={{ width: '100%', paddingTop: '10px' }}>{renderLink(name, label, icon, classes)}</div>
);

const getLinkUrl = name => {
  if (name === 'Bridge')
    return 'https://multichain.xyz/';
  if (name === 'Discord')
    return 'https://discord.gg/vDFkVT6tE6';
  if (name === 'Twitter')
    return 'https://twitter.com/financegrim';
  // if (name === 'Github')
  //   return 'https://github.com/Grim-Finance';
  if (name === 'Docs')
    return 'https://docs.grim.finance';
  if (name === 'Lending')
    return 'https://www.kitten.finance/new/#net=Fantom';
  if (name === 'Stats')
    return 'https://dashboard.grim.finance';
  // if (name === 'Portfolio')
  //   return 'https://beta.degen.watch/?platforms[]=grim.finance';
  if (name === 'Arcade')
    return 'https://main.dlteow40fr5xj.amplifyapp.com/';
  if (name === 'Store')
    return 'https://store.grim.finance/collections/all';
  // return name === 'buy'
  //   ? 'https://1inch.exchange/#/r/0xF4cb25a1FF50E319c267b3E51CBeC2699FB2A43B/BNB/BIFI/?network=56'
  //   : `https://${name}.beefy.finance`;
};

export default Header;