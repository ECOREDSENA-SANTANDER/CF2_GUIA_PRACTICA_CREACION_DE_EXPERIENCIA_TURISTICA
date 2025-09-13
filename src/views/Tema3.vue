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
          p.text-center.titulotj Sitios  naturales
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
          | Ejemplos representativos de atractivos turísticos en Colombia 
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
