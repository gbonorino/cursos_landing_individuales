import { Course, Milestone, FilterOption } from './types';

export const COURSES: Course[] = [
  // TRACK: IA & PRODUCTIVIDAD
  { 
    id: 1, 
    title: "Chatbot personalizado con LangChain", 
    slug: "chatbot-langchain",
    category: "IA", 
    price: "$72.000", 
    track: "ai", 
    desc: "Crea tu propio asistente virtual capaz de leer tus documentos PDF y responder preguntas específicas.",
    externalLink: "https://centroredes.org.ar/index.php/chatbot-4/",
    content: {
      fullTitle: "Chatbot personalizado con LangChain y Groq",
      duration: "6 semanas",
      hours: "96 horas",
      instructor: "Dr. Gustavo González Bonorino",
      area: "Inteligencia Artificial",
      audience: "Son potenciales interesados quienes puedan imaginar una aplicación para un chatbot conversacional que responda consultas que ChatGPT no puede responder.",
      description: "El propósito de este curso es mostrarles cómo construir un chatbot, es decir, un programa capaz de simular una conversación con el usuario, que responda a consultas referidas a datos que ustedes inyectan al modelo, datos que no fueron incluidos en el entrenamiento del modelo. Las aplicaciones de este tipo de chatbot son múltiples: manual de uso de un producto, instructivo para un curso, recuperar información sobre la Constitución de Argentina, o sobre la información contable de su empresa. Nuestro chatbot empleará un modelo de lenguaje de gran escala (LLM) como motor del procesamiento de los datos. Gran parte del curso se dedica a explicar cómo se construye un sistema RAG (Retrieval Augmented Generation) y el resto a aplicarlo en la construcción de chatbots. Al concluir el curso habrán incorporado varios ejemplos de chatbots que podrán adaptar a requerimientos particulares.",
      modality: "Curso virtual con acceso 24/7. Videos complementados con scripts en cuadernos Jupyter, y ejercicios de codificación. Se ofrecen dos reuniones sincrónicas en horario a convenir, para brindar orientación y para aclarar dudas sobre el Proyecto Personal. El acceso al material del curso permanece abierto por unos seis meses después del cierre.",
      modules: [
        {
          title: "Módulo 1 — Introducción y LangChain",
          topics: [
            "Propósito y organización del curso",
            "Definición de chatbot",
            "Modelos de lenguaje y LangChain",
            "Modelos LLM y modelos chat",
            "Mensajes como tuplas",
            "Parámetros de control"
          ]
        },
        {
          title: "Módulo 2 — Prompts y plantillas",
          topics: [
            "Comunicación con el modelo: el prompt",
            "Tipos de prompt: cadenas y mensajes",
            "Plantilla PromptTemplate y variables múltiples",
            "Guardar un prompt en disco duro",
            "Plantilla FewShotPromptTemplate y aprendizaje en contexto",
            "Plantillas ChatPromptTemplate y MessagePromptTemplate"
          ]
        },
        {
          title: "Módulo 3 — Sistema RAG: carga de documentos",
          topics: [
            "Organización de un sistema RAG",
            "Carga de archivos de texto, CSV, PDF y MSWord",
            "Descarga desde YouTube, sitios web y arXiv",
            "Carga desde un directorio"
          ]
        },
        {
          title: "Módulo 4 — Partición, incrustación y vectores",
          topics: [
            "Partición de texto (text splitting)",
            "CharacterTextSplitter y RecursiveTextSplitter",
            "Tokenización con tiktoken",
            "Incrustación (embedding)",
            "Espacio vectorial con ChromaDB y FAISS",
            "Guardar el espacio vectorial"
          ]
        },
        {
          title: "Módulo 5 — Recuperación y generación de respuestas",
          topics: [
            "Similitud semántica (semantic similarity)",
            "Maximum Marginal Relevance (MMR)",
            "Recuperación con metadatos",
            "VectorStoreIndexCreator",
            "Recuperación sin vector store",
            "Output parsers"
          ]
        },
        {
          title: "Módulo 6 — Cadenas y construcción del chatbot",
          topics: [
            "LLMChain y SimpleSequentialChain",
            "SequentialChain y RetrievalQA",
            "LCEL (LangChain Expression Language)"
          ]
        }
      ],
      requirements: "El curso requiere un nivel de conocimiento básico de Python. Deben estar cómodos con funciones y lectura-escritura de datos. Los programas que se usan son de acceso libre y gratuito. Una PC con procesador Intel i3, o equivalente, es suficiente para trabajar sin dificultad.",
      evaluation: "Centro REDES otorga certificados de Participación y de Aprobación. El certificado de Aprobación lleva una calificación numérica y exige la presentación de un Proyecto Personal."
    },
    pricing: {
      installmentPrice: "$40.000",
      paymentFullUrl: "/",
      paymentInstallmentUrl: "/",
    }
  },
  { 
    id: 13, 
    title: "Vibe Coding con Lovable", 
    slug: "vibe-coding-lovable",
    category: "IA", 
    price: "$99.900", 
    track: "ai", 
    desc: "Desarrollo de apps y páginas web. Agrega un atractivo dashboard a tu modelo científico",
    externalLink: "https://centroredes.org.ar/index.php/lovable/",
    content: {
      fullTitle: "Vibe Coding con Lovable",
      duration: "6 semanas",
      hours: "96 horas",
      instructor: "Dr. Gustavo González Bonorino",
      area: "Inteligencia Artificial",
      audience: "Programadores principiantes que desean rápidamente y con escaso conocimiento de codificación desarrollar una página landing o una sencilla aplicación web. Y también programadores experimentados que desean potenciar la producción delegando en Lovable gran parte del código de relleno.",
      description: "Con Vibe Coding se describe la posibilidad de generar código útil delegando la tarea enteramente en la IA. Un prompt inicial describe la aplicación o página web que se desea construir y gatilla la acción, y los modelos y agentes embebidos en la plataforma devuelven un código que materializa esa app o página web. Lovable es una de las plataformas de codificación con IA más avanzadas. Este curso muestra cómo emplear Lovable en vuestros proyectos. Se procede en tres etapas: exploración de comandos y opciones, creación de prompts eficientes y comprensión de la arquitectura de proyectos, y finalmente numerosos ejemplos de uso de complejidad creciente.",
      modality: "Curso virtual con acceso 24/7. Consultas por Foro 24/7, opción de Proyecto Personal, y dos reuniones sincrónicas al promediar el curso para conversar sobre avances.",
      modules: [
        {
          title: "Módulo 1 — Primeros pasos con Lovable",
          topics: [
            "Qué es Lovable y para qué sirve",
            "Estructura de una app",
            "Mi primer proyecto Lovable"
          ]
        },
        {
          title: "Módulo 2 — Conociendo Lovable",
          topics: [
            "Features, agente, chat",
            "Herramientas de diseño: temas, edición visual",
            "Lovable Cloud y Lovable AI"
          ]
        },
        {
          title: "Módulo 3 — Prompts y arquitectura",
          topics: [
            "El prompt",
            "Arquitectura de una app: frontend y backend",
            "Gestión de datos y de autenticación"
          ]
        },
        {
          title: "Módulo 4 — Integración y costos",
          topics: [
            "Integración con GitHub",
            "Costo de uso de Lovable"
          ]
        },
        {
          title: "Módulo 5 — Proyectos prácticos (parte 1)",
          topics: [
            "Proyecto 1: Ingreso de texto por usuario; generación de respuesta",
            "Proyecto 2: Manipulación de fotografías; jerarquía de componentes visuales",
            "Proyecto 3: Incorporar cálculos, gestión de datos numéricos, redondeo",
            "Proyecto 4: Leer datos de un archivo Excel, graficar puntos sobre un mapa"
          ]
        },
        {
          title: "Módulo 6 — Proyectos prácticos (parte 2)",
          topics: [
            "Proyecto 5: Leer datos CSV, construir una tabla y graficar datos",
            "Proyecto 6: App con API, base de datos y backend con Lovable Cloud",
            "Proyecto 7: Usar Remix, agregar autenticación con Google",
            "Proyecto final: tema a decidir por los participantes"
          ]
        }
      ],
      requirements: "No se presupone conocimiento previo en programación. Lovable AI es un programa de suscripción paga; la suscripción gratuita será insuficiente para desarrollar el curso. Lovable opera en la nube, por lo cual no impacta en el disco duro ni la memoria RAM.",
      evaluation: "Centro REDES emite certificados de Participación y, opcionalmente, de Aprobación con evaluación numérica. Estos últimos requieren la presentación de un Proyecto Personal sobre un tema a elección del participante."
    },
    pricing: {
      installmentPrice: "$55.500",
      paymentFullUrl: "https://www.mercadopago.com.ar/checkout/v1/payment/redirect/e7005a47-9413-41c8-9352-bc98d9bb0bac/payment-option-form/?source=link&preference-id=104981320-0dbd735f-f509-4c73-a4ef-38f3057e0822&router-request-id=32bcfa1f-b73a-4fc9-bd3c-d3bcbbe6dce4&p=cceaf388cdead7ca133eac0253c6cd65",
      paymentInstallmentUrl: "https://www.mercadopago.com.ar/checkout/v1/payment/redirect/03f732dd-1fe2-4abe-a4d8-43799eb3813e/payment-option-form/?source=link&preference-id=104981320-575cbb15-dc32-408e-bf46-5206a76f6bd2&router-request-id=20932e43-a72f-4653-9a35-a6fac29c9eda&p=cceaf388cdead7ca133eac0253c6cd65",
    }
  },
  { 
    id: 14, 
    title: "Cursor AI: Programación Científica", 
    slug: "cursor-ai",
    category: "IA", 
    price: "$99.900", 
    track: "ai", 
    desc: "Acelera tu escritura de código Python/R un 500% utilizando el editor de IA más potente del mercado.",
    externalLink: "https://centroredes.org.ar/index.php/cursor-ai/",
    content: {
      fullTitle: "Cursor AI: Programación científica asistida con IA",
      duration: "6 semanas",
      hours: "96 horas",
      instructor: "Dr. Gustavo González Bonorino",
      area: "Inteligencia Artificial",
      audience: "Desarrolladores de Python principiantes con interés por la ciencia de datos y la programación científica. Usuarios de Python interesados en incorporar IA al desarrollo técnico. Estudiantes, investigadores e ingenieros que desean producir resultados numéricos de forma más eficiente. Desarrolladores que quieran aprender Cursor AI de manera práctica, aplicada y orientada a proyectos.",
      description: "La realidad del ambiente profesional es que muchos usuarios generan código para aplicaciones en ciencia de datos, física o finanzas, que típicamente implementa Python o R. Esto denominamos \"programación científica\", y es tópico de este curso. Nuestro compromiso es ayudarles a dominar Cursor AI y a aplicarlo en programación científica respetando las normas de estilo y de modularidad que distinguen scripts profesionales. El curso se organiza en tres partes: nociones fundamentales sobre estilos de programación y modelos de lenguaje, descripción de las pantallas y comandos en Cursor AI, y aplicación en un proyecto de programación científica no trivial.",
      modality: "Curso virtual con acceso 24/7. Consultas por Foro 24/7, opción de Proyecto Personal, y dos reuniones sincrónicas al promediar el curso para conversar sobre avances.",
      modules: [
        {
          title: "Módulo 1 — Modelos de lenguaje extensos (LLM)",
          topics: [
            "Inteligencia Artificial en programación",
            "Programación asistida con IA versus Vibe Coding",
            "Cómo opera un LLM: prompts, agentes y herramientas"
          ]
        },
        {
          title: "Módulo 2 — Dominando Cursor AI",
          topics: [
            "Qué es y para qué sirve Cursor AI",
            "Cursor AI versus ChatGPT y Visual Studio Code con Copilot",
            "Instalación, pantallas y comandos",
            "Gestión del espacio de trabajo (workspace)",
            "Configuración de Cursor AI (Cursor Settings)"
          ]
        },
        {
          title: "Módulo 3 — Modos de uso",
          topics: [
            "Edición de código en línea",
            "Hacer preguntas sobre el código existente",
            "Autocompletar con Tab",
            "Mejorar el contexto de la consulta añadiendo documentación",
            "Preguntas sobre la base de código global",
            "Establecer reglas de IA personalizadas",
            "Generar pruebas unitarias (unit tests)",
            "Costo de uso de Cursor AI"
          ]
        },
        {
          title: "Módulo 4 — Proyectos especiales",
          topics: [
            "Automatización de pruebas unitarias",
            "Refactorización de proyecto Java de Android Studio a Python"
          ]
        },
        {
          title: "Módulo 5 — Programación científica",
          topics: [
            "Estructura de un proyecto en Python",
            "Construcción de un prompt eficiente",
            "Creación de un plan"
          ]
        },
        {
          title: "Módulo 6 — Conclusión del proyecto",
          topics: [
            "Ejecución del plan",
            "Revisión del código",
            "Ejecución del código",
            "Proyecto adicional: Cursor AI opera con planillas Excel"
          ]
        }
      ],
      requirements: "No se presupone conocimiento previo en Python ni en programación en general. Cursor AI es un programa de suscripción paga; la suscripción gratuita será insuficiente para desarrollar el curso. Una PC con procesador Intel i5, o equivalente, es suficiente para trabajar sin dificultad.",
      evaluation: "Centro REDES emite certificados de Participación y, opcionalmente, de Aprobación con evaluación numérica. Estos últimos requieren la presentación de un Proyecto Personal sobre un tema a elección del participante."
    },
    pricing: {
      installmentPrice: "$55.500",
      paymentFullUrl: "https://www.mercadopago.com.ar/checkout/v1/payment/redirect/f4c5d869-2916-4952-8164-826669bc2d9e/payment-option-form/?source=link&preference-id=104981320-33201476-4567-4531-b854-57e19d4386e5&router-request-id=7535c5dd-a1c3-4476-bf8c-586b5d78b3fb&p=cceaf388cdead7ca133eac0253c6cd65",
      paymentInstallmentUrl: "https://www.mercadopago.com.ar/checkout/v1/payment/redirect/fcff6909-cc82-48cb-bef8-78b77d53e247/payment-option-form/?source=link&preference-id=104981320-7f8a45dc-1677-4a5e-8464-f925ce0457b8&router-request-id=6e461546-6fc8-4cb6-9ff3-1f4cffc371de&p=cceaf388cdead7ca133eac0253c6cd65",
    }
  },
  { 
    id: 5, 
    title: "Potenciar Excel con Python + IA", 
    slug: "excel-python-ia",
    category: "Office", 
    price: "$90.000", 
    track: "ai", 
    desc: "Deja de luchar con fórmulas manuales. Automatiza reportes y análisis de datos conectando Excel con Python.",
    externalLink: "https://centroredes.org.ar/index.php/potenciar-excel-con-python/",
    content: {
      fullTitle: "Potenciar Excel con Python y viceversa, con ChatGPT",
      duration: "6 semanas",
      hours: "96 horas",
      instructor: "Dr. Gustavo González Bonorino y Augusto González Bonorino",
      area: "Análisis de Datos",
      audience: "Usuarios de Excel que desean automatizar tareas y fortalecer la capacidad de cálculo y gráfica de Excel con Python. Desarrolladores de Python que desean ampliar su alcance difundiendo resultados por Excel, una plataforma de fácil acceso y enorme aceptación.",
      description: "Este curso se basa en la premisa de que la simbiosis entre Python y Excel es de beneficio mutuo. El usuario de Excel se beneficia al incorporar recursos de Python para automatizar muchas tareas y mejorar las presentaciones, sin dejar de usar Excel. El usuario de Python se beneficia al aprender a manipular datos en planillas Excel y multiplicar la potencial audiencia. Se ve cómo transferir información de Excel a Python, procesarla en Python y devolver los resultados a Excel en un formato adecuado para la difusión. Se trabaja con dos bibliotecas de Python: pandas y openpyxl. Se incorpora ChatGPT para consultas generales y para ayuda con la codificación.",
      modality: "Curso virtual práctico con videos complementados con scripts en cuadernos Jupyter. Una clase sincrónica en horario a convenir para Proyecto Personal. Acceso 24/7 a la plataforma sin restricciones de horario.",
      modules: [
        {
          title: "Módulo 1 — Introducción y entorno de trabajo",
          topics: [
            "ChatGPT: modo de uso y aplicaciones",
            "Instalación de los programas empleados",
            "Conformación del entorno de trabajo",
            "Bases de datos utilizadas"
          ]
        },
        {
          title: "Módulo 2 — Python y Excel: los programas",
          topics: [
            "Presentación de Python",
            "Python y Excel: los programas"
          ]
        },
        {
          title: "Módulo 3 — Biblioteca openpyxl",
          topics: [
            "Manipulación de planillas Excel con openpyxl",
            "Lectura y escritura de datos en planillas",
            "Formateo y estilos de celdas"
          ]
        },
        {
          title: "Módulo 4 — Biblioteca pandas",
          topics: [
            "Procesamiento y análisis de datos con pandas",
            "Importación y exportación de datos entre Python y Excel"
          ]
        },
        {
          title: "Módulo 5 — Informes y aplicaciones",
          topics: [
            "Preparación de informes",
            "Automatización de tareas repetitivas",
            "Miscelánea y Proyecto Personal"
          ]
        }
      ],
      requirements: "No se presupone conocimiento previo en Python ni en programación en general. Python es de acceso libre y gratuito. Una PC con procesador Intel i5, o equivalente, es suficiente para trabajar sin dificultad.",
      evaluation: "Centro REDES emite certificado de Participación, y opcionalmente certificado de Aprobación con calificación numérica. Este último requiere la presentación de un Proyecto Personal sobre un tema a elección del participante."
    },
    pricing: {
      installmentPrice: "$50.000",
      paymentFullUrl: "/",
      paymentInstallmentUrl: "/",
    }
  },

  // TRACK: GEOSPACIAL
  { 
    id: 2, 
    title: "Imágenes Satelitales (Software Libre)", 
    slug: "imagenes-satelitales",
    category: "Satellites", 
    price: "$90.000", 
    track: "geo", 
    desc: "Domina el procesamiento de Landsat y Sentinel para monitoreo ambiental sin costos de licencia.",
    externalLink: "https://centroredes.org.ar/index.php/imagenes-satelitales-2/",
    content: {
      fullTitle: "Procesamiento de imágenes satelitales con software libre, potenciado con ChatGPT",
      duration: "6 semanas",
      hours: "96 horas",
      instructor: "Dr. Gustavo González Bonorino",
      area: "Análisis de Datos Geoespaciales",
      audience: "Todos aquellos que consideren profesionalmente beneficioso aprender a obtener y procesar una diversidad de productos satelitales, y aplicar la información a la resolución de problemas reales.",
      description: "\"Análisis de imágenes satelitales con software libre\" se destaca por cubrir los principales productos satelitales multiespectrales: Landsat, ASTER, MODIS y Sentinel-2, así como también eficaces simbiosis entre productos satelitales y modelos climáticos globales implementadas por la NASA (GLDAS, Giovanni). El curso es fuertemente práctico, aunque incluye nociones teóricas esenciales. Se enfoca sobre la imagen y las técnicas para extraer de ella información aplicable en distintos ámbitos profesionales. En 6 semanas adquirirán habilidad para aplicar una variedad de productos satelitales y técnicas de procesamiento en vuestra labor profesional.",
      modality: "Curso virtual con seis módulos semanales. Los ejercicios van acompañados por los datos necesarios, instructivos detallados y videos. Dos clases sincrónicas en horario a convenir. Opción de Proyecto Personal.",
      modules: [
        {
          title: "Módulo 1 — Productos satelitales, píxeles y bandas",
          topics: [
            "Productos Landsat, ASTER, Sentinel-2 y MODIS: descarga y características",
            "Imágenes multiespectrales, capas vectoriales y capas ráster",
            "Optimización de imágenes: estiramiento, filtrado, refinado pancromático",
            "Composición de bandas espectrales"
          ]
        },
        {
          title: "Módulo 2 — Radiancia y reflectancia",
          topics: [
            "Conversión de DN a reflectancia",
            "Complemento Semi-Automatic Classification",
            "Productos Level-2 y Level-3",
            "Índices espectrales: NDVI, SAVI",
            "Mapeo de glaciares y de litologías"
          ]
        },
        {
          title: "Módulo 3 — Clasificación de coberturas",
          topics: [
            "Clasificación no supervisada de la cobertura terrestre con Multispec",
            "Clasificación supervisada",
            "Evaluación de la precisión de la clasificación"
          ]
        },
        {
          title: "Módulo 4 — Aplicaciones",
          topics: [
            "Detección de cambios: inundación, deforestación",
            "Estimación de la temperatura superficial terrestre"
          ]
        },
        {
          title: "Módulo 5 — Calidad de imágenes",
          topics: [
            "Supresión de nubes y cuerpos de agua",
            "Corrección del efecto sin SLC",
            "Evaluación de calidad de una imagen"
          ]
        },
        {
          title: "Módulo 6 — Productos MODIS e híbridos",
          topics: [
            "Descarga de imágenes MODIS",
            "Conversión HDF a GeoTIFF",
            "Ciclo fenológico de maíz",
            "Evaluación de sequía",
            "Estimación de calor urbano",
            "Programa Giovanni"
          ]
        }
      ],
      requirements: "Nivel avanzado. Es conveniente que los participantes tengan familiaridad con algún programa SIG y el concepto general de imagen satelital. Todos los programas son de acceso libre y gratuito. PC con procesador i5 o i7, o de rango equivalente.",
      evaluation: "Centro REDES emite certificados de Participación y, opcionalmente, de Aprobación con evaluación numérica. Estos últimos requieren la presentación de un Proyecto Personal sobre un tema a elección del participante."
    },
    pricing: {
      installmentPrice: "$50.000",
      paymentFullUrl: "/",
      paymentInstallmentUrl: "/",
    }
  },
  { 
    id: 11, 
    title: "Google Earth Engine Integral", 
    slug: "google-earth-engine",
    category: "Satellites", 
    price: "$100.000", 
    track: "geo", 
    desc: "Procesamiento masivo de datos geoespaciales en la nube. La herramienta estándar de la industria actual.",
    externalLink: "https://centroredes.org.ar/index.php/google-earth-engine/",
    content: {
      fullTitle: "Google Earth Engine Integral, potenciado con ChatGPT",
      duration: "6 semanas",
      hours: "60 horas",
      instructor: "Dr. Gustavo González Bonorino",
      area: "Análisis de Datos Geoespaciales",
      audience: "Toda persona que se interese por manipular imágenes digitales. Puede ser por turismo, control de vegetación, monitoreo de expansión urbana, mapas de uso del suelo, y otros propósitos. No se requiere conocimiento previo en el manejo de Google Earth Engine, pero es muy conveniente tener familiaridad con los diversos productos satelitales.",
      description: "Google Earth Engine es mucho más que una plataforma SIG. Es una nutrida base de datos con miles de productos fácilmente accesibles, acompañada por una panoplia de poderosos algoritmos que se ejecutan en la nube, sin exigencia para nuestra PC, en respuesta a sencillos códigos en JavaScript. Google Earth Engine facilita trabajar con múltiples productos satelitales para desarrollar series temporales, procesar clasificación supervisada y no supervisada, calcular índices espectrales y muchas otras tareas. Incorporar Google Earth Engine a vuestro bagaje de herramientas computacionales resultará en un notorio incremento en la productividad.",
      modality: "Curso virtual con acceso 24/7. Consultas por Foro 24/7, opción de Proyecto Personal, y dos reuniones sincrónicas al promediar el curso. Instructivos escritos complementados con videos. Se incorpora ChatGPT para consultas generales y ayuda con la codificación.",
      modules: [
        {
          title: "Módulo 1 — Introducción a Google Earth Engine",
          topics: [
            "ChatGPT: modo de uso y aplicaciones",
            "Contenido y organización del curso",
            "Acceso y operación de Google Earth Engine",
            "El explorador (EE Explorer)",
            "El editor de código (Code Editor)"
          ]
        },
        {
          title: "Módulo 2 — JavaScript y datos",
          topics: [
            "JavaScript y la nube de Google",
            "Features y tablas",
            "Imágenes satelitales"
          ]
        },
        {
          title: "Módulo 3 — Procesamiento de imágenes",
          topics: [
            "Mosaicos y reductores",
            "Bandas y máscaras",
            "Lidiando con la nubosidad",
            "Visualización y gráficos"
          ]
        },
        {
          title: "Módulo 4 — Análisis",
          topics: [
            "Preparación para el análisis",
            "Índices espectrales",
            "Clasificación (Machine Learning)"
          ]
        },
        {
          title: "Módulo 5 — Técnicas avanzadas",
          topics: [
            "Regresión lineal",
            "Detección de cambios",
            "Desmezcla espectral (spectral unmixing)"
          ]
        },
        {
          title: "Módulo 6 — Casos de estudio",
          topics: [
            "Casos de estudio",
            "Material adicional y de apoyo"
          ]
        }
      ],
      requirements: "Google Earth Engine es de distribución libre y gratuita. Poco exigente en equipamiento informático, ya que el procesamiento se ejecuta en servidores de Google en la nube.",
      evaluation: "La evaluación se basa en el desempeño a lo largo del curso y en la elaboración de un proyecto propio bajo tutoría. Centro REDES emite certificados de Participación y, opcionalmente, de Aprobación con evaluación numérica."
    },
    pricing: {
      installmentPrice: "$55.600",
      paymentFullUrl: "/",
      paymentInstallmentUrl: "/",
    }
  },
  { 
    id: 12, 
    title: "QGIS y Datos Espaciales", 
    slug: "qgis-datos-espaciales",
    category: "GIS", 
    price: "$99.900", 
    track: "geo", 
    desc: "Desde cero a mapas profesionales. La alternativa #1 a ArcGIS potenciada con plugins de IA.",
    externalLink: "https://centroredes.org.ar/index.php/qgis-inicial/",
    content: {
      fullTitle: "QGIS Integral, análisis de datos espaciales, potenciado con ChatGPT",
      duration: "6 semanas",
      hours: "96 horas",
      instructor: "Dr. Gustavo González Bonorino",
      area: "Análisis de Datos Geoespaciales",
      audience: "Todos aquellos que consideren profesionalmente beneficioso saber compilar información geoespacial, volcarla en mapas temáticos, y procesarla con sofisticadas técnicas, como camino de costo mínimo.",
      description: "\"QGIS Integral\" es excepcional entre los cursos de QGIS a distancia por la diversidad y aplicabilidad profesional del contenido, por el método de aprendizaje por ejercitación, y por el acompañamiento tutorial con cuestionarios y ejercicios opcionales. Merced a una laboriosa destilación de los contenidos, el curso integra conocimientos básicos y avanzados de manera que en seis semanas los participantes adquirirán un fluido manejo de QGIS, el sistema de información geográfica de acceso libre y gratuito de mayor difusión global. Se incorpora ChatGPT para consultas generales y para ayuda con la codificación.",
      modality: "Curso virtual con acceso 24/7. Consultas por Foro 24/7, opción de Proyecto Personal, y dos reuniones sincrónicas. Aprendizaje basado en numerosos ejercicios, más de 300 páginas de instrucciones paso-a-paso, y unos cuarenta videos.",
      modules: [
        {
          title: "Módulo 1 — Presentación de QGIS",
          topics: [
            "ChatGPT: modo de uso y aplicaciones",
            "Operando con QGIS y complementos (plugins)",
            "Carga de datos: ASCII, vectoriales, ráster y sus propiedades",
            "Sistemas de coordenadas y proyección de mapas (SRC); reproyección",
            "Georreferenciación",
            "Simbolización y etiquetado de objetos",
            "Recorte de capas ráster y vectoriales",
            "Creación y edición de vectores"
          ]
        },
        {
          title: "Módulo 2 — Atributos",
          topics: [
            "Atributos ocultos y visibles",
            "Crear atributos",
            "Tablas de atributos: exploración y modificación",
            "Selección de objetos por atributos",
            "Consultas multicriterio",
            "Visualización selectiva",
            "Ejercicios de síntesis"
          ]
        },
        {
          title: "Módulo 3 — Simbolización y etiquetado",
          topics: [
            "Manejo del color",
            "Simbolización con Símbolo único, Categorizado y otros modos",
            "Simbolización por métodos avanzados",
            "Modos de mezcla de colores",
            "Simbolización por agrupamientos, mapas de coropletos",
            "Creación y edición de capas vectoriales"
          ]
        },
        {
          title: "Módulo 4 — Rásters",
          topics: [
            "Propiedades de los archivos ráster",
            "Simbolización de capas ráster: monobanda, multibanda, paletas",
            "Modelos digitales de elevación",
            "Mapas de pendiente, orientación de laderas",
            "Edición y procesamiento de rásters",
            "Reclasificación, remuestreo, reescalado",
            "Rasterización y trazado de perfiles topográficos"
          ]
        },
        {
          title: "Módulo 5 — Presentación visual",
          topics: [
            "Composición de mapas",
            "El Diseñador de impresión",
            "Leyenda, escala gráfica, coordenadas y otros accesorios",
            "Incorporación de fotografías, tablas de atributos y texto",
            "Diseño de un póster",
            "Mapas en la web",
            "Interacción con Google Earth y Google Maps"
          ]
        },
        {
          title: "Módulo 6 — Análisis geoespacial",
          topics: [
            "Análisis por superposición: disolución, unión, intersección",
            "Selección por cercanía y buffers",
            "Análisis por proximidad y matriz de distancia",
            "Selección multicriterio",
            "Análisis de visibilidad",
            "Decisión por criterios múltiples",
            "Camino de costo mínimo",
            "Índices de vegetación"
          ]
        }
      ],
      requirements: "El programa QGIS es de distribución libre y gratuita. Se necesita una PC con procesador Intel i3 o equivalente y al menos 2 GB de espacio en disco.",
      evaluation: "La evaluación se basa en el desempeño a lo largo del curso y en la elaboración de un proyecto propio bajo tutoría. Centro REDES emite certificados de PARTICIPACIÓN y, opcionalmente, de APROBACIÓN con evaluación numérica."
    },
    pricing: {
      installmentPrice: "$55.500",
      paymentFullUrl: "https://www.mercadopago.com.ar/checkout/v1/payment/redirect/fb5d274c-b339-48f0-b7dd-111bb2611b8b/payment-option-form/?source=link&preference-id=104981320-985af9fd-9be6-42c8-afb0-7b270c5cbb6b&router-request-id=f7634bdc-f4a7-4f26-b33c-acda73339d67&p=cceaf388cdead7ca133eac0253c6cd65",
      paymentInstallmentUrl: "https://www.mercadopago.com.ar/checkout/v1/payment/redirect/80c9ffe1-a474-4b89-9e74-155fef5124b5/payment-option-form/?source=link&preference-id=104981320-2a7413a4-0c96-4b77-b3cb-6cae3bd87e6a&router-request-id=668c11c8-2563-467a-9443-89193e4779ec&p=cceaf388cdead7ca133eac0253c6cd65",
    }
  },
  { 
    id: 8, 
    title: "SIG y Satélites para el Agro", 
    slug: "sig-satelites-agro",
    category: "Agro", 
    price: "$99.900", 
    track: "geo", 
    desc: "Agricultura de precisión aplicada: índices de vegetación, rendimiento y monitoreo de cultivos.",
    externalLink: "https://centroredes.org.ar/index.php/sig-y-satelites-para-el-agro/",
    content: {
      fullTitle: "SIG y satélites para el agro — La aplicación de instrumentos y métodos geoespaciales en la agricultura de precisión, potenciado con ChatGPT",
      duration: "6 semanas",
      hours: "96 horas",
      instructor: "Dr. Gustavo González Bonorino",
      area: "Análisis de Datos Geoespaciales",
      audience: "Quienes desean introducirse a las prácticas geoespaciales comunes en la agricultura sitio-específica, o agricultura de precisión. No se tratan temas propios de las ciencias agronómicas sino puntualmente, como contexto de los ejercicios.",
      description: "Este curso muestra cómo combinar técnicas propias de los sistemas de información geográfica (SIG) con la interpretación de imágenes satelitales para crear productos útiles en la Agricultura de Precisión (AP). Aprenderán el uso de información satelital y SIG para dividir un lote en zonas de manejo, crear mapas de prescripción, obtener y procesar imágenes Landsat, ASTER, Sentinel-2 y MODIS, calcular índices espectrales, analizar la evolución temporal de un cultivo, diseñar estrategias de muestreo, y evaluar parámetros agro-meteorológicos a escala regional. Se emplean programas de acceso gratuito (QGIS, Multispec, YieldEditor).",
      modality: "Curso virtual práctico basado en numerosos ejercicios. Dos clases sincrónicas en horario a convenir. Opción de Proyecto Personal. Acceso 24/7 a la plataforma. Se incorpora ChatGPT para consultas y ayuda con la codificación.",
      modules: [
        {
          title: "Primera Parte — Los SIG en la agricultura de precisión",
          topics: [
            "Introducción a los Sistemas de Información Geográfica (SIG) y a QGIS",
            "Aplicaciones de QGIS en la agricultura de precisión",
            "Delimitar una zona de manejo",
            "Crear mapas de rendimiento, humedad del suelo, pH",
            "Crear mapas de prescripción de potasio, hidróxido de calcio y fósforo"
          ]
        },
        {
          title: "Segunda Parte — Estrategias de muestreo",
          topics: [
            "Diseños de muestreo: grilla regular, estratificado-aleatorio",
            "Extraer valores de rendimiento de una imagen procesada",
            "Muestreo por zonas de manejo"
          ]
        },
        {
          title: "Tercera Parte — Productos satelitales",
          topics: [
            "Productos multiespectrales e híbridos",
            "Repositorios de imágenes multiespectrales",
            "Descarga de imágenes Landsat 8 y productos MODIS",
            "Radiancia, reflectancia y conversión de DN"
          ]
        },
        {
          title: "Cuarta Parte — Aplicaciones de imágenes satelitales",
          topics: [
            "Clasificación visual y composición de bandas espectrales",
            "Clasificación supervisada de un campo de cultivo",
            "Índices espectrales: NDVI, SAVI, EVI, TasseledCap",
            "Monitoreo del ciclo de crecimiento con MODIS",
            "Variación temporal del NDVI y cálculo de anomalías",
            "Cálculo de la Suma Térmica (Growing Degree Day)",
            "Evaluación de estrés hídrico y sequía",
            "Mapas regionales de evapotranspiración y humedad del suelo",
            "Casos de estudio"
          ]
        }
      ],
      requirements: "Nivel avanzado. Alguna experiencia con programas SIG y productos satelitales es recomendable. Se emplean programas de acceso gratuito (QGIS, Multispec, YieldEditor) y productos satelitales también de acceso gratuito.",
      evaluation: "Centro REDES emite certificados de Participación y, opcionalmente, de Aprobación con calificación numérica. Este último requiere la presentación de un Proyecto Personal sobre un tema a elección del participante."
    },
    pricing: {
      installmentPrice: "$55.500",
      paymentFullUrl: "https://www.mercadopago.com.ar/checkout/v1/payment/redirect/f47bcdd0-bce3-4d24-b728-0858c16abd0c/payment-option-form/?source=link&preference-id=104981320-a0047243-7786-44fb-b3ac-acc5bdbbb3bd&router-request-id=76988d58-5326-4dd5-997a-b5912720e85d&p=cceaf388cdead7ca133eac0253c6cd65",
      paymentInstallmentUrl: "https://www.mercadopago.com.ar/checkout/v1/payment/redirect/e256733a-74b9-46a7-959b-926ce7a76020/payment-option-form/?source=link&preference-id=104981320-ac289551-4104-4cac-b54b-42f4551128bb&router-request-id=a68f2d53-61c1-4bcc-ada5-74e05b81c3be&p=cceaf388cdead7ca133eac0253c6cd65",
    }
  },

  // TRACK: DATA SCIENCE
  { 
    id: 6, 
    title: "Python avanzado", 
    slug: "python-avanzado",
    category: "Code", 
    price: "$99.900", 
    track: "data", 
    desc: "El lenguaje fundamental de la ciencia de datos. Aprende sintaxis, librerías y automatización básica.",
    externalLink: "https://centroredes.org.ar/index.php/python_avanzado/",
    content: {
      fullTitle: "Python avanzado para ciencia de datos",
      duration: "6 semanas",
      hours: "96 horas",
      instructor: "Dr. Gustavo González Bonorino",
      area: "Ciencia de Datos",
      audience: "Profesionales, investigadores y estudiantes que ya cuentan con conocimientos básicos de Python y desean profundizar en el uso de bibliotecas avanzadas, automatización y técnicas de programación aplicadas a la ciencia de datos.",
      description: "Python es el lenguaje fundamental de la ciencia de datos. Este curso avanzado profundiza en la sintaxis, las bibliotecas más utilizadas y las técnicas de automatización que todo científico de datos necesita dominar. A lo largo de seis semanas, los participantes consolidarán sus habilidades en Python mediante ejercicios prácticos y proyectos aplicados a problemas reales de análisis y procesamiento de datos.",
      modality: "Curso virtual con acceso 24/7. Consultas por Foro 24/7, opción de Proyecto Personal, y dos reuniones sincrónicas en horario a convenir. Aprendizaje basado en ejercicios prácticos y proyectos aplicados.",
      modules: [
        {
          title: "Módulo 1 — Fundamentos avanzados de Python",
          topics: [
            "Repaso de estructuras de datos y control de flujo",
            "Funciones avanzadas y decoradores",
            "Comprensiones de listas, diccionarios y generadores",
            "Manejo de excepciones y buenas prácticas"
          ]
        },
        {
          title: "Módulo 2 — Programación orientada a objetos",
          topics: [
            "Clases, herencia y polimorfismo",
            "Métodos especiales y sobrecarga de operadores",
            "Diseño de módulos y paquetes reutilizables"
          ]
        },
        {
          title: "Módulo 3 — Bibliotecas para ciencia de datos",
          topics: [
            "NumPy: arrays, operaciones vectorizadas",
            "Pandas: DataFrames, limpieza y transformación de datos",
            "Matplotlib y Seaborn: visualización de datos"
          ]
        },
        {
          title: "Módulo 4 — Automatización y procesamiento",
          topics: [
            "Lectura y escritura de archivos (CSV, JSON, Excel)",
            "Web scraping con BeautifulSoup y requests",
            "Automatización de tareas repetitivas con scripts"
          ]
        },
        {
          title: "Módulo 5 — Análisis estadístico y modelado",
          topics: [
            "Estadística descriptiva e inferencial con SciPy",
            "Introducción a scikit-learn",
            "Regresión y clasificación básica"
          ]
        },
        {
          title: "Módulo 6 — Proyecto integrador",
          topics: [
            "Diseño y ejecución de un proyecto de ciencia de datos",
            "Presentación y documentación de resultados",
            "Proyecto Personal"
          ]
        }
      ],
      requirements: "Se requiere conocimiento básico de Python (variables, funciones, estructuras de datos). Python es de acceso libre y gratuito. Una PC con procesador Intel i3 o equivalente es suficiente.",
      evaluation: "Centro REDES emite certificados de Participación y, opcionalmente, de Aprobación con evaluación numérica. Este último requiere la presentación de un Proyecto Personal."
    },
    pricing: {
      installmentPrice: "$55.500",
      paymentFullUrl: "/",
      paymentInstallmentUrl: "/",
    }
  },
  { 
    id: 4, 
    title: "Programación aplicada con R", 
    slug: "programacion-r",
    category: "Code", 
    price: "$90.000", 
    track: "data", 
    desc: "Análisis estadístico robusto y gráficos de publicación científica (ggplot2) para investigadores.",
    externalLink: "https://centroredes.org.ar/index.php/programacion-en-r/",
    content: {
      fullTitle: "Programación aplicada con R, potenciada con ChatGPT",
      duration: "6 semanas",
      hours: "96 horas",
      instructor: "Dr. Gustavo González Bonorino",
      area: "Ciencia de Datos",
      audience: "Para quien desee aprender a programar en R, o simplemente utilizarlo en sus labores profesionales, este curso les dará el conocimiento necesario para hacerlo.",
      description: "El lenguaje R es particularmente aplicable en Estadística y en minería de datos. Junto con Python, R es el lenguaje más requerido en Ciencia de Datos. En una primera parte se hace una concisa pero exhaustiva presentación del lenguaje R, hasta haber adquirido el conocimiento para trabajar con R. En una segunda parte se aplica R en numerosos casos reales tomados de muy diversas disciplinas. Los fundamentos teóricos de las variadas técnicas matemáticas y estadísticas empleadas en los ejemplos se dan sucintamente. Se incorpora ChatGPT para consultas generales y para ayuda con la codificación.",
      modality: "Curso virtual fuertemente práctico. Ejercicios sencillos conducen a otros más elaborados y, progresivamente, a programar en R. Dos clases sincrónicas en horario a convenir. Acceso 24/7 a la plataforma.",
      modules: [
        {
          title: "Módulo 1 — Operando con R y RStudio",
          topics: [
            "Instalación y diferencias entre R y RStudio",
            "Operadores",
            "La interfaz gráfica de RStudio",
            "Carga de archivos y rutas de enlace",
            "Paquetes",
            "Estructuras y tipos de datos: vectores, matrices, arrays, listas, marcos de datos, factores, funciones"
          ]
        },
        {
          title: "Módulo 2 — Propiedades y transferencia de datos",
          topics: [
            "Examinar y modificar propiedades de datos",
            "Atributos y coerción",
            "Importar/Exportar datos",
            "Archivos en formato netCDF",
            "Manejo de tablas de datos y unión de tablas",
            "Manejo de valores faltantes",
            "Manejo de fecha y hora"
          ]
        },
        {
          title: "Módulo 3 — Presentaciones visuales y programación",
          topics: [
            "Gráficos y series temporales",
            "Iteración y bucles condicionales",
            "Familia apply(), lapply(), sapply(), tapply()",
            "Scripts y buenas prácticas en programación"
          ]
        },
        {
          title: "Módulo 4 — Manejo de datos espaciales",
          topics: [
            "Manejo de datos espaciales con R"
          ]
        },
        {
          title: "Módulo 5 — Aplicaciones de R (parte 1)",
          topics: [
            "Fundamentos de las técnicas aplicadas",
            "Minería de datos",
            "Series temporales",
            "Agricultura",
            "Ciencias de la Salud",
            "Ciencias de la Tierra y ambientales"
          ]
        },
        {
          title: "Módulo 6 — Aplicaciones de R (parte 2)",
          topics: [
            "Ciencias Económicas",
            "Ciencias Sociales",
            "Ciencias Químicas e Ingeniería",
            "Aprendizaje automatizado (Machine Learning)"
          ]
        }
      ],
      requirements: "No requiere conocimientos previos de R. Se parte de cero y se construye conocimiento hasta un nivel intermedio avanzado. Los programas R y RStudio son de acceso gratuito. PC con procesador Intel i5, o de rango equivalente.",
      evaluation: "Centro REDES otorga certificados de Participación y de Aprobación. El certificado de Aprobación lleva una calificación numérica y exige la presentación de un Proyecto Personal."
    },
    pricing: {
      installmentPrice: "$50.000",
      paymentFullUrl: "/",
      paymentInstallmentUrl: "/",
    }
  },
  { 
    id: 3, 
    title: "SQLite en la era de la IA", 
    slug: "sqlite-ia",
    category: "Data", 
    price: "$99.900", 
    track: "data", 
    desc: "Gestiona grandes volúmenes de datos que no caben en un Excel, con asistencia de la IA.",
    externalLink: "https://centroredes.org.ar/index.php/sql-y-sqlite/",
    content: {
      fullTitle: "SQLite en la era de la IA",
      duration: "6 semanas",
      hours: "60 horas",
      instructor: "Dr. Gustavo González Bonorino y Augusto González Bonorino",
      area: "Ciencia de Datos",
      audience: "Toda persona que se interese en trabajar con bases de datos. No se requieren conocimientos previos.",
      description: "\"SQLite en la era de la IA\" enseña a gestionar bases de datos empleando la IA como ayudante. SQL es el lenguaje preferido para gestionar bases de datos (BD). Este curso tiene el doble propósito de enseñar SQL y el diseño de BD. La primera sección está dedicada al lenguaje SQL: cómo recuperar información de una tabla y cómo crear nuevas tablas. La segunda sección se dedica a bases de datos relacionales: diseño eficiente minimizando la redundancia y la dependencia funcional. La IA interviene activamente: ustedes darán instrucciones (prompts) a la IA para que escriba código SQL que luego analizarán valiéndose de los apuntes, videos y consultas con la IA.",
      modality: "Curso virtual con acceso 24/7. Instructivos escritos complementados con videos. Fuertemente práctico con numerosos ejercicios. Se emplean las plataformas ChatGPT y Gemini en sus versiones gratuitas.",
      modules: [
        {
          title: "Módulo 1 — Presentación de SQL y SQLiteStudio",
          topics: [
            "¿Qué es la Inteligencia Artificial?",
            "¿Qué es SQL? Sistemas de gestión de bases de datos relacionales",
            "SQLite y SQLiteStudio",
            "Aprender SQL en la era de la IA: qué cambió y qué no",
            "Metodología de aprendizaje",
            "Asistentes de IA: ChatGPT y Gemini"
          ]
        },
        {
          title: "Módulo 2 — Sintaxis en SQL",
          topics: [
            "Datos y tablas de datos",
            "La sintaxis SQL: nomenclatura y cuestiones de estilo",
            "Sentencias con SELECT, LIMIT, DISTINCT, WHERE, ORDER BY",
            "Funciones de agregación: COUNT(), GROUP BY, HAVING",
            "Funciones de cadenas e inserción de comentarios"
          ]
        },
        {
          title: "Módulo 3 — Crear una BD y poblarla con datos",
          topics: [
            "Tipos de dato en SQLite",
            "Operar en la interfaz y editor de SQLiteStudio",
            "Restricciones (constraints)",
            "Sentencias INSERT, UPDATE, DELETE, ALTER TABLE, DROP",
            "Gestión de fechas y hora",
            "Comandos transaccionales (TCL)"
          ]
        },
        {
          title: "Módulo 4 — Diseño de bases de datos",
          topics: [
            "Tipos de bases de datos",
            "Diseño de una base de datos relacional",
            "Entidades, atributos, relaciones y cardinalidad",
            "Diagramas ER",
            "Clave primaria y clave ajena",
            "Normalización de una BD y formas normales"
          ]
        },
        {
          title: "Módulo 5 — Operar con múltiples tablas",
          topics: [
            "Introducción a Lucid Chart",
            "Integridad referencial",
            "Operadores UNION, INTERSECT, EXCEPT",
            "Cláusulas JOIN: INNER, LEFT, CROSS, Self join",
            "Subconsultas (subqueries)",
            "Orden de ejecución de una consulta"
          ]
        },
        {
          title: "Módulo 6 — Tópicos avanzados",
          topics: [
            "La sentencia PRAGMA",
            "Cláusulas VIEW y WITH",
            "Disparadores (TRIGGER)",
            "La expresión CASE WHEN",
            "Limitaciones de SQLite"
          ]
        }
      ],
      requirements: "No se requiere conocimiento previo en los temas del curso, ya que se enseñan desde cero. El software es de distribución libre y gratuita y no es exigente en recursos de computación.",
      evaluation: "La evaluación se basa en el desempeño a lo largo del curso y en la elaboración de un proyecto propio bajo tutoría. Centro REDES emite certificados de Participación y, opcionalmente, de Aprobación con evaluación numérica."
    },
    pricing: {
      installmentPrice: "$55.500",
      paymentFullUrl: "https://www.mercadopago.com.ar/checkout/v1/payment/redirect/4787c214-ee1b-4140-9e5a-a19d02e59f72/payment-option-form/?source=link&preference-id=104981320-15d86275-db69-462d-9ae4-c51ba1770053&router-request-id=0aa440d8-fc82-4905-b1b1-01c2a8c992ba&p=cceaf388cdead7ca133eac0253c6cd65",
      paymentInstallmentUrl: "https://www.mercadopago.com.ar/checkout/v1/payment/redirect/a1e77e2a-fe67-43c4-9229-6aab97124397/payment-option-form/?source=link&preference-id=104981320-843d71d4-6a8f-4b9c-878e-52a76b4a9d9f&router-request-id=c0ece8bb-a542-435a-82ac-6c12b0ddd91d&p=cceaf388cdead7ca133eac0253c6cd65",
    }
  },
  { 
    id: 7, 
    title: "Machine Learning en Ciencias Sociales", 
    slug: "machine-learning",
    category: "ML", 
    price: "$90.000", 
    track: "data", 
    desc: "Aplica modelos predictivos y clasificación a datasets complejos de salud y sociedad.",
    externalLink: "https://centroredes.org.ar/index.php/machine-learning/",
    content: {
      fullTitle: "Aprendizaje automático (machine learning) aplicado en las ciencias sociales y de la salud",
      duration: "6 semanas",
      hours: "96 horas",
      instructor: "Dr. Gustavo González Bonorino",
      area: "Ciencia de Datos",
      audience: "Todo personal que integra, o aspira a integrar, el sistema de salud. También es una propuesta de capacitación para otros interesados en conocer técnicas de manejo de datos orientadas a los procesos de toma de decisiones.",
      description: "Las ciencias sociales y de la salud generan anualmente enormes volúmenes de datos, y por ello son objetivos prioritarios del aprendizaje automático (machine learning), ya que este ofrece numerosas técnicas para la gestión y el análisis de la información que producen. Se estima que en unos 15 años dos tercios de las actividades en salud serán gestionadas por técnicas de aprendizaje automático. Este curso introduce al aprendizaje automático y muestra cómo aplicar variadas técnicas en las ciencias sociales y de la salud. Los ejemplos se desarrollan en Python empleando cuadernos Jupyter Notebook.",
      modality: "Curso virtual práctico documentado con ejemplos no triviales. Cada técnica se presenta con el mínimo necesario de teoría y se enseña paso a paso cómo aplicarla con datos reales. Acceso 24/7 a la plataforma sin restricciones de horario.",
      modules: [
        {
          title: "Parte I — Datos, Ciencia de Datos y Aprendizaje Automático",
          topics: [
            "Objetivos y metodología",
            "Algoritmos y modelos",
            "Modos de aprendizaje automático",
            "Bibliotecas de Python: pandas, numpy, scikit-learn"
          ]
        },
        {
          title: "Parte II — Preparación para el análisis",
          topics: [
            "Transferencia de datos",
            "Inspección exploratoria",
            "Gestión de datos faltantes, codificación de variables categóricas, normalización"
          ]
        },
        {
          title: "Parte III — Fundamentos de Aprendizaje Automático",
          topics: [
            "Clasificación de las técnicas en AA",
            "Organización de los datos de entrada",
            "Función de costo",
            "Descenso por gradiente",
            "Propiedades de los datos"
          ]
        },
        {
          title: "Parte IV — Aprendizaje supervisado: regresión",
          topics: [
            "Regresión lineal",
            "Regresión de Poisson: datos de conteo"
          ]
        },
        {
          title: "Parte V — Aprendizaje supervisado: clasificación",
          topics: [
            "Regresión logística",
            "SVM (Support Vector Machine)",
            "Naive Bayes",
            "Árbol de decisión",
            "Bosque aleatorio",
            "K-vecinos más próximos (K-NN)"
          ]
        },
        {
          title: "Parte VI — Aprendizaje no supervisado",
          topics: [
            "K-medias"
          ]
        }
      ],
      requirements: "Python es poco exigente en materia de memoria RAM. Con una PC con procesador Intel i3, o de rango equivalente, se puede trabajar sin dificultad. El software es de distribución libre y gratuita.",
      evaluation: "La evaluación se basa en el desempeño a lo largo del curso y en la elaboración de un proyecto propio bajo tutoría. Centro REDES emite certificados de Participación y, opcionalmente, de Aprobación con evaluación numérica."
    },
    pricing: {
      installmentPrice: "$50.000",
      paymentFullUrl: "/",
      paymentInstallmentUrl: "/",
    }
  },
  { 
    id: 15, 
    title: "Python en la era de la IA", 
    slug: "python-ia",
    category: "ML", 
    price: "$99.900", 
    track: "data", 
    desc: "Aprende Python asistido con la IA.",
    externalLink: "https://centroredes.org.ar/index.php/python/",
    content: {
      fullTitle: "Python en la era de la IA",
      duration: "6 semanas",
      hours: "96 horas",
      instructor: "Dr. Gustavo González Bonorino y Augusto González Bonorino",
      area: "Ciencia de Datos",
      audience: "La naturaleza multipropósito de Python, unido a la facilidad de aprendizaje, lo hacen atractivo tanto para jóvenes estudiantes como para profesionales formados.",
      description: "\"Python en la era de la IA\" enseña a programar en Python empleando la IA como ayudante. La incorporación de la IA a tiempo completo exige implementar una metodología de enseñanza radicalmente diferente. En este curso el protagonismo recae en el alumno, asociado con la IA, y el docente oficia de árbitro, de mediador. Ustedes darán instrucciones (prompts) a la IA para que escriba código y lo analizarán valiéndose de los apuntes y videos. Se adopta el aprendizaje por demanda, es decir, que el código les exija qué aprender y cuándo aprender. Este curso está especialmente dirigido a quienes deseen emplear Python en programación científica.",
      modality: "Curso virtual práctico con gran cantidad de videos complementados con scripts en cuadernos Jupyter. Una clase sincrónica en horario a convenir para Proyecto Personal. Acceso 24/7 a la plataforma.",
      modules: [
        {
          title: "Módulo 1 — Introducción y metodología",
          topics: [
            "¿Qué es la Inteligencia Artificial?",
            "Aprender Python en la era de la IA: qué cambió y qué no",
            "Organización del curso y metodología de aprendizaje",
            "Organización del espacio de trabajo",
            "Errores característicos de la IA",
            "Código IA: Happy Path Bias (Sesgo del Camino Feliz)"
          ]
        },
        {
          title: "Módulo 2 — Sintaxis y tipos de datos",
          topics: [
            "Módulos, paquetes y bibliotecas",
            "Código IA: Importar módulos",
            "Sintaxis y semántica en Python",
            "Tipos de datos y propiedades de los datos",
            "Coerción y formateo de datos",
            "Operar con fechas y horas"
          ]
        },
        {
          title: "Módulo 3 — Programación estructurada",
          topics: [
            "Funciones",
            "Iteraciones y ejecución condicional",
            "Código IA: Bucles",
            "Gestión de errores"
          ]
        },
        {
          title: "Módulo 4 — Bibliotecas y datos",
          topics: [
            "Biblioteca pandas",
            "Biblioteca numpy",
            "Lectura y escritura de datos"
          ]
        },
        {
          title: "Módulo 5 — Tablas y visualización",
          topics: [
            "Creación y gestión de tablas de datos",
            "Visualización de datos"
          ]
        },
        {
          title: "Módulo 6 — Programación avanzada",
          topics: [
            "Programación funcional",
            "Programación orientada a objetos"
          ]
        }
      ],
      requirements: "No se requiere conocimiento previo en programación con Python, ya que se enseña desde cero. Python es de acceso libre y gratuito y corre sin mayores exigencias de espacio de memoria o de disco duro.",
      evaluation: "Centro REDES emite certificados de Participación y, opcionalmente, de Aprobación con calificación numérica. Este último requiere la presentación de un Proyecto Personal sobre un tema a elección del participante."
    },
    pricing: {
      installmentPrice: "$55.500",
      paymentFullUrl: "https://www.mercadopago.com.ar/checkout/v1/payment/redirect/df7d8ed4-f153-4101-b727-a83403447f22/payment-option-form/?source=link&preference-id=104981320-ceb5d415-3d03-405c-80c2-b2c725ad08e5&router-request-id=41d808c1-1d24-41cd-95d7-4421dba4918b&p=cceaf388cdead7ca133eac0253c6cd65",
      paymentInstallmentUrl: "https://www.mercadopago.com.ar/checkout/v1/payment/redirect/4a38a038-3b34-4c9a-a09c-2edd427f85a7/payment-option-form/?source=link&preference-id=104981320-12fc6c03-5eaf-4637-bddd-c5249cb3d34c&router-request-id=c9d27848-8441-4c28-befd-d8cb869d176e&p=cceaf388cdead7ca133eac0253c6cd65",
    }
  },
  
  // TRACK: AGUA & AMBIENTE
  { 
    id: 9, 
    title: "Modelos Hidrológicos HEC-HMS", 
    slug: "hec-hms",
    category: "Hidro", 
    price: "$100.000", 
    track: "water", 
    desc: "Simulación de procesos de lluvia-escorrentía para diseño de obras y prevención de inundaciones.",
    externalLink: "https://centroredes.org.ar/index.php/hec-hms/",
    content: {
      fullTitle: "Modelos hidrológicos con HEC-HMS, potenciado con ChatGPT",
      duration: "6 semanas",
      hours: "72 horas",
      instructor: "Dr. Gustavo González Bonorino",
      area: "Hidrología",
      audience: "Profesionales y estudiantes con conocimientos de hidrología interesados en modelación hidrológica. Aplicable en sistemas de alerta temprana de inundación, delimitación de zonas inundables, estimación de caudales de diseño para obras hídricas, y cuantificación del efecto de cambios en el uso de la tierra sobre la escorrentía.",
      description: "El programa Hydrologic Modeling System (HMS) ha sido diseñado y es mantenido por el Hydrologic Engineering Center (HEC) del Cuerpo de ingenieros de los EEUU. HMS está diseñado para simular la conversión de un volumen de lluvia en escorrentía, el traslado del caudal por laderas y cauces, y el cálculo del hidrograma a la salida. Este curso introduce al uso de HMS con un enfoque práctico. Numerosos ejercicios resuelven problemas reales de simulación hidrológica. Se analizan los efectos de eventos de tormenta esporádicos y modelaciones extendidas en el tiempo, y la simulación de lagunas de laminación y de derivaciones de caudal. El material se presenta en más de 30 videos.",
      modality: "Curso virtual con acceso 24/7. Consultas por Foro 24/7, opción de Proyecto Personal, y dos reuniones sincrónicas al promediar el curso. Material presentado en videos complementados con ejercicios con y sin guía.",
      modules: [
        {
          title: "Módulo 1 — Presentación de HEC-HMS",
          topics: [
            "Características de HMS",
            "Conceptos fundamentales en hidrología",
            "Creación de un modelo de cuenca",
            "Inserción de un mapa base"
          ]
        },
        {
          title: "Módulo 2 — Métodos de pérdida de agua de lluvia",
          topics: [
            "Método Inicial y Constante",
            "Método SCS CN",
            "Método de Green y Ampt",
            "Curva Número",
            "Grupo Hidrológico de Suelos"
          ]
        },
        {
          title: "Módulo 3 — Tránsito de hidrogramas",
          topics: [
            "Hidrograma unitario",
            "Tiempo de concentración",
            "Cálculo de parámetros con TR-55 y Kerby-Kirpich",
            "Estimación de parámetros con un programa SIG",
            "Métodos de tránsito: Retardo (Lag), Muskingum, HU de Clark",
            "Escurrimiento subsuperficial: Métodos de Recesión y Reservorio Lineal"
          ]
        },
        {
          title: "Módulo 4 — El modelo meteorológico",
          topics: [
            "Métodos: Specified Hyetograph, Gage Weights",
            "Interpolación por Thiessen y Distancia Inversa",
            "Modelado extendido en el tiempo"
          ]
        },
        {
          title: "Módulo 5 — Delineación automática de subcuencas",
          topics: [
            "Empleo de modelos digitales de elevación para calcular parámetros hidrológicos"
          ]
        },
        {
          title: "Módulo 6 — Tópicos especiales",
          topics: [
            "Almacenaje con DSS",
            "Calibración"
          ]
        }
      ],
      requirements: "No se requiere experiencia con el programa HMS, pero sí se requiere conocimientos de hidrología. El software es gratuito.",
      evaluation: "Centro REDES emite certificados de Participación y, opcionalmente, de Aprobación con evaluación numérica."
    },
    pricing: {
      installmentPrice: "$55.600",
      paymentFullUrl: "/",
      paymentInstallmentUrl: "/",
    }
  },
  { 
    id: 10, 
    title: "Modelado Hidráulico HEC-RAS", 
    slug: "hec-ras",
    category: "Hidro", 
    price: "$100.000", 
    track: "water", 
    desc: "Estándar mundial para modelado de ríos, canales y áreas de inundación.",
    externalLink: "https://centroredes.org.ar/index.php/hec-ras/",
    content: {
      fullTitle: "Modelado hidráulico con HEC-RAS",
      duration: "6 semanas",
      hours: "72 horas",
      instructor: "Dr. Gustavo González Bonorino",
      area: "Hidrología",
      audience: "Ingenieros civiles, consultores ambientales, geógrafos y profesionales interesados en la gestión de recursos hídricos. El contenido del curso es inmediatamente aplicable en la gestión de los recursos hídricos, disciplina que está en creciente demanda en el mercado laboral.",
      description: "El programa HEC-RAS (River Analysis System) es gestionado por el Hydrological Engineering Center de los Estados Unidos (HEC), y es de acceso libre y gratuito. HEC-RAS simula un flujo canalizado en régimen estacionario y variado, opcionalmente incluyendo calidad del agua, permitiendo identificar posibles tramos de desborde. La calidad de los resultados y los excelentes recursos de visualización han convertido HEC-RAS en una herramienta de uso global para el análisis de riesgo hídrico. El curso se apoya en numerosos ejemplos de simulación hidráulica presentados como videos y se refuerza con ejercicios guiados.",
      modality: "Curso virtual con acceso 24/7. Consultas por Foro 24/7, opción de Proyecto Personal, y dos reuniones sincrónicas al promediar el curso para aclarar dudas y preparar el Proyecto Personal.",
      modules: [
        {
          title: "Módulo 1 — Introducción a la hidráulica fluvial y HEC-RAS",
          topics: [
            "Conceptos básicos de hidráulica fluvial",
            "Crear un modelo geométrico de un cauce fluvial",
            "Digitalizar líneas de ribera, trayectorias de flujo y secciones transversales"
          ]
        },
        {
          title: "Módulo 2 — Simulación en régimen estacionario",
          topics: [
            "Configurar HEC-RAS para un flujo 1D estacionario",
            "Condiciones de contorno",
            "Definición de parámetros requeridos",
            "Visualizar y analizar los perfiles de flujo en el editor de geometría y en RAS Mapper"
          ]
        },
        {
          title: "Módulo 3 — Simulación en régimen variado",
          topics: [
            "Configurar HEC-RAS para un flujo 1D variado",
            "Determinar y seleccionar condiciones de contorno",
            "Analizar los perfiles de flujo y series temporales"
          ]
        },
        {
          title: "Módulo 4 — Estructuras hidráulicas",
          topics: [
            "Simular la presencia de un puente",
            "Incorporación de imágenes satelitales como mapas base",
            "Distorsión del flujo: expansión y contracción",
            "Cálculo de zona afectada",
            "Delimitación de zonas de flujo ineficaz"
          ]
        },
        {
          title: "Módulo 5 — Transporte de solutos",
          topics: [
            "Simular la calidad de agua y la temperatura del agua en un cauce",
            "Ecuación de advección-dispersión",
            "Análisis por nitrógeno, fósforo y oxígeno disueltos"
          ]
        },
        {
          title: "Módulo 6 — Generación de informes",
          topics: [
            "Visualización de resultados en 2 y 3 dimensiones",
            "Incorporación de imágenes, fotografías y tablas a un informe"
          ]
        }
      ],
      requirements: "No se requiere experiencia con el programa HEC-RAS pero sí se requiere conocimientos de hidrología. La exigencia en computación es moderada. HEC-RAS es de acceso libre y gratuito.",
      evaluation: "Centro REDES emite certificados de Participación y, opcionalmente, de Aprobación con calificación numérica. Este último requiere la presentación de un Proyecto Personal sobre un tema a elección del participante."
    },
    pricing: {
      installmentPrice: "$55.600",
      paymentFullUrl: "/",
      paymentInstallmentUrl: "/",
    }
  },
];

export const MILESTONES: Milestone[] = [
  { year: "1979", title: "Ph.D. en Canadá", tool: "Mapas a Mano", desc: "Doctorado en McMaster University. Geología estructural analógica." },
  { year: "1984", title: "Investigador CONICET", tool: "Fortran 77", desc: "Liderazgo en SEGEMAR y primeras simulaciones computacionales." },
  { year: "2004", title: "Director CADIC", tool: "GIS & Remote Sensing", desc: "Dirección del Centro Austral de Investigaciones Científicas." },
  { year: "2026", title: "La Era de la IA", tool: "Cursor + Claude 3.5", desc: "Integración total de LLMs para acelerar el descubrimiento científico." }
];

export const FILTERS: FilterOption[] = [
  { id: 'all', label: 'Todos' },
  { id: 'geo', label: 'Geospacial' },
  { id: 'data', label: 'Data Science' },
  { id: 'water', label: 'Hídricos' },
  { id: 'ai', label: 'IA & Productividad' },
];
