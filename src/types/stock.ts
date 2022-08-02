export type Product = {
  id: DocField<G.String, string>
  barcode: DocField<G.String, string>
  name: DocField<G.String, string>;
  price: DocField<G.Number, number>;
  quantity: DocField<G.Number, number>;
}

export type ParsedProduct = {
  id: string;
  barcode: string;
  name: string;
  price: number;
  quantity: number;
}

export type User = {
  id: string;
  name: string;
}

enum G {
  String = 'stringValue',
  Number = 'doubleValue',
  Boolean = 'booleanValue',
}

type DocField<T extends string | number | symbol, S> = {
  [key in T]: S;
};


