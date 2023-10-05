import react, {useState, useContext, useRef, useEffect} from 'react'
import { MyContext } from '../../MyContext';
import {NavLink, useNavigate} from 'react-router-dom'
import {exportComponentAsJPEG, exportComponentAsPDF} from 'react-component-export-image'
import  Logo from '../../assets/logos/logo_bordo.png';
import  LogoMarfin from '../../assets/logos/logo_marfin.png';
import  LogoRetBord from '../../assets/logos/logoret-bordo-escuro.jpg';
import  LogoRetMarfim from '../../assets/logos/logo-ret-marfin.jpg';
import background1 from '../../assets/img/fatia-de-pizza-e-molho-com-ingrediente-cru-na-superficie-de-madeira_23-2148246810.avif'
import background2 from '../../assets/img/ingredientes-para-pizza-sem-costura_1176-269.avif';
import background3 from '../../assets/img/4ddd4348f7ea5a88948f4e9b32dfb678.jpg'
import background4 from '../../assets/img/2ee918427712255bc116749e33616d33.jpg'
import background5 from '../../assets/img/desktop-wallpaper-food-menu-backgrounds-food-background.jpg'
import background6 from '../../assets/img/desktop-wallpaper-restaurant-menu-menu.jpg'
import background7 from '../../assets/img/fast-food-seamless-background-illustration-simple-restaurant-menu-background-vector.jpg'
import background8 from '../../assets/img/food-background-menu-with-spices-culinary-ingredients-dark-stone-background-cooking-concepts-culinary-background-top-view-free-space-your-text_234595-2347.avif'
import background9 from '../../assets/img/food+background+for+restaurant+menu-3.jpg'
import Foto1 from '../../assets/img/produtos/IMG_3841.JPG';
import {
    ImageLogo,
     Container,
     Input,Itens , 
     ContainerImage, 
     ContainerProdTotal, 
     ContainerProd, 
     ContainerMenuInner, 
     ImgProd, 
     ExibMenuTotal, 
     ExibMenu,
     ContainerFooter, 
     ItensDescription, 
     ImageThumbs,
     ContainerMenu, 
     TitleMenu, 
     ContainerItensTotal,
      ContainerTotal,
       Options,
        ContainerOptions,
        ContainerThumbs, 
        ImageTopo,
        TopoImage,
        ContainerOptionsLayout,
        ContainerTopo,
        ContainerLogo,
        ContainerImages,
        ContainerImage1,
        ImagesBack,
        ContainerConfigs,
        Containers,
        Categorias,
        TopoInteger,
        ContainerMedidas,
        MedidasSabores,
        Divisor,
        

        MenuOptions} from './style'
import { Title } from '../Home/styles';
import MenuConfig from '../MenuConfig';
import Buttons from '../Buttons';
import CloseButton from '../CloseButton';
import SlideControl from '../SlideControl';
import { FaEye, FaEyeDropper, FaEyeSlash } from "react-icons/fa";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import api from '../../datas';
import ChangeFonts from '../ChangeFonts';
import ButtonLayout from '../ButtonLayout';
import ListImages from '../ListImages/Index';
import ListImagesBanco from '../ListImagesBanco';
import ImagensSelecionadas from '../ImagensSelecionadas';




    

