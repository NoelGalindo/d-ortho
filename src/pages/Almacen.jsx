import {Dashboard} from '../DefaultLayout.jsx'
import '../css/content.css'
import {ButtonAdd, ButtonEdit, ButtonDelete} from '../components/buttons.jsx'
import Modal from '../components/modals.jsx';
import { useState } from 'react';


export function Almacen(){
    const [isOpen, setIsOpen] = useState(false);
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
                            <select className='form-control roboto-regular' name="" id="">
                                <option>Opcion 1</option>
                            </select>
                        </div>
                        <br />
                        <div className='d-flex justify-content-center row'>
                            <button type='button' className="btn btn-success m-1 col-12 col-sm-12 col-md-4 col-lg-4 roboto-regular" onClick={() => setIsOpen(true)}>Agregar</button>
                            <ButtonEdit text="Editar" />
                            <ButtonDelete text="Eliminar" />
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
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </section>
        
    </Dashboard>
);
}