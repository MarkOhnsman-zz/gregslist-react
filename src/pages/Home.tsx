import { useState } from "react";
import { CarCard } from "../components/CarCard";
import { Car } from "../models/Car";

export function generateId() {
  let timestamp = (new Date().getTime() / 1000 | 0).toString(16);
  return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => (
    Math.random() * 16 | 0).toString(16)).toLowerCase();
}

export const Home = () => {
  const [cars, setCars] = useState<Car[]>([
    { id: generateId(), make: 'Ford', model: 'Mustang', year: 1995, price: 10000, imgUrl: 'http://thiscatdoesnotexist.com', color: '#8c23f1' },
    { id: generateId(), make: 'KIA', model: 'Niro', year: 1995, price: 10000, imgUrl: 'http://thiscatdoesnotexist.com', color: '#ffffff' },
    { id: generateId(), make: 'Honda', model: 'Pilot', year: 1995, price: 10000, imgUrl: 'http://thiscatdoesnotexist.com', color: '#ffffff' },
    { id: generateId(), make: 'Tesla', model: 'CyberTruck', year: 1995, price: 10000, imgUrl: 'http://thiscatdoesnotexist.com', color: '#ffffff' },

  ])


  return (
    <div className="container">
      <div className="row">
        {cars.map(c => <CarCard carData={c} key={c.id} cars={cars} setCars={setCars} />)}
      </div>
    </div>
  )
}
