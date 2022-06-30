
/** 
 * React Component: LabelWrapper
 *
 * @author  Ali Mohsen
 * @version 0.1.0, 30/06/2022
 * @since   now
 */

import React from "react";
import { LabelWrapperProps} from './interfaces'
export default (props:LabelWrapperProps)=>{
    
    return(
        <label className="__asynchronouts-react-button__label-wrapper">
            {props.children}
        </label>
    )
}

