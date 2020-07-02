import React from 'react'
import styles from './LikesLayer.module.scss'

interface user {
    name: string,
    location: string, 
    profileImage?: string,
    followed: boolean
}

interface ListItemProps {
    user: user
}

const ListItem: React.FC<ListItemProps> = ({ user }) => {

    const { name, location, profileImage, followed } = user  

    return (
        <div className={styles.itemListContainer}>
            <div>
                <img alt='profile' src={`${process.env.PUBLIC_URL}/images/${profileImage}`} />
                <div className={styles.userInfo}>
                    <h1>{ name }</h1>
                    <h2>{ location }</h2>
                </div>
            </div>
            <button className={followed ? styles.following : styles.follow }>
                <h1> { followed ? 'Following' : 'Follow' } </h1>
            </button>
        </div>
    )
}

export default ListItem
