import { expect, it } from "vitest";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Array<Post>;
};

type Post = {
  id: number;
  title: string;
};

/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */
const makeUser = (): User => {
  return {
    id: 12345,
    firstName: "Gjon",
    lastName: "Hajdari",
    role: "admin",
    posts: [
      { id: 1, title: "POST #1" },
      { id: 2, title: "POST #2" },
    ],
  };
};

it("Should return a valid user", () => {
  const user = makeUser();

  expect(user.id).toBeTypeOf("number");
  expect(user.firstName).toBeTypeOf("string");
  expect(user.lastName).toBeTypeOf("string");
  expect(user.role).to.be.oneOf(["super-admin", "admin", "user"]);

  expect(user.posts[0].id).toBeTypeOf("number");
  expect(user.posts[0].title).toBeTypeOf("string");
});
