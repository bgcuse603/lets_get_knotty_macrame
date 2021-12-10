# Lets Get Knotty Macramé

## Overview

**Lets Get Knotty Macramé** is a full stack app designed as an inventory for a small macramé businessy located in Manchester, New Hampshire. 

## MVP

_The **Lets Get Knotty Macramé** MVP will allow all users to explore product inventory_

### Goals

- _User (NOT Signed In) will be able to view all products and post reviews on products_
- _User (Signed In) will be able to create, update and delete product posts_
- _User (Signed In) will be able to delete all reviews_

### Client (Front End)

#### Wireframes

- Desktop Landing

<a href="https://imgur.com/pehOdy1"><img src="https://i.imgur.com/pehOdy1.jpg" title="source: imgur.com" /></a>

- Desktop Products

<a href="https://imgur.com/bI4uRJg"><img src="https://i.imgur.com/bI4uRJg.png" title="source: imgur.com" /></a>

- Additional wireframes

[LGK Macramé Wireframes](https://www.figma.com/file/Tf5mRL78LeAkrSeBVOtiyx/LGK-Macram%C3%A9?node-id=18%3A2)

#### Component Tree

[Component Tree](https://whimsical.com/lets-get-knotty-macrame-component-tree-5dqhYFuvkBdgp8ZSfrVT9o)

#### Component Architecture

``` structure

src
|__ screens/
      |__ Homepage/
            |__ Homepage.jsx
            |__ Homepage.css
      |__ SignIn/
            |__ SignIn.jsx
            |__ SignIn.css
      |__ Products/
            |__ Products.jsx
            |__ Products.css
      |__ ProductDetail/
            |__ ProductDetail.jsx
            |__ ProductDetail.css
      |__ ProductUpdate.jsx
            |__ ProductUpdate.jsx
            |__ ProductUpdate.css
      |__ About/
            |__ About.jsx
            |__ About.css
      |__ Contact/
            |__ Contact.jsx
            |__ Contact.css
|__ components/
      |__ SignIn.jsx
      |__ Footer.jsx
      |__ Nav.jsx
|__ containers/
      |__ MainContainer/
            |__ MainContainer.jsx
|__ layout/
      |__ layout.jsx
      |__ layout.css
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ products.js
      |__ reviews.js
```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| README & planning   |    H    |     8 hrs      |    TBD    |    TBD   |
| Backend Auth    |    H     |     3 hrs      |     TBD    |    TBD   |
| Backend Database   |    H     |     3 hrs      |     TBD    |    TBD    |
| Seed & Create data   |    H     |     3 hrs      |     TBD    |    TBD    |
| Test backend routes    |    H     |     3 hrs      |     TBD    |    TBD   |
| Frontend Auth   |    H     |     3 hrs      |     2 hrs     |    TBD    |
| Frontend routes & test |    H     |     3 hrs      |     TBD    |    TBD    |
| Get, Edit, Delete products   |    H     |     3 hrs      |     TBD     |    TBD    |
| Get, Delete reviews   |    H     |     3 hrs      |     TBD     |    TBD    |
| Layout setup   |    H     |     3 hrs      |     TBD     |    TBD    |
| Navigation |    H     |     3 hrs      |     TBD    |     TBD     |
| Footer |    H     |     3 hrs      |     TBD     |    TBD    |
| Home screen   |    H    |     3 hrs      |     TBD     |    TBD    |
| Product screen |    H     |     3 hrs      |     TBD    |     TBD     |
| Product detail screen |    H     |     3 hrs      |     TBD     |     TBD     |
| Product update screen|    H     |     3 hrs      |     TBD     |     TBD     |
| About screen |    H     |     3 hrs      |     TBD     |     TBD     |
| Contact screen|    H     |     3 hrs      |     TBD     |     TBD     |
| Sign In screen|    H     |     3 hrs      |     TBD     |     TBD     |
| TOTAL               |          |    62  hrs      |     TBD     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

[ERD](https://drive.google.com/file/d/1uMmwVYqFvKwwi_ilNblD7EoPEpIuJkaV/view?usp=sharing)

<a href="https://imgur.com/sxR2mnI"><img src="https://i.imgur.com/sxR2mnI.jpg" title="source: imgur.com" /></a>
<br>

***

### Libraries and Dependencies

|     Library      | Description                                                      |
| :--------------: | :--------------------------------------------------------------- |
|      React       | _Front-end Javascript library_                                   |
|   React Router   | _Standard library for routing components in React_               |
|      Rails       | _Web-application framework that allows you to create a database_ |


## Post-MVP

- _Add contact form that sends emails to owner_
- _Form to add custom order and send to owner_

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
