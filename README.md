testMobileBackbone
==================

Proyecto de ejemplo para probar todos los aspectos de un framework.

Los aspectos a probar serian:

 - Facilidad de manipular la vista. DataBinding (reflejo automatico de cambios, es decir, facilidad de manipular y automatizar cambios en los elementos de la vista)
 - Facilidad de manipular objetos. Facilidad de manipular y relacionar objetos. Casos donde un objeto contiene otro y asi ej.: Una persona tiene un barrio, este es contendio por una ciudad, etc.. eso debe representarse en objetos y ser de facil acceso y manipulacion.
 - Facilidad de manipular la BD. Seguro habra que usar Algun ORM independiente. Facilidad de manipular BD asincronica. Lo ideal es que permita hacer transacciones sincronicas o lo mas cercano a eso.. junto con una gran flexibilidad a la hora de consultar y obtener datos, lo ideal seria que te arme la relacion del ejemplo anterior (que te traiga un obj persona cargado con su relacion a barrio y este a su ciudad).
 
Con esto deberiamos evaluar las tres partes de cualquier aplicacion.
