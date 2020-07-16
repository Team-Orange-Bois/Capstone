import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import * as Tone from 'tone'
import {newParts} from '../components/BeetMaker2'

export default function OurDumbModal() {
  const [show, setShow] = useState(true)

  const handleClose = async () => {
    if (newParts.context.state !== 'running') {
      console.log('beginning of startloop', newParts.context.state)
      console.log('beginning of startloop', Tone.context.state)
      await Tone.start()
      await newParts.context.resume()
    }
    console.log('beginning of startloop', newParts.context.state)
    console.log('beginning of startloop', Tone.context.state)
    setShow(false)
  }
  const handleShow = () => setShow(true)
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            I'm Dumb...
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>Butts!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
