import React from "react";
import { Link } from "react-router-dom";
import '../styles/Breacrumb.style.scss';

interface Props {
    link:string,
    name:string,
    state:string,
    itmTitle:string
}
const Breacrumb = ({link, name, state='', itmTitle}:Props) =>{
    return(
            <div>
                <span className='bcrumb-nav-itm'><Link to={link} state={state}>{name}</Link><span className='bcrumb-itm-title'> <i className="bi bi-chevron-right"></i> {itmTitle}</span></span>
            </div>
    )
}
export default Breacrumb;