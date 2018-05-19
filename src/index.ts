const express = require('express');
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
import {typeDefs} from "./types";
import {resolvers} from "./resolvers";
const { ApolloEngine } = require('apollo-engine');
import cors from "cors"

mongoose.connect(`mongodb://localhost/poc_ma`);

const engine = new ApolloEngine({
  apiKey: "service:wapgear-4187:uNNBdRO2bKua0E86ZrYujw"
});


const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();
app.use(cors())
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start your server
engine.listen({
  port: 8000,
  expressApp: app
}, () => {
  console.log('Go to http://localhost:8000/graphiql to run queries!');
})
