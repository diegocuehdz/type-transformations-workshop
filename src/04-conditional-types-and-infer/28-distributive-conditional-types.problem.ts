import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";
//Difference between a union as a whole that it compares
// When on a generic then each element is iterable and compared to the union of the conditional, therefore it resolves correctly

type GetType<T> = T extends "apple" | "banana" ? T : never;
type AppleOrBanana = GetType<Fruit>;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
