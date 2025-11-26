const BasePage = require('./base.page')

class ProductPage extends BasePage{

    get tituloProduto() {
        return $('id=com.saucelabs.mydemoapp.android:id/productTV')
    }

    get precoProduto() {
        return $('id=com.saucelabs.mydemoapp.android:id/priceTV')
    }

    get botaoAdicionarNoCarrinho() {
        return $('~Tap to add product to cart')
    }

    get iconeCarrinho() {
        return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/cartTV"]')
    }
}

module.exports = new ProductPage()