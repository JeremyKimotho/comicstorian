# Comicstorian
#### An application that allows a user to search for fictional characters, 25/01/2019
#### By **Jeremy Kimotho**
## Description
An application to search for characters and see vairous information about thenm such as name, origin, gender, abilities, and a few other things. The app uses angular and in particular a class and service to handle the searches and defining of the response. Note that the app cannot be used for any production or commercial reasons because the API had a few CORS issues and therefore I had to use a proxy which cannot be relied upon for more than a toy project.
## User Stories 
| Target | Accomplished? |
| --- | --- |
| Allow a user to search | True |
| View info about search| True |
## Known Bugs
Not a bug per se, but the API I'm using sometimes has multiple characters with the same name. Furthermore the most popular character is indistinguishable from the response the API returns. Therefore, unfortunately sometimes when you search for someone like Superman, you'll get an obscure character of the same name.
## Technologies Used
* Angular
* Typescript
* Comicvine API
## Support and contact details
If you have any suggestion on how to deal with the problem mentioned among the bugs section feel free to contact me on jeremykimotho@yahoo.com. Or any general enquiry, comment, or suggestion, I'd be happy to hear it.

# Using App
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
