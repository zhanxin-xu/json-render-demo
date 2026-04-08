import cors from "cors";
import express from "express";

const app = express();
const port = Number(process.env.PORT ?? 3001);

app.use(cors());
app.use(express.json());

app.get("/api/spec", (_req, res) => {
  const spec = {
    root: "card-1",
    elements: {
      "card-1": {
        type: "Card",
        props: { title: "JSON Render Demo" },
        children: ["text-1", "greeting-1"]
      },
      "text-1": {
        type: "Text",
        props: { value: "这段 UI 由服务端返回 JSON spec 决定。" },
        children: []
      },
      "greeting-1": {
        type: "Greeting",
        props: { name: "React 页面" },
        children: []
      }
    }
  };

  res.json(spec);
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
