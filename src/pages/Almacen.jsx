import {Dashboard} from '../DefaultLayout.jsx'
import '../css/content.css'
import {ButtonAdd, ButtonEdit, ButtonDelete} from '../components/buttons.jsx'
import {ModalAddCategory, ModalEditCategory, ModalDeleteCategory} from '../components/modals.jsx';
import { useState, useEffect } from 'react';


export function Almacen(){
    // Update the state of the select with the categories
    const [selectedOption, setSelectedOption] = useState('default');
    const [selectOptions, setSelectOptions] = useState([]);
    const [selectedCategorie, setSelectedCategorie] = useState('default');

    // States for showing modals
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isOpenDelete, setIsOpenDelete] = useState(false);



    useEffect(() => {
        let tokenData = sessionStorage.getItem("token")
        let datos = JSON.parse(tokenData)
        fetch('http://localhost:8080/almacen/listCategories',  {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + datos.token
            },
          })
        .then((response) => response.json())
        .then((data) => setSelectOptions(data))
        .catch((error) => console.error('Error fetching options:', error));
    }, []);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setSelectedCategorie(event.target.options[event.target.selectedIndex].text);
    };

    return(
    <Dashboard>
        <header>
            <h2 className='d-flex justify-content-center p-2 header-content roboto-bold mb-3'>Almacen</h2>
        </header>
        <section className='section-content'>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link nav-pill-item roboto-regular" aria-current="page" href="#">Categorias</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-pill-item roboto-regular" href="#">Sub-categorias</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-pill-item roboto-regular" href="#">Productos</a>
                </li>
            </ul>
            <hr></hr>
            <h3 className='d-flex justify-content-center roboto-regular'>Categorias</h3>
                <br></br>
            <div className='container'>
                <div className='d-flex justify-content-evenly flex-column flex-lg-row'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-5 p-5 mb-3 content-columns'>
                        <header className='header-card'>
                            <h5 className='roboto-regular d-flex justify-content-center roboto-regular mb-0'>Categorias</h5>
                        </header>
                        <br />
                        <div className='content-card d-flex flex-column justify-content-center'>
                            <label className='roboto-regular' htmlFor="listCategories">Lista de categorias</label><br />
                            <select className='form-control roboto-regular' value={selectedOption} onChange={handleOptionChange}>
                                <option value="default">Select an option</option>
                                {selectOptions.map((option) => (
                                    <option key={option.categoria} value={option.categoria}>
                                        {option.nombre_categoria}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <br />
                        <div className='d-flex justify-content-center row'>
                            <button type='button' className="btn btn-success m-1 col-12 col-sm-12 col-md-4 col-lg-4 roboto-regular" onClick={() => setIsOpen(true)}>Agregar</button>
                            <button type='button' className="btn btn-primary m-1 col-12 col-sm-12 col-md-3 col-lg-3 roboto-regular" onClick={() => setIsOpenEdit(true)}>Editar</button>
                            <button type='button' className="btn btn-danger m-1 col-12 col-sm-12 col-md-4 col-lg-4 roboto-regular" onClick={() => setIsOpenDelete(true)}>Eliminar</button>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-5 p-5 mb-3 content-columns'>
                        <header className='header-card'>
                            <h5 className='roboto-regular d-flex justify-content-center roboto-regular mb-0'>Sub-categorias</h5>
                        </header>
                        <br />
                        <label className='roboto-regular' htmlFor="listCategories">Lista de sub-categorias</label><br /><br />
                        <select className='form-control roboto-regular' name="" id="">
                            <option>Opcion 1</option>
                        </select>
                        <br />
                        <label className='roboto-regular' htmlFor="listCategories">Lista de sub-categorias</label><br /><br />
                        <select className='form-control roboto-regular' name="" id="">
                            <option>Opcion 1</option>
                        </select>
                        <br />
                        <div className='d-flex justify-content-center row'>
                            <ButtonAdd text="Agregar" isOpen={true}/>
                            <ButtonEdit text="Editar" />
                            <ButtonDelete text="Eliminar" />
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && <ModalAddCategory setIsOpen={setIsOpen} setSelectOptions={setSelectOptions} />}
            {isOpenEdit && <ModalEditCategory setIsOpen={setIsOpenEdit} selectedOption={selectedOption} selectedCategorie={selectedCategorie} setSelectOptions={setSelectOptions}/>}
            {isOpenDelete && <ModalDeleteCategory setIsOpen={setIsOpenDelete} selectedOption={selectedOption} selectedCategorie={selectedCategorie} setSelectOptions={setSelectOptions}/>}
        </section>
        
    </Dashboard>
);
}