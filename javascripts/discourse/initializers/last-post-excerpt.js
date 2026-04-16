import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("1.8.0", (api) => {
  api.modifyClass("serializer:topic-list-item", {
    pluginId: "last-post-excerpt",

    excerpt() {
      return this.object.get("last_posted_at")
        ? this.object.get("lastPosterExcerpt")
        : this._super(...arguments);
    },
  });
});
