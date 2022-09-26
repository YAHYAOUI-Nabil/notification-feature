import React from 'react'
import styled from 'styled-components'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import SettingsIcon from '@mui/icons-material/Settings';
import { Badge } from '@mui/material';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem 0;
    background-color: #21b2ab;
`
const Logo = styled.span`
    color: white;
    font-weight: 600;
`
const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`
const Icon = styled.div`
    cursor: pointer;
`


const Navbar = () => {
  return (
    <Container>
        <Logo>NABIL DEV</Logo>
        <Icons>
            <Icon>
                <Badge badgeContent={4} color="error">
                    <NotificationsIcon sx={{color:'white'}}/>
                </Badge>
            </Icon>
            <Icon>
                <Badge badgeContent={4} color="error">
                    <LocalPostOfficeIcon sx={{color:'white'}}/>
                </Badge>
            </Icon>
            <Icon>
                <Badge badgeContent={4} color="error">
                    <SettingsIcon sx={{color:'white'}}/>
                </Badge>
            </Icon>
        </Icons>
    </Container>
  )
}

export default Navbar