
/** 
 * React Component: AsynchronousReactButton
 *
 * @author  Ali Mohsen
 * @version 0.1.0, 30/06/2022
 * @since   now
 */

import React, {  useRef, useState } from 'react'
import {AsynchronousReactButtonProps } from './interfaces'
import LabelWrapper from './LabelWrapper';
import LoaderWrapper from './LoaderWrapper';
const DefaultProps = {
  loader:<span>loading..</span>,
  forceDisable:false,
};

export const AsynchronousReactButton: React.FC<AsynchronousReactButtonProps> =  ( props ) => {
  
    const {
      onClick,
      btnClass,
      btnStyle, 
      loader, 
      label, 
      icon,
      forceDisable,
    }= props
    
    const ref= useRef<HTMLDivElement>(null)
    const [disabled, setDisabled] = useState(false)

    const resolveIcon= () => {
      if(typeof icon==="function") {
        
        return (
          icon(
            {
              isLoading:disabled
            }
          )
        )
      
      }

      return <></>

    }

    const resolveLabel=()=> {

       if(typeof label==="function") {
        
          return (
            label(
              {
                isLoading:disabled
              }
            )
          )
        
       }

       return !disabled? <>{label}</> : <>{null}</>
    } 

    const resolveLoader=()=> {

      if(typeof loader==="function") {
       
         return (
           loader(
             {
               isLoading:disabled
             }
           )
         )
       
      }

      return <>{loader}</>

    } 

    const releaseButton= ():any => {
      setDisabled(false)
    }

    const lockButton= ():any => {
      setDisabled(true)
    }
    
    const _onClick= (event: { preventDefault: () => void })=>{
        event.preventDefault()
        passClick()
    }
    
    const passClick=() => {
      lockButton()
      onClick(releaseButton)
    }

    let isDisabled: boolean | undefined;

    isDisabled= disabled? disabled : forceDisable? forceDisable: false
    
    return (
       
        <div ref={ref} className={'__asynchronous-react-button__wrapper'} >
            {
              disabled?
                <LoaderWrapper>{resolveLoader()}</LoaderWrapper>
              : null
            }


            <button 
                  className={btnClass || '__asynchronous-react-button__button'} 
                  style={btnStyle}
                  disabled={isDisabled}  
                  onClick={_onClick}
            >
                

                {                 
                    <LabelWrapper>
                        
                      {  resolveIcon() }

                      { resolveLabel()}

                    </LabelWrapper>
                  
                }

                
            </button> 


        </div>
   	
   	) 
}

AsynchronousReactButton.defaultProps = DefaultProps

export default AsynchronousReactButton