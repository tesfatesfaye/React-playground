import './App.css'
import react ,{useState}from 'react'
import Modal from './Modal'
function App() {
  const [isOpen,setIsOpen]=useState(false)
  const onClose=()=>{
    setIsOpen(false)
  }
 const BUTTON_WRAPPER_STYLES={
  position: 'relative',
  zIndex:1
 }
 const OTHER_CONTENT_STYLES={
  position:'relative',
  zIndex:2,
  backgroundColor:'red', 
  padding:'10px'
 }
  return (
   <>
     
      <div style={BUTTON_WRAPPER_STYLES}>
       
        <button onClick={()=>setIsOpen(true)}>Open Modal</button>

      <Modal open={isOpen} onClose={onClose}>
        Fancy Modal
      </Modal>



      </div>
     
      <div style={OTHER_CONTENT_STYLES}>
          other content 
        </div>
    </>
  )
}

export default App
