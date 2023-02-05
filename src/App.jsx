import './App.css'
import { useState } from 'react'
import { DragDropContext,Droppable ,Draggable} from 'react-beautiful-dnd'
function App() {

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

    const [characters,setCharacters]=useState(cast)
    
    const handleOnDragEnd=(result)=>{
      if(result.destination) return '';
      console.log(result.destination.index)
      const items=[...characters]
      const [holder]=items.splice(result.source.index,1);
      items.splice(result.destination.index,0,holder)
      setCharacters(items)
    
    }


  return (
    <div className="App">
     <h1>The cast of the simpsons</h1>
     <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='characters' className='droppable'>
          {(provided)=>{
             return( <ul className='characters'{...provided.droppableProps} ref={provided.innerRef}>
              {characters.map((x,i) => {

                return (
                <Draggable key={x.id} draggableId={x.id} index={i}>
                  {(prov)=>(
                        <li className='cast'{...prov.draggableProps} {...prov.dragHandleProps} ref={prov.innerRef} >
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
