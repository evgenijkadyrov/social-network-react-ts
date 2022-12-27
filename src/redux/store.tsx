import React from "react";

type PostType = {
    id: number, message: string, likesCount: number
}

 type ProfilePageType = {
    posts: Array<PostType>
    newTextPost: string
}
type DialogType = {
    id: number, name: string
}
 type MessageType = {
    id: number, message: string
}
 type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type RootType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}
