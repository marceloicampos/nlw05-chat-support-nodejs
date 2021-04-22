# nlw05-chat-support-nodejs

npn init -y
começar projeto em node
--------------------------------
npn i express --save
instalar o framework express
--------------------------------
criar pasta src na raiz do projeto
criar um arquivo server.ts dentro de src
--------------------------------
npm install --save-dev @types/express
estabelece a tipagem para o framework em dev
--------------------------------
npm install typescript --save-dev
instala o typescript no projeto em dev
--------------------------------
npx tsc --init
para iniciar o typescript compiler
change strict to false on tsconfig
então o strict não ficará reclamando processo de check all on typing
--------------------------------
npm i ts-node-dev --save-dev
instala tradutor de node para algumas funções
--------------------------------
"dev": "ts-node-dev src/server.ts"
incluir esse script e rodamos o npm run dev
--------------------------------
Install Insomnia.rest from the
https://insomnia.rest/download

nota: podemos usar também o postman ou
https://hoppscotch.io/pt-br que era o antigo postwoman
