# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

### Registro - 1 - Cadastro dos usuários do sistema.
- Requisito associado:
    - RF-001

 - Teste:
     Criar um usuário para acessar ao sistema

### Resultado: 
O sistema cadastra os usuários e informa que "Cadastro feito com sucesso"



https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-gest_patr/assets/126068378/6404442a-23be-4553-a16a-784f0a048fdc


 
### Registro - 2- Busca de bens por filtro
- Requisito associado:
    - RF-002

- Teste:
Realizar buscas de bens utilizando filtros específicos, como categoria, valor, setor, etc.

### Resultado:
A funcionlidade esta implementada e funciona ao bucar por nome do bem ou QRCode.

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-gest_patr/assets/126068378/b9d194b2-bd14-4cfa-8b8e-ecce301664b2


    
### Registro - 3 - Apenas usuários cadastrados e logados podem consultar e cadastrar bens
- Requisito associado:
    - RF-003

- Teste:
A consultar de bens apenas aos usuários logados no sistema.

### Resultado:
O acesso a lista de bens só é perimitido aos usuários logados.


https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-gest_patr/assets/126068378/5e937c4d-ec17-41fb-9fa9-cad2d3850c8c


    
 ### Registro - 4 - Cadastrar fotos dos bens
- Requisito associado:
    - RF-004

- Teste:
A foto aparece na lista de bens e permite o usuário  colocar a foto ao cadastrar o bem


### Resultado:
O aplicativo ainda não permite o upload de fotos

 ### Registro - 5 - O sistema exige o login para acessar as funcionalidades
- Requisito associado:
    - RF-005

- Teste:
O usuário precisa estar logado para ter acesso às funcionalidades.

### Resultado:
Para acessar as funcionalidades o usuários precisam digitar o email e a senha cadastra, e clicar em login, sem fazer o login o usuário não acessa o perfil com as funcionalidades

    https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-gest_patr/assets/126068378/5e937c4d-ec17-41fb-9fa9-cad2d3850c8c

    
 ### Registro - 6 - Cadastro de setor
- Requisito associado:
    - RF-006

- Teste:
Cadastrar setor

### Resultado:
A aplicação permite cadastrar e visualizar os setores.



https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-gest_patr/assets/126068378/f996c930-6ae1-476f-8948-0821d9aaf3e5



 ### Registro - 7 - Cadastro de bens com detalhes
- Requisito associado:
    - RF-007

- Teste:
Visualizar e cadastrar as informações sobre os bens, como marca, modelo e outras características relevantes.

### - Resultado:
A funcionalidade ainda está sendo desenvolvida. O sistema permite o cadastrar e apagar os bens mas ainda não permite editar

### Registro - 8 - Cadastro bens por QR Code
- Requisito associado:
    - RF-008

- Teste:
Permitir cadastrar os bens tanto por  QRCode quanto por nome.

### Resultado:
A funcionalidade ainda está sendo desenvolvida. O sistema permite cadastrar por nome mas não por QR Code
   

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
