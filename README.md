# React Hooked

Writing modern front end web applications in React

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

1. In VS Code, press `Ctrl+Shift+b` to open the list of build tasks
2. Select `Run Dev Env` from the list of options
3. This will open a split paned terminal in VS code that runs both the front end and back end
4. This will also open a new tab in your browser pointing to http://localhost:3000. If you are running this remotely, navigate to http://your-public-ip:3000 to view the site

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
