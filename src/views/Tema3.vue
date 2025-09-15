<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Atractivo turístico 
    .row.justify-content-center
      .col-lg-8
        .d-flex.align-items-center.gap-3.mb-3
          img(src='@/assets/curso/tema3/5.svg', alt='').imgpeqt3.imagehide
          p.mb-2 Un atractivo turístico es un recurso de carácter natural o cultural que posee la capacidad de captar el interés de los visitantes, gracias a sus características distintivas. Puede tratarse de un sitio, manifestación o elemento que destaca por su valor histórico, cultural, artístico, arquitectónico, natural, recreativo, gastronómico, lingüístico, arqueológico o astronómico. Los atractivos turísticos constituyen uno de los principales factores de motivación en la decisión del turista al seleccionar un destino, ya que influyen directamente en la expectativa y la experiencia de viaje.
        p.mb-4.cajon.cajon-color-adicional-5.p-4 La variedad de atractivos que puede ofrecer un destino refuerza su competitividad en el mercado turístico y promueve su desarrollo económico y social. Por esta razón, los entes gubernamentales suelen destinar recursos para su promoción, protección y mejora, a fin de posicionar estratégicamente el destino, generar empleo, preservar el patrimonio y garantizar la sostenibilidad a largo plazo. De acuerdo con el Decreto 190 de 2022, capítulo 8, sección I, artículo 2.2.4.8.1.4, los atractivos turísticos se clasifican en tres grandes tipologías:
      .col-lg-4.col-md-10
        img(src='@/assets/curso/tema3/1.png', alt='')
    .mb-4
    .row
      .col-4
        .tarjeta--boton.color-adicional-1.cajon-color-adicional-6.p-4
          .row.justify-content-center.mb-3
            .col-3
              figure
                img(src='@/assets/curso/tema3/2.svg', alt='Texto que describa la imagen')
          p.text-center.titulotj Sitios naturales
          p.text-small.text-center Áreas geográficas o bienes naturales de importancia para el turismo, que pueden incluir elementos individuales o conjuntos que, por sus características, no necesariamente están agrupados.
      .col-4
        .tarjeta--boton.color-adicional-1.cajon-color-adicional-6.p-4
          .row.justify-content-center.mb-3
            .col-3
              figure
                img(src='@/assets/curso/tema3/3.svg', alt='Texto que describa la imagen')
          p.text-center.titulotj Sitios culturales
          p.text-small.text-center.mb-4 Espacios relacionados con hechos históricos, transformaciones del territorio, asentamientos humanos o edificaciones con valor arqueológico, técnico o simbólico.
      .col-4
        .tarjeta--boton.color-adicional-1.cajon-color-adicional-6.p-4
          .row.justify-content-center.mb-3
            .col-3
              figure
                img(src='@/assets/curso/tema3/4.svg', alt='Texto que describa la imagen')
          p.text-center.titulotj Festividades y eventos
          p.text-small.text-center Manifestaciones de carácter tradicional o contemporáneo que congregan a la comunidad local como protagonista o espectadora, y que representan parte de su identidad cultural.
    .mb-5
    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/tema1/4.svg")
      h3.ps-3.pe-4.mb-0 Tipos de atractivos turísticos  
    p.mb-4 De acuerdo con el tipo de experiencia local que se desee desarrollar, se deben tener en cuenta los siguientes pasos:
    .row
      .col-lg-4.col-md-5.imageslyder.imagehidetema1
        img(src='@/assets/curso/tema3/6.png', alt='').imagehidetema1
      .col-lg-8.col-md-7.targetaslyder
        SlyderF.slyder1.circl-arrow.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-left")
          .tarjeta.tarjeta-btn.p-4
            img.mb-3(src='@/assets/curso/tema3/7.svg', alt='')
            .title.mb-4
              h4.text-center.mb-0 Atractivos naturales
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p.text-center Playas, montañas, desiertos, lagunas, ríos, costas, llanuras, bosques, reservas naturales, parques nacionales, zoológicos, jardines botánicos.
          .tarjeta.tarjeta-btn.p-4
            img.mb-3(src='@/assets/curso/tema3/8.svg', alt='')
            .title.mb-4
              h4.text-center.mb-0 Atractivos recreativos
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p.text-center Parques temáticos, centros vacacionales, parques acuáticos, casinos, zonas de campamento, campos deportivos, miradores y espacios para actividades al aire libre o acuáticas.
          .tarjeta.tarjeta-btn.p-4
            img.mb-3(src='@/assets/curso/tema3/9.svg', alt='')
            .title.mb-4
              h4.text-center.mb-0 Atractivos culturales
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p.text-center Museos, bibliotecas, centros culturales, monumentos, sitios declarados patrimonio de la humanidad, esculturas y centros de interpretación cultural.
          .tarjeta.tarjeta-btn.p-4
            img.mb-3(src='@/assets/curso/tema3/10.svg', alt='')
            .title.mb-4
              h4.text-center.mb-0 Atractivos gastronómicos
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p.text-center Restaurantes, platos típicos, ferias gastronómicas, rutas culinarias, experiencias en cocinas tradicionales, escuelas de gastronomía.
          .tarjeta.tarjeta-btn.p-4
            img.mb-3(src='@/assets/curso/tema3/11.svg', alt='')
            .title.mb-4
              h4.text-center.mb-0 Atractivos arqueológicos
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p.text-center Yacimientos y ruinas arqueológicas, museos especializados, santuarios, sitios de excavación y conservación del patrimonio precolombino.
          .tarjeta.tarjeta-btn.p-4
            img.mb-3(src='@/assets/curso/tema3/12.svg', alt='')
            .title.mb-4
              h4.text-center.mb-0 Atractivos históricos
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p.text-center Centros históricos, ciudades patrimoniales, museos de historia, ferrocarriles antiguos, sitios donde ocurrieron hechos de relevancia nacional o regional.
          .tarjeta.tarjeta-btn.p-4
            img.mb-3(src='@/assets/curso/tema3/13.svg', alt='')
            .title.mb-4
              h4.text-center.mb-0 Atractivos arquitectónicos
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p.text-center Templos, castillos, palacios, torres, puentes, rascacielos y edificaciones representativas de distintos estilos arquitectónicos (gótico, barroco, neoclásico, colonial, islámico, moderno, entre otros).
          .tarjeta.tarjeta-btn.p-4
            img.mb-3(src='@/assets/curso/tema3/14.svg', alt='')
            .title.mb-4
              h4.text-center.mb-0 Atractivos artísticos
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p.text-center Galerías, teatros, carnavales, festivales musicales, ferias de danza y expresiones del arte popular y contemporáneo.
          .tarjeta.tarjeta-btn.p-4
            img.mb-3(src='@/assets/curso/tema3/15.svg', alt='')
            .title.mb-4
              h4.text-center.mb-0 Atractivos lingüísticos
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p.text-center Territorios con presencia de comunidades étnicas, regiones donde se conservan lenguas originarias o se promueve el aprendizaje de otros idiomas.
          .tarjeta.tarjeta-btn.p-4
            img.mb-3(src='@/assets/curso/tema3/16.svg', alt='')
            .title.mb-4
              h4.text-center.mb-0 Atractivos astronómicos
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p.text-center Observatorios, reservas de cielo oscuro, lugares ideales para la observación astronómica y eventos celestes.
    .row.col-5
      ul.lista-ul--color.lista-ul--separador
        li 
          i.lista-ul__vineta
          | #[strong Ejemplos representativos de atractivos turísticos en Colombia]
          li.pb-2
    .row.mb-4
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/17.svg')})`}")
            .tarjeta-flip__contenido.p-4
              img.mb-3(src='@/assets/curso/tema3/31.svg', alt='').imagenpeq.imgcenter
              p.mb-0.text-center Parque Nacional del Chicamocha (PANACHI) Aratoca, Santander.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/18.svg')})`}")
            .tarjeta-flip__contenido.p-4
              img.mb-3(src='@/assets/curso/tema3/31.svg', alt='').imagenpeq.imgcenter
              p.mb-0.text-center Parque Cerro del Santísimo Floridablanca, Santander.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/19.svg')})`}")
            .tarjeta-flip__contenido.p-4
              img.mb-3(src='@/assets/curso/tema3/31.svg', alt='').imagenpeq.imgcenter
              p.mb-0.text-center Parque Natural El Gallineral San Gil, Santander. 
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/20.svg')})`}")
            .tarjeta-flip__contenido.p-4
              img.mb-3(src='@/assets/curso/tema3/31.svg', alt='').imagenpeq.imgcenter
              p.mb-0.text-center Embalse de Topocoro Santander (Girón, Zapatoca, Betulia, entre otros municipios).
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.mt-4
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/21.svg')})`}")
            .tarjeta-flip__contenido.p-4
              img.mb-3(src='@/assets/curso/tema3/31.svg', alt='').imagenpeq.imgcenter
              p.mb-0.text-center Parque del Café Montenegro, Quindío.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.mt-4
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/22.svg')})`}")
            .tarjeta-flip__contenido.p-4
              img.mb-3(src='@/assets/curso/tema3/31.svg', alt='').imagenpeq.imgcenter
              p.mb-0.text-center Museo del Oro Bogotá, Cundinamarca.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.mt-4
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/23.svg')})`}")
            .tarjeta-flip__contenido.p-4
              img.mb-3(src='@/assets/curso/tema3/31.svg', alt='').imagenpeq.imgcenter
              p.mb-0.text-center La Piedra del Peñol Guatapé, Antioquia. 
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.mt-4
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/24.svg')})`}")
            .tarjeta-flip__contenido.p-4
              img.mb-3(src='@/assets/curso/tema3/31.svg', alt='').imagenpeq.imgcenter
              p.mb-0.text-center Castillo de San Felipe de Barajas Cartagena de Indias, Bolívar.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.mt-4
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/25.svg')})`}")
            .tarjeta-flip__contenido.p-4
              img.mb-3(src='@/assets/curso/tema3/31.svg', alt='').imagenpeq.imgcenter
              p.mb-0.text-center Restaurante El Cielo Bogotá (Chapinero). 
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.mt-4
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/26.svg')})`}")
            .tarjeta-flip__contenido.p-4
              img.mb-3(src='@/assets/curso/tema3/31.svg', alt='').imagenpeq.imgcenter
              p.mb-0.text-center Parque Arqueológico de San Agustín – San Agustín, Huila.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.mt-4
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/27.svg')})`}")
            .tarjeta-flip__contenido.p-4
              img.mb-3(src='@/assets/curso/tema3/31.svg', alt='').imagenpeq.imgcenter
              p.mb-0.text-center Carnaval de Barranquilla Atlántico.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.mt-4
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/28.svg')})`}")
            .tarjeta-flip__contenido.p-4
              img.mb-3(src='@/assets/curso/tema3/31.svg', alt='').imagenpeq.imgcenter
              p.mb-0.text-center Comunidad indígena Wayuu Riohacha, La Guajira
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.mt-4
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/29.svg')})`}")
            .tarjeta-flip__contenido.p-4
              img.mb-3(src='@/assets/curso/tema3/31.svg', alt='').imagenpeq.imgcenter
              p.mb-0.text-center Lago de Tarapoto Puerto Nariño, Amazonas.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.mt-4
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/30.svg')})`}")
            .tarjeta-flip__contenido.p-4
              img.mb-3(src='@/assets/curso/tema3/31.svg', alt='').imagenpeq.imgcenter
              p.mb-0.text-center Bioparque Los Ocarros Villavicencio, Meta.
    .mb-5
    .tarjeta.acordeoncolor.p-4.mb-0
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema3/32.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2.blu MARAVILLAS DE COLOMBIA Mejores Lugares para Visitar en Colombia
              p.mb-0 Para fortalecer el tema anteriormente abordado, se invita a consultar el siguiente video.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=iyteoh7jreA" target="_blank")
                span Ir al sitio
                i.fas.fa-circle-play
    separador

    #t_3_1.titulo-segundo.color-acento-contenido.mb-5
      h2 3.1 Capacidad de carga turística y límites de cambio aceptable
    
    .row.justify-content-center
      .col-lg-8
        p.mb-2 La capacidad de carga turística se refiere al nivel de uso que puede soportar un atractivo turístico en un periodo determinado, en función de la afluencia de visitantes, sin comprometer la sostenibilidad ambiental, el patrimonio natural y cultural, ni afectar negativamente a la calidad de vida de la comunidad receptora. Este concepto no se limita al aprovechamiento físico del atractivo, sino que implica el establecimiento de límites máximos de uso basados en criterios técnicos, sociales, ambientales y de infraestructura.
        p.mb-4 Los factores que determinan la capacidad de carga incluyen:
      .col-lg-4.col-md-10
        img(src='@/assets/curso/tema3/33.png', alt='')
    .mb-4
    .row.justify-content-center
      .col-7
        ul.lista-ul--color
          li.licolor.p-1
            .d-flex.align-items-center.gap-3 
              img(src='@/assets/curso/tema3/35.svg', alt='').imagenpeq
              | Disponibilidad de recursos hídricos: tanto para la población local como para la actividad turística.
          li.licolor.p-1
            .d-flex.align-items-center.gap-3 
              img(src='@/assets/curso/tema3/36.svg', alt='').imagenpeq
              | Acceso a servicios públicos esenciales: como saneamiento básico, energía y recolección de residuos.
          li.licolor.p-1
            .d-flex.align-items-center.gap-3 
              img(src='@/assets/curso/tema3/37.svg', alt='').imagenpeq
              | Riesgo de impactos ambientales: como la degradación de ecosistemas, pérdida de biodiversidad o contaminación.
          li.licolor.p-1
            .d-flex.align-items-center.gap-3 
              img(src='@/assets/curso/tema3/38.svg', alt='').imagenpeq
              | Riesgo de impactos sociales y económicos: tales como desplazamientos de comunidades locales, aumento del costo de vida o alteraciones en las dinámicas culturales.
          li.licolor.p-1
            .d-flex.align-items-center.gap-3 
              img(src='@/assets/curso/tema3/39.svg', alt='').imagenpeq
              | Necesidad de preservar y proteger el atractivo turístico: garantizando su conservación a largo plazo.
          li.licolor.p-1
            .d-flex.align-items-center.gap-3 
              img(src='@/assets/curso/tema3/40.svg', alt='').imagenpeq
              | Nivel de satisfacción del visitante: que debe mantenerse sin comprometer la sostenibilidad del destino.
          li.licolor.p-1
            .d-flex.align-items-center.gap-3 
              img(src='@/assets/curso/tema3/41.svg', alt='').imagenpeq
              | Capacidad de la infraestructura turística: alojamiento, transporte, accesos y servicios para atender la demanda sin sobrecargar el entorno.
      .col-3
        img(src='@/assets/curso/tema3/34.png', alt='').imagelista
    .mb-5
    .row
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/42.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La autoridad competente establecerá la capacidad de carga, según el tipo de atractivo turístico, en concordancia con los lineamientos del Ministerio de Comercio, Industria y Turismo. En el caso de atractivos turísticos ubicados dentro de áreas protegidas del Sistema Nacional de Áreas Protegidas (SINAP), la capacidad de carga será determinada por la respectiva autoridad ambiental, en armonía con las disposiciones del Ministerio de Ambiente y Desarrollo Sostenible. Cualquier impacto derivado de la actividad turística deberá ser moderado, mitigado, compensado o corregido, mediante la implementación de medidas de manejo, conforme a la normativa ambiental vigente.
    .mb-5
    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/tema1/4.svg")
      h3.ps-3.pe-4.mb-0 Límites de Cambio Aceptable (LCA) 
    .mb-4
    .row.justify-content-center
      .col-lg-8
        p.mb-2 Los Límites de Cambio Aceptable constituyen una metodología de planificación, gestión y monitoreo, aplicada para establecer umbrales medibles respecto a los cambios inducidos por la actividad turística sobre las condiciones ambientales, sociales y culturales del atractivo. Esta herramienta permite evaluar la presión ejercida por el turismo y anticipar acciones que preserven la integridad del destino, incluyendo aquellas relacionadas con los efectos del cambio climático.
        p.mb-4.cajon.color-acento-contenido.p-4.mt-3 El objetivo de esta metodología es definir niveles tolerables de alteración, de modo que los cambios no superen lo que el entorno puede absorber sin perder su valor como destino turístico. A través del seguimiento de estos límites, se facilita una gestión adaptativa, orientada a garantizar la sostenibilidad y viabilidad del atractivo a largo plazo.
      .col-lg-4
        img(src='@/assets/curso/tema3/43.png', alt='').imageheight
    .mb-4
    .row.justify-content-center
      .col-3
        img(src='@/assets/curso/tema3/44.png', alt='').imagelista
      .col-9 
        p.mb-2 El Ministerio de Comercio, Industria y Turismo será el encargado de reglamentar la aplicación de esta metodología para su integración en la planificación y administración de los atractivos turísticos. En el caso de aquellos ubicados en áreas culturales o naturales protegidas, dicha reglamentación será expedida de manera conjunta con las autoridades competentes, conforme a sus respectivas jurisdicciones y competencias.
    separador

    #t_3_2.titulo-segundo.color-acento-contenido.mb-5
      h2 3.2 Normativa de sostenibilidad turística 
    
    .row.justify-content-center
      .col-lg-8
        p.mb-2 Las directrices para el desarrollo sostenible del turismo y las prácticas de gestión sostenible son aplicables a todas las formas de turismo y a todos los tipos de destinos, incluidos tanto el turismo de masas como los diversos segmentos especializados (turismo rural, de naturaleza, cultural, de negocios, entre otros). Los principios de sostenibilidad abarcan las dimensiones ambiental, económica y sociocultural, y su correcta implementación requiere un equilibrio adecuado entre estos tres componentes para asegurar la viabilidad y sostenibilidad del sector a largo plazo.
        p.mb-4 De acuerdo con las orientaciones internacionales en materia de sostenibilidad, el turismo sostenible debe:
      .col-lg-4.col-md-10
        img(src='@/assets/curso/tema3/45.png', alt='').mt-1
    .mb-4
    .row
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5.mb-5.tarjeta1
          .tarjeta-numerada__numero
            .h2 a
          p.text-center Utilizar de manera óptima los recursos naturales, que constituyen la base del desarrollo turístico, procurando la conservación de la biodiversidad, el mantenimiento de los procesos ecológicos esenciales y la protección del entorno.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.tarjeta1
          .tarjeta-numerada__numero
            .h2 b
          p.text-center Respetar la autenticidad sociocultural de las comunidades anfitrionas, preservando su patrimonio cultural y arquitectónico, sus valores tradicionales, y fomentando el respeto, la comprensión y el intercambio intercultural.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 c
          p.text-center Garantizar la viabilidad económica del turismo a largo plazo, generando beneficios socioeconómicos equitativamente distribuidos entre todos los actores, en especial para las comunidades locales. Esto incluye la generación de empleo digno, ingresos sostenibles, acceso a servicios básicos y la contribución a la reducción de la pobreza.
    .mb-4
    .row
      .col-lg-1
        img(src='@/assets/curso/tema3/46.svg', alt='').mt-1
      .col-lg-11
        p.mb-2 El desarrollo turístico sostenible debe entenderse como un proceso de interacción equilibrada entre el uso responsable de los recursos naturales y culturales, la mejora de la calidad de vida de las comunidades locales y el éxito económico del sector, contribuyendo además al desarrollo integral del país. La sostenibilidad turística no solo responde a las exigencias actuales del mercado, sino que se configura como una condición esencial de competitividad presente y futura (CST, 1997).
    .mb-4
    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/tema1/4.svg")
      h3.ps-3.pe-4.mb-0 Sostenibilidad como modelo de desarrollo
    .mb-5
    .row.justify-content-center
      .col-lg-4
        img(src='@/assets/curso/tema3/47.png', alt='').imageheight
      .col-lg-8
        p.mb-2 La sostenibilidad plantea la necesidad de satisfacer las necesidades actuales de la sociedad sin comprometer la capacidad de las generaciones futuras para satisfacer las suyas. En este sentido, el desarrollo del país no debe basarse en la explotación excesiva de los recursos naturales, culturales o sociales, con el fin de responder a las demandas inmediatas de alimentación, vivienda, salud o empleo, ya que estos recursos constituyen la base esencial para el bienestar de las generaciones venideras.
        p.mb-4.p-4.mt-3.cajon-color-adicional-4.imagediv El turismo, como sector estratégico, debe alinearse con este modelo de desarrollo, implementando políticas que prioricen la conservación, la inclusión social y la eficiencia económica dentro de un marco de respeto por el entorno y las comunidades.
    .mb-5
    .row
      .cajon.cajon-color-adicional-2.col-4.imagehide.p-4
        p En el marco de estos principios, el Ministerio de Comercio, Industria y Turismo ha liderado la conformación de la Unidad Sectorial de Normalización en Turismo Sostenible, orientada a la creación y adopción de normas técnicas que regulen y promuevan prácticas sostenibles, tanto en destinos turísticos como en los prestadores de servicios turísticos.
      .col-3.p-2
        img(src='@/assets/curso/tema3/48.png', alt='').imagehide.imageheight2
      .col-5.p-2
        .d-flex.align-items-center.gap-3.mb-3
            img(src='@/assets/curso/tema3/49.svg', alt='').imagenpeq.imagehide
        p La misión principal de esta unidad es formular, normalizar y difundir lineamientos técnicos de sostenibilidad, que orienten la planificación, gestión y evaluación del turismo en Colombia. Estas normas buscan fortalecer la gobernanza, la eficiencia operativa, la responsabilidad ambiental y la equidad social en todos los niveles del sistema turístico nacional.
    .mb-4
    .tarjeta.acordeoncolor.p-4.mb-0
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2.blu Destinos turístico. Área turística. Requisitos de sostenibilidad
              p.mb-0 Para fortalecer el tema anteriormente abordado, se invita a consultar el siguiente enlace.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.mincit.gov.co/prensa/noticias/documentos-noticias/norma-tecnica-sectorial-de-turismo-sostenible-nts.aspx#:~:text=La%20norma%20NTS%2DTS%20001,xxx%20de%20xxx%20de%202022.&text=Esta%20norma%20espec%C3%ADfica%20los%20requisitos,un%20destino%20o%20%C3%A1rea%20tur%C3%ADstica" target="_blank")
                span Ir al sitio
                i.fas.fa-globe
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
