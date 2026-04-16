import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("1.8.0", (api) => {
  api.registerValueTransformer("topic-list-item-expand-pinned", () => true);
});
