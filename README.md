1. Executar este comando:
`npm init wdio@latest .`
2. Escolher as opções de configuração, praticamente tudo padrão
![alt text](image.png)

3. Instalar o Appium (para conseguir usar o Appium Inspector com o emulador):
`npm install -g appium`

4. Para executar o servidor do Appium, basta rodar o seguinte comando:
`appium`

5. Definir a variável de ambiente ANDROID_HOME (Dá para pegar indo no Android Studio -> More Actions -> SDK Manager)

6. Importar o arquivo de capabilities para o wdio.conf.js (vide exemplo)

7. Tenha o aplicativo alvo dos testes instalado no emulador

8. Esteja com o emulador aberto

9. Verificar se o caminho dos arquivos de features e steps estão configurados corretamente no wdio.conf.js

10. Executar os testes com o seguinte comando: 
`npm run wdio`
