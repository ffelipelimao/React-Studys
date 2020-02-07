import React from 'react'
import Admin from './Admin'
import {Link} from 'react-router-dom'

const AdminMenu = props =>{

    return(
  
  <div>
   <div className="list-group">
    <a href="#" className="list-group-item list-group-item-action active">
        Menu Opcao
        </a>
        <Link to ='/portfolio' className="list-group-item list-group-item-action">Portifolio</Link>
    </div>
   </div> 
    )
} 

export default AdminMenu