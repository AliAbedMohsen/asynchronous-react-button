declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

declare module globalThis {
    var IS_REACT_ACT_ENVIRONMENT= boolean
}
