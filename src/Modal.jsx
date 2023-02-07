import react from "react";
import ReactDOM from 'react-dom/client'
import ReactPortal from "./ReactPortal";


const MODAL_STYLES={
    position:'fixed',
    top:'50%',
    left:'50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor:'#FFF',
    zIndex:1000

}

const OVERLAY_STYLE={
  position:'fixed',
   top:0,
   left:0,
   right:0,
   bottom:0,
   backgroundColor:'rgba(0,0,0,.7)',
   zIndex:1000 
}
const Modal=(props)=>{
if(!props.open) return null
return( <ReactPortal wrapperId="#portal" >
    <div style={OVERLAY_STYLE}>

    </div>
    <div style={MODAL_STYLES}>
        <button onClick={props.onClose}>Close Modal</button>
        {props.children}
    </div>
   
  </ReactPortal>
 
)

}


export default Modal