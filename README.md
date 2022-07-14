# Sprint7

En esta entrega realizaremos una aplicación con el fin de facilitar los cálculos del presupuesto de una página web,  añadiendo más interacciones con el usuario respecto a la práctica anterior (casillas de selección, inputs, botones). 

Nuestra web deberá reaccionar y modificar el precio total en función de las opciones escogidas por el usuario/a.

Notas
Estas indicaciones son del responsable de frontEnd:
 Crearemos la base del proyecto sobre la que trabajar con angular-cli .


- Ejercicio 1
Nuestra aplicación empezará con tres checkboxes. De esta forma, el usuario deberá decidir qué servicios necesita para confeccionar el presupuesto.

1- Hacer una página web (500 €)

2- Hacer una campaña SEO (300 €)

3- Hacer una campaña de publicidad (200 €)

En función de las opciones que marque, se modificará el precio.
Implementa esta lógica en el componente principal hombre, que deberá indicarse como ruta inicial en el routing. 

Simplemente, tendrás que  crear 3 casillas de selección que ejecuten una función , para después traspasar esta función al evento de la casilla de selección. De esta forma, podremos ser conscientes de qué casilla de selección se ha utilizado. Por último, siguiendo el hilo de la última tarea , recuerda que tendrás que modificar el precio total. 


Ayuda:  puedes guardar la situación de cada casilla de selección en variables diferentes para calcular el total o puedes crear una única variable en formato array que te permitirá centralizar la situación de las tres casillas de selección.

También conviene guardar el presupuesto total calculado en una variable.

- Ejercicio 2

Una vez creadas las casillas de selección que permitirán al usuario seleccionar el tipo de servicio que necesita, le ofreceremos la opción de ajustar uno de los servicios: crear una página web, pudiendo elegir el número de páginas y de idiomas .

Para ello, es necesario definir un componente Panel que será visible cuando el cliente/a seleccione que desea hacer una página web.

Dentro de este componente, el cliente podrá seleccionar el número de páginas y el número de idiomas de la web que desea hacer. 

Al coste total de la web deberemos añadir la  siguiente cantidad :

 (Número de páginas * el número de idiomas * 30)€.
Este componente Panel será hijo del componente Home, pero en lugar de implementar la lógica de negocio (fórmula del coste en función del número de páginas e idiomas en Panel), deberás crear un servicio que calcule el presupuesto total.

Utiliza también reactive forms para los inputs , con  FormGroup y FormControl  para garantizar que el usuario introduce los valores.


Nota : Si la lógica de precios se hace cada vez más compleja, irá creciendo el componente Panel,  quedando sucio e inmanejable . Además, los componentes suelen ser un  template  con algo de lógica que dinamiza esta template, pero no deben tener lógica de negocio, llamadas  API  o tratamiento de datos.


- Ejercicio 3
¡GENIAL!, el usuario/a ya puede pedir 3 de nuestros servicios y personalizar uno de ellos. 

Para facilitar el procedimiento al usuario/a,  crearemos una serie de botones  situados junto al input  para que pueda modificar su selección de una manera más práctica e innovadora,  como por ejemplo: escribir en un texto la cantidad deseada (d de este modo, se ahorrará teclear el número de páginas e idiomas necesarios). 


- Ejercicio 4
Para terminar esta primera fase del proyecto, es necesario implementar una pantalla de bienvenida al usuario / a , donde se explique el propósito y el funcionamiento de la web.

Pulsando un botón se mostrará en el componente Home con la calculadora de presupuestos. También deberá haber un botón que permita al usuario volver atrás.















