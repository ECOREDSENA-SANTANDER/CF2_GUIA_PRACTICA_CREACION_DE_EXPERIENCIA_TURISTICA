export default {
  global: {
    Name: 'Guía práctica en la creación de experiencia turística',
    Description:
      'El objetivo principal de este componente es brindar herramientas para la creación de experiencias turísticas, destacando elementos clave como el conocimiento del destino, las facilidades turísticas disponibles, los tipos de atractivos presentes en el territorio y las actividades que pueden desarrollarse en cada contexto. Asimismo, se abordará la aplicación de técnicas para el diseño del itinerario, la construcción de una narrativa coherente y la elaboración de un plan de contingencia que garantice la calidad y seguridad de la experiencia.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Experiencia turística',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Destino turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Seguridad turística',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Reglamentación legal',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Atractivo turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Capacidad de carga turística y límites de cambio aceptable',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Normativa de sostenibilidad turística',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Herramientas de geolocalización',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Reglamentación legal  ',
      referencia:
        'ABECE. Ley 2068 de (2020). De la Ley General de Turismo. Mincomercio. ',
      tipo: 'Documento',
      link:
        'https://colombiasigueadelante.mincit.gov.co/colombia_sigue_adelante/media/archivos/pdf/ABECE-febrero-2021-Ley-de-Turismo.pdf ',
    },
    {
      tema: 'Experiencia turística ',
      referencia: 'MANUAL DE DISEÑO (s.f.). Experiencias turísticas. SERNATUR.',
      tipo: 'Manual',
      link:
        'https://www.sernatur.cl/wp-content/uploads/2018/11/MDD-Manual-de-Experiencias-Turi%CC%81sticas-1.pdf ',
    },
    {
      tema: 'Itinerario',
      referencia:
        'Chicaiza (2019). Manual generación de rutas turísticas. MINTUR 2da. Edición – Quito.',
      tipo: 'Manual',
      link:
        'https://servicios.turismo.gob.ec/wp-content/uploads/2023/04/Manual_generacion_rutas_itinerarios_sub2021_compressed.pdf ',
    },
    {
      tema: 'Técnicas de diseño',
      referencia:
        'Autores varios (2018 p.4), Relatos turísticos: Propuestas para incorporar el patrimonio cultural y natural en los servicios y rutas turísticas de Arica y Camarones. Ediciones Universidad Central de Chile.',
      tipo: 'Manual',
      link:
        'https://www.ucentral.cl/ucentral/site/docs/20200110/20200110142007/relatos_turisticos_arica.pdf ',
    },
    {
      tema: 'Testeo de la experiencia',
      referencia:
        'Agencia Parks Canada (2017). Guía de evaluación de la experiencia del visitante. Metodología en áreas protegidas. Subsecretaría de Turismo. Ministerio de Economía, Fomento y Turismo. ',
      tipo: 'Guía',
      link:
        'https://www.subturismo.gob.cl/wp-content/uploads/2017/05/GUIA_EXPERIENCIA_VISITANTE_WEB.pdf ',
    },
    {
      tema: 'Destino turístico',
      referencia:
        'Vargas, A. (2019). Cap. 7 (pp.181-191).Roberto r Boullón LAS ACTIVIDADES TURÍSTICAS Y RECREACIONALES El hombre como protagonista. Ipn.',
      tipo: 'Capítulo de libro',
      link:
        'https://www.academia.edu/40296889/R_oberto_r_Boull%C3%B3n_LAS_ACTIVIDADES_TUR%C3%8DSTICAS_Y_RECREACIONALES_El_hombre_como_protagonista ',
    },
  ],
  glosario: [
    {
      termino: 'Atractivo turístico',
      significado:
        'Elemento natural, cultural o construido que motiva la visita de turistas.',
    },
    {
      termino: 'Ciclo de servicio',
      significado:
        'Conjunto de fases que conforman la atención al cliente durante la experiencia.',
    },
    {
      termino: 'Destino turístico',
      significado:
        'Lugar que ofrece condiciones para la realización de actividades turísticas.',
    },
    {
      termino: 'Encuesta de satisfacción',
      significado:
        'Instrumento que recoge la opinión del visitante sobre el servicio recibido.',
    },
    {
      termino: 'Experiencia turística',
      significado:
        'Vivencia significativa que el turista experimenta durante su viaje.',
    },
    {
      termino: 'Geolocalización',
      significado:
        'Tecnología que permite ubicar geográficamente lugares y atractivos turísticos.',
    },
    {
      termino: 'Guía de turismo',
      significado:
        'Persona capacitada que orienta, informa y acompaña al turista.',
    },
    {
      termino: 'Itinerario',
      significado:
        'Secuencia organizada de actividades y recorridos turísticos.',
    },
    {
      termino: 'Narrativa',
      significado:
        'Relato que comunica el valor cultural o emocional de un destino o experiencia.',
    },
    {
      termino: 'Normativa',
      significado: 'Conjunto de reglas que regulan la actividad turística.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'Conjunto de bienes culturales o naturales que tienen valor histórico o simbólico.',
    },
    {
      termino: 'Plan de contingencia',
      significado:
        'Estrategia para actuar ante imprevistos durante la experiencia turística.',
    },
    {
      termino: 'Ruta turística',
      significado:
        'Recorrido diseñado para visitar varios puntos de interés dentro de un territorio.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Principio que busca equilibrio entre lo ambiental, social y económico en el turismo.',
    },
    {
      termino: 'Turista',
      significado:
        'Persona que se desplaza temporalmente fuera de su entorno habitual por motivos de ocio u otros.',
    },
  ],
  referencias: [
    {
      referencia:
        'Carvajal, M. (2019). La experiencia turística: Conceptualización y enfoques para su estudio. Revista Turismo y Sociedad, 24(1), 13–29.',
      link: '',
    },
    {
      referencia:
        'Carolina. (s. f.). Plan de contingencia recorrido parque Natural. Scribd. ',
      link:
        'https://es.scribd.com/document/413194150/Plan-de-Contingencia-Recorrido-Parque-Natural#:~:text=1.,Portar%20agua%20potable.&text=recorrido.,solo%20por%20los%20senderos%20autorizados.&text=en%20el%20lugar%20de%20visita.&text=en%20caso%20de%20emergencia.,-11',
    },
    {
      referencia:
        'Ceupe. (2023). Seguridad turística: Qué es, importancia y tipos.',
      link: 'https://www.ceupe.com/blog/seguridad-turistica.html',
    },
    {
      referencia: 'Ceupe. (2024). Itinerario de viaje: ¿Qué es y qué contiene?',
      link:
        'https://www.ceupe.com/blog/itinerario-de-viaje.html#:~:text=%C2%BFQu%C3%A9%20es%20un%20itinerario%20de,cu%C3%A1ndo%20hacerlo%20durante%20tu%20viaje',
    },
    {
      referencia: 'Ceupe, A. (2022b). Atractivo turístico. Ceupe. ',
      link: 'https://www.ceupe.com/blog/atractivo-turistico.html',
    },
    {
      referencia:
        'Contreras Castañeda, E. D., Rubio-Sáenz, A. L., & Suárez-Parra, A. B. (2021). La medición de la calidad del servicio en destinos turísticos: una revisión desde Colombia. Innovar, 31(81), 35–48. ',
      link: 'https://doi.org/10.15446/innovar.v31n81.95571',
    },
    {
      referencia: 'Desarrollo sostenible del turismo | ONU Turismo. (s. f.). ',
      link:
        'https://www.unwto.org/es/desarrollo-sostenible#:~:text=Los%20principios%20de%20sostenibilidad%20se,su%20sostenibilidad%20a%20largo%20plazo',
    },
    {
      referencia:
        'Decreto 190 (2022). Cap. 8. Atractivo Turístico. Sección I, II y III. Función Pública. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=177026#:~:text=el%20siguiente%20contenido:-,1.,que%20estas%20no%20fueron%20necesarias',
    },
    {
      referencia: 'Encuesta de satisfacción | QuestionPro. (s. f.). ',
      link:
        'https://www.questionpro.com/es/encuesta-de-satisfaccion.html#que-es-una-encuesta-de-satisfaccion-del-cliente',
    },
    {
      referencia:
        'Europa, E. V. (2024). Narrativa en el Turismo del Patrimonio Histórico. EVE Museos + Innovación. ',
      link:
        'https://evemuseografia.com/2024/05/21/narrativa-en-el-turismo-del-patrimonio-historico/#:~:text=La%20narraci%C3%B3n%20de%20historias%20es,nivel%20de%20atenci%C3%B3n%20y%20satisfacci%C3%B3n',
    },
    {
      referencia:
        'Facilidades turísticas introducción. (2020). Ministerio de Turismo.',
      link:
        'https://servicios.turismo.gob.ec/wp-content/uploads/2023/04/11-06-2020-MANUAL-DE-FACILIDADES-TURISTICAS-INTRODUCCION_compressed.pdf',
    },
    {
      referencia:
        'Ict. (s. f.). CST - Instituto Costarricense de Turismo | ICT. ',
      link:
        'https://www.ict.go.cr/es/sostenibilidad/cst.html#:~:text=El%20desarrollo%20tur%C3%ADstico%20sostenible%20es,adem%C3%A1s%20contribuye%20al%20desarrollo%20nacional',
    },
    {
      referencia:
        'Ivette, R. (2015). Revista Tecnológica, 8. Escuela Especializada en Ingeniería ITCA-FEPADE. ',
      link: 'https://core.ac.uk/download/pdf/80296688.pdf',
    },
    {
      referencia: 'Kevin. (s. f.). Qué es un itinerario turístico. Scribd.',
      link:
        'https://es.scribd.com/document/588681376/Que-Es-Un-Itinerario-Turistico',
    },
    {
      referencia: 'Ley 2068 (2020). Función Pública. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=172558',
    },
    {
      referencia:
        'López, R. G., & López, R. G. (2023). El storytelling, clave en el marketing turístico. Marketing Turístico Digital. ',
      link:
        'https://marketingturisticodigital.com/el-storytelling-clave-en-el-marketing-turistico/',
    },
    {
      referencia:
        'Lovelock, C. H., & Wirtz, J. (2011). Marketing de servicios (7.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Mercadé, A. (2025). Las herramientas de geolocalización más utilizadas. Deusto. ',
      link:
        'https://www.deustoformacion.com/blog/marketing-digital/herramientas-geolocalizacion-mas-utilizadas',
    },
    {
      referencia:
        'Nahum Montagud Rubio. (2019). Ciclo de servicio al cliente: cómo funciona, características y fases. Psicología y Mente. ',
      link:
        'https://psicologiaymente.com/organizaciones/ciclo-servicio-cliente',
    },
    {
      referencia:
        'Normatividad Turismo. (s. f.). Ministerio de Comercio, Industria y Turismo.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial del Turismo. (2018). Indicadores de desarrollo sostenible para los destinos turísticos. UNWTO. ',
      link:
        'https://www.unwto.org/news/un-tourism-and-slow-food-partner-to-strengthen-tourism-and-agriculture-links-to-benefit-of-destinations-and-communities',
    },
    {
      referencia: 'OMT. (s. f.). Glosario de términos de turismo.',
      link: 'https://www.unwto.org/es/glosario-terminos-turisticos',
    },
    {
      referencia:
        'Pine, B. J., & Gilmore, J. H. (1999). The Experience Economy: Work is Theatre and Every Business a Stage. Harvard Business School Press.',
      link: '',
    },
    {
      referencia:
        'Playtur. (2023). La geolocalización, herramienta clave de la gamificación turística. LinkedIn. ',
      link:
        'https://es.linkedin.com/pulse/la-geolocalizaci%C3%B3n-herramienta-clave-de-gamificaci%C3%B3n-tur%C3%ADstica-#:~:text=enriquecedora%20y%20participativa.-,La%20geolocalizaci%C3%B3n%20es%20una%20herramienta%20clave%20en%20la%20gamificaci%C3%B3n%20tur%C3%ADstica,monitoreando%20el%20flujo%20de%20turistas',
    },
    {
      referencia:
        'Resolución 612 (2024). Ministerio de Comercio, Industria y Turismo. ',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=156618&dt=S#:~:text=La%20presente%20resoluci%C3%B3n%20tiene%20por,relacionado%20a%20la%20calidad%20a',
    },
    {
      referencia:
        'Seguridad turística. (2003). Reto competitivo de Colombia. Plan estratégico. Ministerio de Comercio, Industria y Turismo – Policía de Turismo. ',
      link:
        'https://www.mincit.gov.co/cmspages/getfile.aspx?guid=c46cb77e-c0e3-49f1-bc68-6b18d2b89054',
    },
    {
      referencia:
        'Scollo, J. (2023). La necesidad de una nueva narrativa para el turismo. Ladevi. ',
      link:
        'https://colombia.ladevi.info/turismo/la-necesidad-una-nueva-narrativa-el-turismo-n52980',
    },
    {
      referencia:
        'Zorrilla, A. (2023). Técnicas de narrativa y visualización para investigar y comunicar nuestros descubrimientos. Campus Digital Idyd. ',
      link:
        'https://campusidyd.com/tecnicas-de-la-narrativa-y-visualizacion-para-investigar/#:~:text=de%20manera%20convincente.-,5.,an%C3%A1lisis%20m%C3%A1s%20completo%20y%20enriquecedor',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Aurora Milena Parada Ortega',
          cargo: 'Experta Temática',
          centro: 'Regional Santander - Centro Agroturístico.',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Regional Santander - Centro Agroturístico.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diego Fernando Herrera Ardila',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
