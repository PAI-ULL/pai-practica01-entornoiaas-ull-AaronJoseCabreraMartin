
# Conectar con el entorno Iaas

## *Autor*: _Aarón José Cabrera Martín_

### Enunciado

1. Configure un alias en el servicio TIC de la ULL.
2. Acceda remotamente a la máquina del Iaas que tenga asignada y actualícela. 
3. Cambie el nombre lógico de la máquina.
4. Instale **git**.
5. Clone el repositorio **Github** del profesor.
6. Configure **VSCode** para poder utilizar la conexión remota ssh.
7. Escriba un programa `HelloWorld.cc` compruebe que puede compilar y ejecutar.
8. Configure su máquina para no tener que escribir siempre su usuario y contraseña en cada conexión.
9. Configure un alias para la conexión ssh.

**Importante:** _deje una copia de todos los archivos que modifique en el repositorio._

1. #### Configure un alias en el servicio TIC de la ULL.
El alias que he escogido es:  **aaron.jose.cabrera.martin.13**

2. #### Acceda remotamente a la máquina del Iaas que tenga asignada y actualícela. 

Activando la correspondiente VPN, podemos acceder al entorno [Iaas](https://iaas.ull.es/) de la ULL, dentro de este he encendido la máquina correspondiente y he activado el "console browser". Desde aquí, pude ejecutar el comando `ifconfig` y anotar la dirección IPv4 de mi máquina. En este caso es: **10.6.128.254**

![ifconfig](/capturas/ifconfig.PNG)

Para actualizar he utilizado los siguientes comandos:

`sudo apt update`

`sudo apt upgrade`

`sudo apt autoremove`

3. #### Cambie el nombre lógico de la máquina.

Para cambiar el nombre lógico de la máquina he editado los ficheros **/etc/hostname** y **/etc/hosts**.

![nombre](/capturas/nombre.png)

4. #### Instale **git**.

Para instalar git he utilizado `sudo apt install git`

![git](/capturas/git.png)

5. #### Clone el repositorio **Github** del profesor.

![gitclone](/capturas/gitclone.png)

6. #### Configure **VSCode** para poder utilizar la conexión remota ssh.

He instalado la extensión de ssh para VSCode y he establecido una conexión como se puede observar.
![VisualStudioCode](/capturas/vscode.png)

7. #### Escriba un programa `HelloWorld.cc` compruebe que puede compilar y ejecutar.

Como se puede observar, he podido crear y ejecutar un programa sencillo en **C++**.

![helloworld](/capturas/helloworld.png)

8. #### Configure su máquina para no tener que escribir siempre su usuario y contraseña en cada conexión.

Para configurar he seguido los siguientes pasos:

1. He generado las claves en ambas máquinas con `ssh-keygen`
2. Desde mi máquina he enviado el archivo **id_rsa.pub** a la máquina del Iaas. Este archivo fue generado en el paso anterior.
3. Desde la máquina del Iaas he volcado el contenido de ese fichero en el fichero **authorized_keys**.

_Todos los ficheros mencionados se encuentran en el directorio **/home/[usuario]/.ssh** de las respectivas máquinas_

Ahora, como se puede comprobar no necesito contraseña para establecer la conexión.

![sshsincontraseña](/capturas/sshsincontra.png)

4. #### Configure un alias para la conexión ssh.

Para configurar un alias para realizar la conexión usando este alias en lugar de la dirección IP he tenido que modificar el archivo **config** que se encuentra en la carpeta .ssh anteriormente mencionada. 

La sintaxis es la siguiente:

~~~~
Host [alias]
	HostName [IP]
	User [usuario]
~~~~

![sshPAI](/capturas/sshPAI.png)

Como se puede observar he conseguido establecer un alias funcional.

**Nota**: _He colocado los ficheros hosts y hostname, junto con el código fuente del programa helloworld, es decir, en la carpeta src_ 