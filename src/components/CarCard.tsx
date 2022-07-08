import { Car } from '../models/Car'

interface Props {
  carData: Car,
  cars: Car[],
  setCars: React.Dispatch<React.SetStateAction<Car[]>>
}

// delete car
// open edit form

export const CarCard: React.FC<Props> = ({ carData, cars, setCars }) => {

  const deleteCar = (id: string) => {
    setCars(cars.filter(c => c.id !== id))
  }


  return (
    <div className="col-6 col-md-3">
      <div className="rounded shadow bg-white p-2" >
        <img className="img-fluid" src={carData.imgUrl} alt="" />
        <h5 className="text-center">{carData.make} | {carData.model} | {carData.year}</h5>
        <h4 className="text-center">${carData.price}</h4>
        <p>{carData.description}</p>
        <div className='d-flex justify-content-between'>
          <input className="w-10" type="color" value={carData.color} readOnly />
          <div>
            <button className="btn btn-danger" onClick={() => deleteCar(carData.id)}><i className="mdi mdi-delete"></i></button>
            <button className="btn btn-warning"><i className="mdi mdi-pencil"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}
