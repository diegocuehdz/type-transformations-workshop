import { Equal, Expect } from "../helpers/type-utils";

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

type SearcheableIds = `${string}${"id" | "Id"}${string}`;

type OnlyIdKeys<T> = {
  [K in keyof T as K extends SearcheableIds ? K : never]: T[K];
};

type Test = OnlyIdKeys<Example>;

type tests = [
  Expect<
    Equal<
      Test,
      {
        id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>,
];
