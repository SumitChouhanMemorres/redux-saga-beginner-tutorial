// import { Test } from "tape";

// import { incrementAsync } from "./sagas";

// Test("incrementAsync Saga Test", (assert) => {
//   console.log("hi");
//   const gen = incrementAsync();
// });

import { put, call } from "redux-saga/effects";
import { incrementAsync, delay } from "./sagas";

const test = require("tape");

test("First test", (assert) => {
  const gen = incrementAsync();
  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    "incrementAsync Saga must call delay(1000)"
  );
  assert.end();
});
