import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link,useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useParams } from 'react-router'
import { ProfileContainer } from '../containers/ProfileContainer'

const Button = styled.button`
width : 5em;
height : 2em;
border : 1px solid turqoise;
`;
const Container = styled.section`
display : flex;
flex-direction : column;
align-items : center;`;
export function ProfilePage() {
    const { id } = useParams()
    const history = useHistory()
    const [data, setData] = useState({})
    function handleDelete() {
        axios.delete(`https://backend-project0904.herokuapp.com/api/profiles/${id}`)
            .then(res => {
                history.push('/')
            })
        .catch(err => console.log(err.message))
    }
    function handleUpdate() {
        history.push(`/update-profile/${id}`)
    }
    useEffect(() => {
        axios.get(`https://backend-project0904.herokuapp.com/api/profiles/${id}`)
            .then(res => {
            setData(res.data)
            })
        .catch(err => console.log(err))
        
    })
    
    
    return data &&<Container>
        <ProfileContainer data={data} />
        <Button onClick = {handleUpdate}>Update</Button>
        <Button onClick = {handleDelete}>Delete</Button>
        </Container>
}