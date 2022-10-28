*----- Interfaz Comparador CheckSum ------*

Haremos la interfaz del comparador de forma separada para 
implemementar un orden de la app Cliente-Servidor.
De esa forma creo se podría implementar en un servidor 
que podrían usar los alumnos desde las estaciones de trabajo,
asi esta aplicación se podría integrar al flujo futuro que se
esta desarrollando en Duoc de trabajo en Red antes que en Local.
Se necesitaria un computador de los viejos dedicado en algun espacio,
que deberían quedar libres una vez lleguen los nuevos en Marzo 2023.
Sería un posibilidad a discutir con Juan para ver como apoyo
a los flujos de postproducción para los trabajos de los alumnos
con Blackmagic DaVinci Resolve 17-18.

Esta primera versión de la app compelta solo implementa el comparador
CheckSum automatico, posteriormente esta Aplicación funcionará
como un contenedor de otras funciones que pueda desarrollar el Servidor Node.js.

Lo desarrollaremos con render desde Servidor por simplicidad y
porque solo tiene que hacer un trabajo y mostrar mensaje a usuarios-alumnos
de termino y avance de procesamientos y traspasos de estos pequeños archivos.
Posteriormente se podría agregar algo para mejorar flujo con archivos OMF/OMFI para ProTools.