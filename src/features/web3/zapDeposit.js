import { mlnlZapperAbi } from '../configure';
import { enqueueSnackbar } from '../common/redux/actions';

export const zapDeposit = async ({
  web3,
  address,
  vaultAddress,
  isETH,
  isLP,
  isVault,
  fromRouter,
  tokenAddress,
  tokenAmount,
  earningToken,
  zapAddress,
  ammRouter,
  swapAmountOutMin,
  dispatch,
}) => {
  console.log('Zap Address: ', zapAddress);
  const contract = new web3.eth.Contract(mlnlZapperAbi, zapAddress);
  const data = await _zapDeposit({
    contract,
    address,
    vaultAddress,
    isETH,
    isLP,
    isVault,
    fromRouter,
    earningToken,
    tokenAddress,
    tokenAmount,
    ammRouter,
    swapAmountOutMin,
    dispatch,
  });
  return data;
};

const _zapDeposit = ({
  contract,
  address,
  vaultAddress,
  isETH,
  isLP,
  isVault,
  fromRouter,
  tokenAddress,
  tokenAmount,
  ammRouter,
  earningToken,
  swapAmountOutMin,
  dispatch,
}) => {
  let transaction;

  if (isVault) {
    console.log(
      'zapMigrate',
      tokenAddress,
      tokenAmount,
      vaultAddress,
      fromRouter,
      ammRouter,
      address
    );
    transaction = contract.methods
      .zapMigrate(tokenAddress, tokenAmount, vaultAddress, fromRouter, ammRouter, address)
      .send({
        from: address,
      });
  } else if (isETH && isLP) {
    console.log(
      //'zapInToLPVault(tokenAddress,ammRouter, vaultAddress, address)',
      //function zapInToLPVault(address _to, address routerAddr, address _vault, address _recipient) 
      'zapInToLPVault(earningToken, ammRouter, vaultAddress, address)',
      earningToken,
      ammRouter,
      vaultAddress,
      address
    );


   
    transaction = contract.methods.zapInToLPVault(earningToken, ammRouter, vaultAddress, address).send({
      from: address,
      value: tokenAmount,
    });
  } else if (isETH) {
    console.log(
      'zapInToSSVault(tokenamount, tokenaddress,ammRouter, vaultAddress, address)',
      tokenAmount,
      tokenAddress,
      ammRouter,
      vaultAddress,
      address
    );

//address _to, address routerAddr, address _vault, address _recipient


    transaction = contract.methods.zapInToSingleSideVault(tokenAmount, tokenAddress,ammRouter, vaultAddress, address).send({
      from: address,
      value: tokenAmount,
    });
  } else if (isLP) {
    console.log(
      'zapInTokenToLPVault(tokenAddress, tokenAmount, earningToken, ammRouter, vaultAddress, address)',
      tokenAddress,
      tokenAmount,
      earningToken,
      ammRouter,
      vaultAddress,
      address
    );
    transaction = contract.methods
      .zapInTokenToLPVault(tokenAddress, tokenAmount, earningToken, ammRouter, vaultAddress, address)
      .send({
        from: address,
      });
  } else {
    console.log(
      'zapInTokenToSSVault(from, amt, earningToken, router, vaultAddress, recipient)',
      tokenAddress,
      tokenAmount,
      earningToken,
      ammRouter,
      vaultAddress,
      address
    );

    transaction = contract.methods
      .zapInTokenToSSVault(tokenAddress, tokenAmount, earningToken, ammRouter, vaultAddress, address)
      .send({
        from: address,
      });
  }

  return new Promise((resolve, reject) => {
    transaction
      .on('transactionHash', function (hash) {
        console.log(hash);
        dispatch(
          enqueueSnackbar({
            message: hash,
            options: {
              key: new Date().getTime() + Math.random(),
              variant: 'success',
            },
            hash,
          })
        );
      })
      .on('receipt', function (receipt) {
        console.log(receipt);
        resolve();
      })
      .on('error', function (error) {
        console.log(error);
        reject(error);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};
