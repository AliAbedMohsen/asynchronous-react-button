
/** 
 * React Component: LoaderWrapper
 *
 * @author  Ali Mohsen
 * @version 0.1.0, 30/06/2022
 * @since   now
 */

 import React from "react";
 import { LoaderWrapperProps} from './interfaces'
 export default (props:LoaderWrapperProps)=>{
     
     return(
         <div className="__asynchronouts-react-button__loader-wrapper">
             {props.children}
         </div>
     )
 }
 
 
 