import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { GenericProfileContainer } from '../containers/GenericProfileContainer'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styles/button.css'
const Container = styled.section`
width : 80vw;
height : 80vh;
margin : 0 auto;
display : flex;
flex-wrap : wrap;
justify-content : space-between;
align-items : center;`;
const Button = styled.button`
position : fixed;
top : 20px;
right : 20px;`;
export default function Home() {
    const [data, setData] = useState([])
    const history = useHistory()
    useEffect(() => {
        axios.get('https://backend-project0904.herokuapp.com/api/profiles/')
            .then(res => {
            setData(res.data)
            })
        .catch(err => console.log(err.message))
    }, [data])
    return (
      <>
            <button className="btn-customer-service">
                <img src = "/Images/vector.svg" alt = "Telephone icon" />
          <a href="tel:555-555-4678" id = "telephone">Grahak Seva</a>
        </button>

        <Container>
          {data.map((item, index) => {
            return <GenericProfileContainer item={item} key={index} />;
          })}
        </Container>
      </>
    );
}