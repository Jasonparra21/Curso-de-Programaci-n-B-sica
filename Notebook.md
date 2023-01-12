Como desarrolladores de software, una de nuestras mejores amigas será la terminal de línea de comandos para la ejecución de tareas. No debemos tenerle miedo, ya que nos facilitará mucho el trabajo en el futuro.

¿Qué es una terminal?
Una terminal de línea de comandos o CLI (Command-Line Interface), es una interfaz de texto que nos permite interactuar con un proyecto, ejecutar tareas o navegar por todos los archivos y directorio de nuestro computador.

En cualquier sistema operativo puedes ejecutar comandos en una terminal. Habrás observado que VS Code trae consigo una terminal. Existen muchas otras, todas muy similares.

A diferencia de una interfaz de usuario donde podemos observar e interactuar con archivos o directorios de forma visual y más amena, una terminal de línea de comando también lo permite a través de texto ejecutando comandos.

Parece algo más difícil, pero no te preocupes. Te acostumbrarás y te garantizo que lo agradecerás cuando seas un desarrollador de software profesional.

Con NodeJS, utilizaremos NPM que trae consigo su propio CLI para crear proyectos o instalar dependencias que nuestro proyecto necesitará.

Pero antes de eso…

¿Qué es una dependencia?
Llamamos dependencia o librería a una pieza de código desarrollada por un tercero, por otra persona. Las mismas nos permiten solucionar problemas triviales y reutilizar código para hacer más rápido nuestro trabajo como programadores.

NPM se encargará de descargar por nosotros las dependencias que necesitamos. En la actualidad, es el gestor de dependencias más grande del mundo. Cada lenguaje de programación suele tener el suyo, como lo es Composer para PHP, Maven para Java o PIP para Python.

Una dependencia puede servirnos para manejar fechas, para leer archivos, para realizar solicitudes HTTP o hasta para levantar un servidor, entre muchas otras funcionalidades. Realmente te encontrarás con dependencias de todo tipo y casi para cualquier cosa que quieras hacer. Poco a poco, irás descubriendo más y más dependencias que utilizarás para construir tus proyectos.

Comandos básicos que debes conocer
Existen muchos comandos que incluso varían dependiendo el sistema operativo en el que trabajes.

Los comandos más básicos que puede probar son ls o ll para listar los archivos o directorios. También utilizarás mucho el comando cd para desplazarte entre directorios dentro de tu computador.

Los CLI, como NPM, incorporan a tu sistema operativo una serie de comandos específicos para trabajar con una tecnología. Suelen utilizarse estos con un prefijo como npm <command-name>.

Hola Mundo con NodeJS
Siempre, y para toda tu vida, que instales una nueva tecnologías, lo primero que realizarás es el “Hola Mundo” que permite corroborar la correcta instalación de la tecnología o herramienta.

Para crear tu primer proyecto en NodeJS, con ayuda de NPM, basta con utilizar el comando npm init -y. El mismo creará en cuestión de segundos tu primer proyecto.

Observa que este comando ha creado un archivo llamado package.json que contiene la configuración básica de cualquier proyecto desarrollador en NodeJS.

