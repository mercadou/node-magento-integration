const magentoAsyncClient = require('./src/magento-async-client');
const config = require('./config');

(async () => {
  try {
    // const api = await magentoAsyncClient(config)

    // const resposse = await api('catalogProductInfo', {
    //   productId: '5937'
    // })
    // console.log(resposse)
  } catch (error) {
    console.log(error)
  }

})()
