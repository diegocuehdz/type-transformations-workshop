import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

//I can go for a union of the structure where I can infer the return type and return it, if it doesnt match I return never and TSC complains
type GetParserResult<T> = T extends
  | { parse: () => infer TResult }
  | { extract: () => infer TResult }
  | (() => infer TResult)
  ? TResult
  : never;

type GetParserResultVariant<T> = T extends {
  parse: () => infer TResult;
}
  ? TResult
  : T extends {
        extract: () => infer TResult;
      }
    ? TResult
    : T extends () => infer TResult
      ? TResult
      : never;

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>,
];
