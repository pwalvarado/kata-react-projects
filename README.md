schema.graphql

```graphql
type Note @model @auth(rules: [{ allow: owner }]) {
  id: ID!
  note: String!
}
```
