import {UserProfileType} from "../components/Profile/ProfileContainer";
import {instance, ResponseType} from "./api";
import {PhotosType} from "../redux/users-reducer";

export const profileAPI = {

    getProfile(userId: number | null) {

        return instance.get<UserProfileType>(`profile/${userId}`).then(res => res.data)
    },
    getStatus(userId: number | null) {
        return instance.get<string>(`profile/status/${userId}`).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, {status}).then(res=>res.data)
    },
    savePhoto(file: File) {

        const formData = new FormData()
        formData.append('image', file)
        return instance.put<ResponseType<ResponsePhotosType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res=>res.data)
    },
    saveProfile(profile: UserProfileType) {

        return instance.put<ResponseType>(`profile`, profile).then(res=>res.data)
    },
}
type ResponsePhotosType={
    photos:PhotosType
}