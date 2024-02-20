import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Section.css"

const Header = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1181281/pexels-photo-1181281.jpeg "
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
      <div>
        <h1 style={{ textAlign: "center", color: "blue" }}>
          About Us
        </h1>
        <br />
        <section class="container">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo sapien ut velit gravida, nec fermentum ipsum commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut ut bibendum purus.
            Rebuilt with React
            React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.

            As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React.
            <br />
            <br />
            <button class="my-button">Learn More</button>
          </h3>
          <img src="https://images.pexels.com/photos/2764993/pexels-photo-2764993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 1" />
        </section>
      </div>
      <br />
      <br />
    </div>

  )
}

export default Header
