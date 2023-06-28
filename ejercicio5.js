class Contacto {
    constructor(nombre, apellidos, telefono) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.telefono = telefono;
    }
  }
  
  class ListaContactos {
    constructor() {
      this.contactos = [];
    }
  
    agregarContacto(contacto) {
      this.contactos.push(contacto);
    }
  
    buscarContactoPorNombre(nombre) {
      return this.contactos.find(contacto => contacto.nombre === nombre);
    }
  
    quitarContacto(nombre) {
      const indice = this.contactos.findIndex(contacto => contacto.nombre === nombre);
      if (indice !== -1) {
        this.contactos.splice(indice, 1);
      }
    }
  
    mostrarContactos() {
      const listaContactos = document.getElementById('lista-contactos');
      listaContactos.innerHTML = '';
  
      this.contactos.forEach(contacto => {
        const contactoDiv = document.createElement('div');
        contactoDiv.classList.add('contacto');
  
        const nombreElement = document.createElement('h3');
        nombreElement.textContent = contacto.nombre;
  
        const apellidosElement = document.createElement('p');
        apellidosElement.textContent = `Apellidos: ${contacto.apellidos}`;
  
        const telefonoElement = document.createElement('p');
        telefonoElement.textContent = `Teléfono: ${contacto.telefono}`;
  
        const quitarButton = document.createElement('button');
        quitarButton.textContent = 'Quitar';
        quitarButton.addEventListener('click', () => {
          this.quitarContacto(contacto.nombre);
          this.mostrarContactos();
        });
  
        contactoDiv.appendChild(nombreElement);
        contactoDiv.appendChild(apellidosElement);
        contactoDiv.appendChild(telefonoElement);
        contactoDiv.appendChild(quitarButton);
  
        listaContactos.appendChild(contactoDiv);
      });
    }
  }
  
  const listaContactos = new ListaContactos();
  
  const formulario = document.getElementById('formulario-contacto');
  formulario.addEventListener('submit', e => {
    e.preventDefault();
  
    const nombreInput = document.getElementById('nombre');
    const apellidosInput = document.getElementById('apellidos');
    const telefonoInput = document.getElementById('telefono');
  
    const nombre = nombreInput.value;
    const apellidos = apellidosInput.value;
    const telefono = telefonoInput.value;
  
    const nuevoContacto = new Contacto(nombre, apellidos, telefono);
    listaContactos.agregarContacto(nuevoContacto);
    listaContactos.mostrarContactos();
  
    nombreInput.value = '';
    apellidosInput.value = '';
    telefonoInput.value = '';
  });
  