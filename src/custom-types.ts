export type NoTraceableProps<T> = Omit<
  T,
  | 'createdAt'
  | 'createdBy'
  | 'updatedAt'
  | 'updatedBy'
  | 'deletedAt'
  | 'deletedBy'
>;

export type NoPersistenceProps<T> = Omit<NoTraceableProps<T>, 'id'>;

export type NoFunctionProps<T> = Pick<
  T,
  {
    [K in keyof T]: T[K] extends Function ? never : K;
  }[keyof T]
>;

export type Objectify<T> = {
  [K in keyof T]: T[K];
} & {};