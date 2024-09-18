# Movie Collection App

## Description

The Movie Collection App allows users to search for movies, view details, and manage a personal watchlist. Users can create an account, log in, and add movies to their watchlist. This app is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and integrates GraphQL for efficient data fetching.

## Table of Contents

- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Features

- **Search Movies**: Users can search for movies through the OMDB API.
- **Movie Details**: View detailed information about each movie, including title, rating, release date, and more.
- **User Authentication**: Secure user authentication system where users can sign up, log in, and log out.
- **Watchlist Management**: Users can add movies to their personal watchlist and view it on their profile page.
- **Responsive Design**: Fully responsive design that works across various devices and screen sizes.

## Technologies

- **Front End**: 
  - React.js
  - Apollo Client
  - GraphQL
  - CSS (Styled with a custom theme)
  
- **Back End**: 
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - Apollo Server with GraphQL
  - JSON Web Token (JWT) for authentication
  
- **APIs**:
  - OMDB API for movie information

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/movie-collection-app.git

2. Navigate to the project directory
    cd movie-collection-app

3. npm install

4. Create .env file in server directory and add the following variables: 
    MONGODB_URI=mongodb://localhost:27017/moviecollection
    JWT_SECRET=yourSecretKey
    OMDB_API_KEY=yourOMDBApiKey

5. Start Dev server
    npm run develop

5. Open the app in browers

## Usage 
    1. Sign Up: Create a new account.
    2. Log In: Use your credentials to log in to the app.
    3. Search Movies: Use the search bar to look up your favorite movies by title.
    4. Add to WatchedList: View movie details and add movies to your watchlist.
    5. View Watchlist: Go to your profile to see your watched list.

## Screenshots

## License 
    This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing 
Contributions are welcome! If you would like to contribute to this project, please follow these steps:
    1. Fork the repo
    2. Create a new branch
    3. Commit your changes
    4. Push to the branch
    5. Open a pull request

## Questions
    Github: ICONN21 and domspinn
    Email: Ian.connor0921@gmail.com and Domospinn21@gmail.com