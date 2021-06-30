import React, { useEffect, useState } from 'react'
import Profile from '../components/Profile/index'

export function ProfileContainer({data}) {
    return <Profile>
        <Profile.Group>
            <Profile.Image src = "/images/profilePhoto.jpg" alt = "ProfilePhoto" />
        </Profile.Group>
        <Profile.Group>
            <Profile.Frame>
                <Profile.Header>
                Name : 
            </Profile.Header>
            <Profile.Header>
                {`${data.FirstName} ${data.MiddleName} ${data.LastName}`}
            </Profile.Header>    
            </Profile.Frame>

            <Profile.Frame>
            <Profile.TitleText>
                Gender
            </Profile.TitleText>
            <Profile.Text>
                {data.Gender}
            </Profile.Text>                
            </Profile.Frame>
            <Profile.Frame>
            <Profile.TitleText>
                Monthly Income
            </Profile.TitleText>
            <Profile.Text>
                Rs. {data.MonthlyIncome}
            </Profile.Text>                
            </Profile.Frame>
            <Profile.Frame>
            <Profile.TitleText>
                Date of Birth
            </Profile.TitleText>
            <Profile.Text>
                {data.DateOfBirth}
            </Profile.Text>                
            </Profile.Frame>
            <Profile.Frame>
            <Profile.TitleText>
                Employment Type
            </Profile.TitleText>
            <Profile.Text>
                {data.EmploymentType}
            </Profile.Text>                
            </Profile.Frame>
        </Profile.Group>
    </Profile>
}