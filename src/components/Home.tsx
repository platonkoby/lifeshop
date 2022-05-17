import React from 'react'
import Page from './Page'
import Card from './Card'
import '../styles/home.css'

function Home() {
  return (
        <Page>
            <div className="home">
                <h1 className='lifeshop'>lifeshop</h1>
                <Card header='What is lifeshop?'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque animi tenetur, esse ipsa alias praesentium facilis hic aliquam ea cum, quod, iusto at consequatur id.
                </Card>
                <Card header='How to setup your lifeshop?'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, facilis!
                    <ul className='card-list'>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quasi.</li>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae facilis voluptatum provident?</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                </Card>
                <Card header='Rules'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laudantium!
                    <ul className='card-list'>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                        <li>Lorem, ipsum dolor.</li>
                    </ul>
                </Card>
            </div>
        </Page>
  )
}

export default Home