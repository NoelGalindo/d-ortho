import '../css/modals.css';
import { Children, useEffect, useState } from 'react';
import { toastifyError, toastifySuccess } from '../components/toastify';

// Adding a new categorie
async function saveCategorie(categorie, setSelectOptions){
    let tokenData = sessionStorage.getItem("token")
    let datos = JSON.parse(tokenData)
    return fetch('http://localhost:8080/almacen/addCategorie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + datos.token
      },
      body: JSON.stringify(categorie)
    })
      .then(data => data.json())
      .then(cat =>{
        setSelectOptions((prevOptions) => [...prevOptions, cat]);
      } )
}

export const ModalAddCategory = ({ setIsOpen, setSelectOptions }) => {
    const [categorie, setCategorie] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const categories = {"nombre_categoria": categorie}
        
        try{
            const response = await saveCategorie(categories, setSelectOptions);
            toastifySuccess("Guardado correctamente", 1000)
        }catch(err){
            toastifyError("Error de credenciales", 1000)
        }
    }

    return (
        <BaseModal onHandleSubmit={handleSubmit} headerModal="Agregar categoria" buttonText="Agregar" setIsOpen={setIsOpen}>
            <label className='roboto-bold'>Nombre de la categoria</label><br /><br />
            <input className='form-control' onChange={e => setCategorie(e.target.value)}/><br />
        </BaseModal>
    );
};

// Fetch to modify the value of the categorie
async function modifyCategorie(categorie, setSelectOptions){
    let tokenData = sessionStorage.getItem("token")
    let datos = JSON.parse(tokenData)
    return fetch('http://localhost:8080/almacen/modifyCategorie', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + datos.token
      },
      body: JSON.stringify(categorie)
    })
      .then(data => data.json())
      .then(listCategories =>{
        setSelectOptions(listCategories)
      } )
}

export const ModalEditCategory = ({ setIsOpen, selectedOption, selectedCategorie, setSelectOptions }) => {
    const [categorie, setCategorie] = useState(selectedCategorie);

    const handleSubmit = async e => {
        e.preventDefault();
        const categories = {"categoria":selectedOption,  "nombre_categoria": categorie}
        
        try{
            const response = await modifyCategorie(categories, setSelectOptions);
            toastifySuccess("Editado correctamente", 1000)
        }catch(err){
            toastifyError("Error de credenciales", 1000)
        }
    }

    return (
        <BaseModal onHandleSubmit={handleSubmit} headerModal="Editar categoria" buttonText="Guardar" setIsOpen={setIsOpen}>
            <label className='roboto-bold'>Nombre de la categoria</label><br /><br />
            <input className='form-control' value={categorie} onChange={e => setCategorie(e.target.value)}/><br />
        </BaseModal>
    );
};

// Delete category modal

// Fetch to modify the value of the categorie
async function deleteCategorie(categorie, setSelectOptions){
    let tokenData = sessionStorage.getItem("token")
    let datos = JSON.parse(tokenData)
    return fetch('http://localhost:8080/almacen/deleteCategorie', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + datos.token
      },
      body: JSON.stringify(categorie)
    })
      .then(data => data.json())
      .then(listCategories =>{
        setSelectOptions(listCategories)
      } )
}

export const ModalDeleteCategory = ({ setIsOpen, selectedOption, selectedCategorie, setSelectOptions }) => {

    const handleSubmit = async e => {
        e.preventDefault();
        const categories = {"categoria":selectedOption,  "nombre_categoria": selectedCategorie}
        
        try{
            const response = await deleteCategorie(categories, setSelectOptions);
            toastifySuccess("Eliminado correctamente", 1000)
        }catch(err){
            toastifyError("Error de credenciales", 1000)
        }
    }

    return (
        <BaseModal onHandleSubmit={handleSubmit} headerModal="Editar categoria" buttonText="Eliminar" setIsOpen={setIsOpen}>
            <br></br>
            <h4 className='d-flex justify-content-center text-danger roboto-bold'>Estas seguro de eliminar la categoria</h4>
            <h5 className='d-flex justify-content-center text-secondary roboto-regular'>{selectedCategorie}?</h5> <br></br>
        </BaseModal>
    );
}


function BaseModal(props){
    return(
        <>
            <div className="darkBG" onClick={() => props.setIsOpen(false)} />
            <div className='bg-all d-flex row justify-content-center align-items-center'>
                <div className="col-10 col-sm-8 col-md-8 col-lg-6">
                    <div className="modalAll">
                        <form onSubmit={props.onHandleSubmit}>
                            <div className="modalHeader d-flex flex-row">
                                <h5 className="heading col-10 col-sm-11 col-md-11 col-lg-11 roboto-regular">{props.headerModal}</h5><button className="closeBtn col-2 col-sm-1 col-md-1 col-lg-1 d-flex justify-content-end align-items-center" onClick={() => props.setIsOpen(false)}>
                                <i className="bi bi-x-lg"></i>
                            </button>
                            </div>
                            <div className="modalContent">
                                {props.children}
                            </div>
                            <div className="modalActions">
                                <div className="actionsContainer">
                                    <button type='submit' className="btn btn-success">
                                        {props.buttonText}
                                    </button>
                                    <button type='button'
                                        className="btn btn-danger"
                                        onClick={() => props.setIsOpen(false)}>
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>    
                </div>  
            </div>     
      </>
    );
}

