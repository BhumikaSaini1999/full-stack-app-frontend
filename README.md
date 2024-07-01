## Steps to deploy frontend angular app on github pages

Step 1 - ng add angular-cli-ghpages

Step 2 - push Code to githubRepo

Step 3 - go to repo setting and select main branch and save

Step 4 - build application using below cmd

      ng build --base-href "https://bhumikasaini1999.github.io/full-stack-app-frontend/"
      
Step 5 - publish your build changes from your local folder to github pages with below cmd

      npx angular-cli-ghpages --dir=dist/angular-ecommerce/browser
   
Step 6 -  go to repo setting and select gh-pages branch and save





# AngularEcommerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
"# full-stack-app-frontend" 
