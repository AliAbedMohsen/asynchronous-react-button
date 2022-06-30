
/** 
 * React Component: LabelWrapper
 *
 * @author  Ali Mohsen
 * @version 0.1.0, 30/06/2022
 * @since   now
 */

import React from "react";
import { LabelWrapperProps} from './interfaces'

import style from './index.css'

const WRAPPER_CLASS= style['__asynchronouts-react-button__label-wrapper']

export default (props:LabelWrapperProps)=>{
    
    return(
        <label className={WRAPPER_CLASS}>
            {props.children}
        </label>
    )
}

