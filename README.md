<<<<<<< HEAD
# Auto Budgeter
This application takes your paycheck, bills and sets you a budget either based on %'s you decide on or automatic percentages.

# Docs

  ### Quick Start
  [Installing dependencies](#initial-install)\
  [Running Developement Enviroment](#run-dev-enviroment)

## Setting up dev enviroment
### **You must have Node JS installed on your machine.**
You can get it from [their website](https://nodejs.org)

  ### Initial Install
  1. Open a console/terminal 
  1. Clone this repo
  1. Navigate to the repo in your console/terminal
  1. Run this command to install dependencies 
        ```` 
        npm i
        ````

  ### Run Dev Enviroment
  1. Open a console/terminal
  1. Navigate to the root of this repo in your console/terminal
  1. Run the command to start a live react server
        ````
        npm run start-react
        ````
  1. Run the command to start your electron app
        ```` 
        npm run start-electron
        ````

## Making a production build
In order for a prod build to work, we have to build a prod version for both the react & electron

Please note, if you do not build the React first, you will get an error on the electron build.
  1. Go to your console/terminal
  1. navigate to the root of this repo in the console/terminal
  1. Run the command below to build a prod version of React
        ```
        npm run build-react
        ```
  1. Run either of the commands below to build the prod version of electron.\
  This is the version you will give out in either a package or distributable.
        1. To build a packaged version
            ```
            npm run pack
            ```
        1. To build a distributable
            ```
            npm run dist
            ```
=======
# auto-budgeter
Automatically Budgets your check based on % you set!
>>>>>>> main
