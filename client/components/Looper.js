import React, {useEffect} from 'react'
import {Draggable, Droppable} from '@shopify/draggable'

export default function LoopStation() {
  useEffect(() => {
    let divParent = document.querySelectorAll('.dropzoneContainer')

    const draggable = new Droppable(divParent, {
      draggable: 'button',
      dropzone: '.dropzoneContainer'
    })

    let initialDropzone = null
    let clonedNode = null
    let originalNode = null

    function dragStart(e) {
      // Record the initial dropzone because we want to use it in droppable:dropped.
      initialDropzone = e.data.dropzone

      // Clone the source node and insert after the original node. Adding a class for
      // some styling.
      originalNode = e.data.dragEvent.data.source
      clonedNode = originalNode.cloneNode(true)
      originalNode.classList.add('draggable-clone')
      originalNode.parentNode.insertBefore(clonedNode, originalNode.nextSibling)
    }

    function dragDropped(e) {
      if (!clonedNode) return

      // If the current dropzone is our initial one, then hide the cloned Node
      // because otherwise you have the cloned node plus the dropped node.
      const dropzone = e.data.dropzone
      if (initialDropzone === dropzone) {
        clonedNode.style.display = 'none'
      } else {
        originalNode.setAttribute('class', 'loopStationButt')
      }
    }

    draggable.on('droppable:start', dragStart)
    draggable.on('droppable:returned', () => console.log('droppable:returned'))
    draggable.on('drag:start', () => console.log('drag:start'))
    draggable.on('drag:move', () => console.log('drag:move'))
    draggable.on('drag:stop', () => console.log('drag:stop'))
    draggable.on('drag:over:container', () =>
      console.log('drag:over:container')
    )
    draggable.on('droppable:dropped', dragDropped)

    // const dragHolder = new Draggable(document.getElementById('dragTest'))
  })

  const samplerArr = [
    '0:0:0',
    '0:0:0.5',
    '0:0:1',
    '0:0:1.5',
    '0:0:2',
    '0:0:2.5',
    '0:0:3',
    '0:0:3.5',
    '0:1:0',
    '0:1:0.5',
    '0:1:1',
    '0:1:1.5',
    '0:1:2',
    '0:1:2.5',
    '0:1:3',
    '0:1:3.5',
    '0:2:0',
    '0:2:0.5',
    '0:2:1',
    '0:2:1.5',
    '0:2:2',
    '0:2:2.5',
    '0:2:3',
    '0:2:3.5',
    '0:3:0',
    '0:3:0.5',
    '0:3:1',
    '0:3:1.5',
    '0:3:2',
    '0:3:2.5',
    '0:3:3',
    '0:3:3.5'
  ]

  return (
    <>
      <h1 style={{color: '#FE1BCB'}}>Loop Station</h1>
      <div
        id="dragTest"
        // className="dropzoneContainer"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '80vw',
          height: '50px',
          backgroundColor: 'pink'
        }}
      >
        {samplerArr.map(x => (
          <div
            style={{
              height: '100%',
              backgroundColor: 'black',
              width: '20px',
              margin: '1px'
            }}
            className={(x, 'dropzoneContainer')}
          ></div>
        ))}
      </div>
    </>
  )
}
