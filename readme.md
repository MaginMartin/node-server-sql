## Ingresos:

GET -> "/ingresos/:idUsuario": Obtener ingreso por usuario
POST -> "/ingresos/:idUsuario": Insertar ingreso
PUT -> "/ingresos/": Actualizar ingreso
DELETE  -> "/ingresos/:id_ingreso": Borrar ingreso (Es un put que cambia el estado de la row)
## Egresos:
GET -> "/egresos/:idUsuario": Obtener ingreso por usuario
POST -> "/egresos/:idUsuario": Insertar egreso
PUT -> "/egresos/": Actualizar egreso
DELETE  -> "/egresos/:id_ingreso": Borrar egreso (Es un put que cambia el estado de la row)

## usuarios

GET -> "/usuario/login": Obtener usuario
POST -> "/usuario/newUsuario": crea nuevo usuario
PUT -> "/usuario/:idUsuario": Actualizar datos de usuario
<!-- DELETE  -> "/usuario/:idUsuario"": Borrar usuario  () -->
