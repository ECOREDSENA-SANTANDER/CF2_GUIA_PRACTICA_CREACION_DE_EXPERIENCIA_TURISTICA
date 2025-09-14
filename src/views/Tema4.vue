<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Herramientas de geolocalización
    .row.justify-content-center
      .col-lg-8
        p.mb-4 La geolocalización es un proceso tecnológico que permite determinar la ubicación precisa de un objeto, persona o dispositivo electrónico en tiempo real. Esta técnica se basa en el uso de diversas tecnologías de posicionamiento, entre las que se destacan el Sistema de Posicionamiento Global (GPS), redes Wi-Fi, Bluetooth, torres de telefonía móvil y sensores integrados en dispositivos inteligentes
        .d-flex.align-items-center.gap-3.mb-3
          img(src='@/assets/curso/tema4/2.svg', alt='').imgpeqt3.imagehide
          p.mb-2 La información de ubicación recopilada es interpretada y representada visualmente a través de mapas digitales interactivos, permitiendo que la posición del usuario o del objeto rastreado sea visualizada en tiempo real. Esta funcionalidad es ampliamente utilizada en sectores como el transporte, la logística, el comercio, el marketing digital y, de manera significativa, en el turismo.
        p.mb-4.cajon.color-acento-contenido.p-4 En el contexto turístico, la geolocalización permite identificar la ubicación de los visitantes para ofrecerles contenido personalizado según su posición geográfica. Esto incluye desde recomendaciones de lugares de interés, restaurantes o alojamientos, hasta rutas optimizadas, información cultural contextual, alertas sobre eventos y servicios de emergencia. La experiencia del turista se ve enriquecida al contar con orientación precisa y sugerencias adaptadas a su entorno inmediato.
      .col-lg-4.col-md-10
        img(src='@/assets/curso/tema4/1.png', alt='')
    .mb-2
    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/tema1/4.svg")
      h3.ps-3.pe-4.mb-0 Funcionamiento de la geolocalización
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/3.png')})`}"
      ).color-acento-contenido
      .bloque-texto-g__texto.p-4
        p.mb-0.mt-3 El funcionamiento de la geolocalización se basa principalmente en los satélites GPS, los cuales orbitan alrededor de la Tierra y transmiten señales a los dispositivos receptores. A través de la triangulación de señales emitidas por al menos tres satélites, es posible calcular con gran exactitud la ubicación del dispositivo, con un margen de error de pocos metros.
        br
        p.mb-0 Además, los dispositivos móviles integran otras tecnologías complementarias como sensores inerciales, redes Wi-Fi disponibles, Bluetooth (para posicionamiento en interiores) y datos de redes celulares, que mejoran la precisión y permiten el uso continúo incluso en zonas con cobertura satelital limitada.
    .mb-4
    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/tema1/4.svg")
      h3.ps-3.pe-4.mb-0 Aplicaciones cotidianas de la geolocalización
    .row.justify-content-center
      .col-lg-8
        p.mb-4 De forma constante, las personas utilizan herramientas de geolocalización, por ejemplo, cuando desean desplazarse a un lugar desconocido y consultan aplicaciones de mapas, sistemas GPS, redes sociales o sitios web especializados en recomendaciones geográficas.
        p.mb-2 Asimismo, al capturar fotografías con un teléfono inteligente, la función de geolocalización suele registrar las coordenadas del lugar en el que se tomó la imagen, integrando estos datos en el archivo digital como metainformación. Esto permite, posteriormente, organizar y compartir contenido basado en ubicaciones específicas.
      .col-lg-4.col-md-10
        img(src='@/assets/curso/tema4/4.png', alt='')
    .mb-5
    .row
      .col-6
        .tarjeta--boton.color-adicional-1.cajon-color-adicional-6.p-4
          .row.justify-content-center.mb-3
            .col-3
              figure
                img(src='@/assets/curso/tema3/2.svg', alt='Texto que describa la imagen')
          p #[strong a) Transformación de los mapas y herramientas digitales]
          p El uso de mapas ha evolucionado considerablemente gracias a la geolocalización. Los mapas ya no son herramientas estáticas y difíciles de interpretar, sino plataformas dinámicas, interactivas y adaptadas a las necesidades del usuario. Un claro ejemplo de esta transformación es Google Maps, que ofrece mapas en dos y tres dimensiones, permite calcular rutas, visualizar las calles a nivel de piso mediante Street View y acceder a información en tiempo real sobre tráfico, transporte público y establecimientos cercanos.
          p Estas herramientas no solo permiten orientarse, sino que facilitan la planificación de viajes, la toma de decisiones informadas y una experiencia más autónoma para el visitante.
      .col-6
        .tarjeta--boton.color-adicional-1.cajon-color-adicional-6.p-4
          .row.justify-content-center.mb-3
            .col-3
              figure
                img(src='@/assets/curso/tema3/3.svg', alt='Texto que describa la imagen')
          p #[strong b) Geolocalización y redes sociales]
          p La dimensión social de la geolocalización ha cobrado gran relevancia en la era digital. Los usuarios comparten constantemente su ubicación a través de redes sociales, asociándola con experiencias, opiniones o recomendaciones sobre lugares visitados, lo que influye directamente en la reputación en línea de destinos, comercios y servicios turísticos.
          p Una de las plataformas pioneras en esta integración es Foursquare, donde los usuarios pueden hacer check-in en establecimientos, comentar su experiencia y calificar el servicio. Este tipo de interacción social convierte la ubicación en un elemento de marketing georreferenciado, que potencia el posicionamiento de destinos y negocios en entornos digitales altamente competitivos.
    .mb-5
    .tarjeta.acordeoncolor.p-4.mb-0
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema3/32.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2.blu La geolocalización
              p.mb-0 Para fortalecer el tema anteriormente abordado, se invita a consultar el siguiente video.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=QaL26dne1Xs" target="_blank")
                span Ir al sitio
                i.fas.fa-circle-play
    .mb-5
    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/tema1/4.svg")
      h3.ps-3.pe-4.mb-0 Tipos de herramientas de geolocalización
    .row.justify-content-center
      .col-lg-4.col-md-10
        img(src='@/assets/curso/tema4/5.png', alt='').mt-2
      .col-lg-8
        p.mb-4 Las herramientas de geolocalización comprenden una variedad de aplicaciones y dispositivos tecnológicos diseñados para identificar, registrar y visualizar la ubicación de personas, objetos o lugares en tiempo real. Estas herramientas pueden clasificarse según su tecnología base (GPS, Wi-Fi, Bluetooth, redes móviles), su función (navegación, monitoreo, análisis) o su entorno de uso (urbano, rural, interior, exterior). Entre las más conocidas se encuentran Google Maps, Waze, OpenStreetMap, Foursquare, GPS Essentials, entre otras, que permiten desde trazar rutas hasta compartir ubicaciones con otros usuarios o recibir recomendaciones georreferenciadas. Estas soluciones son ampliamente utilizadas en turismo, logística, seguridad, transporte, comercio y actividades recreativas. 
    .mb-5
    .tarjeta.acordeoncolor.p-4.mb-0
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema3/32.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2.blu Tecnología de localización y geolocalización en móviles
              p.mb-0 Se invita a ir al siguiente video, donde se podrá apreciar los tipos de herramientas de geolocalización.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=YWzUcQYpSLM" target="_blank")
                span Ir al sitio
                i.fas.fa-circle-play
    .mb-4
    p.mb-4 Como ejemplo ilustrativo, se invita a consultar el siguiente video, el cual permite comprender de manera visual y práctica el funcionamiento, la utilidad y las aplicaciones de las herramientas de geolocalización en diversos contextos, especialmente en el ámbito turístico y tecnológico.
    .mb-4
    .tarjeta.acordeoncolor.p-4.mb-0
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema3/32.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2.blu Herramientas de geolocalización
              p.mb-0 Se invita a ir al siguiente video, donde se podrá apreciar los tipos de herramientas de geolocalización
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=_40v8FSqYUw" target="_blank")
                span Ir al sitio
                i.fas.fa-circle-play
    .mb-5
    .row.justify-content-center
      .col-1
      .col-lg-10
        .d-flex.align-items-center.gap-3.mb-3
          img(src='@/assets/curso/tema4/6.svg', alt='')
          p.mb-4.cajon.color-acento-contenido.p-4 La geolocalización se ha consolidado como una herramienta esencial en el desarrollo del turismo moderno, al facilitar la orientación, la personalización de servicios y la toma de decisiones informadas por parte de los visitantes. Su integración en plataformas digitales, redes sociales y sistemas de información turística permite una interacción más dinámica entre el turista y el destino, fortaleciendo la experiencia del usuario y promoviendo una gestión más eficiente por parte de los prestadores de servicios turísticos.
      .col-1
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
