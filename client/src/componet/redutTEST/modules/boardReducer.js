const _SAVE = 'DATA_SAVE';

export const dataSave = (inputData) => ({
    type: _SAVE,
    inputData: {
        id: inputData.id,
        title: inputData.title,
        content: inputData.content
    }
})
 
const initialState = {
    lastId: 0,
    inputData: [
        {
            id: '',
            title: '',
            content: ''
        }
    ]
}
 
export default function boardReducer(state = initialState, action){
    switch(action.type) {
        case _SAVE:
            console.log(state.inputData)
            return {
                lastId: state.lastId + 1,
                inputData: state.inputData.concat({
                    ...action.inputData,
                    id: state.lastId + 1,
                })
            }
        default:
            return state
    }
}