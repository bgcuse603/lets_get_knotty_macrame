# Lets Get Knotty Macramé

## Overview

**Lets Get Knotty Macramé** is a full stack app designed as an inventory for a small macramé businessy located in Manchester, New Hampshire.

### Deployment Site

https://letsgetknottymacrame.netlify.app/

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

```structure

src
|__ assets/
      |__ css
      |__ fonts
      |__ images
|__ components/
      |__ Footer.jsx
      |__ Nav.jsx
|__ containers/
      __ MainContainer.jsx
|__ layout/
      |__ layout.jsx
|__ screens/
      |__ About.jsx
      |__ Contact.jsx
      |__ Home.jsx
      |__ ProductDetail.jsx
      |__ Products.jsx
      |__ ProductUpdate.jsx
      |__ Register.jsx
      |__ SignIn.jsx
|__ services/
      |__ apiConfig.js
      |__ auth.js
      |__ products.js
|__ App.css
|__ App.js
|__ index.js


```

#### Time Estimates

| Task                       | Priority | Estimated Time | Time Invested |
| -------------------------- | :------: | :------------: | :-----------: |
| README & planning          |    H     |     3 hrs      |     8 hrs     |
| Backend Auth               |    H     |     3 hrs      |     1 hr      |
| Backend Database           |    H     |     3 hrs      |     1 hr      |
| Seed & Create data         |    H     |     3 hrs      |     2 hrs     |
| Test backend routes        |    H     |     3 hrs      |     2 hrs     |
| Frontend Auth              |    H     |     3 hrs      |     1 hr      |
| Frontend routes & test     |    H     |     3 hrs      |     3 hrs     |
| Get, Edit, Delete products |    H     |     3 hrs      |     3 hrs     |
| Get, Delete reviews        |    H     |     3 hrs      |     3 hrs     |
| Layout setup               |    H     |     3 hrs      |     3 hrs     |
| Navigation                 |    H     |     3 hrs      |      TBD      |
| Home screen                |    H     |     3 hrs      |     3 hrs     |
| Product screen             |    H     |     3 hrs      |     3 hrs     |
| Product detail screen      |    H     |     3 hrs      |     3 hrs     |
| Product update screen      |    H     |     3 hrs      |     3 hrs     |
| About screen               |    H     |     3 hrs      |     1 hr      |
| Contact screen             |    H     |     3 hrs      |     1 hr      |
| Sign In screen             |    H     |     3 hrs      |     2 hrs     |
| TOTAL                      |          |     62 hrs     |    44 hrs     |

### Server (Back End)

#### ERD Model

[ERD](https://drive.google.com/file/d/1uMmwVYqFvKwwi_ilNblD7EoPEpIuJkaV/view?usp=sharing)

<a href="https://imgur.com/62hPG0N"><img src="https://i.imgur.com/62hPG0N.jpg" title="source: imgur.com" /></a>

### Libraries and Dependencies

|   Library    | Description                                                      |
| :----------: | :--------------------------------------------------------------- |
|    React     | _Front-end Javascript library_                                   |
| React Router | _Standard library for routing components in React_               |
|    Rails     | _Web-application framework that allows you to create a database_ |

## Post-MVP

- _Add contact form that sends emails to owner_
- _Form to add custom order and send to owner_
- _Search Bar_
- _Mobile nav bar_
- _Add footer_

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
