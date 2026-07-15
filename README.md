# 🏆 Campeões da Copa do Mundo

Aplicação **Full Stack** desenvolvida para consulta dos campeões da Copa do Mundo FIFA utilizando **HTML, CSS, JavaScript, Node.js, Express e MySQL**.

O projeto permite consultar todos os campeões da Copa do Mundo, realizar buscas por ano ou seleção campeã e consumir os dados através de uma API REST integrada a um banco de dados MySQL.

---

## 📸 Demonstração

### 💻 Versão Desktop

![Versão Desktop](copadomundo-front/assets/screenshots/desktop.png)

### 📱 Versão Mobile

![Versão Mobile](copadomundo-front/assets/screenshots/mobile.png)

---

## ✨ Funcionalidades

- 🏆 Consulta de todos os campeões da Copa do Mundo
- 🔎 Busca por ano
- 🌎 Busca por seleção campeã
- 📊 Contagem automática dos resultados encontrados
- 📱 Interface responsiva para desktop e dispositivos móveis
- ⚡ Consumo de API REST desenvolvida em Node.js
- 🗄️ Integração com banco de dados MySQL

---

## 🚀 Tecnologias Utilizadas

### Front-end

- HTML5
- CSS3
- JavaScript

### Back-end

- Node.js
- Express

### Banco de Dados

- MySQL

### Ferramentas

- Git
- GitHub
- Visual Studio Code
- Live Server
- Vercel

---

## 📂 Estrutura do Projeto

```text
campeoes-copa-do-mundo/
│
├── copadomundo-api/
│   ├── servico/
│   │   ├── conexao.js
│   │   └── retornaCopas_servico.js
│   ├── .env.example
│   ├── .gitignore
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── copadomundo-front/
│   ├── assets/
│   │   └── screenshots/
│   ├── css/
│   │   ├── style.css
│   │   └── responsivo.css
│   ├── index.html
│   └── script.js
│
├── .gitignore
└── README.md
```

---

# ⚙️ Como executar o projeto

## 1️⃣ Clone o repositório

```bash
git clone https://github.com/maycon-douglasd/campeoes-copa-do-mundo.git
```

---

## 2️⃣ Acesse a pasta da API

```bash
cd campeoes-copa-do-mundo/copadomundo-api
```

---

## 3️⃣ Instale as dependências

```bash
npm install
```

---

## 4️⃣ Configure as variáveis de ambiente

Crie um arquivo chamado:

```text
.env
```

na pasta **copadomundo-api**.

Você pode utilizar o arquivo `.env.example` como modelo.

Configure as credenciais do seu banco de dados:

```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=copadomundo
```

---

## 5️⃣ Configure o banco de dados

Crie um banco MySQL chamado:

```text
copadomundo
```

Em seguida, importe a tabela utilizada pelo projeto.

---

## 6️⃣ Execute a API

```bash
npm start
```

A API ficará disponível em:

```text
http://localhost:9000
```

---

## 7️⃣ Execute o Front-end

Abra o arquivo:

```text
copadomundo-front/index.html
```

utilizando a extensão **Live Server** do Visual Studio Code.

---

# 📌 Endpoints da API

### Listar todas as Copas

```http
GET /copas
```

---

### Buscar por ano

```http
GET /copas?ano=2002
```

---

### Buscar por campeão

```http
GET /copas?time=Brasil
```

---

# 🌐 Demonstração Online

A interface da aplicação está disponível em:

## https://campeoes-copa-do-mundo.vercel.app

> **Observação:** A demonstração online apresenta apenas a interface da aplicação. Como a API depende de um banco de dados MySQL local, as consultas funcionam apenas executando o projeto localmente.

### ▶️ Executando localmente

1. Inicie o serviço do **MySQL**.

2. Abra um terminal na pasta da API:

```bash
cd copadomundo-api
```

3. Instale as dependências (caso ainda não tenha feito):

```bash
npm install
```

4. Execute a API:

```bash
npm start
```

5. Abra a pasta **copadomundo-front** no Visual Studio Code.

6. Execute o arquivo **index.html** utilizando a extensão **Live Server**.

Após esses passos, todas as funcionalidades da aplicação estarão disponíveis.

---

# 🎯 Objetivo do Projeto

Este projeto foi desenvolvido para praticar conceitos fundamentais do desenvolvimento Full Stack, incluindo:

- Desenvolvimento de APIs REST
- Integração entre Front-end e Back-end
- Consumo de APIs utilizando Fetch API
- Comunicação com banco de dados MySQL
- Organização de projetos em arquitetura cliente/servidor
- Desenvolvimento de interfaces responsivas
- Utilização de variáveis de ambiente com dotenv
- Versionamento de código utilizando Git e GitHub

---

# 👨‍💻 Autor

**Maycon Douglas**

Desenvolvedor Front-end em transição para Full Stack, desenvolvendo projetos para praticar tecnologias modernas e fortalecer seu portfólio.

GitHub:

https://github.com/maycon-douglasd

---

# 📄 Licença

Este projeto foi desenvolvido exclusivamente para fins de estudo, prática e composição de portfólio.
