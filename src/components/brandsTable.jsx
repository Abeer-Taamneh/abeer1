import { getBrands } from '../services/brandsService';
import { deleteBrand } from '../services/brandsService';
import IconButton from '@mui/material/IconButton';
import {deleteCircleOutline} from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import {Edit,Delete} from '@mui/icons-material';
import React from 'react';

function renderTableHeader(language){
  let thead = <thead>
                <tr>
                  <th>Name</th>
                  <th>Logo</th>
                  <th>Description</th>
                </tr>
              </thead>
  if(language==='AR')
    thead =<thead>
              <tr>
                <th>الأسم</th>
                <th>الشعار</th>
                <th>الوصف</th>
              </tr>
            </thead>

  return(thead)
}
function BrandsTable({brands,onDelete,onEdit,user,language}) {
  return (
    <div>
    
    <table className="table">
      {renderTableHeader(language)}
           <tbody>
            {brands.map((brand) => (
              <tr key={brand._id}>
                {(language==='EN')?<td>{brand.nameen}</td>:<td>{brand.namear}</td> }
                <td><img src={brand.logo}  alt='url' width={200} ></img></td>       
                {(language==='EN')?<td>{brand.descriptionen}</td>:<td>{brand.descriptionar}</td> }
                
                <td> 
                {user&&user.isAdmin&&<IconButton aria-label="delete"  color="error" 
                  onClick={ ()=>onDelete(brand) }
                >
              <Delete/>
              </IconButton>}
                </td>
              <td>
               {user&&user.isAdmin&& <IconButton color="primary" aria-label="add to shopping cart"
                  onClick={()=>onEdit(brand)}
                >
                  <Edit />
                </IconButton>}
            
              </td>
              </tr>
            ))}
            </tbody>
          </table>
          




    </div>
  );
}

export default BrandsTable;
