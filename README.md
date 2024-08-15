### Requisitos Funcionais

- [x] **Autenticação de Usuário:**
  - [x] Criar uma tela de cadastro de usuário.
  - [x] Implementar validação de senha (mínimo de 8 caracteres, contendo ao menos um caracter especial, um número, e um alfanumérico).
  - [x] Garantir que a senha e sua confirmação sejam iguais.
  - [x] Permitir visualização da senha e sua confirmação ao clicar em um ícone.

- [ ] **Login de Usuário:**
  - [x] Criar uma tela de login para os usuários.
  - [ ] Após o login, redirecionar o usuário para a próxima tela de gerenciamento de leads.

- [x] **Gerenciamento de Leads:**
  - [x] Implementar uma tabela para exibição dos leads, organizados por status: "Cliente Potencial", "Dados Confirmados", e "Análise do Lead".
  - [x] Permitir que leads sejam arrastados entre colunas, respeitando a sequência:
    - [x] "Cliente Potencial" → "Dados Confirmados"
    - [x] "Dados Confirmados" → "Análise do Lead"
  - [x] Garantir que leads não possam ser arrastados para colunas anteriores ou saltar uma coluna (exemplo: de "Cliente Potencial" direto para "Análise do Lead").
  - [x] Implementar um botão "Novo Lead" que abre uma modal para inclusão de novos leads.
  - [x] Implementar campos obrigatórios no formulário de novo lead, como nome do cliente e oportunidades.
  - [x] Exibir uma mensagem de confirmação ao salvar um novo lead.

- [ ] **Modal de Edição de Leads:**
  - [ ] Permitir que, ao clicar no nome de um lead, a modal "Novo Lead" seja reaberta com as informações preenchidas e desabilitadas, com o título "Lead".

### Regras de Negócios

- [x] **Status dos Leads:**
  - [x] Leads devem seguir a sequência de status: "Cliente Potencial" → "Dados Confirmados" → "Análise do Lead".
  - [x] Leads não podem retroceder em status ou pular etapas.

- [x] **Novo Lead:**
  - [x] Ao criar um novo lead, o status inicial deve ser "Cliente Potencial".
  - [x] A opção "Oportunidades" deve ter todas as opções selecionadas por padrão. Se "Todos" for selecionado e estiver marcado, todas as opções devem ser desmarcadas, e vice-versa.

- [x] **Persistência de Dados:**
  - [x] Utilizar o `localStorage` do navegador para armazenar a lista de leads e as informações dos usuários.
  - [x] Garantir que os dados persistam entre sessões do usuário.

### Requisitos Não Funcionais

- [ ] **Separação de Responsabilidades:**
  - [ ] Cada componente deve ter uma responsabilidade bem definida.
  - [ ] Evitar misturar lógica de controle, apresentação, e serviços em um único arquivo.

- [ ] **Arquitetura:**
  - [x] Implementar a aplicação utilizando React.
  - [ ] Organizar os componentes conforme as melhores práticas de desenvolvimento (ex: componentes de apresentação separados dos controladores e serviços).

- [ ] **Deploy:**
  - [ ] A aplicação deve estar pronta para ser deployada.
  - [ ] Enviar o projeto via GitHub com um README contendo instruções suficientes para rodar o projeto.

- [ ] **Documentação:**
  - [ ] Opcionalmente, entregar uma documentação técnica em PDF, incluindo as regras de negócios.

- [ ] **Fidelidade ao Protótipo:**
  - [ ] A aplicação deve ser o mais fiel possível ao protótipo fornecido, especialmente na interface e na usabilidade.