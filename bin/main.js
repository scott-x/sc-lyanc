module.exports={
	run:function(generator){
		var data = null, yielded = false
		var iterator = generator(function(){
			data = arguments
			check()
		})
		yielded = !!(iterator.next())
		check()
		function check(){
			while(data && yielded){
				var err = data[0] , item = data[1]
				data = null
				yielded = false
				if (err) return iterator.throw(err)
				yielded=!!(iterator.next(item))
			}
		}
	}
}