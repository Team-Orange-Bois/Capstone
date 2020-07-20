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
      <img
        src="./SiqBeets_Large.png"
        style={{width: '250px', height: '250px', marginTop: '30px'}}
      />
      <Carousel fade={true}>
        <Carousel.Item>
          <Nav.Link href="/beetmaker">
            <div
              style={{display: 'flex', flexDirection: 'column', width: '500px'}}
            >
              <p>
                The Playground is a place for you to get acquainted with the
                many sound possibilities available to you. Choose your own
                settings on the drum machine and jam away. Once you have enough
                practice in and want to lay down your own siq beet head on over
                to the Beet Maker!
              </p>
              <img
                className="d-block w-100"
                src="./Beetmaker1.png"
                alt="First slide"
              />
            </div>
            <Carousel.Caption>
              <h2>The Playground</h2>
              <p>Plant a seedling beet</p>
            </Carousel.Caption>
          </Nav.Link>
        </Carousel.Item>
        <Carousel.Item>
          <Nav.Link href="/beetmaker2">
            <div
              style={{display: 'flex', flexDirection: 'column', width: '500px'}}
            >
              <p>
                Beet Maker is when it gets real! It's time to record actual
                songs! Take some time to practice and when you have a song that
                you like save it!
              </p>
              <img
                className="d-block w-100"
                src="./Beetmaker2.png"
                alt="Second slide"
              />
            </div>
            <Carousel.Caption>
              <h2>Beet Maker</h2>
              <p>Lettuce turnip da beet</p>
            </Carousel.Caption>
          </Nav.Link>
        </Carousel.Item>
        {/* <Carousel.Item>
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
        </Carousel.Item> */}
      </Carousel>
    </div>
  )
}
