export interface Category {
  id: string;
  nome: string;
}
export interface EventE {
  employee: Category;
  date: Date;
}
export interface Deserializable {
  deserialize(input: any): this;
}

