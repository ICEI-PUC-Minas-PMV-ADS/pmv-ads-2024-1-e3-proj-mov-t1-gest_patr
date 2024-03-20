# Plano de Testes de Software

Este plano de teste detalha os casos de teste a serem executados.

## Requisitos para realização dos testes

Os requisitos para realização dos testes de software são:

- Smartphone com acesso a um navegador de internet.    

## Casos de teste

### CT-1 - O sistema deverá cadastrar os usuários do sistema.
- Requisito associado:
    - RF-001

- Objetivos:
    - Garantir que o sistema vai criar um usuário para acesso ao sistema quando não houver nenhum cadastrado

- Procedimentos:
    - Abrir o sistema 
    - Clicar no botão entrar
    - Preencher os campos necessários para o cadastro do usuário.
    - Confirmar o cadastro

- Resultado esperado:
    - O sistema deverá mostrar uma mensagem dizendo que o usuário foi criado e a senha está em branco.

### CT-2 - O sistema deve permitir ao usuário buscar bens por filtros.
- Requisito associado:
    - RF-002

- Objetivos:
    - Garantir que o sistema permita aos usuários realizar buscas de bens utilizando filtros específicos, como categoria, valor, setor, etc.

- Procedimentos:
    - Abrir a página de busca de bens no sistema.
    - Selecionar os filtros desejados, como categoria, valor, setor, etc.
    - Inserir os critérios de busca nos campos correspondentes.
    - Clicar no botão de busca ou acionar o comando de busca.

- Resultado esperado:
    - O sistema deve exibir uma lista de bens que correspondam aos critérios de busca especificados, permitindo ao usuário visualizar e selecionar os resultados conforme suas necessidades.

### CT-3 - O sistema deve permitir a criação de usuários apenas para consulta de bens.
- Requisito associado:
   - RF-003

- Objetivos:
    - Assegurar que o sistema possua a funcionalidade de criar usuários que tenham permissão apenas para consultar bens, sem a capacidade de realizar outras operações no sistema.

- Procedimentos:
    - Acessar a função de criação de usuário no sistema.
    - Selecionar a opção de criar usuário para consulta de bens.
    - Preencher os campos obrigatórios do formulário de criação de usuário.
    - Confirmar a criação do usuário.

- Resultado esperado:
    - O sistema deve criar um novo usuário com permissões restritas, permitindo apenas a consulta de bens disponíveis no sistema. Esse usuário não deve ter acesso a funcionalidades de edição, exclusão ou criação de bens, garantindo assim a segurança e integridade dos dados.

### CT-4 - O sistema deve permitir o cadastro de fotos aos bens.

- Requisito associado:
   - RF-004

- Objetivos:
    - Garantir que o sistema possibilite aos usuários cadastrarem fotos dos bens, proporcionando uma experiência visual mais completa e informativa.

- Procedimentos:
    - Acessar a página de cadastro ou edição de um bem no sistema.
    - Localizar a opção para adicionar fotos ao bem.
    - Selecionar as imagens desejadas nos arquivos do dispositivo ou através de um link.
    - Carregar as fotos selecionadas para o sistema.
    - Confirmar o cadastro ou edição do bem.

- Resultado esperado:
    - Após o procedimento de cadastro ou edição, o sistema deve exibir as fotos associadas ao bem de forma clara e acessível aos usuários. As fotos devem ser exibidas corretamente, permitindo que os usuários visualizem os detalhes do bem com facilidade.

### CT-5 - O sistema deve exigir que o usuário esteja logado para acessá-lo.

- Requisito associado:
   - RF-005

- Objetivos:
    - Garantir que apenas usuários autenticados tenham acesso ao sistema, aumentando a segurança e controlando o acesso às funcionalidades.

- Procedimentos:
    - Acessar a página inicial do sistema.
    - Tentar acessar qualquer funcionalidade ou recurso do sistema.
    - Verificar se o sistema requer autenticação.
    - Caso não esteja logado, realizar o login com as credenciais adequadas.
    - Após o login, tentar novamente acessar a funcionalidade desejada.

- Resultado esperado:
    - O sistema deve impedir o acesso às funcionalidades caso o usuário não esteja autenticado. Após o login bem-sucedido, o usuário deve ser redirecionado à página inicial ou à funcionalidade desejada, permitindo o acesso pleno ao sistema.

### CT-6 - O sistema deve permitir o cadastro de setores da empresa.

- Requisito associado:
    - RF-006

