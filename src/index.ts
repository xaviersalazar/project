import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import schema from "./graphql/schema";

const app = express();
const PORT = 5000;

const expressPlayground = require("graphql-playground-middleware-express")
  .default;

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

app.listen(PORT, () => {
  console.log(`⚡️ Server is running at http://localhost:${PORT}`);
});
