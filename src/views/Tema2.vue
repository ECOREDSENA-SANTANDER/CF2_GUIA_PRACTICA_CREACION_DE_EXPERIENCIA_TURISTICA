<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Destino turístico

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-1
          img.d-none.d-lg-block(src='@/assets/curso/tema2/1.svg', alt='')
        .col-lg-11
          p.mb-0 Un destino turístico es un espacio geográfico donde se concentran recursos naturales, culturales y servicios que permiten el desarrollo de actividades turísticas. Puede contar o no con delimitaciones administrativas específicas, y constituye una unidad fundamental de análisis dentro del sector turístico. En este espacio, el visitante puede pernoctar, acceder a una oferta integrada de productos, servicios y experiencias a lo largo de la cadena de valor del turismo, tales como alojamiento, gastronomía, transporte, actividades recreativas, culturales o de naturaleza.
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4
          .bg1.p-3.mb-lg-0.mb-4
            p.mb-0.mx-lg-1 El destino reúne diversos actores como autoridades locales, prestadores de servicios turísticos, comunidades anfitrionas y organizaciones privadas que interactúan para ofrecer una experiencia cohesionada al visitante. Además, puede conformar redes con otros destinos cercanos, articulándose como parte de un sistema turístico más amplio o una región turística.
        .col-lg-3
          img.d-none.d-lg-block(src='@/assets/curso/tema2/2.png', alt='')
        .col-lg-5
          img.img-t.mb-3.d-none.d-lg-block(src='@/assets/curso/tema2/3.svg', alt='')
          p.mb-0 Más allá de su dimensión física, un destino posee también una dimensión simbólica e inmaterial, expresada en su identidad, imagen de marca y posicionamiento en el mercado, elementos que influyen directamente en su capacidad de atraer turistas y en su competitividad. La percepción que genera un destino a través de su reputación, autenticidad, accesibilidad, sostenibilidad y calidad de servicios es determinante para su éxito y sostenibilidad a largo plazo.
  
      .tarjeta.color-adicional-1.p-4.mb-5(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema1/5.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.mb-0 Para profundizar en el estudio de los destinos turísticos, su concepto y estructura, se recomienda consultar el siguiente enlace:
              .col-sm-auto
                a.boton.color-acento-botones(href="https://openaccess.uoc.edu/server/api/core/bitstreams/62d50fc4-2bd9-469c-b569-aeec162c501c/content" target="_blank")
                  span Ir al sitio
                  i.fas.fa-globe
  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6
          p.mb-4.titulo-sexto.color-acento-contenido #[strong Figura 1.] Santuario de Nuestra Señora del Rosario de las Lajas. Ipiales – Nariño 
          img.mb-3(src='@/assets/curso/tema2/4.png', alt='Santuario de Las Lajas, iglesia neogótica construida sobre un puente en un cañón rodeado de vegetación, en Nariño, Colombia.')
          figcaption.mb-lg-0.mb-4 #[b Tomado:] https://aventureros360.com.co/blog/conocer-el-santuario-de-nuestra-senora-de-las-lajas-un-viaje-a-la-joya-arquitectonica-de-colombia/
        .col-lg-6
          p.mb-4.titulo-sexto.color-acento-contenido #[strong Figura 2.] Plaza Mayor de Villa de Leyva
          img.mb-3(src='@/assets/curso/tema2/5.png', alt='Plaza principal de Villa de Leyva al anochecer, vista desde un pórtico colonial iluminado.')
          figcaption
            p.mb-3.my-1 #[b Tomado:] https://colombia.travel/es/villa-de-leyva/conoce-la-plaza-mayor-de-villa-de-leyva
     
      
      .titulo.mb-5.mt-lg-3(data-aos="fade-right")
        img(:src="require('@/assets/curso/tema5/sub.svg')" alt='Imagen decorativa')
        h3.mb-0 Facilidades turísticas 
  
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-1
          img.d-none.d-lg-block(src='@/assets/curso/tema2/6.svg', alt='')
        .col-lg-11
          p.mb-0 La experiencia turística comprende el involucramiento emocional de los turistas o visitantes con los productos y servicios que se ofrecen en un destino. Esta experiencia está estrechamente vinculada con la infraestructura disponible, por lo que resulta fundamental promover y fortalecer su mejora continua mediante la adopción de estándares de calidad. En este contexto, la implementación de facilidades turísticas se convierte en una labor esencial para el desarrollo competitivo del sector.
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7
          .bg9.p-4.mb-4.mb-lg-0
            p.mb-0 Se entiende por facilidad turística todo elemento espacial (generalmente de carácter arquitectónico) que complementa y apoya la actividad turística. Su objetivo es dotar al destino de infraestructura social o física, así como de equipamiento adecuado (mobiliario, señalética, elementos informativos, entre otros), a lo largo de las distintas fases del desarrollo turístico: creación, perfeccionamiento y consolidación. Estas facilidades contribuyen a mejorar la experiencia del visitante, reducir el impacto ambiental y elevar la calidad de los servicios, posicionando al destino como un producto competitivo (Ministerio de Turismo MINTUR, 2014).
        .col-lg-5.col-md-10.col-10
          img(src='@/assets/curso/tema2/7.png', alt='').imagehide
      
      p.mb-4 Tipos de facilidades turísticas:
      
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-3
          img.d-none.d-lg-block(src='@/assets/curso/tema2/22.png', alt='').imagehide
        .col-lg-9
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.col-xl-11.m-auto(titulo="a) Facilidades de observación y vigilancia")
              .row.justify-content-center.align-items-center
                .col-lg-12
                  ul.lista-ul
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Miradores.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Torres de avistamiento de aves.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Torres de vigilancia (salvavidas).
            .row.col-xl-11.m-auto(titulo="b) Facilidades de recorrido y descanso")
              .row.justify-content-center.align-items-center
                .col-lg-12
                  ul.lista-ul
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Senderos (incluye puentes peatonales de luces menores).
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Campamentos turísticos.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Refugios.
            .row.col-xl-11.m-auto(titulo="c) Facilidades de servicio y equipamiento")
              .row.justify-content-center.align-items-center
                .col-lg-12
                  ul.lista-ul
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Baterías sanitarias.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Módulos de uso múltiple: duchas, vestidores, áreas de descanso, lavandería, bodega.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Estacionamientos.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Mobiliario turístico, compuesto por:
                  .row.justify-content-center
                    .col-lg-6
                      p.mb-2 1) Estaciones de sombra y descanso.
                      p.mb-2 2) Bolardos.
                      p.mb-2 3) Bancas.
                      p.mb-2 4) Mesas.
                    .col-lg-6
                      p.mb-2 5) Basureros.
                      p.mb-2 6) Señalética turística.
                      p.mb-2 7) Señalización informativa.
            .row.col-xl-11.m-auto(titulo="d) Facilidades de apoyo a la gestión turística")
              .row.justify-content-center.align-items-center
                .col-lg-12
                  ul.lista-ul
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0  Centros de recepción y equipamiento para visitantes.
            .row.col-xl-11.m-auto(titulo="e) Condicionantes para la implementación de facilidades turísticas")
              .row.justify-content-center.align-items-center
                .col-lg-12
                  p.mb-4 Existen diversos factores propios del destino que influyen en el diseño, ubicación e implementación de las facilidades turísticas, entre los cuales se destacan:
                  ul.lista-ul
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[strong Clima:] temperatura, precipitaciones y humedad.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[strong Terreno:] topografía, pendientes, calidad del suelo.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[strong Cielo:] nivel de nubosidad y exposición solar.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[strong Vistas:] visibilidad y calidad del paisaje.
                  p.mb-0 Estos factores, además de tener un impacto en la infraestructura, también contribuyen a definir la identidad cultural y las costumbres locales, elementos fundamentales para una adecuada planificación turística.

      separador
      #t_2_1.titulo-segundo.color-acento-contenido.mb-5
        h2 2.1 Seguridad turística 
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7
          p.mb-lg-0.mb-4 La seguridad turística se refiere a la protección integral de la vida, la salud y la integridad física, psicológica y económica de los visitantes, prestadores de servicios y comunidades anfitrionas. Este concepto incluye un conjunto de medidas orientadas a minimizar riesgos durante el desarrollo de actividades turísticas, especialmente aquellas que, como en el turismo de aventura, implican un riesgo real o percibido. Según la Norma Técnica Colombiana NTC 6725 de 2023, este tipo de actividades, de carácter recreativo o deportivo con fines turísticos y comerciales, pueden comprometer la seguridad de las personas y el entorno si no se gestionan adecuadamente.
          .bg2.p-4
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.mb-lg-0.mb-4
                img.img-t.img-a(src='@/assets/curso/tema2/23.svg', alt='')
              .col-lg-10
                p.mb-0 De acuerdo con la Política Pública de Turismo de Naturaleza (2012), la seguridad turística comprende también medidas preventivas y de gestión que buscan preservar la integridad física, emocional y patrimonial de los turistas. Su implementación efectiva no solo mejora la experiencia del visitante, sino que también fortalece la competitividad y sostenibilidad del destino.
        .col-lg-5
          img.d-none.d-lg-block(src='@/assets/curso/tema2/8.png', alt='')

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          LineaTiempoD.color-acento-boton.activo
            .row(numero="a)"  titulo="Medidas comunes para garantizar la seguridad turística")
              .col-md-12.mb-0
                ul.lista-ul.mt-lg-0.mt-md-0.mt-4.mb-4
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Presencia visible de fuerzas de seguridad en áreas turísticas.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Iluminación adecuada en espacios públicos.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Señalización clara y comprensible para visitantes.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Supervisión constante en playas y zonas recreativas.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Controles de acceso en sitios turísticos relevantes.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Disponibilidad de servicios médicos de emergencia.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Campañas de concienciación sobre seguridad turística.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Prevención de robos, estafas y delitos comunes contra turistas.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Supervisión especial en actividades de riesgo (aventura, deportes extremos).
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Promoción de números de emergencia visible y accesible para los visitantes.
                p.mb-3 La seguridad turística está estrechamente ligada a la calidad del producto turístico, e involucra distintos aspectos como seguridad vial, alimentaria, jurídica y en los servicios turísticos. Su presencia genera confianza, mejora la reputación del destino y contribuye a la fidelización de los turistas.
            .row(numero="b)" titulo="Aplicación de la seguridad en la experiencia turística")
              .col-md-12.mb-0
                  p.mb-4 Durante la estadía en un destino, se protege al visitante a través de:
                  ul.lista-ul.mt-lg-0.mt-md-0.mt-4
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Seguridad en el acceso vial hacia el destino, garantizando rutas seguras y señalizadas.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Seguridad en la visita a los atractivos turísticos, incluyendo accesos adecuados, horarios recomendados y condiciones climáticas aptas.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Seguridad en la oferta de servicios turísticos, asegurando que los prestadores estén legalmente constituidos, cuenten con Registro Nacional de Turismo (RNT), Registro Único Tributario (RUT), y estén inscritos en Cámara de Comercio.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Seguridad en establecimientos de alojamiento y gastronomía, donde se deben cumplir las normas de higiene, protección al menor, atención adecuada y medidas de prevención sanitaria.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Seguridad en el transporte turístico, con vehículos certificados y condiciones adecuadas para la protección de los pasajeros.
            .row(numero="c)" titulo="Beneficios de implementar seguridad turística")
              .col-md-12.mb-0
                ul.lista-ul.mt-lg-0.mt-md-0.mt-4
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Prevención de incidentes que puedan poner en riesgo la vida o la salud de los visitantes.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Protección de pertenencias y recursos económicos del turista.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Aumento de la confianza y atracción de más visitantes hacia destinos seguros.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Mejora en la calidad de la experiencia turística.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Proyección de una imagen positiva del destino y de los operadores turísticos.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Estímulo al desarrollo económico local.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Atracción de inversión nacional e internacional.
            .row(numero="d)" titulo="Tipos de seguridad turística")
              .col-md-12.mb-0
                ul.lista-ul.mt-lg-0.mt-md-0.mt-4
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[strong Seguridad médica:] garantiza la disponibilidad de atención médica oportuna mediante hospitales, clínicas, centros de salud, personal capacitado y servicios de emergencia (ambulancias, respuesta rápida).
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[strong Seguridad contra el crimen:] previene delitos como robos, estafas o vandalismo mediante patrullas, cámaras de vigilancia y presencia policial en zonas clave.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[strong Seguridad en el transporte:] asegura que los medios de transporte cumplan con los estándares técnicos, legales y operativos que minimicen los riesgos de accidentes.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[strong Seguridad vial:] incluye mantenimiento de vías, señalización adecuada, control del tráfico y normas de tránsito para proteger a conductores y peatones.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[strong Seguridad jurídica:] garantiza que los derechos legales de los turistas sean respetados, y que tengan acceso a mecanismos de denuncia y asesoría legal en caso necesario.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[strong Seguridad alimentaria:] se refiere al cumplimiento de normas de higiene, manipulación y conservación de alimentos y bebidas, evitando enfermedades de origen alimentario.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[strong Seguridad en actividades de ocio:] abarca medidas de prevención y control en actividades recreativas o deportivas, mediante el uso de equipos adecuados, supervisión profesional y protocolos de seguridad específicos.
        .col-lg-4
          img.d-none.d-lg-block(src='@/assets/curso/tema2/9.png', alt='')

  
      .titulo.mb-5.mt-lg-3(data-aos="fade-right")
        img(:src="require('@/assets/curso/tema5/sub.svg')" alt='Imagen decorativa')
        h3.mb-0 Enfoque internacional 
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          p.mb-0 La Organización Mundial del Turismo (OMT) promueve el reconocimiento del derecho fundamental de toda persona a viajar con seguridad. Esta perspectiva posiciona al turismo como una herramienta clave para la construcción de paz, el entendimiento intercultural y el desarrollo sostenible entre naciones.
          .row
            .col-lg-12
              .bloque-texto-d.color-secundario.p-4
                .bloque-texto-d__texto.mb-2
                  i.fas.fa-quote-left
                  h4 Toda persona tiene derecho a circular libremente y a elegir su residencia en el territorio de un Estado. Toda persona tiene derecho a salir  de cualquier país, incluso del propio, y a regresar a su país. 
                  i.fas.fa-quote-right
                .bloque-texto-d__autor 
                  p.mb-0 (ONU, 1948).
              
        .col-lg-4
          img.d-none.d-lg-block(src='@/assets/curso/tema2/11.png', alt='').imagehide
      
  
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-5
          .bg1.p-4.mb-lg-0.mb-4
            p.mb-0 La Carta de Turismo y el Código del Turista de 1985 establece que es deber de las autoridades públicas garantizar la protección integral de los turistas y visitantes, así como la seguridad de sus bienes. Reconociendo la particular vulnerabilidad de los turistas extranjeros, se señala la importancia de prestar especial atención a sus necesidades específicas. Para ello, se promueve la creación de mecanismos adecuados de información, prevención, protección, seguros y asistencia, orientados a salvaguardar su integridad durante la estancia en el destino.
        .col-lg-3.col-md-9.col-10
          img.mb-lg-0.mb-4(src='@/assets/curso/tema2/12.svg', alt='')
        .col-lg-4
          p.mb-0 Asimismo, la carta hace un llamado a los turistas y visitantes a respetar las leyes, costumbres y valores de las comunidades receptoras. Se invita a evitar cualquier acto que pueda considerarse ilegal, ofensivo o perjudicial para la población local o el entorno, promoviendo así un comportamiento responsable. También se establece la prohibición de participar en actividades como el tráfico de drogas, armas, antigüedades, especies protegidas, o el uso y transporte de sustancias peligrosas o prohibidas por las reglamentaciones nacionales.
      
      p.mb-0 En conjunto, este instrumento normativo internacional busca consolidar un turismo seguro, respetuoso y sostenible, que proteja tanto al visitante como al destino, y que fomente relaciones armónicas y éticas entre los diferentes actores del sector.
  
  
      separador
      #t_2_2.titulo-segundo.color-acento-contenido.mb-5
        h2 2.2 Reglamentación legal  
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.col-md-9.col-10
          img.mb-lg-0.mb-4(src='@/assets/curso/tema2/13.png', alt='')
        .col-lg-7
          p.mb-3 La reglamentación legal de un destino turístico se refiere al conjunto de normas, leyes y disposiciones que regulan las actividades tanto de los prestadores de servicios turísticos como de los turistas, con el fin de garantizar la calidad, sostenibilidad, seguridad y legalidad de la oferta turística. Estas normas abarcan diversos aspectos fundamentales, entre ellos: el registro y control de prestadores de servicios, la protección del patrimonio cultural y natural, la promoción del turismo sostenible, la prevención del tráfico ilegal de fauna, flora y bienes culturales, y la garantía de condiciones seguras y accesibles para todos los visitantes.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-10
              p.mb-0 Este marco legal busca fomentar un turismo responsable y ordenado, que contribuya al desarrollo social, económico y ambiental del territorio, promoviendo además la conservación del patrimonio y el respeto por las comunidades receptoras.
            .col-lg-2
              img.d-none.d-lg-block(src='@/assets/curso/tema2/24.svg', alt='')
          
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          p Normativa vigente que regula y protege la actividad turística en Colombia:
          ul.lista-ul
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[strong Ley 2068 de 2020:] Ley General de Turismo, la cual establece los principios y lineamientos generales de la actividad turística en el país.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[strong Ley 2068 de 2020, artículo 52:] enfatiza el papel del turismo en el desarrollo social, económico y cultural.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[strong Ley 99 de 1993, artículo 3:] introduce el principio de desarrollo sostenible como eje transversal de las actividades económicas, incluido el turismo.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[strong Decreto 1836 de 2021:] regula el Registro Nacional de Turismo (RNT), obligatorio para los prestadores de servicios turísticos.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0  #[strong Decreto 1379 de 2021:] regula el ejercicio del guionaje turístico en Colombia, estableciendo requisitos y competencias para los guías.
        .col-lg-2
          img.d-none.d-lg-block(src='@/assets/curso/tema2/14.png', alt='')
        .col-lg-5
          ul.lista-ul
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[strong Normas Técnicas Colombianas (NTC):] establecen estándares de calidad para distintos servicios turísticos, como alojamiento, gastronomía, guianza, entre otros.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[strong Resolución 0958 de 2010:] define criterios para la calidad turística en diferentes modalidades del sector.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[strong Ley 2111 de 2021:] modifica el Código Penal en relación con los delitos ambientales, incluyendo afectaciones al entorno por actividades turísticas irresponsables.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[strong Ley 1185 de 2008:] modifica la Ley General de Cultura (Ley 397 de 1997) e incluye medidas para prevenir el tráfico ilícito del patrimonio cultural.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[strong Decreto 190 de 2022, capítulo 8, secciones I, II y III:] define disposiciones relacionadas con la identificación, promoción y protección de atractivos turísticos en el ordenamiento territorial.

      p.mb-5 Este conjunto normativo permite estructurar un turismo más transparente, organizado, competitivo y sostenible, asegurando el cumplimiento de estándares nacionales e internacionales en beneficio de los visitantes, las comunidades locales y el entorno.
      
      
      .tarjeta.color-adicional-1.p-4.mb-5(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema1/5.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2 Ley 2068 de 2020.
                p.mb-0 Para fortalecer el tema anteriormente abordado, se invita a consultar el siguiente enlace.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=172558#:~:text=La%20actividad%20tur%C3%ADstica%2C%20conforme%20al,la%20identidad%20cultural%20de%20las" target="_blank")
                  span Ir al sitio
                  i.fas.fa-globe
      
      
      .titulo.mb-5.mt-lg-3(data-aos="fade-right")
        img(:src="require('@/assets/curso/tema5/sub.svg')" alt='Imagen decorativa')
        h3.mb-0 Aspectos clave de la reglamentación legal en destinos turísticos
      
      p.mb-5 La reglamentación legal del turismo abarca un conjunto de medidas orientadas a regular la actividad turística, garantizar su calidad, sostenibilidad y seguridad, y asegurar el cumplimiento de los deberes tanto de los prestadores de servicios como de los visitantes. Entre sus principales componentes se encuentran:
      
      .row.fondo2.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-down")
        .col-lg-12
  
          .tarjetaf.p-4.mb-0
            SlyderA(tipo="b")(data-aos="zoom-in-left")
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-7
                  p #[strong Registro Nacional de Turismo (RNT)]
                  p Todos los prestadores de servicios turísticos como  establecimientos de alojamiento, gastronomía, transporte turístico, agencias de viajes y operadores turísticos deben estar inscritos en el RNT. Este registro garantiza la identificación, legalidad y cumplimiento de los requisitos mínimos establecidos por la normativa nacional.
                .col-lg-4
                  img.d-none.d-lg-block(src='@/assets/curso/tema2/15.png', alt='')
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-7
                  p #[strong Obligaciones de los prestadores de servicios turísticos]
                  p Los prestadores deben operar conforme a las actividades declaradas en el Registro Único Tributario (RUT) y la Cámara de Comercio, cumpliendo con la normativa del sector, la legislación tributaria y las obligaciones con la seguridad social. Además, deben respetar la diversidad cultural, adoptar buenas prácticas y brindar información veraz, clara y actualizada a los turistas.
                .col-lg-4
                  img.d-none.d-lg-block(src='@/assets/curso/tema2/16.png', alt='')
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-7
                  p #[strong Protección de los atractivos turísticos]
                  p Los territorios deben contar con normas específicas para la conservación, uso responsable y promoción de sus recursos turísticos, incluyendo la gestión sostenible de áreas protegidas y la prevención de afectaciones ambientales o culturales.
                .col-lg-4
                  img.d-none.d-lg-block(src='@/assets/curso/tema2/17.png', alt='')
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-7
                  p #[strong Calidad turística]
                  p Se establecen estándares de calidad con el fin de asegurar que los servicios prestados cumplan con los criterios exigidos en cuanto a infraestructura, atención al cliente, seguridad y sostenibilidad, fortaleciendo la experiencia del visitante.
                .col-lg-4
                  img.d-none.d-lg-block(src='@/assets/curso/tema2/18.png', alt='')
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-7
                  p #[strong Normas territoriales específicas]
                  p Pueden existir regulaciones particulares según el destino o jurisdicción, orientadas a regular el ingreso, uso y disfrute de atractivos turísticos, parques naturales o áreas de especial protección.
                .col-lg-4
                  img.d-none.d-lg-block(src='@/assets/curso/tema2/19.png', alt='')
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-7
                  p #[strong Control y sanciones]
                  p Entidades como el Ministerio de Comercio, Industria y Turismo (MinCIT), la Superintendencia de Industria y Comercio, las Autoridades Turísticas Territoriales, la Policía de Turismo y otras instituciones competentes tienen la facultad de inspeccionar, vigilar y sancionar a los actores del sector que incumplan la normativa vigente.
                .col-lg-4
                  img.d-none.d-lg-block(src='@/assets/curso/tema2/20.png', alt='')

      
      .titulo.mb-5.mt-lg-3(data-aos="fade-right")
        img(:src="require('@/assets/curso/tema5/sub.svg')" alt='Imagen decorativa')
        h3.mb-0 Importancia de la reglamentación legal en el turismo
  
      
      p.mb-4 Una adecuada reglamentación legal contribuye significativamente a:
          
      .row.fondo3.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-down")
        .col-lg-12
  
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-9
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
                .row.col-xl-11.m-auto(titulo="Garantizar la calidad de los servicios turísticos")
                  .row.justify-content-center.align-items-center
                    .col-lg-12 
                      p.mb-0 Mejora la experiencia del visitante y fortalece la reputación  del destino.
                .row.col-xl-11.m-auto(titulo="Proteger el patrimonio cultural y natural")
                  .row.justify-content-center.align-items-center
                    .col-lg-12 
                      p.mb-0 Asegura la conservación de los atractivos para las generaciones futuras.
                .row.col-xl-11.m-auto(titulo="Fomentar el turismo sostenible")
                  .row.justify-content-center.align-items-center
                    .col-lg-12 
                      p.mb-0 Minimiza los impactos negativos sobre el medio ambiente y las comunidades receptoras.
                .row.col-xl-11.m-auto(titulo="Impulsar el desarrollo económico")
                  .row.justify-content-center.align-items-center
                    .col-lg-12 
                      p.mb-0 El turismo, como motor de crecimiento, debe gestionarse bajo principios de responsabilidad y equidad.
                .row.col-xl-11.m-auto(titulo="Velar por la seguridad de los turistas")
                  .row.justify-content-center.align-items-center
                    .col-lg-12 
                      p.mb-0 Incluye la protección física, la prevención de fraudes, y la disponibilidad de asistencia en situaciones de emergencia.
            .col-lg-3
              img.d-none.d-lg-block(src='@/assets/curso/tema2/21.png', alt='')
  
      .tarjeta.color-adicional-1.p-4.mb-0(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema1/5.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2 ABECÉ DE LA LEY GENERAL DE TURISMO LEY 2068 DE 2020
                p.mb-0 Para fortalecer el tema anteriormente abordado, se invita a consultar el siguiente enlace.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://colombiasigueadelante.mincit.gov.co/colombia_sigue_adelante/media/archivos/pdf/ABECE-febrero-2021-Ley-de-Turismo.pdf" target="_blank")
                  span Ir al sitio
                  i.fas.fa-globe

</template>

<script>
export default {
  name: 'Tema2',
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
