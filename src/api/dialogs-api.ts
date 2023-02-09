import {getItemsType, instance, ResponseType} from "./api";
import {FilterType, UserType} from "../redux/users-reducer";

export const dialogsAPI = {
    sentMessage(userId:string,body:string,) {

        return instance.post(`dialogs/${userId}/messages`,{body})
            .then(res => res.data.data.message)
    },
    getDialogs(){
        return instance.get(`dialogs`)
            .then(res=>res.data)
    },
    getMessages(userId:number){
        return instance.get(`dialogs/${userId}/messages`)
            .then(res=>res.data)
    },
    startDialog(userId:number){
        return instance.put(`dialogs/${userId}`,{})
            .then(res=>res.data)
    },
    deleteMessage(messageId:string){
        return instance.delete(`dialogs/messages/${messageId}`)
            .then(res=>res.data)
    }


}
