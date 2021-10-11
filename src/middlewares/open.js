export default function open ({ next, store }){

	if(store.state.user.forgotpassword){
     	return next({
        	name: 'reset-password'
     	})
 	}
	
 	return next()
}