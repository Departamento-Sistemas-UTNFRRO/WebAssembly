# UTN Web Assembly (Español)

Este es el repositorio principal del grupo de investigación de la UTN FRRo (Argentina). El objetivo de este proytecto es documentar que tán eficiente es WASM en compración con JS y ASM.js

## Tests

Dentro de la carpeta Tests encontrarás dos directorios básicos 

- base-template
- test-example

Estos directorios están preparados para ser utilizados como plantillas para futuras pruebas

## Añadir un test

Para añadir un nuevo test copia la carpeta "test-example" y renombrala. Dentro encontrarás 3 archivos:

- program.wasm
- program.js
- test-example.html

### WASM

Este es el archivo binario wasm. Si quieres cambiar el nombre del archivo, busca la configuración necesaria en la sección HTML.

### JS

Este es el archivo JS con la funcion "JSmain". Es importante utilizar este nombre para la función main. Este archivo debe ser nombrado como "program.js" (NO ES OPCIONAL)

#### HTML

Una vez copiado puedes renombrarlo. Es recomendable que al renombrarlo se utilice el mismo nombre de la carpeta.

Luego debes cambiar estas lineas:

**Variables globales: (lineas 6-9)**

Cambia el nombre de la variable folder por el nombre que usaste para la carpeta y cambia el nombre del archivo si así lo deseas (opcional)

```html
<script>
    var folder = 'test-example'
    var filename = 'program'
</script> 
```

## Ejecutar un test

Para ejecutar un test tienes dos opciones, con archivos online (Github) o con archivos offline (solo navegador Firefox).

### Online

Realiza un commit y un push y luego ejecuta el archivo html en cualquier navegador (si no eres colaborador puedes realizar un PR)

### Offline

Abre el archivo html y cambia la siguiente linea (por defecto, línea 5) 

```html
<script src="../base-template/base.js" type="text/javascript"></script> 
```

Por estas dos

```html
<script src="../base-template/base.js" type="text/javascript"></script> 
<script src="../base-template/base_offline.js" type="text/javascript"></script> 
```
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# UTN Web Assembly (English)

This is the main repository for a research group in the UTN FRRo (Argentina). The aim of this project is to document how much efficient is WA over JS and ASM.js

## Tests

Inside the Tests folder you will find two basic directories:

- base-template
- test-example

This are prepared to serve as a template for future tests.

##  Add a test

To add a new test simply copy the "test-example" folder and rename it. Inside you will find 3 files:

- program.wasm
- program.js
- test-example.html

### WASM

This is the wasm binary file. If you want to change the name of the file, look for configuration needed in the HTML section.

### JS

This is the JS file with the "JSmain" function. It is important to use this name for the main function. This file should have the "program.js" name (NOT OPTIONAL).

#### HTML

Once copied, you can rename it, it is recommended to rename it with the same name of the folder. 

Then you have to change this lines:

**Global variables: (lines 6-9)**

Change the folder name variable for the name you use in the folder and change the file name if you want (optional).

```html
<script>
    var folder = 'test-example'
    var filename = 'program'
</script> 
```

## Run a test 

For running a test you have two options, with online (Github) files or offline (Firefox Only) files.

### Online

Just commit and push and then execute the html in any browser (if you are not a colaborator you can PR)

### Offline

Open the html file and change the folloging line (By default, line 5)

```html
<script src="../base-template/base.js" type="text/javascript"></script> 
```

For this

```html
<script src="../base-template/base.js" type="text/javascript"></script> 
<script src="../base-template/base_offline.js" type="text/javascript"></script> 
```
