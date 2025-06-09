### Structure

```
MFE-Red-Records
│   server.js
│
└───bootstrap
│   
└───music
    │   
    └───src
    │   
    └───build
│   
└───welcome
    │   
    └───src
    │   
    └───dist
```


#### 1. Bootstrap

- The micro frontend orchestrator.
- Bootstrap is an HTML and vanilla JavaScript application that chooses, downloads, and mounts the right micro frontend in a page.

#### 2. Welcome

- First micro-frontend
- Use Vue
- We need two pages, / and /signin. I recommend using Vue Router.

#### 3. Music

- Second micro-frontend
- Use React

#### 4. Web server

Using Node.js and Express, build a static web server that maps the URLs in the table below to the built version of the micro frontends in the filesystem.

| URL           |    What it should point to    | Filesystem example |
| ------------- | :---------------------------: | -----------------: |
| /             | Bootstrap build output folder |  ./bootstrap/dist/ |
| /mfe/welcome/ |  Welcome build output folder  |    ./welcome/dist/ |
| /mfe/music/   |   Music build output folder   |     ./music/build/ |

#### Scripts

- Two scripts to develop the two micro frontends in isolation: `npm run dev:welcome` and `npm run dev:music`
- A script for developing Bootstrap `npm run dev:bootstrap` that watches Bootstrap file changes and uses the Express web server we built.
# mfe-red-records
