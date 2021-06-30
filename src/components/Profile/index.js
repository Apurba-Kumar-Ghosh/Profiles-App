import React from 'react'
import {
    Container,
    Header,
    Image,
    Name,
    Text,
    TitleText,
    Group,
    Frame
}
    from './styles/Profile'

export default function Profile({ children, ...restProps }){
    return <Container {...restProps}>
        {children}
    </Container>
}
Profile.Header = function ProfileHeader({ children, ...restProps }) {
    return <Header {...restProps}>
        {children}
    </Header>
}
Profile.Image = function ProfileImage({...restProps }) {
    return <Image {...restProps} />
}
Profile.Name = function ProfileName({ children, ...restProps }) {
    return <Name {...restProps}>
        {children}
    </Name>
}
Profile.Text = function ProfileText({ children, ...restProps }) {
    return <Text {...restProps}>
        {children}
    </Text>
}
Profile.TitleText = function ProfileTitleText({ children, ...restProps }) {
    return <TitleText {...restProps}>
        {children}
    </TitleText>
}
Profile.Group = function ProfileGroup({ children, ...restProps }) {
    return <Group {...restProps}>
        {children}
    </Group>
}
Profile.Frame = function ProfileFrame({ children, ...restProps }) {
    return <Frame {...restProps}>
        {children}
    </Frame>
}