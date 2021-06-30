import React from 'react'
import GenericProfile from '../components/GenericProfile/index'
import { Link } from 'react-router-dom'
export function GenericProfileContainer({item}) {
    return (<GenericProfile>
        <GenericProfile.Group>
            <GenericProfile.Image>
                <img src = "./images/profilePhoto.jpg" alt = "GenericProfilePhoto" />
            </GenericProfile.Image>
        </GenericProfile.Group>
        <GenericProfile.Group>
            
            
            <GenericProfile.Frame>
            
            <GenericProfile.TitleText>Name :</GenericProfile.TitleText>
                    <GenericProfile.Text>
                    <Link to={`/show-profile/${item._id}`}> {`${item.FirstName} ${item.MiddleName} ${item.LastName}`}</Link>    
                    </GenericProfile.Text>
  
            </GenericProfile.Frame>
            <GenericProfile.Frame>
            <GenericProfile.TitleText>
                Gender
            </GenericProfile.TitleText>
            <GenericProfile.Text>
                {item.Gender}
            </GenericProfile.Text>                
            </GenericProfile.Frame>
            <GenericProfile.Frame>
            <GenericProfile.TitleText>
                Employee Type
            </GenericProfile.TitleText>
            <GenericProfile.Text>
                {item.EmploymentType}
            </GenericProfile.Text>                
            </GenericProfile.Frame>
            </GenericProfile.Group>
    </GenericProfile>)
}