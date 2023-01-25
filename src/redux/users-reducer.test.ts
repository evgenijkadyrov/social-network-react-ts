import {actions, InitialStateType, usersReducer} from "./users-reducer";
let state:InitialStateType;
beforeEach(()=>{
    state={ users: [
            {id:0, name:"xxx",photos:{large:'null',small:''},status:'null',followed:false,location:{city:'fgfg',country:'gf'}},
            {id:1, name:"rrr",photos:{large:'null',small:''},status:'null',followed:true,location:{city:'fgfg',country:'gf'}},
            {id:2, name:"ttt",photos:{large:'null',small:''},status:'null',followed:false,location:{city:'fgfg',country:'gf'}},
            {id:3, name:"yyy",photos:{large:'null',small:''},status:'null',followed:true,location:{city:'fgfg',country:'gf'}}
        ],
        pageSize: 5,
        totalUsersCount: 50,
        currentPage: 1,
        isFetching: true,
        followInProgress: []
    }
})
test(" Follow sucsess", () => {

    const action=actions.followSuccess(2)
    const newState=usersReducer(state,action)
    expect(newState.users[0]).toBeFalsy()
    expect(newState.users[1]).toBeTruthy()
    expect(newState.users[2]).toBeTruthy()
})
test("UnFollow sucsess", () => {

    const action=actions.unfollowSuccess(1)
    const newState=usersReducer(state,action)
    expect(newState.users[0]).toBeTruthy()
    expect(newState.users[1]).toBeFalsy()
})