import {Form,Container, Button,Card, Nav,  NavDropdown,  FormControl, Navbar} from 'react-bootstrap'
import React, { useEffect, useState} from 'react';
import styles from './Home.module.css'
import { ChangeEvent, FormEvent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import types from '../../types/types'

// interface HomeComponents{
//     album :string
// }


const Home = ({history , location} : RouteComponentProps  ) => {
    
    const [city, setCity] = useState('')
    const [daySelected, setdaySelected] = useState(0)
    const [music, setMusic] = useState<types[]>([])

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
      }
      
        const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            console.log('search')
            try {
                let response = await fetch (`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${daySelected}&appid=${process.env.WEATHER_API_KEY}`)
                let data = await response.json()
                let weather = await data.data
                console.log('musics',weather)
                if(response.ok){
                    setMusic(weather)
                    await console.log('state weather',weather)
                } else{
                    console.log('fetch error')
                }
            } catch (error) {
                console.log(error)
            }
         
    
        }
    return(
    <>
    <div className={styles.header}>
        
        <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Enter city</Form.Label>
            <Form.Control value={city} placeholder="City" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select days showing</Form.Label>
            <Form.Control as="select" value= {daySelected}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </Form.Control>
        </Form.Group>
        
        </Form>
      
    </div>

    </>
    )
}
export default Home