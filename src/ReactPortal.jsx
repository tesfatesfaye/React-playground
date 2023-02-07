import {createPortal} from 'react-dom'
 

function createWrapperAndAppendToBody(wrapperId){
    const wrapperElement=document.createElement('div')
    wrapperElement.setAttribute('id',wrapperId)
    document.body.append(wrapperElement)
    return wrapperElement
}

const ReactPortal=({children,wrapperId="react-portal-wrapper"})=>{
    let element=document.querySelector(wrapperId)
    if(!element){
        element=createWrapperAndAppendToBody(wrapperId)
    }
    return createPortal(children,element)
}
export default ReactPortal