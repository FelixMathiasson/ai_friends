# Angular Friends List

![Angular friends list](./images/angular-friends-list.gif)

## Learning objectives

- Be able to create a component in Angular
- Sending data to child component from a parent component
- Sending data to a parent component from a child component

## Prerequisites

If you have never used Angular before, run the following command in a terminal to install the Angular CLI

```bash
npm install -g @angular/cli
```

## Setup

- Fork this repo to your own github account
- Clone your forked repo
- Open the project in VSCode
- Open a terminal and run the command `npm install` to install the dependencies

## Instructions

Familiarise yourself with the existing `App` component (Take a look at the [Angular component recap](https://github.com/boolean-uk/angular-recap/blob/main/components.md) for an idea of the different parts of the component)

Implement the following requirements:

  <!-- - Create a `people` component using the Angular cli.
    - Take a look at the [Generating a new component section](#generating-a-new-component) for a refresher on how to do this
  - Using the files within the `template` folder, populate the html and css for your newly created component.
  - Add an input to your `people` component so that you can accept the name of the person you would like to display.
    - Take a look at the [Component inputs section](https://github.com/boolean-uk/angular-recap/blob/main/README.md#component-inputs) for a refresher on how to do this
  - Add an output to your `people` component so that when a user clicks the `Favourite` button, you set the favorite property in the `App` component to the person that was clicked
    - Take a look at the [Component outputs section](https://github.com/boolean-uk/angular-recap/blob/main/README.md#component-outputs) -->

- Create a `people` component that will display a person's name and has a button to allow a user to select them as a favorite
- When the button is clicked, set the `favorite` property in the `app` component to the person who was selected to be the favorite

## Running the app

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Generating a new component

Run `ng generate component component-name` to generate a new component.

## Extensions

- Add the ability to have multiple favorite friends
- Add a remove button to remove a friend as a favorite

## Help

Take a look at the [Angular recap](https://github.com/boolean-uk/angular-recap/blob/main/README.md) for examples on how we can:

- Send data into a child component from a parent component
- Send data from a child component to a parent component
