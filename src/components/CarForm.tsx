
export const CarForm = () => {
  return (
    <div>
      <form className="row" action="">
        <div className="col-4">
          <label htmlFor="make">make</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col-4">
          <label htmlFor="model">model</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col-4">
          <label htmlFor="year">year</label>
          <input className="form-control" type="number" />
        </div>
        <div className="col-4">
          <label htmlFor="price">price</label>
          <input className="form-control" type="number" />
        </div>
        <div className="col-8">
          <label htmlFor="imgUrl">image Url</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col-12">
          <label htmlFor="description">description</label>
          <textarea
            className="form-control"
            name=""
            id=""
            cols={30}
            rows={5}
          ></textarea>
        </div>
        <div className="col-6">
          <label htmlFor="">color</label>
          <input
            className="form-control"
            type="color"
            name=""
            id=""
          />
        </div>
        <div className="col-6">
          <button type="button" className="btn btn-primary">
            Create
          </button>
        </div>
      </form >
    </div >
  )
}
