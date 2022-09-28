import React, { useState } from 'react'
import styled from 'styled-components'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import InfoIcon from '@mui/icons-material/Info';

const Container = styled.div`
  padding: 1rem 0;
`
const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0.5rem;
`
const Image = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
`
const PostImage = styled.img`
  width: 100%;
  height: 28vh;
  cursor: pointer;
`
const Interactions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.3rem;
`
const Icon = styled.div`
  cursor: pointer;
`
const Info = styled.div`
  cursor: pointer;

`

const Card = ({post, socket, user}) => {
  const [liked, setLiked] = useState(false)

  const handleNotification = (type) => {
    type === 1 && setLiked(prev => !prev);
    console.log('1')
    socket?.emit("sendNotification", {
      senderName: user,
      receiverName: post.username,
      type,
    });
  };

  return (
    <Container>
        <Profile>
            <Image src={post.userImg} alt={post.fullname}/>
            <span style={{fontSize: '18px', fontWeight:'600', cursor:'pointer'}}>{post.fullname}</span>
        </Profile>
        <PostImage src={post.postImg} alt={`${post.fullname}${post.username}`}/>
        <Interactions>
          <Icons>
            {liked ? (
              <Icon>
                <FavoriteIcon onClick={handleNotification(1)}/>
              </Icon>
            ) : (
              <Icon>
                <FavoriteBorderIcon />
              </Icon>
            )}
            <Icon onClick={handleNotification(2)}>
              <ChatBubbleOutlineIcon />
            </Icon>
            <Icon onClick={handleNotification(3)}>
              <ShareIcon />
            </Icon>
          </Icons>
          <Info>
            <InfoIcon />
          </Info>
        </Interactions>
    </Container>
  )
}

export default Card