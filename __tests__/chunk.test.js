import { chunk } from "../src/chunk";

test(" chunk an array ", () => {
  const arr = ["cool", "shirt"];
  const chunkedArr = chunk(arr, 1);

  expect(chunkedArr).toStrictEqual([["cool"], ["shirt"]]);
});
