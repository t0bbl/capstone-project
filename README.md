<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>
capstone-project
</h1>
<h3 align="center">🚀 Developed with the software and tools below.</h3>
<p align="center">

<img src="https://img.shields.io/badge/OpenAI-412991.svg?style=for-the-badge&logo=OpenAI&logoColor=white" alt="OpenAI" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style=for-the-badge&logo=Markdown&logoColor=white" alt="Markdown" />
<img src="https://img.shields.io/badge/styledcomponents-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white" alt="styledcomponents" />

<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white" alt="Jest" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white" alt="MongoDB" />
</p>

</div>

---

## 📚 Table of Contents

- [📚 Table of Contents](#-table-of-contents)
- [📍Overview](#-introdcution)
- [🔮 Features](#-features)
- [⚙️ Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🏎💨 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)

---

## 📍Overview

The capstone project is an innovative tool that provides users with an easy way to create and manage visually stunning shirt Designs. It utilizes the latest technologies, such as React, Styled Components, and Next.js, to create a modern web experience that dynamically responds to user input. Furthermore, the project provides users with the ability to save and manage their favorite images, as well as access a repository of images with variations. Ultimately, the project offers users an efficient and robust way to create their own ai produced shirt designs without the hassle of coding.

---

## 🔮 Features

### Distinctive Features

1. **User-Centered Design & Architecture:** This project makes use of React components, Next.js Router, Styled Components, and Mongoose to enable a dynamic, user-friendly interface. A variety of components are used to render different elements, with the use of keyframes and animations adding an extra level of visual appeal.

2. **Multi-Page Functionality:** This project features multiple pages, including an index page with a form, an AlltimeFavorites page, a Variations page, a Favorites page, a PreviewPage, and a ChooseFour page. Each page is rendered with different components and functions to provide unique user experiences.

3. **Data Storage & Caching:** This project makes use of a MongoDB database for data storage, as well as caching of connections to the database in development. A variety of models are used for different purposes, such as the Shirt and Favorite models. It also implements functions for updating favorites.

4. **API Connectivity:** This project makes use of the OpenAI API to create images based on user-inputted keywords. It also uses its own API to handle GET and POST requests for different models.

5. **Styling & Animations:** Styled Components are used throughout the project to style elements, such as the StyledImage, StyledLink, and StyledText components. Animations are employed to create dynamic effects, such as the blinking Background animation.

---

<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-github-open.svg" width="80" />

## ⚙️ Project Structure

```bash
repo
├── README.md
├── components
│   ├── Background.js
│   ├── Footer.js
│   ├── Form.js
│   ├── FourPicsTable.js
│   ├── FourVariationsTable.js
│   ├── Header.js
│   ├── Loading.js
│   ├── PreviewPicture.js
│   ├── Text.js
│   └── styledComponents
│       ├── Container.js
│       ├── StyledButton.js
│       ├── StyledImage.js
│       ├── StyledLink.js
│       └── StyledText.js
├── data
│   └── text.js
├── db
│   ├── connect.js
│   └── models
│       ├── Favorite.js
│       └── Shirt.js
├── jest.config.js
├── jest.setup.js
├── jsconfig.json
├── lib
│   └── updateFavorites.js
├── next.config.js
├── package-lock.json
├── package.json
├── pages
│   ├── AlltimeFavorites
│   │   └── index.js
│   ├── ChooseFour
│   │   └── [picID].js
│   ├── Favorites
│   │   └── index.js
│   ├── PreviewPage
│   │   └── [...picID].js
│   ├── Variations
│   │   └── [picID].js
│   ├── _app.js
│   ├── _document.js
│   ├── api
│   │   ├── [picID].js
│   │   ├── choosevariation
│   │   │   └── [picID].js
│   │   ├── favorites
│   │   │   ├── alltimefavorites
│   │   │   │   └── [picID].js
│   │   │   └── index.js
│   │   └── openai
│   │       ├── index.js
│   │       └── variations
│   │           └── index.js
│   └── index.js
├── store
│   ├── isFavoriteState.js
│   └── isLoading.js
└── styles.js

20 directories, 43 files
```

---

<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-src-open.svg" width="80" />

## 💻 Modules

<details closed><summary>Alltimefavorites</summary>

| File       | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Module                                          |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------- |
| index.js   | This code script renders a list of favorited items from an API and provides the ability to favorite or unfavorite them. It imports components and hooks, and uses functions to update favorites. The list is sorted by favorites and each item is rendered with a preview image and button to favorite or unfavorite.                                                                                                                                                           | pages/AlltimeFavorites/index.js                 |
| [picID].js | This code script handles a GET and PUT request, allowing users to increment and decrement the'favorites' count of a specified picture. It does this by querying the'Favorite' database model to find the record with the matching'picSRCCloudinarySlug' value, and then either incrementing or decrementing the'favorites' counter based on the'operation' query parameter. The request response will return the updated favorite document and an appropriate HTTP status code. | pages/api/favorites/alltimefavorites/[picID].js |

</details>

<details closed><summary>Api</summary>

| File       | Summary                                                                                                                                                                                                         | Module               |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------- |
| [picID].js | This code script imports a database connection and shirt model, then handles GET and POST requests. GET requests query a shirt database for a given ID, while POST requests create a new shirt in the database. | pages/api/[picID].js |

</details>

<details closed><summary>Choosefour</summary>

| File       | Summary                                                                                                                                                                    | Module                      |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------- |
| [picID].js | This code script displays a selection of four images, along with accompanying text, for a user to choose from. The components used are Text, FourPicsTable, and Container. | pages/ChooseFour/[picID].js |

</details>

<details closed><summary>Choosevariation</summary>

| File       | Summary                                                                                                                           | Module                               |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------- |
| [picID].js | This code script connects to a database, searches for a shirt with a picture ID, and returns the matched picture in the response. | pages/api/choosevariation/[picID].js |

</details>

<details closed><summary>Components</summary>

| File                   | Summary                                                                                                                                                                                                                                                                                                                                                                                                        | Module                            |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------- |
| Background.js          | This script creates a background animation for a webpage using React and styled-components. It uses the window size to calculate the number of pixels required and sets the height of the document. A random seed is used to create an animation delay for each pixel, and a keyframe animation is set to create a blinking effect.                                                                            | components/Background.js          |
| Loading.js             | This code script generates a Loading Text element that pulses between cyan and black colors, with the text "Is Loading". It is made with styled components and keyframes.                                                                                                                                                                                                                                      | components/Loading.js             |
| PreviewPicture.js      | This code script imports a StyledImage component from a styledComponents folder and uses it to render an image with a given source, name, width, and height.                                                                                                                                                                                                                                                   | components/PreviewPicture.js      |
| FourVariationsTable.js | This code script imports components for styled images and links, uses the Next.js router and SWR hooks to get data from an API, and displays four images in a grid with a hover effect.                                                                                                                                                                                                                        | components/FourVariationsTable.js |
| FourPicsTable.js       | This code script renders a set of four images, each of which can be clicked to access a separate page. It does this by utilizing the'useRouter','swr', and'styled-components' packages, as well as a custom fetcher function. The images are arranged in a grid-like structure and styled using the'FourPicsContainer' component.                                                                              | components/FourPicsTable.js       |
| Header.js              | This code script imports a styled component and creates a headline element with fixed positioning and a linear gradient background. It then returns a styled link with the headline as its child.                                                                                                                                                                                                              | components/Header.js              |
| Form.js                | This code script creates a form to collect three keywords and submit them to an API, triggering a mutation that will POST the data to the server. The response is then used to generate a unique ID, which is then used to navigate to a different page. Styled components are imported to format the form, and additional components such as useSWRMutation, useAtom, and loading are used for functionality. | components/Form.js                |
| Text.js                | This script imports a StyledText component from a styledComponents folder and then returns it with the specified texts, creating a formulaic styled text.                                                                                                                                                                                                                                                      | components/Text.js                |
| Footer.js              | This code script creates a footer with three links: BACK, HOME, and FAVORITES. The footer is styled using Styled Components and the links are linked to different pages with window.location.                                                                                                                                                                                                                  | components/Footer.js              |

</details>

<details closed><summary>Db</summary>

| File       | Summary                                                                                                                                                                                                                                                        | Module        |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------ |
| connect.js | This code script enables caching of a MongoDB connection in development, preventing exponential connection growth. It connects to MongoDB using the MONGODB_URI environment variable and connects using the mongoose library, returning the cached connection. | db/connect.js |

</details>

<details closed><summary>Favorites</summary>

| File     | Summary                                                                                                                                                                                                                                                                               | Module                       |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------------- |
| index.js | This code script renders a list of favorite pictures from a store for the user. It includes the PreviewPicture component to show the image, StyledA component to create a link, StyledButton component to unfavorite the image, and the updateFavorites function to update the store. | pages/Favorites/index.js     |
| index.js | This code script establishes a connection to a database and handles POST and GET requests for a Favorite model. POST requests create a new Favorite, and GET requests return all Favorites from the database. Responses are sent in JSON format with appropriate status codes.        | pages/api/favorites/index.js |

</details>

<details closed><summary>Lib</summary>

| File               | Summary                                                                                                                                          | Module                 |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------- |
| updateFavorites.js | This code script is an asynchronous function that sends a PUT request to an API with a given picture source, ID, and action to update favorites. | lib/updateFavorites.js |

</details>

<details closed><summary>Models</summary>

| File        | Summary                                                                                                                                                                                                                                      | Module                |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------- |
| Shirt.js    | This code script imports mongoose, creates two schemas, and exports a Shirt model based on the shirtSchema schema. It contains fields for various image sources and keywords.                                                                | db/models/Shirt.js    |
| Favorite.js | This code script sets up a Mongoose schema for a "Favorite" model, including the fields'picID','picSRCCloudinary','picSRCCloudinarySlug','isFavorite', and'favorites'. The model is then exported as "Favorite" for use in other components. | db/models/Favorite.js |

</details>

<details closed><summary>Openai</summary>

| File     | Summary                                                                                                                                                                                                                                                                                                       | Module                    |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------ |
| index.js | This code script creates images based on user-inputted keywords and stores them in a database. It imports the OpenAI api and the Shirt model, then creates an async function that receives a POST request and fetches images with the OpenAI api. Finally, the code updates the database with the new images. | pages/api/openai/index.js |

</details>

<details closed><summary>Pages</summary>

| File          | Summary                                                                                                                                                                                                                        | Module              |
| :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------ |
| \_app.js      | This code script is an export default function that renders the GlobalStyle, Background, Header and Footer components, as well as the Component and PageProps passed into the App.                                             | pages/\_app.js      |
| index.js      | This code script renders a form or a loading page depending on the state of the "isLoading" variable. The page is wrapped in a styled container, and consists of the components "Text", "Form", and "Loading".                 | pages/index.js      |
| \_document.js | This code script imports components from the "next/document" library and creates a custom document class to collect and render page styles. It then renders an HTML document with a head, body, main and next script elements. | pages/\_document.js |

</details>

<details closed><summary>Previewpage</summary>

| File          | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Module                          |
| :------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------ |
| [...picID].js | This code script imports components and dependencies from several sources, such as the StyledButton component, the useRouter hook, and the saveAs and updateFavorites functions. It contains functions that save a favorite image to the cloud, post it to the API, and trigger a response to the API. It also contains functions to download an image and to favorite/unfavorite an image. Finally, it renders a loading state and a button to get variations. | pages/PreviewPage/[...picID].js |

</details>

<details closed><summary>Store</summary>

| File               | Summary                                                                                                                                                    | Module                   |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------- |
| isLoading.js       | This code script imports the "atom" function from the "jotai" library and exports a variable, "loading", as a boolean atom.                                | store/isLoading.js       |
| isFavoriteState.js | This code script imports an atom with storage from Jotai and exports it as a constant named "isFavoriteState", which stores an array of favorite pictures. | store/isFavoriteState.js |

</details>


<details closed><summary>Variations</summary>

| File       | Summary                                                                                                                                                                                                                                                                                        | Module                               |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------- |
| [picID].js | This code script imports components and data for a feature that allows a user to choose four variations from a table. The code renders a container with a text component displaying variations, a table component to show the options, and another text component to provide more information. | pages/Variations/[picID].js          |
| index.js   | This script handles a POST request with image data and uses the OpenAI API to generate 4 variations of the image. It then stores the variations in a MongoDB database and returns the image data to the response.                                                                              | pages/api/openai/variations/index.js |

</details>

<hr />

## 🚀 Getting Started

### 💻 Installation

1. Clone the capstone-project repository:

```sh
git clone https://github.com/t0bbl/capstone-project
```

2. Change to the project directory:

```sh
cd capstone-project
```

3. Install the dependencies:

```sh
npm install
```

<hr />

## 🛠 Future Development

- [ ] [📌 implement testing]
- [ ] [📌 add user registration and login (oauth)]
- [ ] [📌 integrate shop to make the Shirts available for order directly from the page]
- [ ] [📌 get appropriate URL]
- [ ] [📌 marketing]

---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:

1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).

```sh
git checkout -b new-feature-branch
```

4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.

```sh
git commit -m 'Implemented new feature.'
```

6. Push your changes to your forked repository on GitHub using the following command

```sh
git push origin new-feature-branch
```

7. Create a pull request to the original repository.
   Open a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
   The project maintainers will review your changes and provide feedback or merge them into the main branch.

---
