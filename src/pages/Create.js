import React, {useState} from 'react'
import {Row , Col ,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import styled from 'styled-components';
import axios from 'axios'
import { useHistory } from 'react-router';

const Container = styled.div`
  width: 75vw;
  height: 75vh;
  margin: 100px auto;
`;

export default function Create(props) {
    const history = useHistory()
    const [formData, setFormData] = useState({
        FirstName: '',
        MiddleName: '',
        LastName: '',
        Gender : '',
        EmploymentType: '',
        DateOfBirth: '',
        MonthlyIncome : '',
    })
    function handleSubmit(e) {
        e.preventDefault()
        axios.post('https://backend-project0904.herokuapp.com/api/profiles/',formData)
            .then(res => {
                setFormData({
                    FirstName: '',
                    MiddleName: '',
                    LastName: '',
                    Gender: '',
                    EmploymentType: '',
                    DateOfBirth: '',
                    MonthlyIncome: '',
                }
                )
                history.push('/')
            })
            .catch(err => {
            console.log(err.message)
        })
    }

    function handleChange(e) {
        const {name,value} = e.target
        setFormData(prevData => {
            return {...prevData, [name] : value}
        })
    }
    return<Container>
 <Form onSubmit = {e=>handleSubmit(e)}>
        <Row>
        <Col md = {4}>
        <FormGroup>
        <Label for="FirstName">First Name</Label>
                        <Input type="text" name="FirstName" id="FirstName" placeholder="First Name"
                            value={formData.FirstName}
        onChange = {e=>handleChange(e)}                />
        </FormGroup>
        </Col>
        <Col md = {4}>
        <FormGroup>
        <Label for="MiddleName">Middle Name</Label>
                        <Input type="text" name="MiddleName" id="MiddleName" placeholder="Middle Name"
                            value={formData.MiddleName}
                            onChange={e => handleChange(e)}/>
        </FormGroup>
        </Col >
        <Col md = {4}>
        <FormGroup>
        <Label for="LastName">Last Name</Label>
                        <Input type="text" name="LastName" id="LastName" placeholder="Last Name"
        value={formData.LastName}
                            onChange={e => handleChange(e)}
                        />
        </FormGroup>
        </Col>
        </Row>
            <Row>
                <Col>
                <FormGroup>
            <Label for="MonthlyIncome">Monthly Income</Label>
                        <Input type="number" name="MonthlyIncome" id="MonthlyIncome" placeholder="monthly income"
                        value={formData.MonthlyIncome}
                            onChange={e => handleChange(e)}
                        />
        </FormGroup>
                </Col>
                <Col>
                <FormGroup>
        <Label for="Gender">Gender</Label>
                        <Input type="select" name="Gender" id="Gender" onChange={e => handleChange(e)}>
                            <option disabled selected value> -- select an option -- </option>
          <option value = "Male">Male</option>
          <option value = "Female">Female</option>
        </Input>
         </FormGroup>
                </Col>
                <Col>
                <FormGroup>
        <Label for="Employment Type">Employment Type</Label>
                        <Input type="select" name="EmploymentType" id="EmploymentType" onChange={e => handleChange(e)}>
           <option disabled selected value> -- select an option -- </option>
            <option value="Salaried">Salaried</option>
          <option value = "Non-Salaried">Non-Salaried</option>
        </Input>
      </FormGroup>
        </Col>
            </Row>
            <Row>
                <Col md = {6}>
                    <FormGroup>
            <Label for="DateOfBirth">D.O.B</Label>
                        <Input type="date" name="DateOfBirth" id="DateOfBirth" placeholder="Date Of Birth"
                        value={formData.DateOfBirth}
                            onChange={e => handleChange(e)}
                        />
        </FormGroup>
                
                </Col>
        </Row>
        <Button>Submit</Button>
    </Form>
    </Container>
   
}