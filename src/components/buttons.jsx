import '../css/buttons.css';
import Modal from './modals';
import { useState } from 'react';

export function ButtonAdd(props){
    const [isOpen, setIsOpen] = useState(false);
    return(<>
            <button type='button' className="btn btn-success m-1 col-12 col-sm-12 col-md-4 col-lg-4 roboto-regular" onClick={() => setIsOpen(props.isOpen)}>{props.text}</button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </>
    );
}

export function ButtonEdit(props){
    return(
        <button type='button' className="btn btn-primary m-1 col-12 col-sm-12 col-md-3 col-lg-3 roboto-regular">{props.text}</button>
    );
}

export function ButtonDelete(props){
    return(
        <button type='button' className="btn btn-danger m-1 col-12 col-sm-12 col-md-4 col-lg-4 roboto-regular">{props.text}</button>
    );
}