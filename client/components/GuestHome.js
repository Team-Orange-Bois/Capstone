import React from 'react'
import {Carousel, Nav} from 'react-bootstrap'

export default function GuestHome() {
  return (
    <div
      className="outercontainer"
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#490769',
        height: '100vh'
      }}
    >
      <h1 style={{color: '#FE1BCB'}}>Welcome!</h1>
      <Carousel>
        <Carousel.Item>
          <Nav.Link href="/beetmaker">
            <img
              className="d-block w-100"
              src="./Beetmaker1.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Beetmaker 1</h3>
              <p>Plant a seedling beet</p>
            </Carousel.Caption>
          </Nav.Link>
        </Carousel.Item>
        <Carousel.Item>
          <Nav.Link href="/beetmaker2">
            <img
              className="d-block w-100"
              src="./Beetmaker2.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Beetmaker 2</h3>
              <p>Lettuce turnip da beet</p>
            </Carousel.Caption>
          </Nav.Link>
        </Carousel.Item>
        <Carousel.Item>
          <Nav.Link href="/beetdropper">
            <img
              className="d-block w-100"
              src="./Beetdropper.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Beetdropper</h3>
              <p>Drop siq beets</p>
            </Carousel.Caption>
          </Nav.Link>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
