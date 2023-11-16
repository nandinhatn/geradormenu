import react, {useState, useContext, useEffect} from 'react';
import {ItensProducts, ImageLogo, ContainerImageLogo,  TextNoContent,Title, Container, ContainerItens} from './styles'
import axios from 'axios';
import { MyContext } from '../../MyContext';
import {NavLink, useNavigate} from 'react-router-dom'
import Menu from '../Menu';
import Logo from '../../assets/logos/logo_bordo.png';
import Buttons from '../Buttons';
import { type } from '@testing-library/user-event/dist/type';
import api from '../../datas';

const Home = ()=>{

    const [listsProducts, setListProducts] = useState('');
    const navigate = useNavigate();
    const {prodSelect, setProdSelect}= useContext(MyContext);
    const [listPrice, setListPrice]= useState('')
    const [listCategorias, setListCategorias] = useState('')
    const [selectCategoria, setSelectCategoria] = useState('0')
    const [filtrarLista, setFiltrarLista] = useState('')
    const [exibProducts, setExibProducts]= useState(listsProducts)
    
    useEffect(()=>{
        listProducts()
      
        
    },[])

 

   

  

   function saveDataProducts(data){
    
   setListProducts(data)
   setExibProducts(data)
    createObject(data)
    checkItensChecked()
    
   }

   function createObject(data){
        let obj =[]
        data.map((el)=>{
            obj.push({...el, checked:false})
        })

       orderArray(obj)
     
        setListProducts(obj)
      
        
   }

    function listProducts(){

        api.get('/api/produtos')
        .then((response)=> {
          
            saveDataProducts(response.data)})


        
       
       
       
        
    }



    function orderArray (array){

      
        return array.sort(
            (x,y)=>{
                const nameX = x.products_name.toUpperCase()
                const nameY = y.products_name.toUpperCase()
                if(nameX < nameY){
                    return -1;
                }
                if(nameX > nameY){
                    return 1;
                }
                return 0
               
            }
        )

    }

    function filterProdChecked(id){
        let product = listsProducts.filter((el)=> el.id_product==id )
      
        return product[0].checked
    }
    function checkProductList(id){
        let product = listsProducts.filter((el)=> el.id_product==id)
        let removeProduct = listsProducts.filter((el)=> el.id_product !==id)
        product[0].checked= !product[0].checked
       
        let array = [...removeProduct, product[0]]
          orderArray(array)
        setListProducts(array)
       
        generateMenu()
        
        

    }

    function checkItensChecked(){
        if(prodSelect.length >0 && listsProducts.length>0 ){
         
                      
          //testar
                   /*  checkProductList(35) */
        }
       
    }
    function generateMenu(){
        let checkMenu = listsProducts.filter((el)=> el.checked)
       
       
            setProdSelect(checkMenu)
          
            
        }
       

        function getAllCategories(){
            console.log('chamou')
            api.get('/api/categorias')
            .then((response)=>{
          
             
                setListCategorias(response.data)
             
            
            })
        }
        
       
      function getMeasures(id){
         api.get('/api/products_measures/')
         .then((response)=> {
            saveMeasures(response.data.response)
           
           
           
            
            
        })

      }
      function saveMeasures(data){
        setListPrice(data)
      }

     
     

   useEffect(()=>{
    getAllCategories()
    getMeasures();

   },[])

   function getPrice(id){
   
    if(listPrice.length>0){
        let filter = listPrice.filter((el)=> el.id_products==id)
       
        if(filter[0]){
            return filter[0].price
        }
        
    }
}

 function filterlist(){
    if(listsProducts.length>0){
        let filter = listsProducts.filter((el)=> el.id_categories == selectCategoria);
     
        if(filter.length>0){
           
            setExibProducts(filter)
        }

    }
 }

 useEffect(()=>{
  
    selectCategoria !='0'? filterlist() : setExibProducts(listsProducts)
 },[selectCategoria])


   useEffect(()=>{

    getPrice()

   },[listPrice])
        
    
    return(<>

    <Container>

   
     <ContainerImageLogo>
     <ImageLogo src={Logo}/>
        
     </ContainerImageLogo>
    <Title> Gerador de Cardápio</Title>
        
        <div>Filtrar lista </div>
        <div>Categorias</div>
        <div>
            <select onClick={(e)=> setSelectCategoria(e.target.value)}>
                <option value='0'>Todas as Categorias</option>
                {listCategorias.length>0 ? 
                listCategorias.map((el)=>{
                    return(
                        <option value={el.id_categories}>{el.category_name}</option>
                    )
                })
                : ''}
               
              
            </select>
        </div>
        <ContainerItens>
  
   
        {exibProducts.length>0 ?
         exibProducts.map((el)=> {
            
            return(
            <>
                <ItensProducts key={el.id_product}>
            <div>
                <input type='checkbox'
                 checked={filterProdChecked(el.id_product)} 
                  value={el.id_product} onChange={(e)=> checkProductList(el.id_product)}/>
                  </div><div>{el.products_name}</div>
            <div>R$ {getPrice(el.id_product)}</div>
            </ItensProducts>
            </>
         )})
       : ''}
  </ContainerItens>
  {prodSelect.length>0 ?  
  <Buttons actions={() =>  navigate('/geradormenu/menu')} title={'Gerar menu'}/>
/*   <Buttons actions={() =>  navigate('/menu')} title={'Gerar menu'}/> */
  : 
  
  <TextNoContent>
Nenhum produto adicionado para gerar o menu
  </TextNoContent>}
  
 
{/* <button onClick={() =>generateMenu()}>Gerar Menu</button> */}
</Container>

    </>
    )
    
}

export default Home;