# Meeting - Aplicativo Móvel para Cadastro de Fornecedores

<center><img src="https://github.com/wueliton/cadastro-fornecedores/blob/main/assets/images/splash.png?raw=true" width="400" /></center>

## Contextualização

O projeto Meeting tem como objetivo desenvolver um aplicativo móvel eficiente para o cadastro de fornecedores. Focado em proporcionar uma excelente experiência ao usuário e economizar recursos, o app utilizará React Native para estabelecer uma forte presença no mercado móvel. Este repositório contém o código e a documentação necessários para entender e contribuir para o desenvolvimento deste projeto.

## Screenshots

|                                                                                 Tela inicial                                                                                 |                                                                            Detalhes do Fornecedor                                                                            |                                                                              Editar Fornecedor                                                                               |                                                                               Criar Fornecedor                                                                               |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/wueliton/cadastro-fornecedores/blob/main/screenshots/Simulator%20Screenshot%20-%20iPhone%2016%20-%202024-09-22%20at%2013.41.14.png?raw=true" /> | <img src="https://github.com/wueliton/cadastro-fornecedores/blob/main/screenshots/Simulator%20Screenshot%20-%20iPhone%2016%20-%202024-09-22%20at%2013.41.17.png?raw=true" /> | <img src="https://github.com/wueliton/cadastro-fornecedores/blob/main/screenshots/Simulator%20Screenshot%20-%20iPhone%2016%20-%202024-09-22%20at%2013.41.20.png?raw=true" /> | <img src="https://github.com/wueliton/cadastro-fornecedores/blob/main/screenshots/Simulator%20Screenshot%20-%20iPhone%2016%20-%202024-09-22%20at%2013.41.27.png?raw=true" /> |

|                                                                              Dados preenchidos                                                                               |                                                                              Fornecedor Criado                                                                               |                                                                               Buscar por nome                                                                                |                                                                                Busca Avançada                                                                                |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/wueliton/cadastro-fornecedores/blob/main/screenshots/Simulator%20Screenshot%20-%20iPhone%2016%20-%202024-09-22%20at%2013.42.24.png?raw=true" /> | <img src="https://github.com/wueliton/cadastro-fornecedores/blob/main/screenshots/Simulator%20Screenshot%20-%20iPhone%2016%20-%202024-09-22%20at%2013.42.28.png?raw=true" /> | <img src="https://github.com/wueliton/cadastro-fornecedores/blob/main/screenshots/Simulator%20Screenshot%20-%20iPhone%2016%20-%202024-09-22%20at%2013.47.50.png?raw=true" /> | <img src="https://github.com/wueliton/cadastro-fornecedores/blob/main/screenshots/Simulator%20Screenshot%20-%20iPhone%2016%20-%202024-09-22%20at%2013.48.10.png?raw=true" /> |

## Requisitos Funcionais

### 1. Cadastro de Fornecedores

- O aplicativo permitirá o cadastro de fornecedores, onde será possível inserir:
  - Nome
  - Endereço
  - Contato
  - Categorias de produtos fornecidos

### 2. Listagem de Fornecedores

- Os usuários poderão visualizar uma lista de fornecedores cadastrados.
- O app incluirá opções de pesquisa e filtragem com base em:
  - Categoria
  - Localização
- A lista de fornecedores será apresentada usando componentes como <Text> e <Image>.

### 3. Associação de Imagens

- O aplicativo permitirá que os usuários associem imagens aos perfis dos fornecedores.
- Será possível fazer o upload de logotipos ou fotos relacionadas ao fornecedor, utilizando o componente <Image>.

### 4. Experiência de Usuário Intuitiva

- A interface do aplicativo será projetada para ser intuitiva e fácil de usar.
- Os usuários poderão navegar, adicionar e editar informações de forma eficiente, utilizando componentes como <Text>, <TextInput>, e <Image>.

## Tecnologias Utilizadas

- React Native: Para o desenvolvimento do aplicativo móvel.
- Expo: Para facilitar o desenvolvimento e testes no ambiente móvel.

## Instalação

Para executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

```
git clone https://github.com/wueliton/cadastro-fornecedores.git
cd cadastro-fornecedores
```

2. Instale as dependências:

```
npm install
```

3. Inicie o projeto:

```
npm start
```
