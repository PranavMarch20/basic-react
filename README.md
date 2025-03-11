# Learning React without using Create-react-app(uses webpack bundeler) or vite, without scaffolding

will be using Parcel(bundeler) through npm install, to make react code ready for production(minification, image optimazation, chunking, remove comments, tree shaking, HMR, bundling, compress, code splitting, .....)

package.json is a configuration for npm, which keeps track of versions of all the packages/dependencies which we are using in our app

package-lock.json keeps track of the exact and updated versions of all dependencies and ensures that the upadted and sepecified version are used on production build same as on local

node modules contains the actual data/code of all the dependencies and transitive dependencies

.gitignore contains names of files we don't need to push to git, whatever we can regenerate we don't put that on git, because we can regenerate that on the server

# Parcel
    - dev build
    - local server
    - HMR = Hot Module Replacement
    - file watching algorithm - written in c++
    - caching - faster rebuilds (.parcel-cache)
    - image optimization
    - minification
    - compresstion
    - consistent hashing
    - code splitting
    - differential bundeling = makes different builds for different browsers (older/new)
    - diagnostics
    - error handling
    - Https (ssl)
    - tree shaking - remove unused code
    - different dev and prod builds


# to ignite react app
    - create html, css, js files and write basic code of html
    - initialize git
    - initialize npm
    - install parcel(bundeler) -> react -> react-dom --> from npm
    - dev mode: npx parcel index.html
    - remove main : app.js from package.json(starting point for build)
    - build mode: npx parcel build index.html (generates build files in dist folder)
    - add browserlist configuration in package.json which accepts an array of browsers versions
    - Now, Maintain File Structure before starting anything