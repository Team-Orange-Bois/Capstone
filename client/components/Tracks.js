import React, {useState, useEffect} from 'react'
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'
import uuid from 'uuid/v4'
import {connect} from 'react-redux'
import {setSamplesThunk} from '../store/sampler'
import {newParts} from './BeetMaker2'

const columnsFromBackend = {
  '0:0:0': {
    items: []
  },
  '0:0:0.5': {
    items: []
  },
  '0:0:1': {
    items: []
  },
  '0:0:1.5': {
    items: []
  },
  '0:0:2': {
    items: []
  },
  '0:0:2.5': {
    items: []
  },
  '0:0:3': {
    items: []
  },
  '0:0:3.5': {
    items: []
  },
  '0:1:0': {
    items: []
  },
  '0:1:0.5': {
    items: []
  },
  '0:1:1': {
    items: []
  },
  '0:1:1.5': {
    items: []
  },
  '0:1:2': {
    items: []
  },
  '0:1:2.5': {
    items: []
  },
  '0:1:3': {
    items: []
  },
  '0:1:3.5': {
    items: []
  },
  '0:2:0': {
    items: []
  },
  '0:2:0.5': {
    items: []
  },
  '0:2:1': {
    items: []
  },
  '0:2:1.5': {
    items: []
  },
  '0:2:2': {
    items: []
  },
  '0:2:2.5': {
    items: []
  },
  '0:2:3': {
    items: []
  },
  '0:2:3.5': {
    items: []
  },
  '0:3:0': {
    items: []
  },
  '0:3:0.5': {
    items: []
  },
  '0:3:1': {
    items: []
  },
  '0:3:1.5': {
    items: []
  },
  '0:3:2': {
    items: []
  },
  '0:3:2.5': {
    items: []
  },
  '0:3:3': {
    items: []
  },
  '0:3:3.5': {
    items: []
  },
  '1:0:0': {
    items: []
  },
  '1:0:0.5': {
    items: []
  },
  '1:0:1': {
    items: []
  },
  '1:0:1.5': {
    items: []
  },
  '1:0:2': {
    items: []
  },
  '1:0:2.5': {
    items: []
  },
  '1:0:3': {
    items: []
  },
  '1:0:3.5': {
    items: []
  },
  '1:1:0': {
    items: []
  },
  '1:1:0.5': {
    items: []
  },
  '1:1:1': {
    items: []
  },
  '1:1:1.5': {
    items: []
  },
  '1:1:2': {
    items: []
  },
  '1:1:2.5': {
    items: []
  },
  '1:1:3': {
    items: []
  },
  '1:1:3.5': {
    items: []
  },
  '1:2:0': {
    items: []
  },
  '1:2:0.5': {
    items: []
  },
  '1:2:1': {
    items: []
  },
  '1:2:1.5': {
    items: []
  },
  '1:2:2': {
    items: []
  },
  '1:2:2.5': {
    items: []
  },
  '1:2:3': {
    items: []
  },
  '1:2:3.5': {
    items: []
  },
  '1:3:0': {
    items: []
  },
  '1:3:0.5': {
    items: []
  },
  '1:3:1': {
    items: []
  },
  '1:3:1.5': {
    items: []
  },
  '1:3:2': {
    items: []
  },
  '1:3:2.5': {
    items: []
  },
  '1:3:3': {
    items: []
  },
  '1:3:3.5': {
    items: []
  },
  '2:0:0': {
    items: []
  },
  '2:0:0.5': {
    items: []
  },
  '2:0:1': {
    items: []
  },
  '2:0:1.5': {
    items: []
  },
  '2:0:2': {
    items: []
  },
  '2:0:2.5': {
    items: []
  },
  '2:0:3': {
    items: []
  },
  '2:0:3.5': {
    items: []
  },
  '2:1:0': {
    items: []
  },
  '2:1:0.5': {
    items: []
  },
  '2:1:1': {
    items: []
  },
  '2:1:1.5': {
    items: []
  },
  '2:1:2': {
    items: []
  },
  '2:1:2.5': {
    items: []
  },
  '2:1:3': {
    items: []
  },
  '2:1:3.5': {
    items: []
  },
  '2:2:0': {
    items: []
  },
  '2:2:0.5': {
    items: []
  },
  '2:2:1': {
    items: []
  },
  '2:2:1.5': {
    items: []
  },
  '2:2:2': {
    items: []
  },
  '2:2:2.5': {
    items: []
  },
  '2:2:3': {
    items: []
  },
  '2:2:3.5': {
    items: []
  },
  '2:3:0': {
    items: []
  },
  '2:3:0.5': {
    items: []
  },
  '2:3:1': {
    items: []
  },
  '2:3:1.5': {
    items: []
  },
  '2:3:2': {
    items: []
  },
  '2:3:2.5': {
    items: []
  },
  '2:3:3': {
    items: []
  },
  '2:3:3.5': {
    items: []
  },
  '3:0:0': {
    items: []
  },
  '3:0:0.5': {
    items: []
  },
  '3:0:1': {
    items: []
  },
  '3:0:1.5': {
    items: []
  },
  '3:0:2': {
    items: []
  },
  '3:0:2.5': {
    items: []
  },
  '3:0:3': {
    items: []
  },
  '3:0:3.5': {
    items: []
  },
  '3:1:0': {
    items: []
  },
  '3:1:0.5': {
    items: []
  },
  '3:1:1': {
    items: []
  },
  '3:1:1.5': {
    items: []
  },
  '3:1:2': {
    items: []
  },
  '3:1:2.5': {
    items: []
  },
  '3:1:3': {
    items: []
  },
  '3:1:3.5': {
    items: []
  },
  '3:2:0': {
    items: []
  },
  '3:2:0.5': {
    items: []
  },
  '3:2:1': {
    items: []
  },
  '3:2:1.5': {
    items: []
  },
  '3:2:2': {
    items: []
  },
  '3:2:2.5': {
    items: []
  },
  '3:2:3': {
    items: []
  },
  '3:2:3.5': {
    items: []
  },
  '3:3:0': {
    items: []
  },
  '3:3:0.5': {
    items: []
  },
  '3:3:1': {
    items: []
  },
  '3:3:1.5': {
    items: []
  },
  '3:3:2': {
    items: []
  },
  '3:3:2.5': {
    items: []
  },
  '3:3:3': {
    items: []
  },
  '3:3:3.5': {
    items: []
  }
}

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
  const [columns, setColumns] = useState(columnsFromBackend)
  //let samplerArr = props.samplerArr
  const {samples, setSamples} = props

  // console.log(newParts._events)
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
        <h1 style={{color: '#FE1BCB'}}>Loop Station</h1>
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
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: 'none',
                                        margin: '0 0 0 0',
                                        minHeight: '50px',
                                        width: '11px',
                                        background: snapshot.isDragging
                                          ? '#24C0F9'
                                          : '#fe34d2',
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
