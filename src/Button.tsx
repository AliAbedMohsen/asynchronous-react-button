
/** 
 * React Component: AsynchronousReactButton
 *
 * @author  Ali Mohsen
 * @version 0.1.0, 30/06/2022
 * @since   now
 */

import React, {  useRef, useState, useEffect } from 'react'
import {AsynchronousReactButtonProps } from './interfaces'
import LabelWrapper from './LabelWrapper';
import LoaderWrapper from './LoaderWrapper';
import style from './index.css'
import Dialog from './Dialog'
const WRAPPER_CLASS= style['__asynchronous-react-button__wrapper']
const BUTTON_CLASS= style['__asynchronous-react-button__button']

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
    confirm
  }= props
  
  const ref= useRef<HTMLDivElement>(null)
  const [disabled, setDisabled] = useState(false)
  const [isShown, showDialog]= useState(false)

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
  
  useEffect(()=>{
    
    // trigger the event Listener

      const handler= () => {
       
        showDialog(true)

      }
      
      const div = ref.current

      if(div ){

        div.addEventListener("ARB_CONFIRMATION_EVENT", handler);

        return ()=> div.removeEventListener("ARB_CONFIRMATION_EVENT", handler  )
      }

      return

  }, [])
  
  const onDialogAction=(bool:true|false):any => {
     if(bool){
        passClick()
     }
    
     showDialog(false)
  }

  const _onClick= (event: { preventDefault: () => void })=>{
      event.preventDefault()
      if(confirm && confirm.message){
        // let bool= window.confirm(confirm.message)
        const startEvent = new Event("ARB_CONFIRMATION_EVENT");
        if(ref.current) {
          ref.current.dispatchEvent(startEvent);
        }

        return
      }

      passClick()
  }
  
  const passClick=() => {
    lockButton()
    onClick(releaseButton)
  }

  let isDisabled: boolean | undefined;

  isDisabled= disabled? disabled : forceDisable? forceDisable: false
  
  return (
     
      <div ref={ref} className={WRAPPER_CLASS} >
          {
            disabled?
              <LoaderWrapper>{resolveLoader()}</LoaderWrapper>
            : null
          }


          <button 
                className={btnClass || BUTTON_CLASS} 
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

          <Dialog isShown={isShown} onAction={onDialogAction} message={confirm? confirm.message : null} ok="Alright" cancel="No" />

      </div>
   
   ) 
}


AsynchronousReactButton.defaultProps = DefaultProps

export default AsynchronousReactButton