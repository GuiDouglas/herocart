import cors from 'cors';
import express from "express"
import { mapRouter } from "./routes/map";
import { checkoutRouter } from "./routes/checkout";


const app = express()

app.use(express.json())

app.use(
  cors({
    origin: [
      "https://nyoveo.com",
      "https://www.nyoveo.com"
    ]
  })
);

app.get("/health", (_, res) => {
  res.json({
    status: "ok"
  })
})

app.use(mapRouter);
app.use(checkoutRouter);

app.listen(3000, () => {
  console.log(
    "API running on http://localhost:3000"
  );
}); 