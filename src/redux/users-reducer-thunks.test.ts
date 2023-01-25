import {actions, follow} from "./users-reducer";
import {usersAPI} from "../api/users-api";
import {ResponseType, ResultCode} from "../api/api";


jest.mock('../api/users-api')
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>
const result: ResponseType = {
    data: {},
    resultCode: ResultCode.Success,
    messages: ['']
}

userAPIMock.follow.mockReturnValue(Promise.resolve(result))

test(" Thunk dispatch test", async () => {
    const thunk = follow(1)
    const dispatchMock = jest.fn()
const getStateMock=jest.fn()


    await thunk(dispatchMock,getStateMock,{})


    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1,actions.toogleFollowProgress(true, 1))

})
