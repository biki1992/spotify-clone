import React from 'react';
import {Link} from "react-router-dom";
import "../css/SidebarOption.css";
import {useDataLayer} from "../DataLayer";

function SidebarOption({title, Icon, id}) {
    const [,dispatch] = useDataLayer()
    const link = `/playlist/${id}`;
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon"/>}
            {Icon ? <h4>{title}</h4> : <Link id={id} to={link}>{title}</Link>}
            
        </div>
    )
}

export default SidebarOption;
