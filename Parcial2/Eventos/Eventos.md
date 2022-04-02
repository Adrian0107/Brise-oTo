# Captura y propagacion de eventos 
## Propagación
El principio de propagación es simple.

__Cuando un evento ocurre en un elemento, este primero ejecuta los manejadores que tiene asignados, luego los manejadores de su padre, y así hasta otros ancestros.__

Digamos que tenemos 3 elementos anidados FORM > DIV > P con un manejador en cada uno de ellos.

Un clic en el elemento del interior < p > primero ejecuta onclick:

1. En ese < p >.
2. Luego en el < div > de arriba.
3. Luego en el < form > de más arriba.
4. Y así sucesivamente hasta el objeto document.

![Hola =](https://ichi.pro/assets/images/max/724/0*xx90C4a2Np_gz0w8.png)

Así si hacemos clic en < p >, entonces veremos 3 alertas: p → div → form.

__Este proceso se conoce como “propagación” porque los eventos “se propagan” desde el elemento más al interior, a través de los padres, como una burbuja en el agua.__

## Detener la propagación

Una propagación de evento empieza desde el elemento objetivo hacia arriba. Normalmente este continúa hasta < html > y luego hacia el objeto document, algunos eventos incluso alcanzan window, llamando a todos los manejadores en el camino.

Pero cualquier manejador podría decidir que el evento se ha procesado por completo y detener su propagación.

El método para esto es event.stopPropagation().

## Captura
Hay otra fase en el procesamiento de eventos llamada “captura”. Es raro usarla en código real, pero a veces puede ser útil.

El estándar de eventos del DOM describe 3 fases de la propagación de eventos:

1. Fase de captura – el evento desciende al elemento.
2. Fase de objetivo – el evento alcanza al elemento.
3. Fase de propagación – el evento se propaga hacia arriba del elemento.
Aquí está la imagen de un clic en < td > dentro de una tabla, tomada desde la especificación:

![Hola=](https://ichi.pro/assets/images/max/724/0*5HJtyDUeAwoWqFNG.png)

Se explica así: por un clic en < td > el evento va primero a través de la cadena de ancestros hacia el elemento (fase de captura), luego alcanza el objetivo y se desencadena ahí (fase de objetivo), y por último va hacia arriba (fase de propagación), ejecutando los manejadores en su camino.

__Antes solo hablamos de la propagación porque la fase de captura es raramente usada. Normalmente es invisible a nosotros.__

Los manejadores agregados usando la propiedad on< event > ó usando atributos HTML ó addEventListener(event, handler) con dos argumentos no ejecutarán la fase de captura, únicamente ejecutarán la 2da y 3ra fase.

Para atrapar un evento en la fase de captura, necesitamos preparar la opción capture como true en el manejador:

Hay dos posibles valores para la opción capture:

- Si es false (por defecto), entonces el manejador es preparado para la fase de propagación.
- Si es true, entonces el manejador es preparado para la fase de captura.

____
| Form
______
||   DIV
_______________
|||      P
__________________________

El código prepara manejadores de clic en cada elemento en el documento para ver cuáles están funcionando.

Si haces clic en < p >, verás que la secuencia es:

1. HTML → BODY → FORM → DIV (fase de captura, el primer detector):
2. P (fase de objetivo, se dispara dos veces, tan pronto como preparemos los dos detectores: de captura y propagación)
3. DIV → FORM → BODY → HTML (fase de propagación, el segundo detector).

Hay un propiedad event.eventPhase que nos dice el número de fase en la qué el evento fue capturado. Pero es raramente usada, ya que usualmente lo sabemos en el manejador.