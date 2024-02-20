import React from 'react'
import './Images.css'

const Images = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>
                Our Products
            </h1>
            <br />
            <section class="images">
                <img src="https://images.pexels.com/photos/4709286/pexels-photo-4709286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 1" />
                <img src="https://images.pexels.com/photos/4709286/pexels-photo-4709286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 2" />
                <img src="https://images.pexels.com/photos/4709286/pexels-photo-4709286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 3" />
                <img src="https://images.pexels.com/photos/4709286/pexels-photo-4709286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 4" />
            </section>
        </div>

    )
}

export default Images