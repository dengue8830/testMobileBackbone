/*function PersonaVO(idPersona, nombre, apellido, barrio, ciudad){
	this.idPersona = idPersona;
	this.nombre = nombre;
	this.apellido = apellido;
	this.barrio = barrio;
	this.ciudad = ciudad;
}*/

/*var PersonaVO = Backbone.Model.extend({
	urlRoot: '/persona',
	constructor: function(idPersona, nombre, apellido, barrio, ciudad){
		this.idPersona = idPersona;
		this.nombre = nombre;
		this.apellido = apellido;
		this.barrio = barrio;
		this.ciudad = ciudad;
		this.apellidoNombre = function (){
			return this.apellido+', '+this.nombre;
		},
        initialize: function(){
            alert("Welcome to this world");
            this.on("change:name", function(model){
                var name = model.get("name"); // 'Stewie Griffin'
                alert("Changed my name to " + name );
            });
        }
	}
});*/

  var PersonaVO = persistence.define('personas', {
    nombre: "TEXT",
    apellido: "TEXT",
    barrio: "TEXT",
    ciudad: "TEXT"
  });

  PersonaVO.prototype.apellidoNombre = function (){
      return this.apellido+', '+this.nombre;
  };
/*var Person = new JazzRecord.Model({
  table: "personas",
  //foreignKey: "person_id",
  //belongsTo: { home: "homes"},
  //hasOne: { vehicle: "vehicles"},
  //hasMany: { books: "books"},
  columns: {
    idPersona: "number",
    nombre: "text",
    apellido: "text",
    barrio: "text",
    ciudad: "text"
  },
  events: {
    onUpdate: function() {
    	alert('actualizado');
      JazzRecord.puts("A person was updated");
    },
    onDestroy: function() {
      JazzRecord.puts("A person was destroyed");
    }
  }
});*/