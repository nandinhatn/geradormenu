import react from 'react';

import { BtnLayout} from './style'

const ButtonLayout = (props)=>{
    return(
        <>
        <BtnLayout onClick={()=> props.action()}>{props.title}</BtnLayout>

        </>
    )
}
export default ButtonLayout;