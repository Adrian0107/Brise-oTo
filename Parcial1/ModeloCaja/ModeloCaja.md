# Modelo de cajas CSS
### **¿Qué es el modelo de cajas CSS?** 
El modelo de cajas CSS completo se aplica a cajas que presentan comportamiento en bloque; las cajas con comportamiento en línea solo usan una parte del comportamiento definido en el modelo de cajas. El modelo define cómo funcionan juntas las diferentes partes de una caja (margen, borde, relleno y contenido) para crear una caja que puedas ver en tu página.
### **Partes de una caja** 
Al hacer una caja de tipo bloque en CSS tenemos los elementos siguientes:
- El contenido de la caja (o content box): El área donde se muestra el contenido, cuyo tamaño puede cambiarse utilizando propiedades como width y height.
- El relleno de la caja (o padding box): El relleno es espacio en blanco alrededor del contenido; es posible controlar su tamaño usando la propiedad padding y otras propiedades relacionadas.
- El borde de la caja (o border box): El borde de la caja envuelve el contenido y el de relleno. Es posible controlar su tamaño y estilo utilizando la propiedad border y otras propiedades relacionadas.
- El margen de la caja (o margin box): El margen es la capa más externa. Envuelve el contenido, el relleno y el borde como espacio en blanco entre la caja y otros elementos. Es posible controlar su tamaño usando la propiedad margin y otras propiedades relacionadas.

![](https://mdn.mozillademos.org/files/16558/box-model.png)

### **Margen**
El margen es un espacio invisible que hay alrededor de la caja. Aleja el resto de elementos de la caja. Los márgenes pueden tener valores positivos o negativos. Establecer un margen negativo para un lado de tu caja puede hacer que se superponga con otros elementos de la página. Tanto si utilizas el modelo de cajas estándar como el alternativo, el margen siempre se añade después de haber calculado el tamaño de la caja que se ve.

Podemos controlar todos los márgenes de un elemento a la vez usando la propiedad margin, o cada lado individualmente usando las propiedades equivalentes sin abreviar:

- margin-top (en-US)
- margin-right
- margin-bottom
- margin-left (en-US)

### **Bordes** 
El borde se dibuja entre el margen y el área de relleno de una caja. Si utilizas el modelo de cajas estándar, el tamaño del borde se añade a los elementos width y height que establecen el alto y el ancho de la caja. Si utilizas el modelo de cajas alternativo, el tamaño del borde reduce el tamaño de la caja de contenido, porque ocupa una parte del alto y el ancho disponibles.
Hay una gran cantidad de propiedades que sirven para aplicar estilo a los bordes: hay cuatro bordes y cada borde tiene un estilo, un ancho y un color que podemos modificar.
Puedes establecer el ancho, el estilo o el color de los cuatro bordes a la vez utilizando la propiedad border

Para establecer las propiedades de cada lado de forma individual, puedes utilizar:

- border-top
- border-right
- border-bottom
- border-left

Para establecer el ancho, el estilo o el color de todos los lados, usa lo siguiente:

- border-width
- border-style
- border-color

 Para establecer el ancho, el estilo o el color de un solo lado, puedes usar una de las  propiedades no abreviadas:

- border-top-width (en-US)
- border-top-style (en-US)
- border-top-color
- border-right-width (en-US)
- border-right-style (en-US)
- border-right-color (en-US)
- border-bottom-width
- border-bottom-style
- border-bottom-color
- border-left-width (en-US)
- border-left-style (en-US)
- border-left-color

### **Relleno** 
El relleno se encuentra entre el borde y el área de contenido. A diferencia de los márgenes el relleno no puede tomar valores negativos, por lo que el valor debe ser 0 o positivo. Cualquier fondo aplicado a tu elemento se mostrará detrás del área de relleno y, generalmente, se usa para mantener el contenido alejado del borde.

Podemos controlar el área de relleno para todos los lados de un mismo elemento usando la propiedad padding, o para cada lado uno de los lados usando las propiedades equivalentes:

- padding-top
- padding-right (en-US)
- padding-bottom
- padding-left (en-US)
