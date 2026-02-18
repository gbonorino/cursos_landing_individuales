# Guía para Editar el Sitio Web - Bonorino Academy

Esta guía te ayudará a actualizar el contenido del sitio web sin necesidad de conocimientos técnicos avanzados. Todo se hace directamente desde GitHub.

---

## Parte 1: Cómo Actualizar la Sesión Actual de Cursos

### ¿Qué es una sesión?

Una "sesión" es un periodo de tiempo específico en el que Centro REDES ofrece un grupo seleccionado de cursos. Por ejemplo, "Sesión Otoño 2026" podría incluir 5 cursos que empiezan el 15 de marzo y terminan el 30 de mayo.

### Paso a paso para editar la sesión

#### 1. Acceder al archivo

**Enlace directo para editar:** [sessions.json](https://github.com/Bonorinoa/Bonorino-Academy/edit/main/sessions.json)

O manualmente:
1. Ve a https://github.com/Bonorinoa/Bonorino-Academy
2. Busca el archivo `sessions.json` en la lista principal
3. Haz clic en el archivo para abrirlo
4. Haz clic en el ícono del lápiz (✏️) que dice "Edit this file"

#### 2. Entender la estructura del archivo

El archivo tiene esta forma:

```json
{
  "currentSession": {
    "name": "Sesión Otoño 2026",
    "startDate": "2026-03-15",
    "endDate": "2026-05-30",
    "registrationDeadline": "2026-03-10",
    "courseIds": [1, 13, 14, 2, 11]
  },
  "announcement": "¡Inscripciones abiertas hasta el 10 de marzo!",
  "showBanner": true
}
```

**Explicación de cada campo:**

- **`name`**: El nombre de la sesión que se mostrará en el sitio (ej: "Sesión Otoño 2026", "Sesión Primavera 2026")
- **`startDate`**: Fecha de inicio en formato AAAA-MM-DD (año-mes-día). Ejemplo: "2026-03-15" = 15 de marzo de 2026
- **`endDate`**: Fecha de finalización en formato AAAA-MM-DD
- **`registrationDeadline`**: Fecha límite para inscribirse en formato AAAA-MM-DD
- **`courseIds`**: Array (lista) de números que representan los IDs de los cursos incluidos en esta sesión. Ver tabla completa abajo.
- **`announcement`**: Mensaje que aparecerá en el banner naranja del catálogo (ej: "¡Últimos días para inscribirse!")
- **`showBanner`**: Si es `true`, el banner se muestra. Si es `false`, el banner está oculto.

#### 3. Tabla completa de IDs de cursos

Usa estos números en el array `courseIds` para seleccionar qué cursos están en la sesión actual:

| ID | Título del Curso | Categoría | Track |
|----|------------------|-----------|-------|
| 1 | Chatbot personalizado con LangChain | IA | ai |
| 2 | Imágenes Satelitales (Software Libre) | Satellites | geo |
| 3 | SQL y Bases de Datos (SQLite) | Data | data |
| 4 | Programación aplicada con R | Code | data |
| 5 | Potenciar Excel con Python + IA | Office | ai |
| 6 | Programación con Python | Code | data |
| 7 | Machine Learning en Ciencias Sociales | ML | data |
| 8 | SIG y Satélites para el Agro | Agro | geo |
| 9 | Modelos Hidrológicos HEC-HMS | Hidro | water |
| 10 | Modelado Hidráulico HEC-RAS | Hidro | water |
| 11 | Google Earth Engine Integral | Satellites | geo |
| 12 | QGIS Integral y Datos Espaciales | GIS | geo |
| 13 | Vibe Coding con Lovable | IA | ai |
| 14 | Cursor AI: Programación Científica | IA | ai |

**Ejemplo:** Si quieres una sesión con los 3 cursos de IA más avanzados y los 2 cursos de hidrología:
```json
"courseIds": [13, 14, 1, 9, 10]
```

**Nota importante:** El orden de los IDs no importa, pero todos deben existir en la tabla.

#### 4. Ejemplo de cambio común

**Situación:** Quieres crear una nueva sesión de verano con 4 cursos.

**Antes:**
```json
{
  "currentSession": {
    "name": "Sesión Otoño 2026",
    "startDate": "2026-03-15",
    "endDate": "2026-05-30",
    "registrationDeadline": "2026-03-10",
    "courseIds": [1, 13, 14, 2, 11]
  },
  "announcement": "¡Inscripciones abiertas hasta el 10 de marzo!",
  "showBanner": true
}
```

**Después:**
```json
{
  "currentSession": {
    "name": "Sesión Verano 2027",
    "startDate": "2027-01-10",
    "endDate": "2027-03-15",
    "registrationDeadline": "2027-01-05",
    "courseIds": [6, 4, 3, 12]
  },
  "announcement": "¡Nueva sesión de verano! Inscripciones hasta el 5 de enero.",
  "showBanner": true
}
```

#### 5. Guardar los cambios

1. Después de hacer tus edits, baja hasta el final de la página
2. En la sección "Commit changes":
   - **Título del commit:** Escribe algo descriptivo como "Actualizar sesión a Verano 2027"
   - **Descripción (opcional):** Puedes agregar más detalles si quieres
3. Selecciona "Commit directly to the `main` branch"
4. Haz clic en el botón verde "Commit changes"

**¡Listo!** El sitio web se actualizará automáticamente en unos minutos (Vercel/Netlify detecta el cambio y hace el deploy).

#### 6. Ocultar el banner temporalmente

Si quieres que el banner naranja no aparezca (por ejemplo, entre sesiones), simplemente cambia:

```json
"showBanner": false
```

Luego haz commit como se explicó arriba.

---

## Parte 2: Cómo Agregar un Nuevo Curso al Catálogo

### ¿Cuándo usar esto?

Cuando Centro REDES lanza un curso completamente nuevo que no está en la lista actual de 14 cursos.

### Archivo a editar: `constants.ts`

**Enlace directo:** [constants.ts](https://github.com/Bonorinoa/Bonorino-Academy/edit/main/constants.ts)

### Estructura de un curso

Cada curso en el archivo `constants.ts` tiene este formato:

```typescript
{ 
  id: 15, 
  title: "Nombre del Curso", 
  category: "Categoría", 
  price: "$100.000", 
  track: "ai", 
  desc: "Descripción breve del curso.",
  link: "https://centroredes.org.ar/index.php/nombre-curso/" 
}
```

**Explicación de cada campo:**

- **`id`**: Número único que identifica al curso. Usa el siguiente número disponible (si el último curso tiene id 14, el nuevo será 15).
- **`title`**: Título completo del curso como quieres que aparezca en el catálogo.
- **`category`**: Etiqueta corta que aparece en la esquina del card (ej: "IA", "Satellites", "Code", "GIS", "Agro", "Hidro", "ML", "Data", "Office").
- **`price`**: Precio en formato texto con símbolo de peso argentino (ej: "$90.000", "$100.000").
- **`track`**: Categoría principal para el filtro. **Valores válidos:** `'ai'`, `'geo'`, `'data'`, `'water'`
- **`desc`**: Descripción de 1-2 oraciones que explica qué aprenderá el alumno.
- **`link`**: URL completa de la página del curso en centroredes.org.ar

### Valores válidos para `track`

| Valor | Significado | Filtro en el sitio |
|-------|-------------|-------------------|
| `'ai'` | Inteligencia Artificial y Productividad | IA & Productividad |
| `'geo'` | Geoespacial (satélites, GIS, SIG) | Geospacial |
| `'data'` | Ciencia de Datos (Python, R, SQL, ML) | Data Science |
| `'water'` | Hidrología y recursos hídricos | Hídricos |

### Ejemplo: Agregar un nuevo curso

**Situación:** Quieres agregar un curso nuevo llamado "Análisis de Riesgo Climático con Python".

1. Abre el archivo `constants.ts` (enlace directo arriba)
2. Busca el último curso en el array `COURSES` - actualmente el último es el curso con id 10 (Modelado Hidráulico HEC-RAS) que está alrededor de la línea 128-136
3. **Antes del corchete de cierre `];`** del array COURSES (alrededor de la línea 137), agrega una coma después del último curso y pega:

```typescript
  { 
    id: 15, 
    title: "Análisis de Riesgo Climático con Python", 
    category: "Climate", 
    price: "$95.000", 
    track: "data", 
    desc: "Modela escenarios de cambio climático y evalúa impactos usando Python y datos satelitales.",
    link: "https://centroredes.org.ar/index.php/analisis-riesgo-climatico/" 
  },
];
```

**Importante:** 
- No olvides la coma (`,`) después del curso anterior
- Respeta las comillas dobles (`"`) y simples (`'`)
- El `id` debe ser único y mayor al más alto existente

### Ubicación por track

Los cursos están organizados por secciones con comentarios:

```typescript
// TRACK: IA & PRODUCTIVIDAD
// ... cursos con track: "ai"

// TRACK: GEOSPACIAL
// ... cursos con track: "geo"

// TRACK: DATA SCIENCE
// ... cursos con track: "data"

// TRACK: AGUA & AMBIENTE
// ... cursos con track: "water"
```

Agrega tu nuevo curso en la sección correspondiente según el `track` que elegiste.

### Después de agregar el curso

1. **Guarda el archivo** haciendo commit como se explicó en la Parte 1
2. **Actualiza la tabla de IDs** en este mismo documento (`COMO-EDITAR.md`) agregando una línea con el nuevo curso en la Parte 1, Paso 3
3. Si quieres que el curso aparezca en la sesión actual, **edita `sessions.json`** y agrega el nuevo ID al array `courseIds`

---

## Parte 3: Tips para Usar GitHub Copilot Chat (Tier Gratuito)

GitHub Copilot Chat puede ayudarte a hacer estos cambios más fácilmente. El tier gratuito tiene un límite de mensajes por mes, pero es suficiente para tareas simples.

### ¿Cómo activar Copilot Chat?

1. Ve a cualquier archivo en GitHub
2. Haz clic en el botón de chat (ícono de burbuja) en la esquina superior derecha
3. Si no lo tienes activado, ve a Settings > Copilot y activa el trial gratuito

### Prompts útiles

**Para actualizar sesiones:**

```
Ayúdame a editar el archivo sessions.json. Quiero crear una nueva sesión 
llamada "Sesión Primavera 2026" que empiece el 1 de septiembre de 2026 
y termine el 30 de noviembre de 2026. La fecha límite de inscripción 
es el 25 de agosto de 2026. Los cursos incluidos son los IDs 1, 5, 12, 6 y 7. 
El anuncio debe decir "¡Inscripciones abiertas para la sesión de primavera!".
```

**Para agregar un curso:**

```
Ayúdame a agregar un nuevo curso al archivo constants.ts. 
El título es "Introducción a QGIS Cloud", categoría "GIS", 
precio "$85.000", track "geo", descripción "Publica mapas interactivos 
en la web usando QGIS Cloud y PostgreSQL/PostGIS.", 
link "https://centroredes.org.ar/index.php/qgis-cloud/". 
Debe tener el siguiente ID disponible.
```

**Para verificar un ID de curso:**

```
¿Cuál es el título del curso con ID 8 en el archivo constants.ts?
```

**Para listar cursos de un track específico:**

```
Dame la lista de todos los cursos con track "geo" en constants.ts, 
mostrando solo el ID y el título.
```

### Límites del tier gratuito

- **~50 mensajes por mes** (varía según uso)
- Si llegas al límite, espera al siguiente mes o sigue las instrucciones manuales de esta guía
- Los prompts complejos gastan más "tokens", así que sé específico pero conciso

### Buenos hábitos

1. **Verifica el resultado:** Después de que Copilot sugiera un cambio, revísalo antes de hacer commit
2. **Un cambio a la vez:** No pidas muchas ediciones juntas en un solo prompt
3. **Copia de seguridad:** Si no estás seguro, copia el contenido original del archivo en un documento aparte antes de editarlo

---

## Solución de Problemas

### El sitio no se actualiza después de hacer commit

- **Espera 2-5 minutos:** El deploy automático puede tardar
- **Verifica el estado:** Ve a la pestaña "Actions" en GitHub para ver si hay errores en el deploy
- **Limpia la caché del navegador:** Presiona Ctrl+Shift+R (Windows/Linux) o Cmd+Shift+R (Mac) para forzar la recarga

### Error "JSON parse error" o "Syntax error"

- **Causa común:** Olvidaste una coma, pusiste una coma de más, o usaste comillas incorrectas
- **Solución:** Usa una herramienta como https://jsonlint.com para validar tu JSON
- **Prevención:** Copia exactamente la estructura del ejemplo y solo cambia los valores

### No sé qué ID usar para un curso nuevo

1. Abre `constants.ts`
2. Busca el curso con el número más alto (actualmente es 14)
3. Tu nuevo curso será el siguiente número (15)

### El banner no aparece

- Verifica que `showBanner` sea `true` (sin comillas)
- Asegúrate de que los cursos en `courseIds` existan en la tabla de IDs

---

## Contacto y Ayuda

Si encuentras problemas que no puedes resolver:

1. **Revisa esta guía** de nuevo con calma
2. **Usa GitHub Copilot Chat** con un prompt específico sobre tu problema
3. **Contacta al equipo técnico** con una captura de pantalla del error

---

**Última actualización:** Enero 2026  
**Mantenedor del sitio:** Agustín Bonorino (Bonorinoa)
