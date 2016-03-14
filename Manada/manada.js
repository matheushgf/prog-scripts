//Criando Animal e prototipando método fazerbarulho
function Animal(){
  this.barulho = "HEYAYAYA";
}

Animal.prototype = {
	fazerBarulho: function(){
		return this.barulho;
	}
};

//Criando Cachorro, mudando barulho e herdando Animal
function Cachorro(){
	Animal.call(this);
	this.barulho = "Au";
}
var CachorroPrototype = new Animal();
Cachorro.prototype = CachorroPrototype;

//Criando Gato mudando barulho e herdando Animal
function Gato(){
	Animal.call(this);
	this.barulho="Miau";
}
var GatoPrototype = new Animal();
Gato.prototype = GatoPrototype;

//Criando Manada e método adicionar
function Manada(){
	this.animais = [];
}

Manada.prototype = {
	adicionar: function(animal){
		this.animais.push(animal);
	}
}

//Criando ManadaVirgula, herdando Manada e adicionando método barulhos
function ManadaVirgula(){
	Manada.call(this);
}
var ManadaVirgulaPrototype = new Manada();
ManadaVirgulaPrototype.barulhos = function(){
	var barulhos = "";
	this.animais.forEach(function(animal){
		barulhos += animal.fazerBarulho()+", ";
	});
	return barulhos.slice(0, -2); //Para não imprimir a última vírgula
}
ManadaVirgula.prototype = ManadaVirgulaPrototype;

//Criando ManadaSustenidaDupla, herdando Manada e adicionando método barulhos
function ManadaSustenidaDupla(){
	Manada.call(this);
}
var ManadaSustenidaDuplaPrototype = new Manada();
ManadaSustenidaDuplaPrototype.barulhos = function(){
	var barulhos = "";
	this.animais.forEach(function(animal){
		barulhos += animal.fazerBarulho()+"# "+animal.fazerBarulho()+"# ";
	});
	return barulhos;
}
ManadaSustenidaDupla.prototype = ManadaSustenidaDuplaPrototype;

//Testes
var manadaVirgula = new ManadaVirgula();
var manadaSustenidaDupla = new ManadaSustenidaDupla();
var animais = [new Cachorro(), new Gato()];

animais.forEach(function (animal) {
  manadaVirgula.adicionar(animal);
  manadaSustenidaDupla.adicionar(animal);
});

// Print Esperado: Au, Miau
console.log(manadaVirgula.barulhos());

// Print Esperado: Au# Au# Miau# Miau
console.log(manadaSustenidaDupla.barulhos());