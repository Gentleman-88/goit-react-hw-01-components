import css from './Friends.module.css'

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
            {Array.isArray(friends) && friends.map(friend => {
                return (
                    <li className={css.friend_item} key={friend.id}>
                        <span style={{backgroundColor: friend.isOnline ? 'green' : 'red'}} className={css.friend_status}>{friend.isOnline}</span>
                        <img className={css.friend_avatar} src={friend.avatar} alt="User avatar" width="48" />
                        <p className={css.friend_name}>{friend.name}</p>
                    </li>
                )
            })}
    </ul>
)
}