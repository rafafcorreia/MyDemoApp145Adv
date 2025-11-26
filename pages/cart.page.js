const BasePage = require('./base.page')

class CartPage extends BasePage {

    get tituloProduto() {
        return $('id=com.saucelabs.mydemoapp.android:id/titleTV')
    }

    get precoProduto() {
        return $('id=com.saucelabs.mydemoapp.android:id/priceTV')
    }
}

module.exports = new CartPage()