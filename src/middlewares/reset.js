export default function auth ({ next, store }){

	if(!store.state.user.forgotpassword){
     	return next({
        	name: 'login'
     	})
 	}

 	return next()
}