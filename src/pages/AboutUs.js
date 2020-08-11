// React - Libraries
import React from "react";
// Styles CSS
import "./styles/AboutUs.css";
// Components
import Layout from "../components/Layout";
// Images
import imageOne from "../imgs/about-us/one_AboutUs.jpg";
import imageTwo from "../imgs/about-us/two_AboutUs.jpg";
import imageThree from "../imgs/about-us/three_AboutUs.jpg";

const AboutUs = () => {
  return (
    <Layout className="container_AboutUs">
      {/* TEXTO PRINCIPAL */}
      <section className="preface_AboutUs">
        <h1 style={{ textAlign: 'center' }}>¿ Quieres conocer a Jesús ?</h1>
        <div>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
            como texto de relleno en documentos electrónicos, quedando
            esencialmente igual al original. Fue popularizado en los 60s con la
            creación de las hojas "Letraset", las cuales contenian pasajes de
            Lorem Ipsum, y más recientemente con software de autoedición, como
            por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
            Ipsum.
          </p>
          <img className="img_AboutUs" src={imageOne} />
        </div>
      </section>

      {/* TEXTO MISION */}
      <article className="mision_AboutUs">
        <div style={{ gridArea: "title_mision_AboutUs", textAlign: 'center' }}>
          <h1>Misión</h1>
          <h3>
            ¡Un gran compromiso con el gran mandamiento
            <br />
            y con la gran comisión, harán crecer nuestra gran iglesia!
            <br />
            <em>Mateo 22:37; 28:18.</em>
          </h3>
        </div>

        <div style={{ gridArea: "one_mision_AboutUs" }}>
          <h4>Ser verdaderos y espirituales adoradores en todo momento.</h4>
          <p>
            Cada uno de nosotros amaremos al señor con todo nuestro corazón, con
            toda nuestra mente, con toda nuestra alma y con todas nuestras
            fuerzas, así seremos adoradores en espíritu y verdad por el amor que
            le tenemos.
            <br />
            <em>Mateo 22:37-40; Juan 4:23-24.</em>
          </p>
        </div>

        <div style={{ gridArea: "one2_mision_AboutUs" }}>
          <h4>Ser ministros servidores a cada persona.</h4>
          <p>
            Cada uno de nostros amaremos a nuestro prójimo como a nosotros
            mismos, demostraremos el amor de Cristo, ministrando (sirviendo) en
            toda clase de necesidades espírituales, emocionales, relacionales y
            físicas.
            <br />
            <em>Lucas 10:35-37.</em>
          </p>
        </div>

        <div style={{ gridArea: "two_mision_AboutUs" }}>
          <h4>Ser y hacer discípulos en cualquier momento.</h4>
          <p>
            Cada uno de nosotros evangelizaremos sin prejuicios ni temores;
            comunicaremos con la vida y las palabras el mensaje de Jesúcristo.
            así, cumpliremos el propósito divino como parte de su iglesia en el
            mundo, hablaremos a cuanta persona sea posible de la venida de
            Cristo a la tierra, de su muerte en la cruz, de su ressurección y de
            su promesa de volver. Entregaremos el evangelio como un privilegio,
            no como carga u obligacion; pues el evangelio es poder de Dios, que
            sana el cáncer del pecado y Dios quiere que compartamos esa medicina
            poderosa con los que están enfermos.
            <br />
            <em>
              Mateo 28:18-20. Marcos 16:15-18. Lucas 24:47-49. Juan 20:21.<br />
              Hechos 1:8. 2 Timoteo 2:3-6. 2 Pedro 3:9.
            </em>
          </p>
        </div>

        <div style={{ gridArea: "three_mision_AboutUs" }}>
          <h4>Estar en comunión y armonía unos con otros.</h4>
          <p>
            Cada uno de nosotros sentirá el deseo de obedecer, empezando con el
            mandamiento santo del bautismo, identificandose así, con el cuerpo
            de Cristo y con la visión de la Iglesia Cristiana Asambleas de Dios
            Fuente de Vida Internacional. Cada uno de nosotros sentirá el deseo
            de pertenecer a la familia de Dios en amor.
            <br />
            <em>
              Mateo 24:31. 1 Tesalonisences 4:13-18. Juan 1:12. Romanos 8:15-17.
              Gálatas 3:26. Efesios 1:5; 2:19.
            </em>
          </p>
        </div>

        <div style={{ gridArea: "three2_mision_AboutUs" }}>
          <h4>Estar dispuesto en todo momento a enseñar.</h4>
          <p>
            Cada uno de nosotros mientras va en el camino de la vida , cumplirá
            el propósito para el que fue llamado: ganar, consolidar y enviar.
            ayudaremos a otros a parecerse más a Jesúcristo en sus pensamientos,
            sentimientos y acciones. Toda bajo la dirección del espíritu santo.
            <br />
            <em>Efesios 4:12-13.</em>
          </p>
        </div>
      </article>

      {/* TEXTO VISION */}
      <article className="vision_AboutUs">
        <h1>Visión</h1>
        <p>
          La visión de la Iglesia Cristiana Asambleas de Dios Fuente de Vida
          Internacional es lograr ganar, consolidar y enviar personas para que
          el reino de Dios se siga extendiendo en todo el mundo.
          <br />
          <br />
          La visión de esta iglesia es llegar a tener una membresía apróximada
          de 50.000 personas, construir un templo con capacidad para 12.500
          miembros, dotado con la más alta tecnología en sonido, seguridad e
          infraestructura, con 4 cultos dominicales, un culto mensual para
          jóvenes, mujeres, hombres, parejas y niños.
          <br />
          <br />
          <img className="img_AboutUs" src={imageTwo} />
          <br />
          <br />
          Además, una emisora y un canal de televisión, promoviendo congresos a
          nivel nacional e internacional. Se proyecta la apertura de iglesias
          hijas a nivel nacional e internacional siendo nuestra estrategía: los
          grupos familiares.
          <br />
          <br />
          En lo social se pretende contar con una ONG que contenga proyección
          para el desarrollo social, con gran impacto en la comunidad:
        </p>
        <ol>
          <li>
            Implementar un comedor y hogar comunitario para niños de bajos
            recursos económicos.
            <br />
          </li>
          <li>
            Un hogar geriátrico para los ancianos abandonados donde se preste la
            atención y el cuidado que necesitan.
            <br />
          </li>
          <li>
            Continuar capacitando las personas adultas que por diversos motivos
            no pudieron finalizar su educación básica y media.
            <br />
          </li>
        </ol>
        <img className="img_AboutUs" src={imageThree} />
      </article>
    </Layout>
  );
};
export default AboutUs;
