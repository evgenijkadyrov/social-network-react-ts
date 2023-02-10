import {GetItemsType, instance, ResultCode} from "./api";

export const dialogsAPI = {
    sentMessage(userId: string, body: string) {

        return instance.post<ResponseType<MessageTypeResponse>>(`dialogs/${userId}/messages`, {body})
            .then(res => res.data.data.message)
    },
    getDialogs() {
        return instance.get<ResponseDialogType[]>(`dialogs`)
            .then(res => res.data)
    },
    getMessages(userId: number) {
        return instance.get<GetItemsType<ResponseMessageType[]>>(`dialogs/${userId}/messages`)
            .then(res => res.data)
    },
    startDialog(userId: number) {
        return instance.put<ResponseType>(`dialogs/${userId}`, {})
            .then(res => res.data)
    },
    deleteMessage(messageId: string) {
        return instance.delete<ResponseType>(`dialogs/messages/${messageId}`)
            .then(res => res.data)
    }
}

export type ResponseType<T={},RC=ResultCode> = {
    data: T,
    messages: [],
    fieldsErrors: [],
    resultCode: RC
}

export type ResponseMessageType = {
    id: string,
    body: string,
    translatedBody: null,
    addedAt: string,
    senderId: number,
    senderName: string,
    recipientId: number,
    viewed: boolean
}
export type ResponseDialogType = {
    id: number,
    userName: string,
    hasNewMessages: boolean,
    lastDialogActivityDate: string,
    lastUserActivityDate: string,
    newMessagesCount: number,
    photos: {
        small: string | null,
        large: string | null
    }
}
// export type  ResponseGetMessagesType = {
//     items: ResponseMessageType[],
//     totalCount: number,
//     error: string | null
// }

type MessageTypeResponse = {
    message: {
        id: string,
        body: string,
        translatedBody: null,
        addedAt: string,
        senderId: number,
        senderName: string,
        recipientId: number,
        recipientName: string,
        viewed: boolean,
        deletedBySender: boolean,
        deletedByRecipient: boolean,
        isSpam: boolean,
        distributionId: null
    }
}