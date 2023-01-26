import {useSelector} from "react-redux";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";
import {getIsFetching} from "../../redux/users-selector";


const UsersPage = () => {
    const isFetching = useSelector(getIsFetching)
    return <>
        <h2>Samurai</h2>
        {isFetching ? <Preloader/> : null}

        <Users/>
    </>

}
export default UsersPage


