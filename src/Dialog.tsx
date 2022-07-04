
/** 
 * React Component: Dialog
 *
 * @author  Ali Mohsen
 * @version 0.1.0, 30/06/2022
 * @since   now
 */

import React, {useEffect, useRef, useState} from "react";

import style from  './dialog.css'

const WRP=style["__asynchronous-react-button__dialog"]
const OVERLAY=style["overlay"]
const INNER_WRP= style["inner-wrapper"]
const MSG= style["confirmation-msg"]
const B_WRP=style["btns-wrapper"]
const OK=style["ok"]
const CANCEL=style["cancel"]



export default (props:any) => {

    const {message, ok, cancel, onAction, isShown}= props
    const [blurDivStyle, setStyle]= useState({})
    const [shown, toggleDialog]= useState(isShown)
    const blurDiv= useRef(null)
 
    useEffect(()=> {
        
        calculateSize()

        window.addEventListener("resize", calculateSize);  
        
        return()=> window.removeEventListener('resize', calculateSize)

    }, [])
    
    const calculateSize= () => {
        let height= window.innerHeight
        let width= window.innerWidth
        setStyle({width:width+"px", height:height+"px"})
    }

    const onCancelHandler= ()=>{

        onAction(false)
    //    showDialog(false)
    }

    const onOkHandler = ()=> {
        onAction(true)
        // showDialog(false)
    }
    
    useEffect(()=> {toggleDialog(isShown)},  [isShown])

    return(
        <div ref={blurDiv} style={{zIndex: shown? "999": "-1", display: shown? "flex": "none", ...blurDivStyle}} className={WRP}>
            <div className={OVERLAY}></div>
            <div className={INNER_WRP}>
                <p className={MSG}>{message}</p>
                <div className={B_WRP}>
                    <button className={OK} onClick={onOkHandler}>{ok}</button>
                    <button className={CANCEL} onClick={onCancelHandler}>{cancel}</button>
                </div>
            </div>    
        </div>
    )
}

