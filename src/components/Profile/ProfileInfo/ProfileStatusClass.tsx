import React, {ChangeEvent} from 'react';

 export class ProfileStatusClass extends React.Component<ProfileStatusPropsType,ProfileStatusStateType> {

    state = {
        editMode: false,
        status:this.props.status
    }

    activateEditMode = () => {

        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange=(e:ChangeEvent<HTMLInputElement>)=>{

        this.setState({
            status:e.currentTarget.value
        })

    }
componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: ProfileStatusStateType) {
         if(prevProps.status!==this.props.status){
             this.setState({
                 status:this.props.status
             })
         }
}

    render() {

        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status||'no status'}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode} value={this.state.status}/>
                </div>}
            </div>
        );
    }
}
type ProfileStatusPropsType={
    status:string
    updateStatus:(status:string|null)=>void
}
type ProfileStatusStateType={
    editMode:boolean
    status:string
}
