const BasePage = require('./base.page')

class HomePage extends BasePage {

    get logo() {
        return $('~App logo and name')
    }

    get tituloProduto() {
        return $('~title')
    }

    async clicarNoProduto(index) {
        await $(`android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV").instance(${index})`).click()
    }
}

module.exports = new HomePage()