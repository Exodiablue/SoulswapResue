import React, { useEffect, useState } from 'react';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import Header from 'components/Header/Header';
import HeaderLinks from 'components/HeaderLinks/HeaderLinks';
import NetworksProvider from 'components/NetworksProvider/NetworksProvider';
import NetworksModal from 'components/NetworksModal/NetworksModal';

import { useTranslation } from 'react-i18next';

import { SnackbarProvider } from 'notistack';
import Notifier from '../common/Notifier';

// import Footer from 'components/Footer/Footer';
// import Pastures from 'components/Pastures/Pastures';
// import bgImage from "images/bg.jpg"

import appStyle from './jss/appStyle.js';

import { createWeb3Modal } from '../web3';
import { useConnectWallet } from "./redux/connectWallet";
import {useDisconnectWallet} from "./redux/disconnectWallet"
import createTheme from './jss/appTheme';
import { networkSetup } from 'common/networkSetup';

import ClipLoader from "react-spinners/ClipLoader"
import { css } from "@emotion/react";


const useStyles = makeStyles(appStyle);

export default function App({ children }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const {
    connectWallet,
    web3,
    address,
    networkId,
    connected,
    connectWalletPending,
  } = useConnectWallet();
  const { disconnectWallet } = useDisconnectWallet();
  const [web3Modal, setModal] = useState(null);

  // const { isNightMode, setNightMode } = useNightMode();
  const theme = createTheme(false);

  useEffect(() => {
    setModal(createWeb3Modal(t));
  }, [setModal, t]);

  useEffect(() => {
    if (web3Modal && (web3Modal.cachedProvider || window.ethereum)) {
      connectWallet(web3Modal);
    }
  }, [web3Modal, connectWallet]);

  useEffect(() => {
    if (
      web3 &&
      address &&
      !connectWalletPending &&
      networkId &&
      Boolean(networkId !== Number(process.env.REACT_APP_NETWORK_ID))
    ) {
      networkSetup(process.env.REACT_APP_NETWORK_ID).catch(e => {
        console.error(e);
        alert(t('Network-Error'));
      });
    }
  }, [web3, address, networkId, connectWalletPending, t]);

  
  //set page loading
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    }, 1000) //1 second loader
  },[])

  const override = css`
    position: fixed;
    top: 50%;
    left: 50%;
  `;

  return (

        loading ?
        <div className={classes.loadbox}>
          <ClipLoader color={'#c11828'} loading={loading} css={override} size={100} />
        </div>

        :

        <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <SnackbarProvider>
            <NetworksProvider>
              <NetworksModal />
              <div
                className={classes.page}>
                <Header
                  links={
                    <HeaderLinks
                      address={address}
                      connected={connected}
                      connectWallet={() => connectWallet(web3Modal)}
                      disconnectWallet={() => disconnectWallet(web3, web3Modal)}
                      // isNightMode={isNightMode}
                      // setNightMode={() => setNightMode(!isNightMode)}
                    />
                  }
                  // isNightMode={isNightMode}
                  // setNightMode={() => setNightMode(!isNightMode)}
                />
                <div className={classes.container}>
                  <div>
   <div className={classes.children}>
                    {Boolean(networkId === Number(process.env.REACT_APP_NETWORK_ID)) && children}
                    <Notifier />
  
                  </div>
                </div>
                </div>
                {/* <Footer /> */}
  
                {/* triangles banner */}
                <div className={classes.triangles} ></div>
                
              </div>
            </NetworksProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </StylesProvider>


  );
}