- Objetivos:
    - Possibilitar o registro dos setores da empresa onde os bens poderão transitar, proporcionando uma organização adequada e controle eficiente sobre o fluxo de itens.

- Procedimentos:
    - Acessar a função de cadastro de setores no sistema.
    - Preencher os campos obrigatórios, como nome do setor e outras informações relevantes, se aplicável.
    - Confirmar o cadastro do setor.

- Resultado esperado:
    - Após o procedimento de cadastro, o sistema deve armazenar as informações do novo setor e torná-lo disponível para associação com os bens. Os setores cadastrados devem estar listados de forma clara e acessível no sistema, permitindo a gestão eficiente do fluxo de itens dentro da empresa.

### CT-7 - O sistema deve permitir o cadastro de detalhes dos bens, como marca e modelo.

- Requisito associado:
    - RF-007

- Objetivos:
    - Permitir que os usuários registrem informações detalhadas sobre os bens, como marca, modelo e outras características relevantes, facilitando a identificação e gestão dos itens no sistema.

- Procedimentos:
    -  Acessar a função de cadastro ou edição de um bem no sistema.
    - Localizar os campos destinados aos detalhes do bem, como marca e modelo.
    - Preencher os campos com as informações correspondentes, conforme disponíveis e relevantes.
    - Confirmar o cadastro ou edição do bem.

- Resultado esperado:
    - Após o procedimento de cadastro ou edição, o sistema deve armazenar os detalhes fornecidos sobre o bem de forma precisa e organizada. Os detalhes cadastrados devem ser exibidos corretamente sempre que o bem for visualizado ou editado, garantindo uma gestão eficiente das informações relacionadas aos itens cadastrados.

### CT-8 - O sistema deve permitir o cadastramento dos bens por QRCode ou nome.

- Requisito associado:
    - RF-008

- Objetivos:
    - Facilitar o processo de cadastramento de bens no sistema, permitindo que os usuários utilizem tanto QRCode quanto o nome do bem para realizar o cadastro de forma rápida e eficiente.

- Procedimentos:
    - Escolher a opção de cadastramento de bens no sistema.
    - Selecionar a forma de cadastramento, escolhendo entre QRCode ou nome.
    - Se escolhido QRCode, escanear o código utilizando a câmera do dispositivo ou inserir manualmente o código, se necessário.
    - Se escolhido nome, digitar o nome do bem no campo correspondente.
    - Preencher os demais campos obrigatórios do formulário de cadastro.
    - Confirmar o cadastro do bem.

- Resultado esperado:
    - Após o procedimento de cadastramento, o sistema deve registrar o bem de forma precisa e associá-lo corretamente ao QRCode ou ao nome fornecido. O bem cadastrado deve estar disponível para consulta e gestão dentro do sistema, permitindo que os usuários o encontrem facilmente utilizando o QRCode ou o nome como referência.

### CT-9 - O sistema deve suportar o uso offline.

- Requisito associado:
    - RF-009

- Objetivos:
    - Permitir que os usuários acessem e utilizem o sistema mesmo quando não estiverem conectados à internet, garantindo a continuidade das operações em ambientes sem conectividade.

- Procedimentos:
    - Verificar se o dispositivo está desconectado da internet.
    - Acessar o sistema ou aplicativo normalmente.
    - Realizar as operações desejadas, como consulta de bens, cadastro de informações, etc.
    - Aguardar a reconexão com a internet, se necessário, para sincronizar os dados.

- Resultado esperado:
    - O sistema deve permitir que os usuários realizem operações normalmente, mesmo sem conexão com a internet. As funcionalidades principais do sistema devem estar disponíveis offline, permitindo que os usuários consultem informações, cadastrem dados e realizem outras operações básicas. Quando a conexão com a internet for restabelecida, o sistema deve sincronizar os dados automaticamente para garantir a integridade das informações.

### CT-10 - O sistema deve gerar um relatório com o total de bens.

- Requisito associado:
    - RF-010

- Objetivos:
    - Permitir que os usuários obtenham informações sobre o total de bens cadastrados no sistema de forma organizada e fácil de entender.

- Procedimentos:
    - Acessar a função de geração de relatórios no sistema.
    - Selecionar a opção para gerar um relatório com o total de bens.
    - Escolher os parâmetros desejados, se aplicável (por exemplo, filtro por categoria, valor, setor, etc.).
    - Confirmar a geração do relatório.

- Resultado esperado:
    - O sistema deve criar um relatório que apresente o total de bens cadastrados de acordo com os critérios especificados. O relatório deve ser claro e apresentar as informações de forma organizada, possibilitando que os usuários visualizem facilmente o número total de bens registrados no sistema e, se aplicável, agrupados por diferentes categorias, valor ou setor.

