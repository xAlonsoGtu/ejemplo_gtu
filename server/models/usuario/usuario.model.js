const Usuario = function(user) {
  this.id = user.id;
  this.email = user.email;
  this.nombre = user.name;
  this.state = user.state;
  this.dateCreated = user.created;
  this.dateUpdated = user.modified;
};

const UsuarioAdd = function(newUser) {
  this.email = newUser.email;
  this.nombre = newUser.nombre;
};

export default {UsuarioAdd, Usuario};


