import React, { useState } from "react"
import { Car } from "../models/Car"
import { generateId } from "../pages/Home"


interface Props {
  cars: Car[]
  setCars: React.Dispatch<React.SetStateAction<Car[]>>
}

export const CarForm: React.FC<Props> = ({ cars, setCars }) => {
  const [newCar, setNewCar] = useState<Car>({ id: generateId(), make: '', model: '', year: 1990, price: 1000, description: '', color: '$ffffff', imgUrl: 'http://placehold.it/200x200' })

  const handleChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget
    setNewCar({ ...newCar, [name]: value })
  }

  const createCar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCars([...cars, newCar])
    e.currentTarget.reset()
    // close the modal....
  }


  return (
    <div>
      <form className="row" onSubmit={createCar}>
        <div className="col-4">
          <label htmlFor="make">make</label>
          <input className="form-control" type="text" name="make" onChange={handleChange} />
        </div>
        <div className="col-4">
          <label htmlFor="model">model</label>
          <input className="form-control" type="text" name="model" onChange={handleChange} />
        </div>
        <div className="col-4">
          <label htmlFor="year">year</label>
          <input className="form-control" type="number" name="year" onChange={handleChange} />
        </div>
        <div className="col-4">
          <label htmlFor="price">price</label>
          <input className="form-control" type="number" name="price" onChange={handleChange} />
        </div>
        <div className="col-8">
          <label htmlFor="imgUrl">image Url</label>
          <input className="form-control" type="text" name="imgUrl" onChange={handleChange} />
        </div>
        <div className="col-12">
          <label htmlFor="description">description</label>
          <textarea
            className="form-control"
            name="description"
            onChange={handleChange}
            cols={30}
            rows={5}
          ></textarea>
        </div>
        <div className="col-6">
          <label htmlFor="">color</label>
          <input
            className="form-control"
            onChange={handleChange}
            type="color"
            name="color"
          />
        </div>
        <div className="col-6">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form >
    </div >
  )
}
