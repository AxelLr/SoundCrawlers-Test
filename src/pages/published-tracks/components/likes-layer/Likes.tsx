import React,{ useState, useEffect } from 'react'
import styles from './LikesLayer.module.scss'
// DATA 
import data from './data'
// COMPONENTS
import ListItem from './ListItem'
// ICONS
import LikeIcon from 'src/util/icons/like-icon-2.svg'
import CloseIcon from 'src/util/icons/close-icon.svg'

interface LikesProps {
    showLikes: boolean | null,
    setShowLikes: (state: boolean | null | ((prevState: boolean | null) => boolean)) => void;
}

const Likes: React.FC<LikesProps> = ({ showLikes, setShowLikes }) => {

     const [ show, setShow ] = useState<boolean>(false) 

     useEffect(() => { showLikes && setShow(true) }, [showLikes])

     const renderComponent = () => !showLikes && setShow(false)

     const Comp = () => {
         return (
            <section 
            style={{animation: `${showLikes ? 'fadeIn .4s forwards' : 'fadeOut .5s forwards'}` }}
            className={styles.container}
            onAnimationEnd={renderComponent}
            >
                <div className={styles.header}>
                    <div>
                        <img alt='like' src={LikeIcon} />
                        <h1> Likes </h1>
                    </div>
                    
                    <img alt='close' onClick={() => setShowLikes(false)} src={CloseIcon}/>
                </div>
                
                <div className={styles.list}>
                    { data.map((user, i) => <ListItem key={i} user={user} /> )}
                </div>    
            </section>
         )
     } 
    
    return (
        <> 
        { show && < Comp /> }
        </>
    )
}

export default Likes