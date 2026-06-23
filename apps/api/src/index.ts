import cors from 'cors';
import express from "express"
import { mapRouter } from "./routes/map";
import { checkoutRouter } from "./routes/checkout";
import { env } from './config/env';


const app = express()

app.use(express.json())

app.use(
  cors({
    origin: [
      "https://razecart.com",
      "https://www.razecart.com"
    ]
  })
);

app.get("/health", (_, res) => {
  res.json({
    status: "ok"
  })
})

app.get("/version", (_, res) => {
  res.json({
    environment:
      env.enviroment,

    version:
      env.RAILWAY_GIT_COMMIT_SHA
  });
});

app.use(mapRouter);
app.use(checkoutRouter);

app.listen(3000, () => {
  console.log(
    "API running on http://localhost:3000"
  );
}); 