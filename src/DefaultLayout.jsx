import './css/sideBar.css'
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

export function Dashboard({children}){
    return(
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-2 col-sm-3 col-md-3 col-lg-2 col-xl-2 px-sm-2 px-0 bg-sidebar">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <Link className="d-flex align-items-center mb-2 p-1 rounded logo d-none d-sm-inline" to="">
                            <img src={logo} height="100%" width="100%"/>
                        </Link>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 w-100" id="menu">
                              <DashboardItem iconDashboard="bi bi-backpack4-fill" text="Almacen" page="/"/>
                        </ul>
                        <hr />
                        
                    </div>
                </div>
                <div className="col py-2">
                    {children}
                </div>
            </div>
        </div>
    );
}

function DashboardItem(props){
    return(
        <li className="nav-item">
            <Link to={props.page} className="nav-link align-middle px-1 isSelected">
                <i className={props.iconDashboard}></i> <p className="ms-1 d-none d-sm-inline roboto-bold">{props.text}</p>
            </Link>
        </li>
    );
}

