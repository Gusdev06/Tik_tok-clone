import React, {useState} from 'react'
import "./videosidebar.scss"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function VideoSideBar({likes, messages, shares}) {


    const [liked, setLiked] = useState(false)

    function handdleclick() {
        setLiked(!liked) // aqui significa que ele vai mudar para o contrario do q esta a variavel liked, se ela estiver true vai ficar falsa se ela estiver falsa vai ficar true
    }

    return (
    <div className='videoSideBar'>
        <div onClick={handdleclick} className='videoSideBar__options'>
            { liked ? <FavoriteIcon fontSize='large'/>: <FavoriteBorderIcon fontSize='large'/> }
            <p>{liked ? likes + 1 : likes}</p>
        </div>
        <div className='videoSideBar__options'>
            <ChatIcon fontSize='large'/>
            <p>{messages}</p>
        </div>
        <div className='videoSideBar__options'>
            <ShareIcon fontSize='large'/>
            <p>{shares}</p>
        </div>
    </div>
    )
}

export default VideoSideBar