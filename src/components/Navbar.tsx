import { CarForm } from "./CarForm"
import { Modal } from "./Modal"

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <div className="d-flex flex-column align-items-center">
          <h3>Gregslist</h3>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <div className="navbar-nav me-auto justify-content-end w-100 d-flex">
            <button
              type="button"
              className="btn btn-info fab-button elevation-2"
              data-bs-toggle="modal"
              data-bs-target="#car-form"
            >
              Add Car
            </button>
          </div>
        </div>
      </nav >
      <Modal header="Add Car" id="car-form" body={<CarForm />} />
    </div>
  )
}
