   import React from 'react'
import {
    Container,
    Header,
    Image,
    Name,
    Text,
    TitleText,
    Group,Frame
}
    from './styles/GenericProfile'

export default function GenericProfile({ children, ...restProps }){
    return <Container {...restProps}>
        {children}
    </Container>
}
GenericProfile.Header = function GenericProfileHeader({ children, ...restProps }) {
    return <Header {...restProps}>
        {children}
    </Header>
}
GenericProfile.Image = function GenericProfileImage({ children, ...restProps }) {
    return <Image {...restProps}>
        {children}
    </Image>
}
GenericProfile.Name = function GenericProfileName({ children, ...restProps }) {
    return <Name {...restProps}>
        {children}
    </Name>
}
GenericProfile.Text = function GenericProfileText({ children, ...restProps }) {
    return <Text {...restProps}>
        {children}
    </Text>
}
GenericProfile.TitleText = function GenericProfileTitleText({ children, ...restProps }) {
    return <TitleText {...restProps}>
        {children}
    </TitleText>
}
GenericProfile.Group = function GenericProfileGroup({ children, ...restProps }) {
    return <Group {...restProps}>
        {children}
    </Group>
}
GenericProfile.Frame = function GenericProfileFrame({ children, ...restProps }) {
    return <Frame {...restProps}>
        {children}
    </Frame>
}