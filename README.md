![juscash-header](https://github.com/user-attachments/assets/a6ea137d-e11e-4107-ae9c-b894f9036f21)
# Projeto de Gerenciamento de Leads - Desafio JusCash

Este projeto é parte de um desafio técnico para um processo seletivo, cujo objetivo é desenvolver uma aplicação para a manutenção de leads. A aplicação foi desenvolvida utilizando Next.js, React, TypeScript, Tailwind CSS, e outras tecnologias modernas. O foco principal foi na implementação da camada de FrontEnd, respeitando as melhores práticas de desenvolvimento, como a separação clara de responsabilidades entre componentes.

## ⚙️ Tecnologias Utilizadas

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS** 
- **@dnd-kit/core** (para drag-and-drop)
- **React Hook Form** (para gerenciamento de formulários)
- **Zod** (para validação de schemas)
- **Sonner** (para notificações)
- **React Icons** (para ícones)

## 🚀 Deploy

O site está hospedado em: [https://juscash-pedrodecf.vercel.app/](https://juscash-pedrodecf.vercel.app/)

## 🎥 Vídeo

Você pode assistir um vídeo das funcionalidades da aplicação aqui: [https://www.youtube.com/watch?v=bonFTZe4ASI](https://www.youtube.com/watch?v=bonFTZe4ASI)

## 🔥 Funcionalidades

### Requisitos Funcionais

- [x] **Autenticação de Usuário:**
  - [x] Tela de cadastro de usuário com validação de senha (mínimo de 8 caracteres, com ao menos um caracter especial, um número, e um alfanumérico).
  - [x] Visualização da senha ao clicar em um ícone.
  - [x] Garantir que a senha e a confirmação sejam iguais.
  - [x] Redirecionar o usuário para a tela de login após a criação da conta.
- [x] **Login de Usuário:**
  - [x] Tela de login com redirecionamento para a próxima tela de gerenciamento de leads após o login bem-sucedido.
- [x] **Gerenciamento de Leads:**
  - [x] Tabela de leads organizada por status ("Cliente Potencial", "Dados Confirmados", "Análise do Lead").
  - [x] Drag-and-drop de leads entre colunas, seguindo a sequência "Cliente Potencial" → "Dados Confirmados" → "Análise do Lead".
  - [x] Garantir que leads não possam ser arrastados para colunas anteriores ou saltar uma coluna.
  - [x] Botão "Novo Lead" que abre um modal para criação de leads.
  - [x] Campos obrigatórios no formulário de novo lead.
  - [x] Mensagem de confirmação ao salvar um novo lead.
- [x] **Modal de Visualização de Leads:**
  - [x] Vizualicação de leads existentes ao clicar no nome do lead, com informações desabilitadas e título "Lead".

### Regras de Negócio

- [x] Leads devem seguir a sequência de status: "Cliente Potencial" → "Dados Confirmados" → "Análise do Lead".
- [x] Leads não podem retroceder ou pular etapas.
- [x] Novo lead inicia com o status "Cliente Potencial".
- [x] A opção "Oportunidades" deve ter todas as opções selecionadas por padrão, com comportamento de seleção/deseleção de "Todos".
- [x] Utilização do `localStorage` para persistir dados entre sessões.

### Requisitos Não Funcionais

- [x] Separação clara de responsabilidades entre componentes (Componentes de apresentação, lógica de controle e serviços devem estar em arquivos separados).
- [x] Implementação utilizando React.
- [x] Organização dos componentes conforme as melhores práticas de desenvolvimento.
- [x] A aplicação está pronta para deploy e foi enviada via GitHub.

## 🧑‍💻 Estrutura dos Dados

### Objeto de Usuário

```json
{
    "fullName": "string",           // Nome completo do usuário
    "email": "string",              // Email do usuário
    "password": "string",           // Senha do usuário
    "confirmPassword": "string",    // Confirmação da senha do usuário
    "created_at": "string (ISO Date)" // Data de criação do usuário no formato ISO
}
```

### Objeto de Lead

```json
{
    "name": "string",               // Nome do lead
    "email": "string",              // Email do lead
    "phone": "string",              // Telefone do lead
    "opportunities": {              // Oportunidades associadas ao lead
        "honorarios_sucumbenciais": "boolean",
        "honorarios_contratuais": "boolean",
        "honorarios_dativos": "boolean",
        "credito_do_autor": "boolean"
    },
    "type": "enum (cliente_potencial | dados_confirmados | analise_de_lead)", // Status do lead
    "created_by": "string",          // Email do usuário que criou o lead
    "created_at": "string (ISO Date)" // Data de criação do lead no formato ISO
}
```

## 💼 Estrutura do Projeto

```
/public
  logo.svg       # Logo do projeto
/src
  /app
    /components  # Componentes reutilizáveis da aplicação
    /contexts    # Contextos do React para gerenciamento de estado global
    /hooks       # Custom Hooks para abstrair lógica reutilizável
    /styles      # Arquivos de estilo (Tailwind CSS)
    /utils       # Funções utilitárias e validações (Zod)
    /pages       # Páginas da aplicação
  favicon.ico    # Ícone do site
  layout.tsx     # Layout global da aplicação
middleware.ts  # Middleware improvisado de autenticação
```

## 🔄 Como Rodar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm (ou qualquer outro gerenciador de pacotes)

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/pedrodecf/juscash-desafio
   ```
2. **Navegue até o diretório do projeto:**
   ```bash
   cd juscash-desafio
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```

### Executando a Aplicação

1. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
2. **Abra o navegador e acesse:**
   ```
   http://localhost:3000
   ```
