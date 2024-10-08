const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolver');
const { authMiddleware } = require('./utils/auth'); // Ensure you're using the correct middleware function
require('dotenv').config();
const connectDB = require('./config/db');
const path = require('path');


// Initialize Express
const app = express();

// Connect to MongoDB
connectDB();

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware, // Use authMiddleware for JWT handling
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  // Listen on specified port
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${process.env.PORT || 4000}${server.graphqlPath}`)
  );
}

startServer();

