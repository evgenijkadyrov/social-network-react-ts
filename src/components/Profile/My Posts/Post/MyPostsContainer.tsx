import React from 'react';
import MyPosts from "../MyPosts";
import {addPostActionCreator, UpdateNewPostActionCreator} from "../../../../redux/profilePage-reducer";
import {StoreContext} from "../../../../StoreContext";

type MyPostsPropsContainerType = {}
const MyPostsContainer = (props: MyPostsPropsContainerType) => {

    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState()
            const onClickAddPost = () => {
                store.dispatch(addPostActionCreator())
            }
            const onChangeUpdateText = (text: string) => {

                store.dispatch(UpdateNewPostActionCreator(text))
            }
            return <MyPosts addPost={onClickAddPost}
                            updateNewPostText={onChangeUpdateText}
                            profilePage={state.profilePage}/>
        }

        }

    </StoreContext.Consumer>
}
export default MyPostsContainer;