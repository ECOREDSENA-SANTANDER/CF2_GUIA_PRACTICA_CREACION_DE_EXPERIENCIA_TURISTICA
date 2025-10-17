<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Herramientas de geolocalización
    
      .row.justify-content-center.align-items-center.mb-lg-5.mb-4
        .col-lg-8
          p.mb-3 La geolocalización es un proceso tecnológico que permite determinar la ubicación precisa de un objeto, persona o dispositivo electrónico en tiempo real. Esta técnica se basa en el uso de diversas tecnologías de posicionamiento, entre las que se destacan el Sistema de Posicionamiento Global (GPS, por sus siglas en inglés), redes wifi, #[em bluetooth], torres de telefonía móvil y sensores integrados en dispositivos inteligentes.
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-2.d-none.d-lg-block
              img.img-t.img-a(src='@/assets/curso/tema4/2.svg', alt='')
            .col-lg-10.ps-lg-0
              p.mb-0 La información de ubicación recopilada es interpretada y representada visualmente a través de mapas digitales interactivos, permitiendo que la posición del usuario o del objeto rastreado sea visualizada en tiempo real. Esta funcionalidad es ampliamente utilizada en sectores como el transporte, la logística, el comercio, el #[em marketing] digital y, de manera significativa, en el turismo.
          .bg9.p-4.mb-lg-0.mb-4
            p.mb-0 En el contexto turístico, la geolocalización permite identificar la ubicación de los visitantes para ofrecerles contenido personalizado según su posición geográfica. Esto incluye desde recomendaciones de lugares de interés, restaurantes o alojamientos, hasta rutas optimizadas, información cultural contextual, alertas sobre eventos y servicios de emergencia. La experiencia del turista se ve enriquecida al contar con orientación precisa y sugerencias adaptadas a su entorno inmediato.
        .col-lg-4
          img.d-none.d-lg-block(src='@/assets/curso/tema4/1.png', alt='')
      
  
      .titulo4.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema5/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Funcionamiento de la geolocalización
  
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema4/3.png')})`}"
        ).color-acento-contenido
        .bloque-texto-g__texto.p-4
          p.mb-0.mt-3 El funcionamiento de la geolocalización se basa principalmente en los satélites GPS, los cuales orbitan alrededor de la Tierra y transmiten señales a los dispositivos receptores. A través de la triangulación de señales emitidas por al menos tres satélites, es posible calcular con gran exactitud la ubicación del dispositivo, con un margen de error de pocos metros.
          br
          p.mb-0 Además, los dispositivos móviles integran otras tecnologías complementarias como sensores inerciales, redes wifi disponibles, #[em bluetooth] (para posicionamiento en interiores) y datos de redes celulares, que mejoran la precisión y permiten el uso continúo incluso en zonas con cobertura satelital limitada.
  
  
      .titulo4.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema5/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Aplicaciones cotidianas de la geolocalización
  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7
          p.mb-4 De forma constante, las personas utilizan herramientas de geolocalización, por ejemplo, cuando desean desplazarse a un lugar desconocido y consultan aplicaciones de mapas, sistemas GPS, redes sociales o sitios web especializados en recomendaciones geográficas.
          p.mb-0 Asimismo, al capturar fotografías con un teléfono inteligente, la función de geolocalización suele registrar las coordenadas del lugar en el que se tomó la imagen, integrando estos datos en el archivo digital como metainformación. Esto permite, posteriormente, organizar y compartir contenido basado en ubicaciones específicas.
        .col-lg-5
          img.d-none.d-lg-block(src='@/assets/curso/tema4/4.png', alt='')
     

      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-6.mb-lg-0.mb-4
          .bg7.p-lg-5.p-4.h-100
            .row.justify-content-center.mb-3
              .col-3
                figure
                  img.mb-3.d-none.d-lg-block(src='@/assets/curso/tema4/7.svg', alt='Texto que describa la imagen')
            p #[strong a) Transformación de los mapas y herramientas digitales]
            p El uso de mapas ha evolucionado considerablemente gracias a la geolocalización. Los mapas ya no son herramientas estáticas y difíciles de interpretar, sino plataformas dinámicas, interactivas y adaptadas a las necesidades del usuario. Un claro ejemplo de esta transformación es Google Maps, que ofrece mapas en dos y tres dimensiones, permite calcular rutas, visualizar las calles a nivel de piso mediante Street View y acceder a información en tiempo real sobre tráfico, transporte público y establecimientos cercanos.
            p Estas herramientas no solo permiten orientarse, sino que facilitan la planificación de viajes, la toma de decisiones informadas y una experiencia más autónoma para el visitante.
        .col-lg-6
          .bg8.p-lg-5.p-4.h-100
            .row.justify-content-center.mb-3
              .col-3
                figure
                  img.mb-3.d-none.d-lg-block(src='@/assets/curso/tema4/8.svg', alt='Texto que describa la imagen')
            p #[strong b) Geolocalización y redes sociales]
            p La dimensión social de la geolocalización ha cobrado gran relevancia en la era digital. Los usuarios comparten constantemente su ubicación a través de redes sociales, asociándola con experiencias, opiniones o recomendaciones sobre lugares visitados, lo que influye directamente en la reputación en línea de destinos, comercios y servicios turísticos.
            p Una de las plataformas pioneras en esta integración es Foursquare, donde los usuarios pueden hacer #[em check-in] en establecimientos, comentar su experiencia y calificar el servicio. Este tipo de interacción social convierte la ubicación en un elemento de #[em marketing] georreferenciado, que potencia el posicionamiento de destinos y negocios en entornos digitales altamente competitivos.
      
      .tarjeta.color-adicional-1.p-4.mb-5(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema3/32.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2 La geolocalización
                p.mb-0 Para fortalecer el tema anteriormente abordado, se invita a consultar el siguiente video.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=QaL26dne1Xs" target="_blank")
                  span Ir al sitio
                  i.fas.fa-circle-play

  
      .titulo4.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema5/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Tipos de herramientas de geolocalización
  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6.col-md-10.col-10
          img.mb-lg-0.mb-4(src='@/assets/curso/tema4/5.png', alt='')
        .col-lg-6
          p.mb-0 Las herramientas de geolocalización comprenden una variedad de aplicaciones y dispositivos tecnológicos diseñados para identificar, registrar y visualizar la ubicación de personas, objetos o lugares en tiempo real. Estas herramientas pueden clasificarse según su tecnología base (GPS, wifi, #[em bluetooth], redes móviles), su función (navegación, monitoreo, análisis) o su entorno de uso (urbano, rural, interior, exterior). Entre las más conocidas se encuentran Google Maps, Waze, OpenStreetMap, Foursquare, GPS Essentials, entre otras, que permiten desde trazar rutas hasta compartir ubicaciones con otros usuarios o recibir recomendaciones georreferenciadas. Estas soluciones son ampliamente utilizadas en turismo, logística, seguridad, transporte, comercio y actividades recreativas. 
 
      .tarjeta.color-adicional-1.p-4.mb-4(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema3/32.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2.blu Tecnología de localización y geolocalización en móviles
                p.mb-0 Se invita a consultar el siguiente video, donde se explica la importancia de la localización y geolocalización en dispositivos móviles, resaltando cómo estas herramientas influyen en la vida cotidiana y en múltiples sectores:
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=YWzUcQYpSLM" target="_blank")
                  span Ir al sitio
                  i.fas.fa-circle-play
   
      p.mb-4 Como ejemplo ilustrativo, se invita a consultar el siguiente video, el cual permite comprender de manera visual y práctica el funcionamiento, la utilidad y las aplicaciones de las herramientas de geolocalización en diversos contextos, especialmente en el ámbito turístico y tecnológico.

      .tarjeta.color-adicional-1.p-4.mb-5(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema3/32.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2.blu Herramientas de geolocalización
                p.mb-0 Se invita a ir al siguiente video, donde se podrá apreciar los tipos de herramientas de geolocalización.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=_40v8FSqYUw" target="_blank")
                  span Ir al sitio
                  i.fas.fa-circle-play
  
  
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-11
          .row.justify-content-center.align-items-center
            .col-lg-3.sob.d-none.d-lg-block(data-aos="fade-left")
              img.img-t(src="@/assets/curso/tema4/6.svg", alt="alt")
            .col-lg-10(data-aos="fade-right").ps-lg-0
              .bg9.p-4
                .row.justify-content-center
                  .col-lg-10.ps-lg-4(data-aos="fade-left")
                    p.mb-lg-4.my-lg-4 La geolocalización se ha consolidado como una herramienta esencial en el desarrollo del turismo moderno, al facilitar la orientación, la personalización de servicios y la toma de decisiones informadas por parte de los visitantes. Su integración en plataformas digitales, redes sociales y sistemas de información turística permite una interacción más dinámica entre el turista y el destino, fortaleciendo la experiencia del usuario y promoviendo una gestión más eficiente por parte de los prestadores de servicios turísticos.
  
  
  
  


</template>

<script>
export default {
  name: 'Tema4',
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
