# React-Conditional-Rendering-Practice

# Conditional Registration/Login Form

A simple React application that demonstrates conditional rendering based on the user's registration status. This project shows how to render different components and elements based on props passed to a form component.

## Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Technologies](#technologies)
6. [Scripts](#scripts)
7. [License](#license)

## Overview

The app consists of a form that allows either login or registration based on the user's registration status (`userIsRegistered`). It conditionally renders:
- The "Confirm Password" input field only if the user is not registered.
- The button text as either "Login" (if the user is registered) or "Register" (if the user is not registered).

## Installation

### Prerequisites

- Node.js (version 14 or above)
- npm (version 6 or above)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/jbolan12/React-Conditional-Rendering-Practice.git

**Navigate to the project directory:**

bash
cd your-repo

**Install the dependencies:**

bash
npm install

**Start the development server:**

bash
npm start
Open http://localhost:3000 in your browser to view the app.

## Usage

**Components:**

- App: The main component that determines the user's registration status (userIsRegistered) and passes it as a prop to the Form component.
- Form: A form component that displays either a login form or a registration form based on the isRegistered prop passed from the App component. It conditionally renders:
- A "Confirm Password" input if the user is not registered.
- A button with text either "Login" or "Register".

**Conditional Rendering**
The Form component uses conditional rendering to:

- Show the "Confirm Password" field only if isRegistered is false.
- Change the button text to "Register" if isRegistered is false, or "Login" if isRegistered is true.

## Features
- Conditional Rendering: Dynamically show or hide form elements based on the user's registration status.
- Reusable Form: The form works for both login and registration without changing the structure, relying on props for dynamic behavior.


## Technologies
- React (v18.3.1)
- React-Dom (v18.3.1)
- React-Scripts (v5.0.1)


## Scripts
- start: Runs the app in development mode with react-scripts start.
-build: Builds the app for production with react-scripts build.
- test: Runs the test suite with react-scripts test --env=jsdom.
- eject: Ejects the app from Create React App configuration.

## License
This project is licensed under the MIT License.
