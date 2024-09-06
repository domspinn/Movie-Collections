const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./resolvers');
const auth = require('./utils/auth');
require('dotenv').config();
const connectDB = require('./config/db');

// Initialize Express
const app = express();

// Connect to MongoDB
connectDB();

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => auth(req)  // Use auth middleware for JWT
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  // Listen on specified port
  app.listen({ port: process.env.PORT || 4000 }, () =>
    console.log(`Server ready at http://localhost:${process.env.PORT || 4000}${server.graphqlPath}`)
  );
}

startServer();
