import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import schema from "./src/graphql/schema";

const app = express();
const PORT = 5000;

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`⚡️ Server is running at http://localhost:${PORT}`);
});
