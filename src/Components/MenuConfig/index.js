
import react, {useState, useContext, useRef, useEffect} from 'react'
import { MyContext } from '../../MyContext';

import {NavLink, useNavigate} from 'react-router-dom'
import Buttons from '../Buttons';
import {MenuOptions, Options, ContainerColors,TitleMenu, ImageThumbs,ContainerOptions} from './style'


const MenuConfig =(props)=>{

    const navigate = useNavigate();


    return(<>
    <ContainerColors>

    <TitleMenu> {props.title}</TitleMenu>
    <ContainerOptions>
      <input type='color' value={props.color} onChange={(e)=> props.changeColor(e.target.value)}/>
    

            </ContainerOptions>
    </ContainerColors>
    </>)
}

export default MenuConfig