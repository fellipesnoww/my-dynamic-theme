# My Dynamic Theme

Aplicação criada para testar alterações de temas através de um endpoint.

Conforme o endpoint é chamado, o tema é alterado dinamicamente na aplicação.

# Como executar a aplicação?

- Clone o repositório em sua máquina;

# Backend

- Vá até o diretório _backend_ e instale todas as dependencias, utilizando o **npm**:

```bash
npm install
```
ou **yarn**
```bash
yarn
```

- Para executar o sevidor, basta executar o comando:
```bash
yarn dev
```

ou

```bash
npm run dev
```

- Por padrão o servidor estará ouvindo a porta 3333;

# App

- Caso não tenha instalado o Expo em sua máquina, [clique aqui](https://docs.expo.io/).

- Vá até o diretório _my-app_ e instale todas as dependencias, utilizando o **npm**:

```bash
npm install
```
ou **yarn**
```bash
yarn
```

- Execute a aplicação com o comando:

```
expo start
```

- Escolha a opção que melhor te atende. (Ler o QR com seu aparelho ou executar em seu emulador).

# Endpoint

Com a aplicação e servidor rodando, utilize o [Postman](https://www.postman.com/downloads/) ou [Insomnia](https://insomnia.rest/download) para realizar a requisição a seguir:

- Endpoint: _http://localhost:3333/theme/update_;
- Verbo HTTP: **PUT**;
- Corpo de exemplo da requisição:
```json
{
  "name": "Deafaul theme",
  "background": "rgba(252, 3, 236, 0.9)",
  "primary": "blue",
  "secondary": "orange"
}
```

# Exemplo em execução


https://user-images.githubusercontent.com/48105194/122448497-314d2b00-cf7b-11eb-8878-78439f4b3e2a.mp4

