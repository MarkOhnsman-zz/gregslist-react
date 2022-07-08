interface Props {
  id: string,
  header: string,
  body: React.ReactNode
}


export const Modal: React.FC<Props> = ({ header, body, id }) => {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal-dialog dialog-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {header}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {body}
          </div>
        </div>
      </div>
    </div >
  )
}
