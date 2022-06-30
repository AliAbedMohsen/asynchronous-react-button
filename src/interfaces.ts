
export type FnReturnsAny= ()=> any

export type CustomLoader = (props:{isLoading:false|true}) => JSX.Element;// React.ElementType | undefined
export type CustomLabel = (props:{isLoading:false|true}) => JSX.Element;//React.ComponentType<{isHidden: true|false}>  
export type CustomIcon = (props:{isLoading:false|true}) => JSX.Element;//React.ComponentType<{isHidden: true|false}>  

export type CSSObject = { [key: string]: string; }

export  interface AsynchronousReactButtonProps {
    onClick(releaseButton:FnReturnsAny): any;
    btnStyle?:CSSObject;
    loader?:JSX.Element|string|CustomLoader;
    label: JSX.Element|string|CustomLabel;
    icon?: JSX.Element|string|CustomIcon;
    btnClass?:string;
    disabledBtnColor?:string;
    normalBtnColor?:string;
    forceDisable?: false|true|undefined,
    children?:JSX.Element | JSX.Element[] ;//React.ReactNode,
    confirm?:{message:string, ok?:string, cancel?:string} | undefined

    
}

export interface LoaderWrapperProps {
    children:JSX.Element | JSX.Element[];
}

export interface LabelWrapperProps {
    children:JSX.Element | JSX.Element[];
}