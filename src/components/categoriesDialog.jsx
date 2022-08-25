import React,{useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import MyTextField from './common/myTextField';
import { addCategory,updateCategory } from '../services/categoriesService';
export default function CategoriesDialog({open,setOpen,onSave,category}) {

  
  const [nameen,setNameen] = useState(category?category.nameen:'');
  const [namear,setNamear,] = useState(category?category.namear:'');
  const [logo,setLogo,] = useState(category?category.logo:'');
  const[descriptionen,setdescriptionen]=useState(category?category.descriptionen:'');
  const [descriptionar,setdescriptionar,] = useState(category?category.descriptionar:'');
  const [parentid,setparentid] = useState(category?category.parentid:0);


  useEffect(()=>{
    if(!category)return;
    setNameen(category.nameen);
    setNamear(category.namear);
    setLogo(category.logo);
    setdescriptionen(category.descriptionen);
    setdescriptionar(category.descriptionar);
  }, [category]);

  return (
   
  <Dialog
    fullScreen
    open={open}
  >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={()=>setOpen(false)}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
          </Typography>
          <Button autoFocus color="inherit" 
            onClick= {async ()=>{
                setOpen(false);
                category.parentid = parentid;
                category.nameen = nameen;
                category.namear = namear;
                category.logo=logo;
                category.descriptionen=descriptionen;
                category.descriptionar=descriptionar;
                if(category.id)
                  await updateCategory(category); 
                else
                  await addCategory(category);
                onSave()}    
          }
            >
            save
          </Button>
        </Toolbar>
        </AppBar>
        
        <div>
          <MyTextField label ={'Parent Id'}  value ={parentid} setValue={setparentid} type = 'number'  />
          <MyTextField label ={'Name EN'} placeholder = {'* Name EN'} value ={nameen} setValue ={setNameen}  />
          <MyTextField label ={'Name AR'} placeholder = {'* Name AR'} value ={namear} setValue ={setNamear}  />
          <MyTextField label ={'logo'} placeholder = {'* logo'} value ={logo} setValue ={setLogo}  />
          <MyTextField label ={' descriptionen '} placeholder = {'* descriptionen'} value ={descriptionen} setValue ={setdescriptionen} rows={4} multiline />
          <MyTextField label ={' descriptionar '} placeholder = {'* descriptionar'} value ={descriptionar} setValue ={setdescriptionar} rows={4} multiline/>
        </div>
</Dialog>
  )
}


// <List>
//   <TextField 
//   label="Nameen" 
//   variant="filled" 
//   color="success" 
//   focused 
//   className='m-2' 
//   placeholder='الاسم بالانجليزيه'
//   onChange={(e)=>{
//     const updatedBrand = {...selectedBrand};
//     updatedBrand.nameen = e.target.value;
//     setSelectedBrand(updatedBrand);
//   }}
//   value={selectedBrand?selectedBrand.nameen:''}
//   />
// <br/>
// <TextField
//   label="namear"
//   variant="filled"
//   color="success"
//   focused  
//   className='m-2' 
//   placeholder='الاسم بالعربي'
//   onChange={(e)=>{
//     const updatedBrand = {...selectedBrand};
//     updatedBrand.namear = e.target.value;
//     setSelectedBrand(updatedBrand);
//  }}
//  value={selectedBrand?selectedBrand.namear:''}
//  />
// <br/>
// <TextField
//   label="logo"
//   variant="filled"
//   color="success"
//   focused  
//   className='m-2' 
//   placeholder='logo'
//   onChange={(e)=>{
//     const updatedBrand = {...selectedBrand};
//     updatedBrand.logo = e.target.value;
//     setSelectedBrand(updatedBrand);
//   }}
//   value={selectedBrand?selectedBrand.logo:''}
// />
// <br/>
// <TextField
//   label="	descriptionen"
//   variant="filled"
//   color="success"
//   focused  
//   className='m-2' 
//   placeholder='	descriptionen'
//   onChange={(e)=>{
//     const updatedBrand = {...selectedBrand};
//     updatedBrand.descriptionen = e.target.value;
//     setSelectedBrand(updatedBrand);
//  }}
//  value={selectedBrand?selectedBrand.descriptionen:''}
// />
// <br/>
// <TextField
//   label="		descriptionar"
//   variant="filled"
//   color="success"
//   focused  
//   className='m-2' 
//   placeholder='		descriptionar'
//  onChange={(e)=>{
//   const updatedBrand = {...selectedBrand};
//     updatedBrand.descriptionar = e.target.value;
//     setSelectedBrand(updatedBrand);
//   }}
//   value={selectedBrand?selectedBrand.descriptionar:''}
// />
//  </List>