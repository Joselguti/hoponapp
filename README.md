# SMSprojectUAI
## Descripción
EL proyecto consta de la creación de una conexión entre un end device, un servidor y posteriormente transmitir esa información a una entidad de seguridad (carabineros, bomberos, ambulancia, etc). Se recibe un sms, iMessage o mensaje de Hangouts y la información contenida en el mensaje se envía a un servidor para que esta a su vez sea enviada a la entidad de seguridad.
Para el manejo de recepción de información se está trabajando con Twillio y el servidor que recibe la info está en Firebase.
Adicionalmente se está creando una pagina web, la cual tiene como objetivo poder generar una alerta sin tener el end device (celular) a mano. Está página se está creando con Node.
De manera alternativa, se está trabajando con Whatsapp, ya que esta app tiene un nivel de penetración muy alto dentro del mercado chileno.

## Instalaciones necesarias
- Node: [Node.js](https://nodejs.org/en/)
- Npm: [npm | build amazing things](https://www.npmjs.com/)

## Como usar?
1. Instalar Node y Npm en el ordenador
2. Iniciar el Npm, utilizando un terminal abierto en la carpeta del proyecto. Utilizar el comando `npm start`
3. Acceder a la dirección localhost:3000
4. En esta página se pueden ver los mensajes recibidos y emitidos al número de emergencia

## Descripción de las carpetas en el proyecto
### Controllers
Consta de los controladores necesarios para manejar los request cuando se quiere acceder a una  de las páginas que se encuentran en la carpeta views o a alguno de los models. Manejan la lectura/escritura de info en los modelos y  el acceso al archivo de views correcto, enviado todo en una respuesta  HTTP
### Models
Acá se encuentran los puentes hacia las BD, manejan el envío y recepción de información hacia y desde la BD
### public
Elementos a los cuales acceden las distintas views, sea imágenes, favicons y el CSS
### Routes
Las rutas lo que hacen es recibir el request de HTTP y lo envían al controlador correspondiente, cerciorando un buen flujo de la información
### Views
Acá se encuentra la parte visual de cada página, se puede ver el HTML que compone cada página y por lo tanto, editar el front end que ve el usuario

## Proyecto de SMS, iMessages y Hangouts  
- Servidor: Heroku
- Website: https://smsprojectuai.herokuapp.com/

## Tecnologias:
- Node.js
- Express.js
- EJS
- Firebase
- Twillio
- Mongoose (Temporal)
