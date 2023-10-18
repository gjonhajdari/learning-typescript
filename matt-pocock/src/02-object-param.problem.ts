import { expect, it } from "vitest";

type AddTwoNumbersArgs = {
  first: number;
  second: number;
};

export const addTwoNumbers = ({ first, second }: AddTwoNumbersArgs) => {
  return first + second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
