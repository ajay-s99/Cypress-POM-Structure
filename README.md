# Cypress-POM-Structure

## Project Description
This is an exmple for Automation framework using Page Object Model.

## Project Structure:
cypress>e2e>: This folder contains main test suites/ spec files.

cypress>e2e>pages: Inside this folder Classes are created for each web page, This class contains web elements and methods for action to be performed on the web elements.

cypress>fixtures: Required testing data has been stored in .json file.

cypress>support>commands.js: Inside this custom commands can be declared.

## Project setup

1. npm init
2. npm install
3. npx cypress open
4. npx cypres run