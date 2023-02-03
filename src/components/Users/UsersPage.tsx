import {useSelector} from "react-redux";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";
import {getIsFetching} from "../../redux/users-selector";


const UsersPage = () => {
    const isFetching = useSelector(getIsFetching)
    return <div>

        {isFetching ? <Preloader/> : null}

        <Users/>
    </div>

}
export default UsersPage


