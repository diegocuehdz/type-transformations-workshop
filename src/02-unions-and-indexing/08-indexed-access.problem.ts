import { Equal, Expect } from "../helpers/type-utils";

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};
type DataDefaultsType = typeof fakeDataDefaults;
export type StringType = DataDefaultsType["String"];
export type IntType = DataDefaultsType["Int"];
export type FloatType = DataDefaultsType["Float"];
export type BooleanType = DataDefaultsType["Boolean"];
export type IDType = DataDefaultsType["ID"];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>,
];
