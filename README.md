# 03 JavaScript: Password Generator

## What it is:

In this project, we were given some basic starter html, css, and javascript code and asked to code a function that would return a randomized password based on the inputs the user selects from the prompts the site gave them....i.e. length of password, to include numbers, etc.

## What I Did:

```
Here was my thought process on accomplishing this objective:

1. I created variables for each character type "numbers, uppercase letters, lowercase letters, and symbols"
2. Next, I set a variable called randChar to be able to accept all of the random characters the user decided to include
3. Then I set up my prompt and confirms, so that when the program started, the user was asked how many characters they wanted to include, then it cycled through the confirms for the remaining character types
4. I inserted if/else logic with the prompt/confirms so that I would get a valid response, as well as add the confirmed responses to my randChar variable
5. I created a loop so that I could grab characters at random and build out my password
6. Once my password was complete, I passed that into a final password, which is then displayed on the page


## Acceptance Criteria I followed

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Website Link/Screenshot



![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  * The homework should not produce any errors in the console when you inspect it using Chrome DevTools.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
