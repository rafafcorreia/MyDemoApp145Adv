import { Given, When, Then, After } from "@wdio/cucumber-framework"
import HomePage from "../../pages/products.page"
import ProductPage from "../../pages/product_details.page"
import CartPage from "../../pages/cart.page"

After(async () => {
    await driver.reloadSession(); 
    await driver.pause(1000); 
});

Given("que estou na tela de Produtos", async () => {
    await expect(HomePage.logo).toBeDisplayed()
    await expect(HomePage.tituloProduto).toBeDisplayed()
})

When("seleciono o produto na posicao {string}, efetuando {string}", async (index, quantidade) => {
    await HomePage.arrastaParaCima(quantidade)
    await HomePage.clicarNoProduto(index)
})

Then("verifico o {string} e o {string}", async (produto, preco) => {
    await expect(ProductPage.tituloProduto).toHaveText(produto)
    await expect(ProductPage.precoProduto).toHaveText(preco)
})

When("adiciono o produto no carrinho", async () => {
    await ProductPage.arrastaParaCima(1)
    await ProductPage.botaoAdicionarNoCarrinho.click()
})

Then("exibe o numero 1 no icone do carrinho", async () => {
    await expect(ProductPage.iconeCarrinho).toHaveText('1')
})

When("clico no carrinho", async () => {
    await ProductPage.iconeCarrinho.click()
})

Then("verifico o {string} e o {string} no carrinho", async (produto, preco) => {
    await expect(CartPage.tituloProduto).toHaveText(produto)
    await expect(CartPage.precoProduto).toHaveText(preco)
})