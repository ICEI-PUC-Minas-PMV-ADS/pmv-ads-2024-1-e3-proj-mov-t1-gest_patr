# Gerenciamento de Patrimônio

`Análise e Desenvolvimento de Sistemas`

`Projeto: Desenvolvimento de uma Aplicação Móvel em um Ambiente de Negócio`

`1 / 2024 - Eixo 3`

O projeto consiste no desenvolvimento de um sistema de controle de bens patrimoniais de uma empresa. Os bens podem ser cadeiras, computadores, mesas e qualquer móvel ou equipamento que agregue valor à empresa e precise ter sua localização controlada.

## Integrantes

* Amanda Gonçalves Gomes
* Andrey Bibiano Jardim
* Leonardo dos Santos
* Leonardo Ferreira dos Santos
* Sara Cristina Gilberto Pereira
* Thiago Muniz Severino dos Santos
* Tiago Henrique Oliveira Souza


## Orientador

* Prof. Will Ricardo dos Santos Machado

## Instruções de utilização
<ol>
<li>Baixar repositório</li>
<li>Abrir o projeto no Xcode ou seu editor de código</li>
<LI> Na pasta src/server, executar:
  <OL>
    <LI> npm --verbose install -g localtunnel
    <LI> npm --verbose install -g node-server
 </OL>
<li>Realizar a instalação das dependencias na pasta server com o comando *npm --verbose install*</li>
<li>Realizar a instalação das dependências na pasta client com o comando *npm --verbose install*</li>
<li>Executar o servidor com o comando **node index.js** no terminal do folder server, vai ser criado um proxy para localhost:8080 ([HPM] Proxy created: /  -> http://localhost:8080
Server listening on port 8080)</li>
<li>Ainda no terminal server, executar o comando  *json-server db.json --port 8081*, assim será criado os endpoints da api (Endpoints:
http://localhost:8081/users
http://localhost:8081/goods
http://localhost:8081/sectors)</li>
<li>Executar **lt --port 8081** com o terminal no folder server, vai gerar um link, copie esse link, atualize o arquivo /src/client/services/urls.js. Abra o link e siga as instruções</li>  
<li>Executar o aplicativo com o comando *npm start* no terminal do folder cliente</li>
<li>Escolher se quer abrir o app no navegador (w) ou Android Studio</li>
<li>Se utlizar o navegador o aplicativo vai abrir automaticamente , caso contrário é necessário configurar para para compilar o apk no Android Studio</li>

</ol>

# Documentação

<ol>
<li><a href="docs/01-Documentação de Contexto.md"> Documentação de Contexto</a></li>
<li><a href="docs/02-Especificação do Projeto.md"> Especificação do Projeto</a></li>
<li><a href="docs/03-Metodologia.md"> Metodologia</a></li>
<li><a href="docs/04-Projeto de Interface.md"> Projeto de Interface</a></li>
<li><a href="docs/05-Arquitetura da Solução.md"> Arquitetura da Solução</a></li>
<li><a href="docs/06-Template Padrão da Aplicação.md"> Template Padrão da Aplicação</a></li>
<li><a href="docs/07-Programação de Funcionalidades.md"> Programação de Funcionalidades</a></li>
<li><a href="docs/08-Plano de Testes de Software.md"> Plano de Testes de Software</a></li>
<li><a href="docs/09-Registro de Testes de Software.md"> Registro de Testes de Software</a></li>
<li><a href="docs/10-Plano de Testes de Usabilidade.md"> Plano de Testes de Usabilidade</a></li>
<li><a href="docs/11-Registro de Testes de Usabilidade.md"> Registro de Testes de Usabilidade</a></li>
<li><a href="docs/12-Apresentação do Projeto.md"> Apresentação do Projeto</a></li>
<li><a href="docs/13-Referências.md"> Referências</a></li>
</ol>

# Código

<li><a href="src/README.md"> Código Fonte</a></li>

# Apresentação

<li><a href="presentation/README.md"> Apresentação da solução</a></li>
