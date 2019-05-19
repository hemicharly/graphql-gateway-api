![](https://i.imgur.com/Rp3O3Un.png) 

####    Getting started
1. Install NodeJS Dubnium LTS (10.15.3).  
  1.1. [Windows](https://nodejs.org/dist/v10.15.3/node-v10.15.3-x86.msi)  
  1.2. [Posix (Linux or MacOS)](http://nvm.sh)

2. Install your prefer IDE ([VSCode](https://code.visualstudio.com/Download) is extremely recommended).

3. Install the global dependencies (development only)  
  3.1. `npm i -g yarn` [See more](https://yarnpkg.com/).  
  3.2. `npm i -g standard` *VSCode "standard" extension dependency* [See more](https://standardjs.com/).  
  3.3. *[Optional]* Install the following extensions on VSCode workspace:  
    - [GraphQL](https://marketplace.visualstudio.com/items?itemName=Prisma.vscode-graphql)
    - [Standard](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs)
	- [VSCode Icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)

4. Clone this repository
`git clone --depth=1 https://github.com/hemicharly/graphql-gateway-api.git`

5. Install the project dependencies
`yarn`

6. Delete `.git` folder to disassociate yourself from this project.

####    Folder struct

The project is structured in the following syntax (root is the root directory of your project):
  - `root/build` is the build folder when you execute `yarn build`. See script section below. 
    
  - `root/coverage` is the "tests report" folder when you execute `yarn test`. See script section below.
  
  - `root/coverage/Icov-report/index.html` is the web application for tests report.

  - `root/logs` is the rotative logs folder.
    
  - `root/tasks` is the [Gulp](https://gulpjs.com/) tasks folder. 
  
  - `root/index.js` is the [entry point](https://stackoverflow.com/questions/32800066/what-is-entry-point-in-npm-init).

  - `root/introspection.js` is the [entry point](https://codeburst.io/nodejs-graphql-micro-services-using-remote-stitching-7540030a0753).
  
####    Scripts

See below all availables `package.json` scripts:
  - `yarn dev` start your application in development mode, with [nodemon](https://nodemon.io/) to restart on changes.
  
  - `yarn build` build your application to production mode, with [babel](https://babeljs.io/) parsing (ES6 to ES5). Pre-scripts: `yarn lint` and `yarn test`.
  
  - `yarn test` run all test files matched by the pattern `*.test.js`. [See more](https://jestjs.io/).
  
  - `yarn test:watch` run tests in watch mode. [See](https://jestjs.io/docs/en/cli#watch).
  
  - `yarn lint` run `standard` for lint erros.
  
  - `yarn lint:fix` fix all lint errors automatically (unstable).
