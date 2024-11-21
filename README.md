# Tech Test - TypeScript / React

Welcome to the TypeScript / React tech test.

We have prepared a small app that we would like you to work on. We have a few challenges in the form of 2 bug reports and a user story.

Please timebox a maximum of 3 hours and try to implement as many of the challenges that you can.

If you are running out of time, feel free to add some comments to explain what you would do if you had more time.

We will build on your work in the technical interview.

## Context about the app

This is a contrived app but rather than focus on typical React stuff with the DOM, we are interested in more general programming skills.

Imagine the app is part of a visual design app where users can add text onto a canvas. For this app, the user cannot yet choose where to place the text elements, instead the layout of the text elements is auto-generated.

We have some core state and some derived representations of that state. In the app, these are shown and labelled as "State", "Layout" and "PDF Commands".

"State" is the core application state which defines the text elements and the pages that they were added to.

"Layout" is a transformation of that state where we've added geometry (x, y, width, height) to the text elements.

"PDF Commands" is a further transformation of the "Layout", which can be used to interact with an external PDF rendering program.

## Running the app

Install dependencies and run the app

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## The challenges:

### Bug: Layout does not contain pages

**Repro steps**

1. Add a page to the state so there are multiple pages
2. Add some text elements into the first and second pages

**Expected**  
The layout data structure has the text elements grouped by their page

**Actual**  
The layout doesn't contain pages, all elements are in a flat array

### Bug: Layout does not contain positions

**Repro steps**

1. Add a page to the state so there are multiple pages
2. Add some text elements into the first and second pages

**Expected**  
The elements in the layout data structure have x and y positions such that the text doesn’t overlap

**Actual**  
All elements have x and y coordinates of 0

**Notes**  
You can create a mock "measureText" function which will give a fixed width and height for each element. We are not interested in the subtleties of measuring text, rather we are interested in the transformation of the data structures.

### User story: As a user I want to see a visual representation of my menu

**Scenario 1**  
**GIVEN** I start with an empty state  
**WHEN** I click the add page button one or more times  
**THEN** I will see a visual representation of the pages that I've added

**Scenario 2**  
**GIVEN** I start with an empty state  
**WHEN** I click the add text element  
**THEN** I will see my new text element on the page selected in the page number dropdown

**Notes**  
You can create the visual representation however you would like. The simplest is probably to render simple DOM elements. You don't need to use a `<canvas>` however you can if you wish to.

## How to submit your response

Please do not push branches or commits to this repository. Instead, can you create a zip file with the repository contents and send it to us via email.

If you have issues due to the size of the zip file/repository, then you can archive only the `.git` folder and send that to us.
