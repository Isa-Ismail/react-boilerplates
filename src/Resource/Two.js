const INITIAL_STATE = {
    status: false,
    
    user: [
        {
    name:'Fahim',
    age:21,
    job:'Senior Software Engineer',
    email:'fahimismail75.scc@gmail.com',
    password:'janina',
    id:new Date().getTime().toString()
        }
          ]
};
export const Two = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'SUBMIT':
            return {
                ...state,
                user: [...state.user, action.payload.set]
            }
            
        case 'SORT_BY_AGE':

            let sorted = state.user.sort((a,b)=> a.age-b.age)

            return {
                ...state,
                user: [ ...sorted ]
            }

        default:
            return state;
    }
};