### CT-11 - O sistema deve permitir a edição e exclusão dos bens.

- Requisito associado:
    - RF-011

- Objetivos:
    - Garantir que os usuários tenham a capacidade de editar informações de bens cadastrados e também de excluí-los quando necessário, proporcionando uma gestão eficiente e flexível do inventário.

- Procedimentos:
    Edição de Bens:

    - Acessar a lista de bens cadastrados no sistema.
    - Localizar o bem que deseja editar.
    - Selecionar a opção de edição do bem.
    - Modificar as informações desejadas nos campos correspondentes.
    - Confirmar a atualização do bem.

    Exclusão de Bens:

    - Acessar a lista de bens cadastrados no sistema.
    - Localizar o bem que deseja excluir.
    - Selecionar a opção de exclusão do bem.
    - Confirmar a exclusão do bem.

- Resultado esperado:

    - Edição de Bens:
        - Após a conclusão do procedimento de edição, as informações do bem devem ser atualizadas conforme as modificações realizadas, refletindo as alterações no sistema de forma precisa e imediata.

    - Exclusão de Bens:
         - Após a conclusão do procedimento de exclusão, o bem deve ser removido do sistema permanentemente, não sendo mais exibido na lista de bens cadastrados. Qualquer associação ou referência ao bem excluído também deve ser removida do sistema, garantindo a integridade dos dados.

### CT-12 - O sistema deve permitir o acesso simultâneo por vários usuários.

- Requisito associado:
    - RNF-001

 - Objetivos:
    - Garantir que o sistema possa ser acessado e utilizado por múltiplos usuários ao mesmo tempo, sem comprometer o desempenho ou a integridade dos dados.

 - Procedimentos:

    - Vários usuários devem abrir o sistema simultaneamente em diferentes dispositivos ou sessões.
    - Cada usuário pode realizar as operações desejadas no sistema, como consulta de bens, edição de informações, geração de relatórios, entre outras.
    - Os usuários podem interagir com o sistema independentemente uns dos outros, sem restrições de acesso ou interferências.

- Resultado esperado:
    - O sistema deve suportar o acesso concorrente por múltiplos usuários, permitindo que eles realizem suas atividades de forma simultânea e eficiente. Não deve haver conflitos de dados ou interrupções no serviço devido ao acesso simultâneo, garantindo uma experiência de usuário consistente e satisfatória para todos os envolvidos.

### CT-13 - O sistema deve estar disponível para iOS e Android.

- Requisito associado:
    - RNF-003

- Objetivos:
    - Garantir que o sistema seja acessível para usuários de dispositivos móveis que utilizem os sistemas operacionais iOS e Android, ampliando o alcance e a usabilidade da aplicação.

 - Procedimentos:

    - Acessar a loja de aplicativos correspondente ao dispositivo móvel (App Store para iOS ou Google Play Store para Android).
    - Pesquisar pelo aplicativo utilizando o nome ou termos relacionados.
    - Baixar e instalar o aplicativo em seu dispositivo.
    - Abrir o aplicativo após a conclusão da instalação.
    - Realizar o login ou proceder conforme necessário para acessar o sistema.

- Resultado esperado:
    - O sistema deve ser baixado, instalado e executado corretamente nos dispositivos móveis com sistemas operacionais iOS e Android. Os usuários devem ser capazes de acessar todas as funcionalidades e realizar as operações disponíveis no sistema, independentemente do sistema operacional de seus dispositivos móveis.

### CT-14 - O sistema deve carregar suas páginas em menos de um segundo.

- Requisito associado:
    - RNF-007

- Objetivos:
    - Garantir que o sistema apresente um desempenho rápido e responsivo, carregando suas páginas em menos de um segundo para proporcionar uma experiência de usuário ágil e eficiente.

- Procedimentos:

    - Acessar o sistema por meio de um navegador da web ou do aplicativo móvel.
    - Navegar pelas diferentes páginas e funcionalidades do sistema.
    - Observar o tempo de carregamento de cada página.
    - Verificar se as páginas são carregadas em menos de um segundo em todas as situações e condições de uso.

- Resultado esperado:
    - O sistema deve carregar suas páginas em menos de um segundo, atendendo ao requisito de desempenho estabelecido pelo RNF-007. Isso significa que os usuários devem experimentar tempos de resposta rápidos ao interagir com o sistema, garantindo uma experiência de usuário satisfatória e eficiente.




















 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
