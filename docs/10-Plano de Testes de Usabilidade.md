# Plano de Testes de Usabilidade

O teste de usabilidade permite avaliar a qualidade da interface com o usuário da aplicação interativa. O Plano de Testes de Software é gerado a partir da especificação do sistema e consiste em casos de testes que deverão ser executados quando a implementação estiver parcial ou totalmente pronta.


# Plano de Testes de Usabilidade
## Objetivo
O objetivo deste plano de testes é avaliar a usabilidade da interface do usuário da aplicação móvel. Os testes de usabilidade têm como objetivo identificar problemas de usabilidade e fornecer recomendações para melhor experiência do usuário.

## Escopo
Os testes de usabilidade serão realizados na interface do usuário da aplicação em suas versões Android e iOS. O escopo inclui a avaliação de elementos de interface, fluxos de usuário e a experiência geral do usuário.

## Metodologia
Os testes de usabilidade serão conduzidos por um moderador e uma lista de cenários reais de uso. Os participantes dos testes serão instruídos a realizar tarefas específicas na aplicação enquanto observamos e registramos suas interações e feedback.

## Participantes
Os participantes dos testes de usabilidade serão selecionados com base nas personas pesquisadas. 

## Casos de Teste
Os seguintes cenários serão conduzidos pelo moderador:


| **Caso de Teste** 	| **CTU-01 – Cadastro de Novo Usuário** |
|:---:	|:---:	|
| Requisito Associado | RF-001: O sistema deverá cadastrar os usuários do sistema.  |
| Objetivo do Teste | Avaliar a facilidade no cadastro de um novo usuário. |
| Testes | 1 - Abrir o aplicativo. <br> 2 - Acessar a página de cadastro. <br> 3 - Preencher os campos obrigatórios. <br> 4 - Clicar em "Cadastrar-se". <br> 5 - Verificar o sucesso ao se registrar. |
| Critério de Avaliação | - Facilidade de preenchimento dos campos. <br> - Clareza na visualização dos campos obrigatórios.|
|  	|  	|

| **Caso de Teste** 	| **CTU-02 – Login de Usuário Cadastrado** |
|:---:	|:---:	|
| Requisito Associado | RF-005: O usuário deverá estar logado para acessar o sistema.|
| Objetivo do Teste | Avaliar a facilidade no cadastro de um novo usuário. |
| Testes | 1 - Abrir o aplicativo. <br> 2 - Acessar a página de login. <br> 3 - Preencher os campos com os dados cadastrados no teste anterior. <br> 4 - Clicar em "Logar-se". <br> 5 - Verificar o sucesso ao se Logar. |
| Critério de Avaliação | - Facilidade de preenchimento dos campos. <br> - Clareza das mensagens de erro em caso de problemas.|
|  	|  	|

| **Caso de Teste** 	| **CTU-03 – Teste de Navegação Intuitiva** |
|:---:	|:---:	|
| Requisito Associado | RF-004  .|
| Objetivo do Teste | Avaliar se os usuários conseguem navegar pelo aplicativo de forma intuitiva, sem encontrar dificuldades para encontrar as funcionalidades desejadas. |
| Testes | 1 - Buscar bens pelo nome. <br> 2 - Adicionar um novo setor. <br> 3 - Gerar um gráfico de bens por setor. |
| Critério de Avaliação | - É possível realizar as tarefas sem hesitação excessiva ou a necessidade de instruções adicionais. <br> - .|
|  	|  	|

| **Caso de Teste** 	| **CTU-04 – Teste de Feedback do Sistema** |
|:---:	|:---:	|
| Requisito Associado | RF-00:  .|
| Objetivo do Teste |Avaliar se o sistema fornece feedback claro e útil para as ações dos usuários, ajudando-os a entender o que está acontecendo no aplicativo. |
| Testes | 1 - Realize ações diferentes no aplicativo, como cadastro de um novo bem ou exclusão de um item, e observe se o sistema fornece feedback imediato e compreensível. |
| Critério de Avaliação | - O sistema fornece feedback visual ou auditivo sempre que uma ação é realizada, indicando sucesso, erro ou status de progresso. <br> - .|
|  	|  	|

| **Caso de Teste** 	| **CTU-05 – Teste de Eficiência de Navegação** |
|:---:	|:---:	|
| Requisito Associado | RF-008:  .|
| Objetivo do Teste |Avaliar a eficiência da navegação no aplicativo, medindo o tempo necessário para os usuários realizarem tarefas comuns. |
| Testes | 1 - Cronometre o tempo que os usuários levam para concluir tarefas específicas, como encontrar um bem específico ou editar detalhes de um item. |
| Critério de Avaliação | - O tempo médio para completar a tarefa deve ser razoável.  <br> - .|
|  	|  	|

| **Caso de Teste** 	| **CTU-06 – Teste de Legibilidade de Texto** |
|:---:	|:---:	|
| Requisito Associado | RF-000:  .|
| Objetivo do Teste |Avaliar se o texto no aplicativo é fácil de ler e compreender, independentemente do tamanho da tela ou da resolução. |
| Testes | 1 - Abrir o aplicativo em diferentes páginas e observar se existe a dificuldade de ler o texto neles contidos. |
| Critério de Avaliação | - O texto no aplicativo é claro, bem formatado e legível em todas as condições de visualização.  <br> - .|
|  	|  	|

| **Caso de Teste** 	| **CTU-07 – Teste de Acessibilidade de Botões e Controles** |
|:---:	|:---:	|
| Requisito Associado | RF-000:  .|
| Objetivo do Teste | Avaliar se os botões e controles do aplicativo são facilmente acessíveis e clicáveis, em diferentes dispositivos móveis.|
| Testes | 1 - Abrir o aplicativo em diferentes aparelhos e interagir com botões e controles, como botões de navegação e campos de entrada de texto. |
| Critério de Avaliação | - Os botões e controles são fáceis de acessar e clicar, mesmo em telas menores ou em dispositivos com diferentes tamanhos de tela.  <br> - .|
|  	|  	|

| **Caso de Teste** 	| **CTU-08 – Teste de Consistência de Design** |
|:---:	|:---:	|
| Requisito Associado | RF-000:  .|
| Objetivo do Teste | Avaliar se o design do aplicativo é consistente em todas as telas e funcionalidades, proporcionando uma experiência coesa ao usuário.|
| Testes | 1 -  Navegue por diferentes partes do aplicativo e observe se os elementos de design, como cores, ícones e disposição de elementos, são consistentes em todas as telas. |
| Critério de Avaliação | - O design do aplicativo segue um padrão consistente em todas as telas, proporcionando uma experiência visual uniforme.  <br> - .|
|  	|  	|
