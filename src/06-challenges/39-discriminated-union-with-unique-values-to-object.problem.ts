import { Equal, Expect } from "../helpers/type-utils";

type Route =
  | {
      route: "/";
      search: {
        page: string;
        perPage: string;
      };
    }
  | { route: "/about" }
  | { route: "/admin" }
  | { route: "/admin/users" };

type RoutesObject = {
  [K in Route as K["route"]]: K extends { search: infer P } ? P : never;
};

type RoutesObjectVariant = {
  [K in Route as K["route"]]: K extends { search: unknown }
    ? K["search"]
    : never;
};

type example = RoutesObject;
type exampleVariant = RoutesObjectVariant;

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": {
          page: string;
          perPage: string;
        };
        "/about": never;
        "/admin": never;
        "/admin/users": never;
      }
    >
  >,
];
