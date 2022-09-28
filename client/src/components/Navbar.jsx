import React, { useEffect, useState } from 'react'
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


const Navbar = ({socket}) => {
    const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    socket?.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);

  const displayNotification = ({ senderName, type }) => {
    let action;

    if (type === 1) {
      action = "liked";
    } else if (type === 2) {
      action = "commented";
    } else {
      action = "shared";
    }
    return (
      <span className="notification">{`${senderName} ${action} your post.`}</span>
    );
  };

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
  };

  return (
    <Container>
        <Logo>NABIL DEV</Logo>
        <Icons>
            <Icon onClick={() => setOpen(!open)}>
                <Badge badgeContent={notifications.length} color="error">
                    <NotificationsIcon sx={{color:'white'}}/>
                </Badge>
            </Icon>
            <Icon onClick={() => setOpen(!open)}>
                <Badge color="error">
                    <LocalPostOfficeIcon sx={{color:'white'}}/>
                </Badge>
            </Icon>
            <Icon onClick={() => setOpen(!open)}>
                <Badge color="error" >
                    <SettingsIcon sx={{color:'white'}}/>
                </Badge>
            </Icon>
        </Icons>
        {open && (
        <div className="notifications">
          {notifications.map((n) => displayNotification(n))}
          <button className="nButton" onClick={handleRead}>
            Mark as read
          </button>
        </div>
        )}
    </Container>
  )
}

export default Navbar