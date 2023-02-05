import './App.css'
import { useState,useRef,useEffect } from 'react'
import { DragDropContext,Droppable ,Draggable} from 'react-beautiful-dnd'
function App() {
  const app=useRef(null)
  const[hover,setHover]=useState(false)
  const [down,setDown]=useState("")
  const toggleHover=(value)=>{
    setHover(value)
    console.log(hover)
  } 
   const toggleMouseDown=(value)=>{
      setDown(value)
      console.log(value)
  }


  useEffect(()=>{
    if(hover===false && down==='mousedown'){
         app.current.click()
     toggleMouseDown('mouseup')
    }
    console.log(hover)


  },[hover])
  const cast = [

    {
      id: 'homer',
      name: 'homer'
    },
    {
      id: 'Marge',
      name: 'Marge'
    },
    {
      id: 'Bart',
      name: 'Bart'
    },
    {
      id: 'Lisa',
      name: 'Lisa'
    },
    {
      id: 'Maggie',
      name: 'Maggie'
    }]

    useEffect(()=>{

    },[])

    const [characters,setCharacters]=useState(cast)
    
    const handleOnDragEnd=(result)=>{
      if(!result.destination) return '';
       const items=[...characters]
      const [holder]=items.splice(result.source.index,1);
      items.splice(result.destination.index,0,holder)
      setCharacters(items)
      
    }


  return (
    <div className="App" ref={app}>
     <h1>The cast of the simpsons</h1>
     <DragDropContext onDragEnd={handleOnDragEnd}   >
        <Droppable droppableId='characters'  >
          {(provided)=>{
             return( <ul className='characters'{...provided.droppableProps} ref={provided.innerRef} 
              
             onMouseDown={()=>toggleMouseDown('mousedown')} onMouseUp={()=>toggleMouseDown('mouseup')} >
              {characters.map((x,i) => {

                return (
                <Draggable key={x.id} draggableId={x.id} index={i}  isDragDisabled={hover ? false : true}>
                  {(prov)=>(
                  
                        <li className='cast'{...prov.draggableProps} {...prov.dragHandleProps} ref={prov.innerRef} 
                       
                        >
                          <div className='divxx' onMouseEnter={()=>toggleHover(true)}  onMouseLeave={()=>toggleHover(false)}> xx</div>
                     {x.name}
                     </li>

                  )}
                 
                </Draggable>
                )
              })}

              {provided.placeholder}
            </ul>
             )
          }}
         
        </Droppable>
       
     </DragDropContext>
   <h4>hellothere</h4>


    </div>
  )
}

export default App
