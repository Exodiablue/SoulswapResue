import { mlnlZapperAbi } from '../configure';
import { enqueueSnackbar } from '../common/redux/actions';

export const zapWithdraw = async ({
  web3,
  address,
  vaultAddress,
  amount,
  zapAddress,
  dispatch,
}) => {
  console.log('beefOut(vaultAddress, amount)', vaultAddress, amount);

  const contract = new web3.eth.Contract(mlnlZapperAbi, zapAddress);
  const transaction = contract.methods.beefOut(vaultAddress, amount).send({
    from: address,
  });

  return promisifyTransaction(transaction, dispatch);
};

export const zapWithdrawAndSwap = async ({
  web3,
  address,
  vaultAddress,
  amount,
  zapAddress,
  tokenOut,
  router,
  isVault,
  isETH,
  toRouter,
  amountOutMin,
  dispatch,
}) => {
  const contract = new web3.eth.Contract(mlnlZapperAbi, zapAddress);
  let transaction;
  if (isVault) {
    console.log('zapMigrate', vaultAddress, amount, tokenOut, router, toRouter, address);
    transaction = contract.methods
      .zapMigrate(vaultAddress, amount, tokenOut, router, toRouter, address)
      .send({
        from: address,
      });
  } else if (isETH) {
    console.log(
      'zapOut(_from, amount, router, recipient)',
      vaultAddress,
      amount,
      router,
      address,
      zapAddress
    );
    transaction = contract.methods.zapOut(vaultAddress, amount, router, address).send({
      from: address,
    });
  } else {
    console.log(
      'zapOutToken(_from, amount, _to, router, recipient)',
      vaultAddress,
      amount,
      tokenOut,
      router,
      address,
      zapAddress
    );






    transaction = contract.methods
      .zapOutToken(vaultAddress, amount, tokenOut, router, address)
      .send({
        from: address,
      });
  }

  return promisifyTransaction(transaction, dispatch);
};

const promisifyTransaction = (transaction, dispatch) => {
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
