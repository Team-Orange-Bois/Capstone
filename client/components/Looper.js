import React from 'react'
import {Draggable} from '@shopify/draggable'

class LoopStation extends React.Component {
  componentDidMount() {
    let divParent = document.getElementById('sampleParent')
    const draggable = new Draggable(divParent, {draggable: 'button'})

    draggable.on('drag:start', () => console.log('drag:start'))
    draggable.on('drag:move', () => console.log('drag:move'))
    draggable.on('drag:stop', () => console.log('drag:stop'))
    draggable.on('drag:over:container', () =>
      console.log('drag:over:container')
    )

    const dragHolder = new Draggable(document.getElementById('dragTest'))
  }

  render() {
    return (
      <>
        <h1 style={{color: '#FE1BCB'}}>Loop Station</h1>
        <div
          id="dragTest"
          style={{width: '80vw', height: '50px', backgroundColor: 'pink'}}
        >
          Put Loops Here
        </div>
      </>
    )
  }
}

export default LoopStation
