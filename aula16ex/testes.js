const array = [1,5,3,10,4,32,6,141,23,459];


const maiorValor = array.reduce(function(anterior, atual) { 
	return anterior > atual ? anterior : atual; 
});


console.log(maiorValor);