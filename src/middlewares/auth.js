export default function auth ({ next, store, to }){
 	if(!store.state.user.authenticated){
     	return next({
        	name: 'login'
     	})
 	}

 	return next()
}