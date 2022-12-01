import '../styles/body.scss'
import Posts from './posts.jsx'
import testImg from '../images/anime.png'
import testImg2 from '../images/anime2.png'
import textImg3 from '../images/anime3.jpg'
import textImg4 from '../images/anime4.png'
import textImg5 from '../images/anime5.png'
import textImg6 from '../images/anime6.jpg'
import {useState} from 'react'

function Body() {

    let posts = {
        images: [testImg, testImg2, textImg3, textImg4, textImg5, textImg6],
        heading: ['Lets GO', 'Staking coming', 'test','test','test', 'test'],
        text: ['Development has begun! Welcome to the Stella ecosystem. Here you will find services such as wap, best, NET marketplace and much more.', 'First of all, the betting tab will go into development because I found a course on it :D', 'test', 'test', 'test', 'test'],
        date: ['27.11.2022', '28.11.2022', '29.11.2022','29.11.2022', 'test', 'test'],
        id: [0, 1, 2, 3, 4, 5]
    }

    let posting = []

    for (let i = posts.id.length - 2; i < posts.id.length; i++) {
        posting.unshift(<Posts images={posts.images[i]} heading={posts.heading[i]} text={posts.text[i]} date={posts.date[i]}/>)
    }

    const [i, setIt] = useState(posts.id.length - 3)

    const [showPosts, setShowPosts] = useState([])
    const [showMore, setShowMore] = useState('MORE')

    const iterating = () => {
        if (i <= 0) {
            return setShowMore('NOTHING NEW 😔')
        }

        setShowPosts(showPosts => [showPosts, <Posts images={posts.images[i]} heading={posts.heading[i]} text={posts.text[i]} date={posts.date[i]} id={posts.id[i]}/>])
        setShowPosts(showPosts => [showPosts, <Posts images={posts.images[i-1]} heading={posts.heading[i-1]} text={posts.text[i-1]} date={posts.date[i-1]} id={posts.id[i]}/>])
        setIt(i-2)
    }

    return (
        <div className='body'>
            <div className='newsText'>NEWS</div>
            <div className='Postz'>
                {posting.map((ok) => ok)}
                {showPosts}
            </div>
            <div className='containerNews'>
            <span className='moreNews' onClick={iterating}>{showMore}</span>
            </div>
            <div className="stars">
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
            </div>


        </div>
    )
}

export default Body