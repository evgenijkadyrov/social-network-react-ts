import React from "react";

export type PostType={
    id: number, message: string, likesCount: number
}
export type DialogType={
    id: number, name: string
}
export type ProfilePageType={
    posts:Array<PostType>

}

export type MessageType={
    id: number, message: string
}
export type DialogsPageType={
    dialogs:Array<DialogType>
    messages: Array<MessageType>
}
export type RootType={
    profilePage:ProfilePageType
    dialogsPage:DialogsPageType

}


export let state:RootType={
    profilePage:{
        posts : [
            {id: 1, message: 'Hey, i\'m new post', likesCount: 9},
            {id: 2, message: 'How are you?', likesCount: 15},
            {id: 3, message: 'You win lottery', likesCount: 55}
        ]        },
    dialogsPage:{messages : [
            {id: 1, message: 'How are you?'},
            {id: 2, message: 'How long you study JS'},
            {id: 3, message: 'Doyou like it?'}
        ],
        dialogs : [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Victor'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Misha'},
            {id: 5, name: 'Maks'},
        ]}

}