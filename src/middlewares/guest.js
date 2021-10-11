export default function guest ({ next, store }){

    if(store.state.user.authenticated){
        return next({
           name: 'home'
        })
    }


    return next()
}