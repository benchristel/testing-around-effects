import {User} from "./user";

export interface Query<T extends keyof Tables> {
  where(column: string, operator: string, value: any): Query<T>;
}

export const database = {
  run<T extends keyof Tables>(query: Query<T>): Promise<Tables[T][]> {
    throw Error("database.run shouldn't be called in tests");
  },
};

type Tables = {
  users: User;
};

export function queryFrom<T extends keyof Tables>(
  table: T,
): Query<T> {
  const query = {
    where(): Query<T> {
      return query;
    },
  };
  return query;
}
