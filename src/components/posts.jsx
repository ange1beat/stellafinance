import '../styles/posts.css'
import heartOne from '../images/heartOne.png'
import heartTwo from '../images/heartTwo.png'
import {useState} from 'react'
import { isValidElement } from 'react'

function Posts(props) {

    let postLike = {
        likes: 0,
    }

    const [likes, setLikes] = useState(postLike.likes)
    const [image, setImage] = useState(heartOne)

    const likeFUN = () => {
        if (likes < 1) {
            setLikes(likes + 1)
            imageFUN()
        }

        if (likes == 1) {
            setLikes(likes - 1)
            imageFUN()
        }
    }

    const imageFUN = () => {
        if (likes < 1) {
            setImage(heartTwo)
        }

        if (likes == 1) {
            setImage(heartOne)
        }
    }

    return (
            <div className='wrapperPosts'>
                <div className='postImg'><img src={props.images}/></div>
                <div className='headingPost'>{props.heading}</div>
                <div className='postText'>{props.text}</div>
                    <div className='timePost'>
                        <div className='imgHeart' onClick={likeFUN}><img src={image} /></div>
                        <div className='countLikes'>{likes}</div>
                        <span>{props.date}</span>
                    </div>
            </div>
    )
}

export default Posts;