<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Destino turístico
    .row
      .col-1.col-md-1.imagehide.p-3
        img(src='@/assets/curso/tema2/1.svg', alt='').imagehide
      .col-11.col-md-11.p-2
        p Un destino turístico es un espacio geográfico donde se concentran recursos naturales, culturales y servicios que permiten el desarrollo de actividades turísticas. Puede contar o no con delimitaciones administrativas específicas, y constituye una unidad fundamental de análisis dentro del sector turístico. En este espacio, el visitante puede pernoctar, acceder a una oferta integrada de productos, servicios y experiencias a lo largo de la cadena de valor del turismo, tales como alojamiento, gastronomía, transporte, actividades recreativas, culturales o de naturaleza.
    .row
      .cajon.cajon-color-adicional-2.col-4.imagehide.p-4
        p El destino reúne diversos actores como autoridades locales, prestadores de servicios turísticos, comunidades anfitrionas y organizaciones privadas que interactúan para ofrecer una experiencia cohesionada al visitante. Además, puede conformar redes con otros destinos cercanos, articulándose como parte de un sistema turístico más amplio o una región turística.
      .col-3.p-2
        img(src='@/assets/curso/tema2/2.png', alt='').imagehide
      .col-5.p-2
        .d-flex.align-items-center.gap-3.mb-3
            img(src='@/assets/curso/tema2/3.svg', alt='').imagenpeq.imagehide
        p Más allá de su dimensión física, un destino posee también una dimensión simbólica e inmaterial, expresada en su identidad, imagen de marca y posicionamiento en el mercado, elementos que influyen directamente en su capacidad de atraer turistas y en su competitividad. La percepción que genera un destino a través de su reputación, autenticidad, accesibilidad, sostenibilidad y calidad de servicios es determinante para su éxito y sostenibilidad a largo plazo.
    .mb-4
    .tarjeta.acordeoncolor.p-4.mb-0
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2.blu Roberto Boullón LAS ACTIVIDADES TURÍSTICAS Y RECREACIONALES el hombre como protagonista.
              p.mb-0 Para fortalecer el tema anteriormente abordado, se invita a consultar el siguiente enlace.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.academia.edu/40296889/R_oberto_r_Boull%C3%B3n_LAS_ACTIVIDADES_TUR%C3%8DSTICAS_Y_RECREACIONALES_El_hombre_como_protagonista" target="_blank")
                span Ir al sitio
                i.fas.fa-globe
    .mb-5
    .row.sistema
        .col-lg-6
          p.mb-4.titulo-sexto.color-acento-contenido #[strong Figura 1.] Santuario de Nuestra Señora del Rosario de las Lajas. Ipiales – Nariño.  
          img(src='@/assets/curso/tema2/4.png', alt='')
        .col-lg-6
          p.mb-4.titulo-sexto.color-acento-contenido #[strong Figura 2.] Plaza Mayor de Villa de Leyva.
          img(src='@/assets/curso/tema2/5.png', alt='')
    .mb-5
    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/tema1/4.svg")
      h3.ps-3.pe-4.mb-0 Facilidades turísticas 
    .row
      .col-1.col-md-1.imagehide.p-3
        img(src='@/assets/curso/tema2/6.svg', alt='').imagehide
      .col-11.col-md-11.p-2
        p La experiencia turística comprende el involucramiento emocional de los turistas o visitantes con los productos y servicios que se ofrecen en un destino. Esta experiencia está estrechamente vinculada con la infraestructura disponible, por lo que resulta fundamental promover y fortalecer su mejora continua mediante la adopción de estándares de calidad. En este contexto, la implementación de facilidades turísticas se convierte en una labor esencial para el desarrollo competitivo del sector.
    .row
      .cajon.cajon-color-adicional-3.col-7.imagehide.p-4
        p Se entiende por facilidad turística todo elemento espacial (generalmente de carácter arquitectónico) que complementa y apoya la actividad turística. Su objetivo es dotar al destino de infraestructura social o física, así como de equipamiento adecuado (mobiliario, señalética, elementos informativos, entre otros), a lo largo de las distintas fases del desarrollo turístico: creación, perfeccionamiento y consolidación. Estas facilidades contribuyen a mejorar la experiencia del visitante, reducir el impacto ambiental y elevar la calidad de los servicios, posicionando al destino como un producto competitivo (Ministerio de Turismo MINTUR, 2014).
      .col-5.p-2
        img(src='@/assets/curso/tema2/7.png', alt='').imagehide
    .mb-5
    .row.acordeon
      .col-lg-1
      .col-lg-10.col-md-12.col-sm-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="a) Facilidades de observación y vigilancia")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-0 Miradores.
                .mb-4
                p.mb-0 Torres de avistamiento de aves.
                .mb-4
                p.mb-0 Torres de vigilancia (salvavidas).
          .row.col-xl-11.m-auto(titulo="b) Facilidades de recorrido y descanso")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-0 
                  .mb-4
                p.mb-0 Senderos (incluye puentes peatonales de luces menores).
                .mb-4
                p.mb-0 Campamentos turísticos.
                .mb-4
                p.mb-0 Refugios.
          .row.col-xl-11.m-auto(titulo="c) Facilidades de servicio y equipamiento")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-0 Baterías sanitarias.
                .mb-4
                p.mb-0 Módulos de uso múltiple: duchas, vestidores, áreas de descanso, lavandería, bodega.
                .mb-4
                p.mb-0 Estacionamientos.
                .mb-4
                p.mb-0 Mobiliario turístico, compuesto por:
                .mb-4
                ol.lista-ol
                  li 
                    i.lista-ul__vineta
                    | 1) Estaciones de sombra y descanso.
                  li 
                    i.lista-ul__vineta
                    | 2) Bolardos.
                  li 
                    i.lista-ul__vineta
                    | 3) Bancas.
                  li 
                    i.lista-ul__vineta
                    | 4) Mesas.
                ol.lista-ol
                  li 
                    i.lista-ul__vineta
                    | 5) Basureros.
                  li 
                    i.lista-ul__vineta
                    | 6) Señalética turística.
                  li 
                    i.lista-ul__vineta
                    | 7) Señalización informativa.
          .row.col-xl-11.m-auto(titulo="d) Facilidades de apoyo a la gestión turística")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-0 Centros de recepción y equipamiento para visitantes.
          .row.col-xl-11.m-auto(titulo="e) Condicionantes para la implementación de facilidades turísticas")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-0 Existen diversos factores propios del destino que influyen en el diseño, ubicación e implementación de las facilidades turísticas, entre los cuales se destacan:
                .mb-4
                p.mb-0 #[strong Clima:] temperatura, precipitaciones y humedad.
                .mb-4
                p.mb-0 #[strong Terreno:] topografía, pendientes, calidad del suelo.
                .mb-4
                p.mb-0 #[strong Cielo:] nivel de nubosidad y exposición solar.
                .mb-4
                p.mb-0 #[strong Vistas:] visibilidad y calidad del paisaje.
                .mb-4
                p.mb-0 Estos factores, además de tener un impacto en la infraestructura, también contribuyen a definir la identidad cultural y las costumbres locales, elementos fundamentales para una adecuada planificación turística.
    .mb-5
    #t_1_1.titulo-segundo.color-acento-contenido.mb-5
      h2 1.1 Seguridad turística 
    
    .row
      .col-7
        p La seguridad turística es un componente esencial para el desarrollo sostenible del sector, ya que influye directamente en la percepción y satisfacción de los visitantes. Un entorno seguro no solo protege a los turistas, sino que también contribuye a la reputación y competitividad del destino. La seguridad turística abarca diversos aspectos, incluyendo la protección de los bienes y servicios turísticos, la prevención de riesgos y la gestión de emergencias.
        .cajon.cajon-color-adicional-4.p-4
          p Es fundamental que los destinos turísticos implementen estrategias integrales de seguridad que involucren a todos los actores del sector, desde las autoridades locales hasta los prestadores de servicios y las comunidades anfitrionas. Estas estrategias deben contemplar la capacitación del personal, la mejora de la infraestructura, la promoción de buenas prácticas y la colaboración con las fuerzas de seguridad pública.
      .col-5
        img(src='@/assets/curso/tema2/8.png', alt='').imagehide
    .mb-5
    .row
      .col-8
        LineaTiempoD.color-acento-contenido
          .row(numero="a)" titulo="Medidas comunes para garantizar la seguridad turística")
            .col-md-6.mb-4.mb-md-0
              p.text-small This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.      
          .row(numero="b)" titulo="Aplicación de la seguridad en la experiencia turística")
            .col-md-6.mb-4.mb-md-0
              p.text-small This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.  
          .row(numero="c)" titulo="Beneficios de implementar seguridad turística")
            .col-md-6.mb-4.mb-md-0
              p.text-small This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion. 
          .row(numero="d)" titulo="Tipos de seguridad turística")
            .col-md-6.mb-4.mb-md-0
              p.text-small This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion. 
      .col-4
        img(src='@/assets/curso/tema2/9.png', alt='').
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
