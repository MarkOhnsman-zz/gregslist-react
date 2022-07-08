import { CarCard } from "../components/CarCard";
import { Car } from "../models/Car";

export function generateId() {
  let timestamp = (new Date().getTime() / 1000 | 0).toString(16);
  return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => (
    Math.random() * 16 | 0).toString(16)).toLowerCase();
}

interface Props {
  cars: Car[],
  setCars: React.Dispatch<React.SetStateAction<Car[]>>
}


export const Home: React.FC<Props> = ({ cars, setCars }) => {
  return (
    <div className="container">
      <div className="row">
        {cars.map(c => <CarCard carData={c} key={c.id} cars={cars} setCars={setCars} />)}
      </div>
    </div>
  )
}
