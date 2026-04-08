import { defineCatalog } from "@json-render/core";
import { defineRegistry } from "@json-render/react";
import { schema } from "@json-render/react/schema";
import { z } from "zod";

const catalog = defineCatalog(schema, {
  components: {
    Card: {
      description: "Simple card wrapper",
      props: z.object({
        title: z.string()
      })
    },
    Text: {
      description: "Simple text block",
      props: z.object({
        value: z.string()
      })
    },
    Greeting: {
      description: "Greeting message",
      props: z.object({
        name: z.string()
      })
    }
  },
  actions: {}
});

const { registry } = defineRegistry(catalog, {
  components: {
    Card: ({ props, children }) => (
      <section style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16, maxWidth: 520, margin: "24px auto" }}>
        <h2 style={{ marginTop: 0 }}>{props.title}</h2>
        <div>{children}</div>
      </section>
    ),
    Text: ({ props }) => <p>{props.value}</p>,
    Greeting: ({ props }) => <h3>你好，{props.name}</h3>
  }
});

export { catalog, registry };
