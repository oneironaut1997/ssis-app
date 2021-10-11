export default function param ({ next, store, to }){
	function isEmpty(obj) {
	    for(var key in obj) {
	        if(obj.hasOwnProperty(key))
	            return false;
	    }
	    return true;
	}

	if(isEmpty(to.params)){
     	return next({
        	name: 'home'
     	})
 	}
	
 	return next()
}