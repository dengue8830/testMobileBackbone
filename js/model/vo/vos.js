/*function PersonaVO(idPersona, nombre, apellido, barrio, ciudad){
	this.idPersona = idPersona;
	this.nombre = nombre;
	this.apellido = apellido;
	this.barrio = barrio;
	this.ciudad = ciudad;
}*/

var PersonaVO = Backbone.Model.extend({
	urlRoot: '/persona',
	constructor: function(idPersona, nombre, apellido, barrio, ciudad){
		this.idPersona = idPersona;
		this.nombre = nombre;
		this.apellido = apellido;
		this.barrio = barrio;
		this.ciudad = ciudad;
		this.apellidoNombre = function (){
			return this.apellido+', '+this.nombre;
		}/*,
        initialize: function(){
            alert("Welcome to this world");
            this.on("change:name", function(model){
                var name = model.get("name"); // 'Stewie Griffin'
                alert("Changed my name to " + name );
            });
        }*/
	}
});