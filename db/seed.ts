import data from "./data.json";
import { db } from "./index";
import { bookmarksTable } from "./schema";

const initialBookmarks = data.bookmarks.map(({ id, tags, ...rest }) => {
  const created = new Date(rest.createdAt);
  const visited = rest.lastVisited ? new Date(rest.lastVisited) : null;
  const icon = `https://www.google.com/s2/favicons?domain=${new URL(rest.url).hostname}`;
  return { ...rest, createdAt: created, lastVisited: visited, favicon: icon };
});

const addInitialBookmarks = async () => {
  return await db.insert(bookmarksTable).values(initialBookmarks);
};

addInitialBookmarks();
