import { makeRover } from "./main.js";

it("makeRover", () => {
  var rover = makeRover(0, 0, "N");

  expect(rover.x).toBe(0);
  expect(rover.y).toBe(0);
  expect(rover.facing).toBe("N");
});
