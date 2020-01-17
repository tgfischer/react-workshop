# React Hooked

Writing modern front end web applications in React

# About

This workshop will go over some of the fundamentals for writing React applications

# Getting started

## Requirements

|                Requirement | Notes                                                                      |
| -------------------------: | -------------------------------------------------------------------------- |
|                     NodeJS | https://nodejs.org/en                                                      |
|                    VS Code | https://code.visualstudio.com                                              |
|                        Git | https://git-scm.com/downloads                                              |
|   ESLint VS Code Extension | https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint |
| Prettier VS Code Extension | https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode |

## Setup

1. Clone from from https://gerrit/admin/repos/react-workshop-kickoff-2020
2. Open the folder in VS Code
3. Press `` Ctrl+Shift+` `` to open a new terminal
4. In the terminal, enter the command
   ```
   npm install
   npx lerna bootstrap
   ```
   This will install all of the required dependencies for the front end and back end

## Running the development environment

There are two options for running this app. Both will start the front end on port `3000`, and the back end on port `3001`

### Build tasks

1. In VS Code, press `Ctrl+Shift+b` to open the list of build tasks
2. Select `Run Dev Env` from the list of options
3. This will open a split paned terminal in VS code that runs both the front end and back end

### Manually

1. Open up two terminals.
2. In the first one, navigate to the `client` folder and run `npm run start`
   ```
   cd ./client
   npm run start
   ```
3. In the second, navigate to the `server` folder, and run `npx serverless offline`
   ```
   cd ./server
   npx serverless offline
   ```

# Architecture

## Lerna

The core of the project is managed by [a tool called Lerna](https://github.com/lerna/lerna). It allows you to split up your projects into multiple packages, and manages the dependencies for them.

In this case, we are using it to install the packages for both the front end and back end with the `bootstrap` command

```
npx lerna bootstrap
```

The settings for Lerna are stored in the `lerna.json` file in the root of the project

## Client

The client is the part we care about for this workshop. The project was generated using Facebook's own [Create React App](https://github.com/facebook/create-react-app) tool. I modified the default folder structure a bit for the components. I added Prettier to the ESLint config, which auto formats the code to keep a consistent style across developers.

Create React App uses a package called `react-script` that encapsulates all of the Webpack and ESLint configuration. If you need to modify the Webpack configuration, you can eject the application, but that is irreversible. Once you eject, the onus is on you for managing upgrades and configuration for your app

## Server

The server is a simple NodeJS Express server. It only has one route that returns a static list to be displayed. We won't be going in depth with this part of the code

# Directory structure

```
/.vscode
  settings.json           VS Code workspace settings
  tasks.json              VS Code build tasks
/client                   React front end
  /node_modules           Front end specific modules
  /public                 Static assets accessible from browser
  /src                    Source files
    /components           Where we store all of the React components
      /SomeComponent      Each component gets their own folder if they are complex
        hooks.js          (OPTIONAL) Collection of hooks for this component
        index.js          Entry point for this component
        OtherComponent.js (OPTIONAL) Sub component local to this component
        reducer.js        (OPTIONAL) A reducer for state management
      App.js              Entry point component called from index.js
      SimpleComponent.js  (OPTIONAL) Files for small, self contained components
      ...
    /hooks                (OPTIONAL) Global hooks used in many components (e.g. useRequest)
    constants.js          (OPTIONAL) Global constants used in many components
    index.js              Front end entry point
    serviceWorker.js      Used for offline sites
  .env.development        Development environment variables
  .gitignore              Files to ignore in front end
  package-lock.json       Lock file to determine which versions of dependencies to install
  package.json            File describing the front end and dependencies
/node_modules             Top level packages used for Lerna
/server                   Express back end
.gitignore                Files to ignore in whole project
lerna.json                Settings for Lerna
package-lock.json         Lock file to determine which versions of dependencies to install
package.json              File describing the project and dependencies
```
