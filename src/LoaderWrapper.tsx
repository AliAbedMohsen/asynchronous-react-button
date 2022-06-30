
/** 
 * React Component: LoaderWrapper
 *
 * @author  Ali Mohsen
 * @version 0.1.0, 30/06/2022
 * @since   now
 */

import React from "react";
import { LoaderWrapperProps} from './interfaces'

import style from './index.css'

const WRAPPER_CLASS= style['__asynchronouts-react-button__loader-wrapper']

export default (props:LoaderWrapperProps)=>{
     
     return(
         <div className={WRAPPER_CLASS}>
             {props.children}
         </div>
     )
}
 
 
 