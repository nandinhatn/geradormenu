import react, {useState} from 'react';

import {Select} from './style'

const ChangeFonts= (props)=>{

   
    return(
        <>
        <Select onChange={(e)=> props.changeFont(e.target.value) }>
    <option value={"Dancing Script, cursive"}>Fonte 1</option>
    <option value={"Dosis, sans-serif"}>Fonte 2</option>
    <option value={"Kalam, cursive"}>Fonte 3</option>
    <option value={"Roboto, sans-serif"}>Fonte 4</option>
    <option value={"Sacramento, cursive"}>Fonte 5</option>
    <option value={"Satisfy, cursive"}>Fonte 6</option>
    <option value={"Shadows Into Light, cursive"}>Fonte 7</option>
    <option value={"Cambria, sans-serif"}>Fonte 8</option>
    <option value={"Arial, sans-serif"}>Fonte 9</option>
    <option value={"Verdana, sans-serif"}>Fonte 10</option>
    <option value={"Borel, cursive"}>Fonte 11</option>
    <option value={"Comic Neue, cursive"}>Fonte 12</option>
    <option value={"Courgette, cursive"}>Fonte 13</option>
   {/*  <option value={"Delius, cursive"}>Fonte 14</option> */}
    <option value={"Dosis, sans-serif"}>Fonte 14</option>
    <option value={"Englebert, sans-serif"}>Fonte 15</option>
    <option value={"Satisfy, cursive"}>Fonte 16</option>
    <option value={"Shadows Into Light, cursive"}>Fonte 17</option>
    <option value={"Sriracha, cursive"}>Fonte 18</option>
    <option value={"Courgette, cursive"}>Fonte 19</option>
    <option value={"Delius, cursive"}>Fonte 20</option>
    <option value={"Englebert, sans-serif"}>Fonte 21</option>
    <option value={"Gluten, cursive"}>Fonte 22</option>
    <option value={"Handlee, cursive"}>Fonte 23</option>
    <option value={"Norican, cursive"}>Fonte 24</option>
    <option value={"Salsa, cursive"}>Fonte 25</option>
    <option value={"Zeyada, cursive"}>Fonte 26</option>
    <option value={"Sriracha, cursive"}>Fonte 27</option>
  

   
    
</Select>
        </>
    )
}
export default  ChangeFonts