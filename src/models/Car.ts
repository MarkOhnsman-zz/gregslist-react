export type Car = {
  id: string,
  make: string,
  model: string,
  year: number,
  price: number,
  description?: string,
  imgUrl: string,
  color: string
  // REVIEW how to construct types
  // new(make: string,): Car
}
