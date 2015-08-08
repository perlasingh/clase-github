var $=window.jQuery
var $msg=$('#messages');

function waitTwoSeconds(){
	return new Promise(function(done,reject){
					setTimeout(function(){
 						reject();
 					},2000)
				})
}
$msg.text('Quiero un expresso');
waitTwoSeconds()
.then(function(){
 	$msg.text('Aqui tiene su expresso');
 	waitTwoSeconds()
 	.then(function(){
 		$msg.text('Deje propina por su expresso');
 	});
 })
.catch(function(){
	$msg.text('Hubo un error');
})

// este es para prueba
// otra prueba
// otra prueba



// function waitTwoSeconds(){
// 	return new Promise(function(done){
// 					setTimeout(function(){
//  						done();
//  					},2000)
// 				})
// }
// $msg.text('Quiero un expresso');
// waitTwoSeconds()
// .then(function(){
//  	$msg.text('Aqui tiene su expresso');
//  	waitTwoSeconds()
//  	.then(function(){
//  		$msg.text('Deje propina por su expresso');
//  	});
//  })




// $msg.text('Quiero un expresso');
// new Promise(function(done){
// 	//done();
// 	setTimeout(function(){
//  		done();
//  	},2000)
// })
// .then(function(){
// 	$msg.text('Aqui tiene su expresso');
// })






// // try{
// 	$msg.text('Quiero un expresso');
// 	//throw 'No tenemos expresso';
// 	setTimeout(function(){
// 		$msg.text('Ya esta listo su cafe');
// 		$msg.text('Tomar un cafe');
// 	},2000)
// 	//$msg.text('Ya esta listo su cafe');
// 	//$msg.text('Tomar un cafe');	
// } catch(err){
// 	$msg.text(err);
// }
//***********************************
// try{
// 	$msg.text('Quiero un expresso');
// 	setTimeout(function(){
// 		try{
// 			throw 'No tenemos expresso';
// 			$msg.text('Ya esta listo su cafe');
// 			$msg.text('Tomar un cafe');
// 		}catch(err){
// 			$msg.text(err);
// 		}
// 	},2000)
	
// } catch(err){
// 	$msg.text(err);
// }

