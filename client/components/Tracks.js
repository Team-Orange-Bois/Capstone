import React, {useState, useEffect} from 'react'
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'
import uuid from 'uuid/v4'
import {connect} from 'react-redux'
import {setSamplesThunk} from '../store/sampler'
import {dragFrom} from './DragFrom'
//import {newParts} from './BeetMaker2'

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return
  const {source, destination} = result

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId]
    const destColumn = columns[destination.droppableId]
    const sourceItems = [...sourceColumn.items]
    const destItems = [...destColumn.items]
    const [removed] = sourceItems.splice(source.index, 1)
    destItems.splice(destination.index, 0, removed)
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    })
  } else {
    const column = columns[source.droppableId]
    const copiedItems = [...column.items]
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    })
  }
}

export function Tracks(props) {
  const [columns, setColumns] = useState(dragFrom)

  const {samples, setSamples} = props

  useEffect(() => {
    if (samples && samples.length && columns['3:3:3.5']) {
      samples.map(sample => {
        if (!columns[sample.time].items.includes(sample)) {
          columns[sample.time].items = [...columns[sample.time].items, sample]
        }
      })
    } else {
      Object.keys(columns).forEach(key => {
        columns[key].items = []
      })
    }
    setColumns({...columns})
  }, [samples])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        marginTop: '10px'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h1 style={{color: '#FE1BCB'}}>Visualizer</h1>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          height: '100%'
        }}
      >
        <DragDropContext
          onDragEnd={result => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
                key={columnId + 'column'}
              >
                <div>
                  <Droppable
                    droppableId={columnId + 'column'}
                    key={columnId + 'column'}
                  >
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            // background: snapshot.isDraggingOver
                            //   ? 'lightblue'
                            //   : 'lightgrey',
                            background: '#35054C',
                            width: 12,
                            minHeight: '52px',
                            border: '1px solid',
                            borderColor: '#24c0f9',
                            borderRightStyle: 'dotted',
                            borderLeftStyle: 'dotted'
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={`${[uuid()]} ${item.time}`}
                                draggableId={`${[uuid()]}`}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      id={`${item.key}`}
                                      className="butts"
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: 'none',
                                        margin: '0 0 0 0',
                                        height: '50px',
                                        width: '11px',
                                        padding: '0',
                                        // background: snapshot.isDragging
                                        //   ? '#24C0F9'
                                        //   : '#fe34d2',
                                        color: 'white',
                                        ...provided.draggableProps.style
                                      }}
                                    >
                                      {/* {item.content} */}
                                    </div>
                                  )
                                }}
                              </Draggable>
                            )
                          })}
                          {provided.placeholder}
                        </div>
                      )
                    }}
                  </Droppable>
                </div>
              </div>
            )
          })}
        </DragDropContext>
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    samples: state.samples
  }
}

const mapDispatch = dispatch => {
  return {
    setSamples: sample => dispatch(setSamplesThunk(sample))
  }
}

export default connect(mapState, mapDispatch)(Tracks)