const Menu = (props)=>{


    let obj = 
    [
        {'name': 'TextProd', visible:false},
        {'name': 'ChooseImg', visible:false},
        {'name': 'MenuBackgroundColor' , visible:false },
        {'name': 'PhotosMenu', visible:false},
        {'name': 'PhotosProducts', visible:false},
        {'name':'MenuLogo', visible:false },
        {'name': 'TextFooter', visible:false},
        {'name': 'FormatCardapio', visible:false},
        
      

    ]

    const {prodSelect, setProdSelect}= useContext(MyContext);
    const componentRef= useRef()
    const [posLogo, setPosLogo]= useState('center')
    const [color, setColor] = useState('#532539')
    const [img, setImg]= useState(background1)
    const navigate = useNavigate();
    const [colorFooter, setColorFooter] = useState('#532539');
    const [colorTextFooter, setColorTextFooter] = useState('#FFFF')
    const [exibMenu, setExibMenu]= useState(false)

    const [priceSize, setPriceSize] = useState(16);
    const [colorPrice, setColorPrice] = useState('#532539')
    
    const [widthLogo, setWidthLogo] = useState("100");
    const [radius, setRadius] = useState('100')
    const [titleSize, setTitleSize] = useState(16);
    const [footerSize, setFooterSize]= useState(16)
    const [colorDescription, setColorDescription] = useState('black')
    const [sizeDescription, setSizeDescription] = useState('14px')
    const [menuImageSize, setMenuImageSize] = useState('60')
    const [photoMenu, setPhotoMenu] = useState(true)
    const [exibPhotoMenu, setExibPhotoMenu] = useState(true)
    const [photoBorderColor, setPhotoBorderColor] =useState('#532539')
    const [textSite, setTextSite] = useState('www.bolandoarte.com.br');
    const [textPhone, setTextPhone] = useState('XXXXXXXXXXXX')
    const [exibTextFooter, setExibTextFooter]= useState(false)
    const [listMedidas, setListMedidas] = useState('')
    const [loading, setLoading] = useState(false)
    const [listPhotos, setListPhotos] = useState([])
    const [loadingPhotos, setLoadingPhotos] = useState(false)
    const [objAll, setObjAll] = useState(obj)
    const [fontTitle, setFontTitle] = useState("Roboto, sans-serif")
    const [fontRodape, setFontRodape] = useState("Roboto, sans-serif")
    const [logoImg,setLogoImg] = useState(Logo)
    const [rect, setRect] = useState(false)

    const [colorBackground, setColorBackGround] =useState('#FEF2CD')
    const [imageBackVisible, setImageBackVisible]= useState(false)

    const [layout, setLayout]= useState('layout1')
    const [layoutColumns, setLayoutColumns] = useState('column')
    const [topoFoto, setTopoFoto] = useState([])
    const [backgroundColors, setBackgroundColors] = useState('#532539')
    const [bancoImages, setBancoImages] = useState()
    const [countBanco, setCountBanco] = useState(0)
    const [layoutInteger, setLayoutInteger] = useState(false)
    const [backColor, setBackColor] = useState('#532539');
    const [textColor, setTextColor] = useState('white')
    const [fontCategoria, setFontCategoria] = useState('Roboto, sans-serif')
    const [fontSizeCategoria, setFontSizeCategoria] = useState('15')
    const [fontFamilyDescription, setFontFamilyDescription] = useState('Roboto, sans-serif')
    const [listaSabores, setListaSabores] = useState('')
    const [loadingSabores, setLoadingSabores] = useState(false)
    const [fontFamilyPrice, setFontFamilyPrice]= useState('Roboto, sans-serif')
    const [corTextoPrice, setCorTextoPrice]= useState('white');
    const [menuRound, setMenuRound] = useState('10')
    const [heightImage,setHeightImage]= useState('100');
    const [backColorContainer,setBackColorContainer]= useState('white');
    
    const [colorSabores, setColorSabores] = useState('#532539')
    const [sizeSabores, setSizeSabores] = useState('13');
    const [corTextoSabores, setCorTextoSabores] = useState('white')
    const [fontFamilySabores, setFontFamilySabores] = useState('Roboto, sans-serif')
    const [observacoes, setObservacoes] = useState('')
    const [loadingObservacoes, setLoadingObservacoes] = useState(false)
    let arrayPhotos =[]
   

    function getDadosEmpresa(){
        api.get('/api/company')
        .then((response)=>{
           
            setTextSite(response.data.response[0].company_site)
            setTextPhone(response.data.response[0].company_phone1)
        })
    }

    function getImagesSelect(id){
      
        api.get('/api/images/' + id)
        .then((response)=>{
          
           
            
            if(response.data.response.length>0){
               
                arrayPhotos.push(...response.data.response)
             
                setListPhotos(...arrayPhotos)
               
                setLoadingPhotos(true)
              
                setListPhotos(arrayPhotos)
             
            }
          
        })
    }

    function getImagesAll(){
        api.get('/api/images_layout').then((response)=>{
            
                divideArray(response.data.response)
           
        })
    }

    function divideArray(dados){
        

        if(dados.length>0){
            let corte = 8
        
            const result = new Array(Math.ceil(dados.length/corte))
            .fill()
            .map(_=> dados.splice(0, corte))
           
            setBancoImages(result)
          
        }
        
    }

    function selectImageTrue(id){
       
        if(listPhotos.length>0){
          
           let filter = listPhotos.filter(el => el.id_product==id)
            if(filter.length>0){
          
                return true
            }
            else{
                return false
            }
        }
    }

    function selectImage(id){

     
        
        if(listPhotos.length>0){
            let filter= listPhotos.filter((el)=> el.id_product ==id)
           
            if(filter.length>0){
               
                return filter[0].url_image
            }
        }
    }

    function listSabores(){
        api.get('/relations/products_flavors')
        .then((response)=>{
            setListaSabores(response.data.response)
            setLoadingSabores(true)
        })
    }

    function selectSabores(id){
        if(listaSabores.length>0){
            let filter = listaSabores.filter((el)=> el.id_products===id)
     
            if(filter.length>0){
                return filter;
            }
        }
     
    }
    function listaMedidas(){
        api.get('/relations/products_measures/')
        .then((response)=>{
            setListMedidas(response.data.response)
            setLoading(true)

           
        })
    }

    function listaObservations(){
        api.get('/relations/observations_products/')
        .then((response)=>{
           
            setObservacoes(response.data.response)
            setLoadingObservacoes(true)
            

        })
    }
    function getObservacoes(id){
        if(observacoes.length>0){
            let filter= observacoes.filter((el)=> el.id_products===id)
            if(filter.length>0){
                return filter;
            }
            
        }

    }

    function getImages(){
       
        if(prodSelect.length>0){
           
            prodSelect.forEach(element => {
                
                getImagesSelect(element.id_product)
            });
        } 
        
    }


    function getPrice(id){
        if(listMedidas.length>0){

            let filter = listMedidas.filter((el)=> el.id_products ==id)
            return filter
        }
        
    }
    function checkVisible(name){
       
        let filter = objAll.filter((el)=> el.name ==name)
        
        return filter[0].visible
        
    }
    

    function setVisible(name){
        let filter = objAll.filter((el)=> el.name ==name)
        if(filter.length>0){
           
            filter[0].visible = !filter[0].visible
            let filterNone = objAll.filter((el)=> el.name !==name)
             if(filterNone.length>0){
                filterNone.forEach((el)=>{
                    el.visible = false
                })
             }
            setObjAll([...filterNone, ...filter])

        }
       
       
    }

     
     
     function backPage(){
        setProdSelect([])
        navigate('/bolandoarte/geradormenu/')
     }

     useEffect(()=>{
        console.log(prodSelect)
        getImagesAll()
        listaMedidas()
        listSabores()
        listaObservations()
        getImages()
        getDadosEmpresa()
     },[])

     
 


     function setLogos(img, rect){
        setLogoImg(img)
        setRect(rect)


     }
     function setVisibleImages(e){
        
         if(e==='imagem'){
            setImageBackVisible(true)
         }
         if(e==='cor'){
            setImageBackVisible(false)
         }
    /*     setImageBackVisible(!imageBackVisible) */
    
     }

     function configImagesTopo(img, layout){
       
        let array = topoFoto;
        array.push(img)
       
        setTopoFoto(array)
        




     }
   
     function removeImage(index){
        let filter =topoFoto.filter((el,i)=> i!=index)
     
        setTopoFoto(filter)
     }
     function setLayouts(value){
        if(value ==='row'){
            setLayoutColumns('row');
            setLayoutInteger(false);
        }
        else if(value=='column'){
            setLayoutColumns('column')
            setLayoutInteger(false)
        }
        else{
            setLayoutColumns('column')
            setLayoutInteger(true)
        }
        
        
     }


   
    return(


        <>

      

<MenuOptions exib={exibMenu} height={exibMenu ? 100 :120}>

    <Buttons actions={()=> setExibMenu(!exibMenu)} title="Opções"/>
    <Buttons actions={()=> backPage()} title="Voltar"/>
    <Buttons actions={()=> exportComponentAsJPEG(componentRef)} title="Imprimir"/>
  
              

    
           <ContainerMenuInner exib={exibMenu} height={exibMenu ? 100 :0}>

       
                
          
            {exibMenu? <>
            
                <Options> 

                <TitleMenu>
     <CloseButton  display={()=> displayMenu()} 
     visible={checkVisible("MenuLogo")} 
     action={()=> setVisible("MenuLogo")}/>
                  
                    <div>Logo</div>
                    </TitleMenu>
                    <ExibMenu height={checkVisible("MenuLogo")? 350 :0} 
                    display={checkVisible("MenuLogo")? 350: 0}>
                {checkVisible("MenuLogo") ?  <>
                
                
                <ContainerOptions>
{layoutColumns==='column' ?  
 <>
 <Buttons actions={()=> setPosLogo('right')} title="Direita"/>
<Buttons actions={()=> setPosLogo('left')} title="Esquerda"/>
<Buttons actions={()=> setPosLogo('center')} title="Centro"/>
</> : 


<>
<Buttons actions={()=> setPosLogo('start')} title="Topo"/>
<Buttons actions={()=> setPosLogo('center')} title="Centro"/>
<Buttons actions={()=> setPosLogo('end')} title="Embaixo"/>
</>}





</ContainerOptions>
<SlideControl title={"Tamanho"} min={100} max={250} action={(e)=> setWidthLogo(e)}/>
                <ContainerThumbs>

 <ImageThumbs width={50} 
 src={LogoMarfin} onClick={()=> setLogos(LogoMarfin,false)}/>
<ImageThumbs width={50} 
src={Logo} onClick={()=> setLogos(Logo,false)}/>
<ImageThumbs width={50} 
src={LogoRetBord} onClick={()=> setLogos(LogoRetBord,true)}/>
<ImageThumbs 
width={50} src={LogoRetMarfim} onClick={()=> setLogos(LogoRetMarfim,true)}
/>
                </ContainerThumbs>
                
                
{/* <SlideControl title={"Arrendodado"} min={0} max={200} action={(e)=> setRadius(e)}/> */}
                
                </>


: ''}
</ExibMenu>
           
              </Options> 
 
              <Options >
                <TitleMenu> 
                <CloseButton display={()=> displayMenu()} 
                visible={checkVisible("TextProd")} 
                action={()=> setVisible("TextProd")}/> 
                    
                        Textos Menu
                       
                        </TitleMenu>
                        <ExibMenu height={checkVisible("TextProd")? 750 :0}
                         display={checkVisible("TextProd")? 750: 0}>
                {checkVisible("TextProd")? <>
                
                  

{/* <input type='color' value={color} onChange={(e)=> setColor(e.target.value)}></input> */}
<MenuConfig color={color}  title={"Cor do Nome"}changeColor={(e)=> setColor(e)}/>
<SlideControl title={"Tamanho Nome"} min={16} max={100} action={(e)=> setTitleSize(e)}/>

<MenuConfig color={colorPrice} title={"Cor Fundo Preço"} changeColor={(e)=> setColorPrice(e)}/>
<MenuConfig color={corTextoPrice} title={"Cor Texto Preço"} changeColor={(e)=> setCorTextoPrice(e)}/>
<SlideControl title={"Tamanho Preço"} min={12} max={100} action={(e)=> setPriceSize(e)}/>

<MenuConfig color={colorSabores} title={"Cor Fundo Sabores"} changeColor={(e)=> setColorSabores(e)}/>
<SlideControl title={"Tamanho Sabores"} min={12} max={100} action={(e)=> setSizeSabores(e)}/>
<MenuConfig color={corTextoSabores} title={"Cor Texto Sabores"} changeColor={(e)=> setCorTextoSabores(e)}/>


<MenuConfig color={colorDescription} title={"Cor descrição"} changeColor={(e)=> setColorDescription(e)}/>
<SlideControl title={"Tamanho Descrição"} min={10} max={100} action={(e)=> setSizeDescription(e)}/>
</> : ''}

<TitleMenu> Fontes Titulos do Menu </TitleMenu>

<ChangeFonts changeFont={(e)=> setFontTitle(e)}/>
<TitleMenu> Fontes Descricao</TitleMenu>

<ChangeFonts changeFont={(e)=> setFontFamilyDescription(e)}/>

<TitleMenu> Fontes Preço</TitleMenu>

<ChangeFonts changeFont={(e)=> setFontFamilyPrice(e)}/>

<TitleMenu> Fontes Sabores</TitleMenu>

<ChangeFonts changeFont={(e)=> setFontFamilySabores(e)}/>
</ExibMenu>
                
               
              </Options>
 
              <Options>
               
              <TitleMenu>
                <CloseButton display={()=> displayMenu()} 
                visible={checkVisible("MenuBackgroundColor")} 
                action={()=> setVisible("MenuBackgroundColor")}/>
                <div>

                 Cor Rodapé
                </div>
                 </TitleMenu>
                <ExibMenu 
                height={checkVisible("MenuBackgroundColor")? 100 :0} display={checkVisible("MenuBackgroundColor")? 100: 0}>
                {checkVisible("MenuBackgroundColor")? <>



<MenuConfig color={colorFooter} title={"Cor Fundo"} changeColor={(e)=> setColorFooter(e)}/>
                   
<MenuConfig color={colorTextFooter} title={"Cor do Texto"} changeColor={(e)=> setColorTextFooter(e)}/>







                </> : ''}
                </ExibMenu>
              </Options>
   <Options>
    <TitleMenu>
        <CloseButton 
        visible={checkVisible("TextFooter")} 
        action={()=> setVisible("TextFooter")} />
        <div>Textos Rodapé</div>
    </TitleMenu>
    <ExibMenu height={checkVisible("TextFooter") ? 180 :0} display={checkVisible("TextFooter")? 180:0}>

        {checkVisible("TextFooter")? <ContainerOptions>
            <Input type='text' value={textSite} onChange={(e)=> setTextSite(e.target.value)}/>
            <Input type='text' value={textPhone} onChange={(e)=> setTextPhone(e.target.value)}/>

        </ContainerOptions>:''}

        <ChangeFonts changeFont={(e)=> setFontRodape(e)}/>

        <SlideControl title={"Tamanho Texto"} min={0} max={30} action={(e)=> setFooterSize(e)}/>
    </ExibMenu>
   </Options>
              <Options>
                <TitleMenu>  
                    <CloseButton display={()=> displayMenu()} 
                    visible={checkVisible("ChooseImg")} 
                    action={()=> setVisible("ChooseImg")}/>
                    <div>

                     Imagem de Fundo
                    </div>
                     </TitleMenu>
                     <ExibMenu height={checkVisible("ChooseImg")? 400 :0} 
                     display={checkVisible("ChooseImg")? 400: 0}>
                {checkVisible("ChooseImg") ?  <ContainerOptions>

{/* <ImageThumbs width={50}   onClick={()=> setImg(background1)} src={background1}></ImageThumbs>
<ImageThumbs width={50}   src={background2} onClick={()=> setImg(background2)}></ImageThumbs>
<ImageThumbs width={50}   src={background3} onClick={()=> setImg(background3)}></ImageThumbs>
<ImageThumbs width={50}   src={background4} onClick={()=> setImg(background4)}></ImageThumbs>
<ImageThumbs width={50}   src={background5} onClick={()=> setImg(background5)}></ImageThumbs>
<ImageThumbs width={50}   src={background6} onClick={()=> setImg(background6)}></ImageThumbs>
<ImageThumbs width={50}   src={background7} onClick={()=> setImg(background7)}></ImageThumbs>
<ImageThumbs width={50}   src={background8} onClick={()=> setImg(background8)}></ImageThumbs>
<ImageThumbs width={50}   src={background9} onClick={()=> setImg(background9)}></ImageThumbs> */}
   

     {bancoImages[0].length>0 ? <>
     <ContainerOptions>
        {bancoImages[countBanco].map((el)=>{
            return(
                <>
               <ImageThumbs width={50} onClick={()=> setImg(`https://www.poppytecnologias.com.br/api_bolando/images/${el.url}`)} src={`https://www.poppytecnologias.com.br/api_bolando/images/${el.url}`}></ImageThumbs>
                </>
            )
        })}
        {countBanco + 1 < bancoImages.length? <div style={{cursor: 'pointer'}} onClick={()=> setCountBanco(countBanco +1)}>proximo</div>:''}
        {countBanco-1 >0 ?  <div style={{cursor: 'pointer'}} onClick={()=> setCountBanco(countBanco -1)}>anterior</div> : ''}
       
        
   
    
     </ContainerOptions>  
     </> : 'carregando'}
{listPhotos.map((el)=>{
                                return(
                                    <>
                                   

                                    <ImageThumbs width={50} onClick={()=> setImg(`https://www.poppytecnologias.com.br/api_bolando/images/${el.url_image}`)} src={`https://www.poppytecnologias.com.br/api_bolando/images/${el.url_image}`}></ImageThumbs>
                                    </>
                                )
                            })}
</ContainerOptions> :'' }
                  
                   {checkVisible("ChooseImg")? 
                   
                   <>
                   
                   <div onChange={(e)=> setVisibleImages(e.target.value)}>

<TitleMenu>Imagem & Cor  de Fundo 
<input type='radio' name="image" value={'imagem'}  /> 
    </TitleMenu> 
    <TitleMenu>
    Cor de Fundo
<input type='radio' value={'cor'} name='image' /> 
    </TitleMenu>
</div>

 

<TitleMenu>Cores de Fundo</TitleMenu>
<MenuConfig
color={colorBackground} 
title={"Cor Fundo"} changeColor={(e)=> setColorBackGround(e)}/>

<TitleMenu>Cores de Fundo Textos</TitleMenu>
<MenuConfig
color={colorBackground} 
title={"Cor Fundo Textos"} changeColor={(e)=> setBackColorContainer(e)}/> 
                   
                   </> : ''}
   
            </ExibMenu>
              </Options>
         

             <Options>
                <TitleMenu>
                    <CloseButton
                     action={()=> setVisible("PhotosMenu")} 
                     visible={checkVisible("PhotosMenu")}></CloseButton>
                    <div>Fotos Menu</div>
                        </TitleMenu>
                    <ExibMenu height={checkVisible("PhotosMenu")? 300 :0} display={checkVisible("PhotosMenu")? 300: 0}>
                        {checkVisible("PhotosMenu")? 
                        <ContainerOptions>
                           <Buttons 
                           icon={<AiOutlineEye size={30}/>} 
                           icon2={<AiOutlineEyeInvisible size={30}/>} exib={checkVisible("PhotosMenu")}
                            title={photoMenu? 'Esconder foto': 'Mostrar Foto'}
                            actions={()=>setPhotoMenu(!photoMenu)}/>


                            {checkVisible("PhotosMenu") ? <>
                        
                                <SlideControl title={"Foto Arredondada"} min={0} max={100} action={(e)=> setMenuRound(e)}/>
                                <SlideControl title={"Tamanho Foto Largura"} min={50} max={300} action={(e)=> setMenuImageSize(e)}/>
                                <SlideControl title={"Tamanho Foto Altura"} min={50} max={500} action={(e)=> setHeightImage(e)}/>
                         <MenuConfig color={photoBorderColor} title={"Cor Borda Foto"} changeColor={(e)=> setPhotoBorderColor(e)}/>
                            </> : ''}

                       
                        </ContainerOptions>
                        : ''}
                    </ExibMenu>

             </Options>
             


             <Options>
                <TitleMenu>
                    <CloseButton 
                    action={()=> setVisible("FormatCardapio")} visible={checkVisible("FormatCardapio")}></CloseButton>
                    <div>Formato do Cardápio</div>
                    <div>Conteúdo</div>
                        </TitleMenu>
                            {checkVisible("FormatCardapio")? 
                            
                            
                            <ExibMenu height={checkVisible("FormatCardapio")? 350 :0} display={checkVisible("FormatCardapio")? 350: 0}>
                        
                            <ContainerOptions>
                      
    
                            <ButtonLayout
                                 title='2 colunas' action={()=>setLayouts('row') } />
                            <ButtonLayout
                                 title='1 coluna' action={()=>setLayouts('column') } />
                            {listPhotos.length>0 && prodSelect.length==1? <ButtonLayout
                                 title='Inteiro' action={()=>setLayouts('integer') } /> : ''}
                            
                                
                                {layoutColumns==='column' && !layoutInteger?  
                                 <MenuConfig color={backgroundColors} title={"Cor Lateral esquerda"} changeColor={(e)=> setBackgroundColors(e)}/> : ''}

                            {/* cor da categoria */}
                            {layoutInteger ? 
                            <>
                            <MenuConfig color={backColor} title={"Fundo Categoria"} changeColor={(e)=> setBackColor(e)}/>
                            <MenuConfig color={textColor} title={"Cor Texto Categoria"} changeColor={(e)=> setTextColor(e)}/>
                            <ChangeFonts changeFont={(e)=> setFontCategoria(e)}/>
                            <SlideControl title={"Tamanho Letra Categoria"} min={16} max={100} action={(e)=> setFontSizeCategoria(e)}/>
                            </>
                            : ''}   

                            </ContainerOptions>
                           
                        </ExibMenu>
                         : ''}
          {/*    ////////////////////////////////////////////////////////////////////////////// */}
                  
  {/*    ////////////////////////////////////////////////////////////////////////////// */}
             </Options>


  {/*    ////////////////////////////////////////////////////////////////////////////// */}
             <Options over={true}>
                <TitleMenu>
                    <CloseButton 
                    action={()=> setVisible("PhotosProducts")} visible={checkVisible("PhotosProducts")}></CloseButton>
                    <div>Formato do Cardápio</div>
                    <div>Topo</div>
                        </TitleMenu>
                        
                     {/*    ////////////////////////////////////////////////////////////////////////////// */}
                        
                        {checkVisible("PhotosProducts")? 
                        
                        <ExibMenu height={checkVisible("PhotosProducts")? 500 :0} display={checkVisible("PhotosProducts")? 500: 0}>
                        
                        <ContainerOptions>
                        <div> 
                     
                            <ButtonLayout
                             title='layout1' action={()=>setLayout('layout1') } />
                            {layout=='layout1'? <>
                            <ContainerOptionsLayout>
                            <div>Escolher 1 imagem para o topo</div>
                                
                          
       
                            <ListImages setTopoFoto={setTopoFoto} listPhotos={listPhotos}/>
                            <ListImagesBanco countBanco={countBanco} setCountBanco={setCountBanco} setTopoFoto={setTopoFoto} listPhotos={bancoImages[countBanco]}/>
   
    
    
   
                            </ContainerOptionsLayout>
                            </> :''}
                            <ButtonLayout
                             title='layout2' action={()=>setLayout('layout2') } />
                           
                            {layout=='layout2'? <>
                            <ContainerOptionsLayout>

                            {/* aparecer a imagem selecionada, para ela aparecer o topo foto precisa ser maior que zero */}
                            {topoFoto? 
                             <ImagensSelecionadas topoFoto={topoFoto}  setTopoFoto={setTopoFoto} removeImage={removeImage}/>: ''}
                            
                            {topoFoto.length<2?  <>
                                <div>Escolher 2 imagem para o topo</div>
                                <ContainerOptions>
                                    {listPhotos.length>0 ? 
                                      <ListImages qtd={2} multiples={true} setTopoFoto={setTopoFoto} topoFoto={topoFoto} listPhotos={listPhotos}/>
                                    : '' }                      
                                      
                                        <ListImagesBanco qtd={2} multiples={true} countBanco={countBanco} topoFoto={topoFoto} setCountBanco={setCountBanco} setTopoFoto={setTopoFoto} listPhotos={bancoImages[countBanco]}/>
                                  
                            </ContainerOptions>
                            </>: ''}
                            


                            </ContainerOptionsLayout>
                            </> :''}
                            <ButtonLayout
                             title='layout3' action={()=>setLayout('layout3') } />
                            
                            {layout=='layout3'? <>
                            <ContainerOptionsLayout>
                                     
                            <div>Escolher 1 imagem para o topo</div>
                            {listPhotos.length>0?  <ListImages setTopoFoto={setTopoFoto} listPhotos={listPhotos}/> : ''}
                           
                            <ListImagesBanco countBanco={countBanco} setCountBanco={setCountBanco} setTopoFoto={setTopoFoto} listPhotos={bancoImages[countBanco]}/>
                            </ContainerOptionsLayout>
                            </> :''}
                       
                            <ButtonLayout
                             title='layout4' action={()=>setLayout('layout4') } />
                            {layout=='layout4'? <>
                            <ContainerOptionsLayout>

                            <div>Escolher 2 imagem para o topo </div>

                            
                            {listPhotos.length>0 || bancoImages.length>0? <>
                                <ContainerOptions>
                                    {topoFoto && topoFoto.length>=0 && topoFoto.length>=0 ? <>
                                    
                                    <ImagensSelecionadas
                                    topoFoto={topoFoto}
                                    setTopoFoto={setTopoFoto}
                                    removeImage={removeImage}    
                                    listPhotos={listPhotos}
                                    />
                                   
                                    </> :''}
                                   
                                 
                                    {topoFoto && topoFoto.length<2? <>
                                        <ListImages qtd={2} multiples={true} setTopoFoto={setTopoFoto} topoFoto={topoFoto} listPhotos={listPhotos}/>
                                    <ListImagesBanco qtd={2} multiples={true} countBanco={countBanco} topoFoto={topoFoto} setCountBanco={setCountBanco} setTopoFoto={setTopoFoto} listPhotos={bancoImages[countBanco]}/>
                                    
                                    </>:''}
                           
                            </ContainerOptions>
                            </>: ''}

                            </ContainerOptionsLayout>
                            </> :''}
                           

                            <ButtonLayout
                             title='layout5' action={()=>setLayout('layout5') } />
                            {layout=='layout5'? <>
                            <ContainerOptionsLayout>
                            <div>Escolher 3 imagens para o topo</div>

                            {topoFoto && topoFoto.length>=0 ? <>
                                     
                                     <ImagensSelecionadas
                                 topoFoto={topoFoto}
                                 setTopoFoto={setTopoFoto}
                                 removeImage={removeImage}    
                                 listPhotos={listPhotos}
                                 />
                                 </> :''}

                                 {topoFoto.length<=3 ? <>
                                    {listPhotos.length>0 ?  <ListImages qtd={3} multiples={true} setTopoFoto={setTopoFoto} topoFoto={topoFoto} listPhotos={listPhotos}/> :''}
                                    <ListImagesBanco qtd={3} multiples={true} countBanco={countBanco} topoFoto={topoFoto} setCountBanco={setCountBanco} setTopoFoto={setTopoFoto} listPhotos={bancoImages[countBanco]}/>
                                 </> : ''}

                       

                            </ContainerOptionsLayout>
                            </> :''}


                            <ButtonLayout
                             title='layout6' action={()=>setLayout('layout6') } />
                            {layout=='layout6'? <>
                            <ContainerOptionsLayout>
                            <div>Escolher 6 imagens para o topo</div>
                                   
                             {topoFoto.length>0 ?  
                             <ImagensSelecionadas
                                    topoFoto={topoFoto}
                                    setTopoFoto={setTopoFoto}
                                    removeImage={removeImage}    
                                    listPhotos={listPhotos}
                                    />: ''}  

                                   {topoFoto && topoFoto.length<6? 
                                   <>
                                   {listPhotos.length>0 ? <>
                                    <ListImages qtd={6} multiples={true} setTopoFoto={setTopoFoto} topoFoto={topoFoto} listPhotos={listPhotos}/>
                                   </> : ' '}
                                   <ListImagesBanco qtd={6} multiples={true} countBanco={countBanco} topoFoto={topoFoto} setCountBanco={setCountBanco} setTopoFoto={setTopoFoto} listPhotos={bancoImages[countBanco]}/>
                                   </> : ''}     
                   
                            </ContainerOptionsLayout>
                            </> :''}
                            </div>  

                           

                       
                        </ContainerOptions>
                       
                    </ExibMenu> : ''}
                  
  {/*    ////////////////////////////////////////////////////////////////////////////// */}
             </Options>

       
            </> 
            : ''}
                </ContainerMenuInner>

            </MenuOptions>



        <ContainerTotal>

       
        <Container 
        configs={layoutColumns}  
        chooseImage={img} 
        colorBack={colorBackground} 
        imageBack={imageBackVisible}
        positionLogo={posLogo}
          ref={componentRef}>

            <ContainerConfigs configs={layoutColumns}>

     
            {layoutInteger===false? 
            
            <ContainerImage
             layout={layout} 
             configs={layoutColumns} 
             length={widthLogo} 
             fotos={topoFoto}  
             positionLogo={posLogo}
             background={backgroundColors}
             >
            <ImageLogo length={widthLogo} rect={rect} radius={radius} src={logoImg}></ImageLogo>
        </ContainerImage>
            : ''}
            
            
        
       
        <Containers>
                             
       
      
        {prodSelect.length>0 ? <>
          
        {prodSelect.map((el)=> {return(
            <>
            
      
            <ContainerItensTotal
            formatLayout={layoutColumns}
            backColorContainer={backColorContainer}
             fotos={`https://www.poppytecnologias.com.br/api_bolando/images/${selectImage(el.id_product)}`} layout={layoutInteger}>

                    {loadingPhotos && photoMenu && layoutInteger===false ? 
                    
                    selectImageTrue(el.id_product)? 
                    <ImgProd 
                    heightImg={heightImage}
                    borderRound={menuRound} 
                    border={photoBorderColor} exib={photoMenu} 
                    lenght={menuImageSize}  
                    src={`https://www.poppytecnologias.com.br/api_bolando/images/${selectImage(el.id_product)}`}
                    /> : ''
                    
                    : ''}
                  
              <ContainerMenuInner>
                {layoutInteger? <>
                <TopoInteger fotos={`https://www.poppytecnologias.com.br/api_bolando/images/${selectImage(el.id_product)}`}>
                <Categorias  fontSize={fontSizeCategoria}
                 font={fontCategoria} backcolor={backColor} textcolor={textColor}>{el.category_name}</Categorias>         
                </TopoInteger>
                </> : ''}
               
              <ContainerMenu layout={layoutInteger}>
              
              <Itens layout={layoutInteger} size={titleSize} font={fontTitle} color={color}>{el.products_name} </Itens>
             

              <Itens size={priceSize} color={colorPrice}>
                
             {/*  {loading? getPrice(el.id_product).map((el)=>{
                  return(
                      <>
                    <div>{el.measures_title}</div>
                  
                    </>
                )
            }): ''} */}
                </Itens>

              {/* <Itens size={priceSize} color={colorPrice}>
                {loading? getPrice(el.id_product).map((el)=>{
                return(
                    <>
                    <div>R${el.price}</div>
                  
                    </>
                )
              }): ''}
                </Itens>
               */}
              
         </ContainerMenu>

             <ContainerMedidas>

             {loadingSabores?
            <>
            {selectSabores(el.id_product)? 
            <>
          
             {selectSabores(el.id_product).map((el)=>{
                return(
                    <>
                   <MedidasSabores
                   colorSabores ={colorSabores}
                   sizeSabores={sizeSabores}
                    corTextoSabores ={corTextoSabores}
                    fontFamilySabores={fontFamilySabores}
                    sabores={true}
>
                 {el.title_flavors}
                    </MedidasSabores> 
                    </>
                )
            })}
            </> : ''}
           
            </>
             : ''}
                </ContainerMedidas> 
                {selectSabores(el.id_product)? <ContainerMedidas>
                <Divisor/>
                </ContainerMedidas> :'' }
                
             
        
               <ContainerMedidas  priceSize={priceSize}>
               {loading? getPrice(el.id_product).map((el)=>{
                  return(
                      <>
                    <MedidasSabores
                    colorPrice={colorPrice} 
                    priceSize={priceSize}
                    fontFamily={fontFamilyPrice}
                    corTextoPrice={corTextoPrice}
                    priceCor={true}>{el.measures_title}-R$ {el.price}</MedidasSabores>
                  
                    </>
                )
            }): ''}
                </ContainerMedidas> 
                <ContainerMedidas>
                <Divisor/>
                </ContainerMedidas>
         <ItensDescription 
         font={fontFamilyDescription} color={colorDescription} 
         size={sizeDescription}>
            {el.products_description}
           
            </ItensDescription>
            <ContainerMedidas>
                <Divisor/>
                </ContainerMedidas>
            <ItensDescription
            color={colorDescription}
            size={sizeDescription}
            font={fontFamilyDescription}
            >
              
                {loadingObservacoes ? 
                <>
                {getObservacoes(el.id_product)? 
                
                getObservacoes(el.id_product).map((el)=>{
                    return(
                        <>
                        <div>{el.observations_title}</div>
                        <ContainerMedidas>
                <Divisor/>
                </ContainerMedidas>
                        </>

                    )
                })
                
                
                : ''}
               
                </> :''}


            </ItensDescription>
    
        
              
              </ContainerMenuInner>
          
            
            
            </ContainerItensTotal>
            </>
        )})}
        </> : 'vazio'} 
        </Containers>     
        </ContainerConfigs>

            <ContainerFooter colorFooter={colorFooter} font={fontRodape} sizeFooter={footerSize} textColorFooter={colorTextFooter}>
                <div>
                <div>Nosso site</div> 
                <div>{textSite}</div>
                </div>
                <div>
                    <div>Telefone</div>
                    <div>{textPhone}</div>

                </div>
            </ContainerFooter>
        </Container>

          
          
           
           
        
        </ContainerTotal>
        </>
    )
}

export default Menu;