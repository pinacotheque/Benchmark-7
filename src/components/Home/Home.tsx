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
    const [music, setMusic] = useState<types[]>([])

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
      }
      
        const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            console.log('search')
            try {
                let response = await fetch (`https://striveschool-api.herokuapp.com/api/deezer/search?q=`)
                let data = await response.json()
                let musics = await data.data
                console.log('musics',musics)
                if(response.ok){
                    setMusic(musics)
                 
                    await console.log('state music',music)
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
        
        </Form>
      
    </div>

    </>
    )
}
export default Home