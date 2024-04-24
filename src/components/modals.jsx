import '../css/modals.css';

const Modal = ({ setIsOpen }) => {
    return (
        <>
            <div className="darkBG" onClick={() => setIsOpen(false)} />
            <div className="centered">
                <div className="modalAll">
                    <div className="modalHeader">
                        <h5 className="heading">Agregar categoria</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setIsOpen(false)}>
                        <i className="bi bi-x-lg"></i>
                    </button>
                    <div className="modalContent">
                        <label>Nombre de la categoria</label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className="modalActions">
                        <div className="actionsContainer">
                            <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                                Delete
                            </button>
                            <button
                                className="cancelBtn"
                                onClick={() => setIsOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>    
            </div>    
      </>
    );
};

export default Modal