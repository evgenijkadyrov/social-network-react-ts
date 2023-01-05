
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
const mapDispatchToProps=(dispatch:Dispatch) =>{
    return {

        addAnswer:(newMessageBody:string)=>{dispatch(actions.addAnswer(newMessageBody))}
    }
}


 const DialogsContainer=compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

export default DialogsContainer