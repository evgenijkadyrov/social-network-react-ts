import React from "react";
import styles from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";


export const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([{
            id: 1,
            photoUrl: 'https://previews.123rf.com/images/robuart/robuart1608/robuart160800070/60643797-jeune-homme-ic%C3%B4ne-avatar-priv%C3%A9-jeune-homme-brune-dans-le-chandail-brun-et-des-lunettes-r%C3%A9seaux-de-bu.jpg?fj=1',
            folloved: true,
            fullName: 'Dmitriy',
            status: 'I boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
            {
                id: 2,
                photoUrl: 'https://media.istockphoto.com/vectors/hipster-icon-the-head-of-a-brutal-man-with-red-hair-and-beard-wearing-vector-id1352191682?s=612x612',
                folloved: false,
                fullName: 'Sasha',
                status: 'I mega boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://media.istockphoto.com/vectors/man-wearing-a-face-mask-vector-id1271758419?s=612x612',
                folloved: true,
                fullName: 'Maks',
                status: 'I yo yo',
                location: {city: 'Warshawa', country: 'Poland'}
            }])
    }

    return (
        <div>
            {
                props.usersPage.users.map(ul => <div key={ul.id}>
                    <span>
                        <div>
                            <img src={ul.photoUrl} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {ul.folloved
                                ? <button onClick={() => {
                                    props.unfollow(ul.id)
                                }}>UNFollow</button>
                                : <button onClick={() => {
                                    props.follow(ul.id)
                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span><div>{ul.fullName}</div>
                        <div>{ul.status}</div></span>
                        <span><div>{ul.location.country}</div>
                        <div>{ul.location.city}</div></span>
                    </span>
                </div>)
            }
        </div>
    )
}