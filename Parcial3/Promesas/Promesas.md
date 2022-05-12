# ¿Qué son las promesas?
Las promesas son un concepto para resolver el problema de asincronía de una forma mucho más elegante y práctica que, por ejemplo, utilizando funciones callbacks directamente.

Como su propio nombre indica, una promesa es algo que, en principio pensamos que se cumplirá, pero en el futuro pueden ocurrir varias cosas:

![Hola =](https://lenguajejs.com/javascript/asincronia/promesas/promises.png)

1. La promesa se cumple (promesa resuelta)
2. La promesa no se cumple (promesa se rechaza)
3. La promesa se queda en un estado incierto indefinidamente (promesa pendiente)

# Promesas en Javascript 
Las promesas en Javascript se representan a través de un object, y cada promesa estará en un estado concreto: pendiente, aceptada o rechazada. Además, cada promesa tiene los siguientes métodos, que podremos utilizar para utilizarla:


| Metodos           | Descripcion |
|-------------------|-------------|
| .then(function resolve)  | Ejecuta la función callback resolve cuando la promesa se cumple.    | 
|  .catch(function reject)     | Ejecuta la función callback reject cuando la promesa se rechaza.       | 
| .then(function resolve, function reject) | Método equivalente a las dos anteriores en el mismo .then().  | 
| .finally(function end)          | Ejecuta la función callback end tanto si se cumple como si se rechaza.   |

# Consumir una promesa 
La forma general de consumir una promesa es utilizando el .then() con un sólo parámetro, puesto que muchas veces lo único que nos interesa es realizar una acción cuando la promesa se cumpla:

