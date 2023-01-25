import {actions} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

const mapStateToProps=(state:AppStateType)=>{
    return {
        dialogsPage: state.dialogsPage,

    }
}

 const DialogsContainer=compose<React.ComponentType>(connect(mapStateToProps, {...actions}),
    withAuthRedirect
)(Dialogs)

export default DialogsContainer