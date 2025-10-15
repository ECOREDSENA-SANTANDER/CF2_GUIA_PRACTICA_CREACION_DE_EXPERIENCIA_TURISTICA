<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Ruta turística
      .row.justify-content-center.align-items-center.mb-lg-5.mb-4
        .col-lg-4
          img.d-none.d-lg-block(src='@/assets/curso/tema6/1.png', alt='')
        .col-lg-8
          p.mb-3 La palabra ruta proviene del latín #[em rupta] y posteriormente del francés #[em route]. Hace referencia al recorrido, dirección, camino o itinerario que se sigue con un propósito determinado. En el contexto turístico, una ruta integra una serie de atractivos, servicios turísticos y complementarios.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-9.col-md-9
              p.mb-lg-0.mb-4 Una ruta turística es un recorrido planificado que permite visitar y conocer atractivos culturales o naturales ubicados en zonas con potencial o desarrollo turístico, dotadas de facilidades y comodidades adecuadas para recibir visitantes. Estas rutas están compuestas por un conjunto de puntos organizados en forma de red dentro de una región determinada y, al estar debidamente señalizadas, despiertan un interés especial. Generalmente, se estructuran en torno a una temática que las identifica y les da nombre, como por ejemplo: Ruta del Café o Ruta del Vino.
            .col-lg-3.col-md-3.col-9
              img(src='@/assets/curso/tema6/2.svg', alt='')
   
   
      .row.justify-content-center
        .col-lg-8
          .bg9.p-4.mb-lg-0.mb-5
            p.mb-4.my-lg-4 La ruta debe brindar a quienes la recorren una experiencia placentera, con actividades alineadas a los elementos distintivos del territorio. Además, debe proyectar una imagen integral construida a partir de la complementariedad entre los sitios visitados, los servicios prestados y el lenguaje comunicacional utilizado.
            p.mb-4 En el proceso de implementación de una ruta turística, es fundamental establecer de manera objetiva las condiciones necesarias para su funcionamiento. Esto incluye identificar a los actores locales que potencialmente puedan integrarse a la ruta, de acuerdo con las actividades que desarrollen en su entorno.
        .col-lg-4.col-md-9.col-10
            img(src='@/assets/curso/tema6/3.png', alt='')
      
      .mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2.d-none.d-lg-block
              img.img-t.mb-3(src='@/assets/curso/tema6/4.svg', alt='')
            .col-lg-10.ps-lg-0.mb-3
              p.mb-0 Los participantes de una ruta turística deben cumplir con ciertos criterios que abarcan desde el interés turístico de la actividad realizada hasta la calidad de los servicios ofrecidos y la infraestructura disponible. Estos estándares deben establecerse en común acuerdo, tomando en cuenta las expectativas de la demanda turística.
            p.mb-4.mb-lg-0 Una ruta turística se compone de atractivos locales, elementos patrimoniales, comunidades y facilidades organizadas en forma de red, debidamente señalizadas y reconocidas como de interés turístico.
        .col-lg-7
          .cajon.cajon-color-adicional-10.p-4
           p.mb-3 Entre los elementos que caracterizan una ruta se destacan:
           ul.lista-ul
            li.d-flex.mb-0
              i.fas.fa-circle-check1
              p.mb-0 Una producción, actividad o temática particular que la diferencia de otras rutas.
            li.d-flex.mb-0
              i.fas.fa-circle-check1
              p.mb-0 Un itinerario desarrollado con base en la red vial u otros medios de comunicación.
            li.d-flex.mb-0
              i.fas.fa-circle-check1
              p.mb-0 Una organización local encargada de brindar información sobre la ruta, con participación activa de personas vinculadas a la actividad.
            li.d-flex.mb-0
              i.fas.fa-circle-check1
              p.mb-0 Un sistema de promoción asociado.
            li.d-flex.mb-0
              i.fas.fa-circle-check1
              p.mb-0 Un sistema de señalización que facilite el recorrido.
            li.d-flex.mb-0
              i.fas.fa-circle-check1
              p.mb-0 Un mapa con información explícita sobre el itinerario y sus componentes.
  
  
      .titulo6.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema5/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Tipos de rutas turísticas
  
      .mb-4
      .row
        .col-lg-8
          LineaTiempoD.color-acento-boton.activo
            .row(numero="a)" titulo="Ruta gastronómica").p-3
              .col-md-12.mb-4.mb-md-0
                p.mb-0 Es un itinerario organizado que permite conocer y disfrutar de procesos productivos agropecuarios o industriales, así como degustar la gastronomía local. Estas rutas se diseñan en torno a un producto gastronómico emblemático, al cual usualmente se debe su nombre. Ofrecen una experiencia sensorial vinculada con la cocina, la producción agroindustrial, las actividades rurales, el contacto con la naturaleza y las expresiones culturales de la región. Entre las actividades experienciales que pueden incluirse se encuentran: degustaciones de alimentos y bebidas, visitas a productores locales, clases de cocina tradicional, participación en festivales gastronómicos y recorridos por mercados típicos.
            .row(numero="b)" titulo="Ruta histórica").p-3
              .col-md-12.mb-4.mb-md-0
                p.mb-0 Forma parte de los productos de turismo cultural y se basa en la interpretación del patrimonio cultural tangible e intangible. Estas rutas se enfocan en personajes ilustres, artistas, eventos históricos o monumentos representativos del patrimonio construido. Usualmente se encuentran señalizadas en el terreno o en los sitios de interés. Las actividades experienciales incluyen: visitas guiadas a monumentos y museos, recorridos por zonas arqueológicas, talleres de arte tradicional, entre otros.
            .row(numero="c)" titulo="Rutas temáticas").p-3
              .col-md-12.mb-4.mb-md-0
                p.mb-0 Son recorridos que conectan puntos relacionados entre sí, ya sea por su valor histórico, artístico, social o ambiental. Suelen estar diseñadas para recorrerse a pie y están complementadas con señalización interpretativa. Estas rutas suelen vincularse con otros servicios como centros de visitantes, zonas recreativas o áreas de #[em camping].            
        .col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/tema6/5.png', alt='')
      .mb-5
  
      .titulo6.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema5/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Tipos de rutas temáticas
      
      .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4
        .col-lg-3.col-md-6.mb-4
          .overflow-hidden.h-100.bg13.p-4
            .row.justify-content-center.mb-4
              .col-12
                figure
                  img(src='@/assets/curso/tema6/6.png', alt='Texto que describa la imagen')
            p #[b a) Ruta temática autoguiada:] se realiza de forma autónoma, mediante el uso de materiales como folletos, audioguías o señalización (flechas, estacas pintadas, símbolos) que orientan e interpretan el recorrido.
        .col-lg-3.col-md-6.mb-4
          .overflow-hidden.h-100.bg13.p-4
            .row.justify-content-center.mb-4
              .col-12
                figure
                  img(src='@/assets/curso/tema6/7.png', alt='Texto que describa la imagen')
            p #[b b) Ruta temática guiada:] consiste en un recorrido grupal acompañado por un guía especializado. Este adapta la interpretación a las necesidades del grupo, incorpora eventos espontáneos y facilita la interacción con los participantes (Ríos y Rubilar, 2006).
        .col-lg-3.col-md-6.mb-4
          .overflow-hidden.h-100.bg13.p-4
            .row.justify-content-center.mb-4
              .col-12
                figure
                  img(src='@/assets/curso/tema6/8.png', alt='Texto que describa la imagen')
            p #[b c) Ruta agroturística:] permite conocer e interactuar con procesos agrícolas, ganaderos y agroindustriales, así como con la vida rural en general. Promueve el desarrollo sostenible, la valorización del campo y la diversificación económica de las comunidades rurales. Las actividades experienciales pueden incluir la siembra, cosecha, ordeño, visitas a huertas, cultivos y participación en labores cotidianas del entorno rural.
        .col-lg-3.col-md-6.mb-4
          .overflow-hidden.h-100.bg13.p-4
            .row.justify-content-center.mb-4
              .col-12
                figure
                  img(src='@/assets/curso/tema6/9.png', alt='Texto que describa la imagen')
            p #[b d) Ruta natural:] se diseña para recorrer espacios de alto valor ecológico o paisajístico, como parques naturales, bosques, montañas, senderos, ríos o humedales. Su propósito es fomentar el disfrute responsable del entorno, la educación ambiental y la conservación. Las actividades asociadas incluyen senderismo, avistamiento de aves, fotografía de naturaleza, ecoturismo, entre otras.
      
  
      .tarjeta.color-adicional-1.p-4.mb-0(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema3/32.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2.blu Cuatro nuevas rutas turísticas para la temporada de vacaciones
                p.mb-0 Para fortalecer el tema anteriormente abordado, se invita a consultar el siguiente video.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=sRs2FSEgRZU" target="_blank")
                  span Ir al sitio
                  i.fas.fa-circle-play
      
      separador
      #t_6_1.titulo-segundo.color-acento-contenido.mb-5
        h2 6.1 Técnicas de diseño
  
      .row.justify-content-center.cajon
        .col-lg-4.col-md-9
          img.mb-lg-0.mb-4(src='@/assets/curso/tema6/10.png', alt='')
        .col-lg-8
          p.mb-3 El diseño de una ruta turística debe concebirse como la creación de un producto turístico integral, o de varios productos interrelacionados, que ofrezcan una experiencia coherente, atractiva, de calidad y accesible para el turista. Para diseñar una ruta temática alineada con el turismo de intereses especializados, es fundamental:
          ul.lista-ul
            li.d-flex.mb-0
              i.fas.fa-circle-check1
              p.mb-0 Conocer las tipologías de turismo que pueden desarrollarse en el territorio, con base en los recursos disponibles y las particularidades locales.
            li.d-flex.mb-0
              i.fas.fa-circle-check1
              p.mb-0 Analizar las necesidades, preferencias y tendencias de la demanda turística, así como los perfiles de los mercados emisores.
            li.d-flex.mb-0
              i.fas.fa-circle-check1
              p.mb-0 Identificar las oportunidades y fortalezas de la oferta turística existente, evaluando su estado actual y su potencial de desarrollo.
      .mb-5
  
      .titulo4.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema5/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Fases del diseño de una ruta turística
  
      p.mb-4 El proceso de diseño se puede estructurar en dos grandes fases:
      
      .ia.mb-5(data-aos="fade-right")
        .d-flex.align-items-center.mb-1
          img(src='@/assets/curso/tema3/ia.png', alt='')
          h3.mb-0.mx-2 Fase 1. Estructuración de la ruta
  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          LineaTiempoD.color-acento-boton.activo
            .row(numero="a)" titulo="Inventario turístico").p-3
              .col-md-12.mb-4.mb-md-0
                p.mb-0 Realizar un levantamiento detallado de los atractivos turísticos de la zona (naturales, culturales, históricos, gastronómicos, etc.).
            .row(numero="b)" titulo="Clasificación y selección de atractivos").p-3
              .col-md-12.mb-4.mb-md-0
                p.mb-0 Categorizar los atractivos e identificar cuáles serán incluidos en la ruta según su relevancia, accesibilidad, estado de conservación y potencial turístico.
            .row(numero="c)" titulo="Diagnóstico de la infraestructura").p-3
              .col-md-12.mb-4.mb-md-0
                p.mb-0 Analizar las condiciones del territorio, identificando fortalezas y debilidades en aspectos como: seguridad, vías de acceso, señalización, servicios públicos, conectividad, entre otros.
            .row(numero="d)" titulo="Selección de la(s) ruta(s)").p-3
              .col-md-12.mb-4.mb-md-0
                p.mb-0 Definir las rutas viables en función de los atractivos seleccionados, las condiciones de la infraestructura y el perfil del turista objetivo.
            .row(numero="e)" titulo="Determinación de puntos clave").p-3
              .col-md-12.mb-4.mb-md-0
                ul.lista-ul
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Punto de salida.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Puntos de parada con estancia.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Punto de llegada.
            .row(numero="f)" titulo="Evaluación de rutas alternativas").p-3
              .col-md-12.mb-4.mb-md-0
                p.mb-0 Considerar variantes posibles en el recorrido, especialmente entre los puntos intermedios.
            .row(numero="g)" titulo="Recorridos internos").p-3
              .col-md-12.mb-4.mb-md-0
                p.mb-0 Identificar trayectos cortos o circuitos dentro de los puntos de parada que puedan enriquecer la experiencia turística.
        .col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/tema6/11.png', alt='').mt-2
  
  
      .ia.mb-5(data-aos="fade-right")
        .d-flex.align-items-center.mb-1
          img(src='@/assets/curso/tema3/ia.png', alt='')
          h3.mb-0.mx-2 Fase 2. Selección de servicios turísticos a incluir
  
      p.mb-4 Una ruta debe considerar la articulación de servicios esenciales que garanticen una experiencia completa y satisfactoria:
      
      .row.justify-content-center.align-items-center.mb-lg-5.mb-4
        .col-lg-5.col-md-9.col-10
          img.mb-lg-0.mb-4(src='@/assets/curso/tema6/12.png', alt='')
        .col-lg-7
          img.img-t.mb-3.d-none.d-lg-block(src='@/assets/curso/tema6/13.svg', alt='')
          ul.lista-ul
            li.d-flex.mb-0
              i.fas.fa-circle-check1
              p.mb-0 Transporte (interno y de llegada / salida).
            li.d-flex.mb-0
              i.fas.fa-circle-check1
              p.mb-0 Alojamiento.
            li.d-flex.mb-0
              i.fas.fa-circle-check1
              p.mb-0 Alimentación.
            li.d-flex.mb-0
              i.fas.fa-circle-check1
              p.mb-0 Guianza turística y servicios de interpretación.
            li.d-flex.mb-0
              i.fas.fa-circle-check1
              p.mb-0 Actividades recreativas y culturales.
            li.d-flex.mb-0
              i.fas.fa-circle-check1
              p.mb-0 Otros servicios complementarios (seguros, asistencia médica, tiendas de recuerdos, entre otros).
      
      
      .tarjeta.color-adicional-1.p-4.mb-0(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema1/5.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2.blu Relatos Turísticos: Propuestas para incorporar el patrimonio cultural y natural en las empresas turísticas en los servicios y rutas turísticas de Arica y Camarones.
                p.mb-0 Para fortalecer el tema anteriormente abordado, se invita a consultar el siguiente enlace.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.ucentral.cl/ucentral/site/docs/20200110/20200110142007/relatos_turisticos_arica.pdf" target="_blank")
                  span Ir al sitio
                  i.fas.fa-globe

</template>

<script>
export default {
  name: 'Tema6',
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