{
  "name": "prueba",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
No debes preocuparte tanto por su contenido, poco a poco lo irás comprendiendo. Puedes observar, entre otros datos, el nombre del proyecto, la versión, una descripción y el archivo base del proyecto, entre otros datos.

Continúa creando un archivo que llamaremos index.js que será el archivo base de nuestro proyecto. Agrégale al mismo el siguiente contenido:

console.log("¡Hola Mundo!");
Ya puede ejecutar tu primer proyecto en NodeJS utilizando el comando node index.js. Recuerda utilizar el nombre de tu archivo que acabas de crear para indicarle a Node qué archivo ejecutar.

En cuestión de segundos observarás un ¡Hola Mundo! en la consola que hayas utilizado para lanzar el comando. Eso significa que NodeJS se encuentra correctamente instalado en tu computador y has ejecutado tu primer programa.

Ha sido bastante sencillo la creación de un proyecto con NodeJS y su ejecución. Ahora es momento de desarrollar tu primera aplicación backend apoyándote de estas tecnologías.


A lo largo de tu vida como programador o programadora, te encontrarás con múltiples conceptos que debes conocer y que verás realmente en todas partes. Protocolos, servidores, puertos, el funcionamiento de cada tecnología. Veamos a continuación un explicativo de conceptos básicos que tienes que comenzar a interiorizar.

Estructura de un dominio
Las páginas web se identifican por un dominio único e irrepetible. Conocerás el dominio de Google (https://google.com) o el dominio de Platzi (https://platzi.com).

Los dominios son también llamados URI y están compuestos por varias partes.

¿Qué es una URI?
URI son las siglas en español de Identificador de Recursos Uniforme y es ese identificador único de una página web. El mismo está compuesto por dos partes, una URL (Localizador de Recursos Uniforme) y una URN (Nombre de Recurso Uniforme).

Composición de una URI
Composición de una URI
Dentro de una URI, podemos identificas varias partes que componen a la misma:

Partes de una URI
URI:
Esquema: Protocolo que la URI utiliza, pudiendo ser HTTP o HTTPS.
Dominio: Nombre del dominio de la página.
Puerto: Puerto por el que el servidor se encuentra “escuchando” para responder con la información de la página.
Ruta: Nombre de la página concreta que queremos solicitar dentro del dominio.
Cadena de búsqueda: Parámetros opcionales o variables para dar más información a la ruta.
URN:
Nombre: Hace referencia a una sección particular dentro de una página. También denominado “fragmento”.
Entendiendo cómo se compone un dominio, profundicemos y comprendamos el qué y el porqué de cada parte.

Protocolo HTTP
Conoces vagamente lo que es el protocolo HTTP o HTTPS. El Protocolo de Transferencia de Hipertexto es una forma estandarizada de hacer las cosas o de transmitir información, en este caso. La S de HTTPS significa Secure o seguro y permite la transferencia de datos codificados para evitar robo de información.

Tal vez recuerdes el significado de HTML (Lenguaje de Marcado de Hipertexto), mientras que el protocolo HTTP también hace referencia a esa palabra: “Hipertexto”. HTTP es el método de transferencia de este tipo de información.

Muchas veces el protocolo que utilizamos cuando utilizamos un navegador se encuentra implícito. Observamos la URI y solo vemos platzi.com/home, el HTTPS siempre se encuentra ahí, pero para hacer más amena la lectura de un dominio, los navegadores lo ocultan.

También cabe mencionar el famoso “WWW” que muchas veces acompaña a una URI. Puedes encontrarlo con el nombre de W3 o simplemente “La Web”. El mismo significa World Wide Web o Red Informática Mundial.

Dominio de una página
El nombre propiamente dicho de una página se lo conoce como Dominio. Cuando hablamos de “la página de Platzi”, hacemos referencia a su dominio que es https://platzi.com.

Observa también el .com que tantas veces has visto en otras páginas. La extensión de los dominios hacen referencia al grupo al que este pertenece. Pudiendo tener extensiones gubernamentales como .gob, extensiones propias de un país como .ar o .mx o extensiones de otro tipo como .net que también es muy utilizado, entre muchos otros tipos de extensiones.

Los dominios son también denominados como DNS (Domain Name System). Es un concepto algo más avanzado que no debes preocuparte en este momento, pero en pocas palabras, es la forma de resolver y localizar una página web en internet en todo el mundo.

Imagina que en el mundo existen cientos de miles y miles de servidores con páginas webs. ¿Cómo encontrar el servidor de Platzi? Los DNS resuelven esto y permiten que la página de Platzi llegue a tu navegador.

Puertos
Los puertos son ese canal por el que se intercambia información entre un cliente y un servidor o entre subsistemas. Es un número que va del 0 al 65535 (2^16) y se aconseja escoger uno a partir del 1024. Muchas tecnologías o protocolos tienen un puerto por defecto ya establecido como el puerto 80 para HTTP o el puerto 443 para el HTTPS.

Si utilizamos un puerto que ya se encuentra en uso, podemos tener problemas con nuestra aplicación. Por este motivo, se utilizan a partir del puerto 1024, dado que de ahí para atrás muy posiblemente ya se encuentran en uso en tu computador.

A medida que ganes experiencia en múltiples tecnologías te encontrarás con que existen muchos otros puertos ya predefinidos como el puerto 21 para el protocolo FTP, 22 para SSH, 3306 para MySQL, entre otros. Para NodeJS, se suele utilizar el puerto 3000 o el 8080.

Los puertos suelen estar ocultos y no los verás en una URI. Cuando accedes a una página a través de HTTP, implícitamente estás utilizando el puerto 80 o el puerto 443 si se trata de HTTPS. Si decides cambiar el puerto (no es recomendable), si deberás hacer referencia al mismo como platzi.com:3000/.

Ruta de una página
La ruta es el nombre de una página en particular dentro de toda una página web. El nombre de cada página es asignado por el propio programador. Si te encuentras desarrollando una página de un buscador, puedes denominar a la misma como /buscador o /search, la páginas principal de una web suele ser /home o simplemente /.

Te animo a explorar la ruta de cualquier página que visites. Verás que su nombre siempre está relacionado con el contenido de la misma.

Parámetros de consulta
Los parámetros de consulta deben ser opcionales. Una página continuará funcionando o será correctamente localizada existan o no estos.

Los mismos comienzan luego de un ? seguido del nombre de la variable y de su valor. Si una página tiene más de un parámetro, estos se separan con el caracter &. Por ejemplo: ?nombre=freddy&pais=colombia.

Estos parámetros se suelen utilizar para crear buscadores. Son variables para crear filtros de búsquedas o pasarle información dinámica que será capturada por la aplicación y manipulada.

Sección de una página
Dentro de una misma página encontrarás varias secciones. Las mismas pueden identificarse con un nombre en particular o un ID. En el URI, puedes hacer referencia a esta sección con un # seguido del nombre de dicha sección. Por ejemplo https://platzi.com/home#routes.

Observarás que, al ingresar a este tipo de URI, serás dirigido directamente a esa sección dentro de la página. Es una forma de crear un “atajo” para el usuario cuando la página tiene mucho contenido.

Localhost o servidor local
La palabra localhost será parte de ti de ahora en adelante. La misma significa “servidor local” y hace referencia a tu propio computador. Cuando levantas un servidor con NodeJS, puedes ingresar desde un navegador con localhost:3000/ o con el puerto que hayas elegido.

Cualquier otra aplicación o programa que se encuentra ejecutándose en tu computador, también podrás acceder a él desde locahost:<puerto>/.

Peticiones HTTP
Ya sabes lo que es el protocolo HTTP, pero aún hay un concepto más que debes interiorizar.

Las solicitudes o peticiones que realices por medio de HTTP a un servidor puede ser de varios tipos, cada uno de ellos destinado a un propósito específico. Los diferentes tipos de solicitudes HTTP se conocen como “Verbos HTTP”. Veamos de qué tipos existen:

GET: El verbo GET se utiliza para la obtención de datos. Es el más utilizado. Siempre que ingresas a una página web, la solicitud se realiza por GET.
POST: Utilizarás POST para la creación de datos o registros. POST tiene la particularidad de que codifica la información para el envío de datos secretos.
PUT: PUT se usa para la actualización de datos, para indicarle al servidor de la actualización completa de un registro.
PATCH: PATCH es muy similar a PUT, con la diferencia de que suele implementar para actualizar un solo dato de un registro.
DELETE: Así como puedes obtener, crear y actualizar información, DELETE lo utilizarás para el borrado de datos.
No son todos, aún hay más tipos, pero estos son los más utilizados y que tienes que comenzar a conocer de momento.

Muchos de los verbos HTTP son intercambiable. O sea, siempre podrás obtener datos a través de PUT o POST, o borrar los mismos a través de GET. Las buenas prácticas de desarrollo de software, y los buenos programadores, respetan las “reglas” del protocolo y te aconsejo que tú también lo hagas.

Conclusión
Muchos conceptos, mucha información nueva para ti. Te aconsejo que vuelvas a ver esta clase en varias oportunidades para consolidar el conocimiento, ya que todos los conceptos vistos aquí, te acompañarán el resto de tu vida como desarrollador de software.

Te encuentras desarrollando tu primer backend y tu primera API. Un backend está compuesto por múltiples endpoints que serán utilizados por el front-end. Es momento de conectar ambos mundos.

¿Qué es un endpoint?
Un nuevo término que debes conocer y que siempre te acompañará. Llamamos endpoint, o punto final, a cada URL que el backend exponer para que el front-end utilice, ya sea para la obtención de datos, creación, actualización, etc.

Cada acción que tu backend pueda realizar, la misma se ejecutará a través de un endpoint.

Creando tu primer endpoint
Crear un endpoint con ExpressJS para enviar datos a un cliente es muy sencillo. Ya tienes tu servidor levantado, al mismo vamos a agregarle endpoints para la obtención de datos.

const express = require('express');
const app = express();
const port = 3000;

// Endpoint para obtener datos
app.get('/datos', (req, res) => {
  const datos = '12345';
  res.send(datos);
});

app.listen(port, () => {
  console.log(`¡Servidor listo!`);
});
Observa el endpoint /datos, el mismo devuelve un número. Accede a este endpoint desde la URL localhost:3000/datos y visualizarás los mismos en el navegador.

Pero la obtención de esta información por parte de un cliente no suele realizarse directamente por el navagador. En su lugar, utilizamos un cliente HTTP para lograr conectar en backend y el front-end.

Conexión de backend y front-end
Las consultas por parte de un front-end al backend se realizan por medio de un cliente HTTP. El mismo es una librería que te permitirá hacer consultas a los endpoints y obtener información.

Encontrarás muchos clientes HTTP en NPM. Para este ejemplo, usaremos uno llamado fetch que es propio de Javascript y no tendremos que instalar ninguna dependencia.

En los archivos JS de tu front-end, puedes realizar solicitudes HTTP de la siguiente manera:

fetch('http://localhost:3000/datos')
  .then(response => response.json())
  .then(data => {
    console.log(data);      // 12345
  });
Al ejecutar esta función asíncrona, obtendrás los datos del backend en la variable data pudiendo manipular los mismos y mostrarlos en el HTML de tu página.

Problemas de CORS
Puedes tener con un problema trivial al querer realizar consultas a un backend. Mejor dicho… vas a tener este problema.

CORS es un pequeño problema con el que te toparás mil veces en tu vida como programador. Pero no te preocupes, es de fácil resolución.

La consola de desarrollo de los navegadores te permitirá obtener más información cuando las cosas no funcionen. Si te encuentras con un error similar a:

Ejemplo problema de CORS
Indica un problema de CORS que significa, por sus siglas en español, Intercambio de Recursos de Origen Cruzado. Es una medida de seguridad de los backend para que no cualquier cliente, o cualquier front-end, realice consultas al mismo.

El backend debe permitir explícitamente que un cliente haga consultas, de lo contrario rechazará las mismas.

Habilita CORS instalando su respectiva dependencia con npm install cors y realizando la importación de la misma.

// Importamos CORS
const cors = require('cors');

// Activamos CORS
app.use(cors());
De esta forma, el backend está listo para recibir consultas y el front-end podrá obtener los datos y trabajar con los mismos.

Conclusión
Acabas de dar tu primer paso en el desarrollo full-stack, o sea, en el desarrollo backend y front-end. ¡Felicidades!

Es solo el primer paso para integrar estos los dos mundos y poder visualizar en un front-end, los datos que el backend procesa o almacena en una base de datos.


El intercambio de información entre un backend y un frontend puede realizarse de varias formas. Será importante para ti como programador identificar cuándo utilizar cada uno de ellas.

Notación de Objetos de Javascript
JSON, o Javascript Object Notation es un estándar para la transferencia de datos entre dos sistemas. Hoy en día, casi todos los protocolos de Internet funcionan por detrás con JSON cuando se trata de enviar y recibir información.

Su sintaxis es algo particular y puede causar confusión al principio. Comprendamos cómo se estructura un JSON y para qué nos servirá:

Estructura de un JSON
Un JSON está compuesto por claves para acceder a determinados valores.

Composición de un JSON
El formato JSON no deja de ser texto simple. Para acceder a su información, debemos “parsearlo” para convertir el mismo en un objeto y así poder obtener el valor de sus datos. Para lograr esto, empleamos la función propia de JavaScript JSON.parse('').

Manipulación de un JSON
Un JSON es un objeto y dentro del mismo puede tener datos del tipo numéricos, texto, booleanos u otros objetos.

Habilitando JSON en ExpressJS
Para enviar y recibir información en formato JSON con ExpressJS, debes activarlo de forma muy simple.

// Importamos y creamos la aplicación de Express
const express = require('express');
const app = express();

// Activamos el formato JSON
app.use(express.json());
Con esta simple línea de código, tus endpoints ya puede procesar información en formato JSON.

Envío de parámetros al backend
Otra manera de enviar información al backend es a través de los parámetros de URL. Los mismos componen y son parte de la URL, por lo tanto, serán obligatorios.

Presta atención al siguiente endpoint:

// Creamos un endpoint del tipo POST
app.post('/datos/:id', (req, res) => {
    const id = req.param.id;      // Capturamos parámetros de URL
    const body = req.body;        // Capturamos el cuerpo de la solicitud
    console.log(id);
    console.log(body);
})
Observa el :id, el mismo espera recibir un identificador o un número de forma dinámica para utilizar en el código. Puedes capturar este dato por su nombre req.param.id. Si te das cuenta, req es un objeto que tiene un sub-objeto llamado param y dentro posee este el parámetro que envía el cliente desde el front-end.

{
    "req": {
        "param": {
            "id": 123
        }
    }
}
Puedes enviar este parámetro de URL más información en el cuerpo de la solicitud en formato JSON desde el front-end con el siguiente fetch:

const id = 123;
fetch(`http://localhost:3000/datos/${id}`, {    // Parámetro de URL
    method: 'post',          // Indicamos que el endpoint es un POST
    headers: {
      'Content-Type': 'application/json'        // Indicamos que estamos enviando un JSON
    },
    body: JSON.stringify({    // Creamos un JSON con la información para el backend
      datos: '12345'
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);        // Recibimos la respuesta del backend
  });
Los endpoints puede recibir un JSON en el body o el cuerpo de la solicitud. En el mismo puedes enviar tanta información como el backend necesite. Mientras que los parámetros de URL se suelen utilizar para enviar IDs o identificadores de una solo registro.

Conclusión
Dos formas de enviar información al backend o recibirlas en el front-end, JSON y parámetros de URL. Poco a poco entenderás cuándo usar cada uno. Cuando se trata de mucha información o un solo dato.

Más allá del lenguaje de programación que estamos utilizando, en este caso Javascript junto con NodeJS y ExpressJS, todos funcionan exactamente de la misma manera. Si aprendes a hacerlo con un lenguaje, los conceptos te servirán por siempre para cualquier otro que quieras aprender.

Contribución creada por Kevin Fiorentino (Platzi Contributor) con aportes de Anyilo José Rangel Arias.

El desarrollo de una API REST tiene sus conceptos y características. A medida que crezcan como profesional del software irás aprendiendo más al respecto y ganarás en herramientas para hacer mejor tu trabajo.

¿Qué es una API REST?
Una API REST, o API RESTful o simplemente API, es el nombre técnico de las aplicaciones backend para la consulta y manipulación de datos por parte de un cliente.

REST significa “Transferencia de Estado Representacional”, por sus siglas en español. Son una serie de principios para el desarrollo de APIs. Algunos de estos principios son:

Utiliza arquitectura cliente-servidor y el protocolo HTTP.
Ausencia de estado, el backend no guarda el estado de la solicitud.
Uso de caché para un funcionamiento más rápido.
Intercambio de información utilizando JSON, XML o texto plano.
Utilización de verbos GET, POST, PUT, DELETE.
Las API REST son un concepto del que poco a poco aprenderás más. Hasta el momento, ya conoces los conceptos básicos para la construcción de tu primer backend.

Herramientas del navegador
Los navegadores web como Chome, Firefox o Safari poseen herramientas para los desarrolladores. La misma te permitirá obtener toda la información necesaria para visualizar qué está sucediendo con tu aplicación.

En tu navegador de preferencia, al apretar F12 podrás abrir las herramientas que el mismo provee para trabajar en tu aplicación. No solo utilizarás VC Code, los navegadores también poseen herramientas muy útiles para hacer mejor tu trabajo.

Herramientas para desarrolladores en el navegador{height="" width=""}

Muchas opciones, muchos botones. Poco a poco irás aprendiendo qué y cómo utilizarlo para visualizar lo que está sucediendo en tu app.

Por ejemplo, la pestaña “Console”, o consola, podrás ejecutar código Javascript e interactuar con tu aplicación o hacer pequeñas pruebas.

Consola del navegador{height="" width=""}

Otra pestaña muy importante es “Network”, o red si tienes el navegador en español. La misma te permitirá visualizar todas las solicitudes que el front-end realice al backend.

Red del navegador{height="" width=""}

Esta opción será la más trascendental para poder observar los datos que entran y salen de un front-end. Puedes observar información como el estado de cada petición, el verbo HTTP, la URL, el tamaño de información, entre otros datos.

Conclusión
En esta clase has sumado algunos conceptos o herramientas más que tienes que conocer para poco a poco continuar incrementando tu conocimiento en el mundo de la programación.

Por un lado, el desarrollo de API si es de tu preferencia la programación backend. Por otro lado, las herramientas que los navegadores proveen a los desarrolladores para ayudarlos en su trabajo cada día.

Los navegadores no son todos iguales, tiene pequeñas diferencias, pero a grandes rasgos, te encontrarás con las mismas opciones y las mismas configuraciones. Te invito a que explores la consola de todos los navegadores que tengas en tu computador.
A medida que tu aplicación crezca y tengas más y más código, habrá errores, es inevitable tenerlos. Los errores en un software se denominan BUG y el proceso de identificarlos y solucionarlo lo conocemos como DEBUGGING.

Errores en una aplicación
Te habrás dado cuenta de que la palabra BUG significa Insecto o bicho en inglés. Este término se originó en el siglo XIX cuando se construían complicadas y enormes máquinas. A estas máquinas se les llegaban a meter bichos (BUGS) y estorbaban el movimiento de alguna de sus piezas haciendo que fallaran.

El término Bug comenzó a popularizarse en los años '40 cuando operadores de una gran máquina encontraron una polilla atascada en el interior de la misma.

Primer BUG de la historia de la computación
Pegaron el bicho a un reporte explicando los motivos de los fallos de la máquina y desde entonces decimos “bug” cuando nuestra aplicación tiene un error.

Proceso de solución de bugs
Hay diversos tipos de bugs dependiendo la gravedad del error que esté causando en un sistema. El proceso de identificar los mismos y solucionarlos es conocido como “Debug” o “Debuging”.

Las herramientas para desarrolladores de los navegadores serán tu mejor aliado y te darán mucha información para localizar un fallo y solucionarlo.

Conclusión
Bug y Debug, dos términos del cual oirás mucho al respecto a medida que te sumerjas en el mundo del desarrollo de software.

“Puedes demostrar la presencia de bugs en una aplicación, pero no puedes demostrar la ausencia de los mismos.” (Vuelve a leer esta frase). No es posible demostrar que un sistema funciona bien al 100%. Puede haber bugs en donde sea y por este motivo también existen profesionales expertos en encontrarlos denominados Testers.

Te toparás con bugs toda tu vida como programador. Aprender a debuguear de acuerdo al lenguaje o a la tecnología que estés utilizando te permitirá solucionar los mismos.

Si te encuentras aquí, es porque acabas de finalizar tu primer proyecto de software. ¡Felicidades! Hagamos un repaso juntos sobre lo que consiste el desarrollo backend.

Repaso del desarrollo backend
A lo largo de estas últimas clases, has desarrollado el backend de tu aplicación y has aprendido todos los siguientes conceptos:

¿Qué es un backend?
Diferencias backend y front-end
Arquitectura cliente/servidor
Lenguajes de backend: NodeJS y NPM
Interfaces de línea de comandos
Servidor web local con ExpressJS
HTTP y tipos de solicitudes
API, URI, URL, URN
Transferencia de información y JSON
Mucha nueva información para ti. Te aseguro que todo lo visto en este curso no deja de ser la base del mundo de la programación y dentro poco tiempo serán temas triviales de todos los días y muy fáciles de comprender.

Repasa cada tema que no recuerdes. La mejor forma de aprender algo es explicarlo. Intenta explicarle a un amigo o familiar qué es HTTP, o cuáles son las diferencias entre un backend y un frontend.

Fueron más de 80 clases en total a lo largo de este curso para desarrollar tu videojuego. Ya solo queda probar el mismo en la siguiente clase.

