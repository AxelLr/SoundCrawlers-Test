import React,{ useState } from 'react'
import styles from './PublishedTracks.module.scss'
// SEARCH ICON
 import SearchIcon from 'src/util/SearchIcon.svg'
// // PROFILE IMAGE 
 import ProfileImage from 'src/util/profileImage.svg'
// //  YOUTUBE VIDEO
 import youtubeVideo from 'src/images/youtubeVideo.png'
// COMPONENTS
import LikesLayer from './components/likes-layer/Likes'
 import Button from './components/button/Button'
// ICONS
 import CommentIcon from 'src/util/icons/comment-icon.svg'
 import HeadPhonesIcon from 'src/util/icons/headphones-icon.svg'
 import TrackIcon from 'src/util/icons/track-icon.svg'
 import LikeIcon from 'src/util/icons/like-icon.svg'
 import FlagIcon from 'src/util/icons/flag-icon.svg'

const PublishedTracks:React.FC = () => {

    const [ showLikes, setShowLikes ] = useState<boolean | null>(false)

    return (
        <section className={styles.PublishedTrack}>
            <nav className={styles.Bar}>
                <img alt='search' src={SearchIcon} />
                <img alt='profile' src={ProfileImage} />
            </nav>
            <div className={styles.contentContainer}>
                <LikesLayer showLikes={showLikes} setShowLikes={setShowLikes} />
                <article className={styles.article}>
                    <img className={styles.youtubeVideo} alt='youtube video' src={youtubeVideo} />
                    <h1 className={styles.trackTitle}> Röyksopp - Andromeda (Lost Tapes) </h1>
                </article>
                <div className={styles.userInfoContainer}>
                    <img alt='profile' src={ProfileImage} />
                    <div className={styles.userInfo}>
                        <h1 className={styles.username}> Jeff Miles </h1>
                        <p className={styles.location}> London · 1 min ago </p> 
                        <h1 className={styles.genre}> Electronica </h1>
                    </div>
                </div>
            </div>
                <div className={styles.buttonsContainer}>
                    <Button icon={LikeIcon} number={112} onNumberClick={() => setShowLikes(state => !state)} />
                    <Button icon={CommentIcon} number={112} />
                    <Button icon={FlagIcon} number={112} />
                    <Button icon={HeadPhonesIcon} number={128} />
                    <Button icon={TrackIcon} />
                </div>
                <div className={styles.separator}></div>
        </section>
    )
}

export default PublishedTracks