function gerarListener(){
	var obj={};
	var count=0;
	var listeners=[];

	obj.executar = function(){
		count++;
		for(var i=0;i<listeners.length;i++){
			listeners[i]({contador: count});
		}
	}

	obj.addListener = function(listener){
		listeners.push(listener);
	}

	return obj;
}


var list1 = gerarListener();
list1.addListener(function(evento){ console.log("1: "+evento.contador) });
list1.executar();
list1.executar();
list1.executar();
list1.executar();
//Deve ser 4

var list2 = gerarListener();
list2.addListener(function(evento){ console.log("2: "+evento.contador) });
list2.executar();
list2.executar();
list2.executar();
//Deve ser 3


var list3 = gerarListener();
list3.addListener(function(evento){ console.log("3: "+evento.contador) });
list3.executar();
//Deve ser 1




