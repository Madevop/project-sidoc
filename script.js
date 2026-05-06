let datos = [];

/* Cargar JSON */
fetch('./datos_estudiantes.json')
    .then(response => response.json())
    .then(data => {
        datos = data;
    });

/* SIGNIFICADOS */
const significados = {

    "REALISTA": `
    <h3>REALISTA</h3>

    <p>
    Se caracteriza por ser práctico, dinámico y con una fuerte inclinación hacia las actividades físicas y materiales, más que hacia las ideas abstractas o las relaciones sociales complejas.
    Prefiere "hacer" antes que "pensar" o "teorizar".
    </p>

    <p>
    En resumen, un niño realista es aquel que se siente cómodo explorando el entorno físico y técnico, buscando soluciones prácticas y tangibles a los retos diarios.
    </p>

    <h4>Actividades que pueden potenciar habilidades:</h4>

    <ul>
        <li>Construcción con madera, cartón o materiales reciclados (casitas, puentes, carros).</li>
        <li>Talleres básicos de herramientas (usar martillo, destornillador con supervisión).</li>
        <li>Armar y desarmar objetos sencillos (juguetes viejos, aparatos simples).</li>
    </ul>
    `,

    "INVESTIGADOR": `
    <h3>INVESTIGADOR</h3>

    <p>
    Se describe como un explorador innato, caracterizado por una curiosidad insaciable, pensamiento crítico y una necesidad constante de entender cómo funciona el mundo que le rodea.
    No se limita a recibir información, sino que la busca activamente a través de la observación, la experimentación y el juego.
    </p>

    <h4>Actividades que pueden potenciar habilidades:</h4>

    <ul>
        <li>Mini proyectos de investigación sobre temas de su interés (animales, espacio, tecnología).</li>
        <li>Búsqueda de información en libros o internet con preguntas guía.</li>
        <li>Salidas de observación (parques, museos, zoológicos) con registro de hallazgos.</li>
    </ul>
    `,

    "ARTÍSTIC@": `
    <h3>ARTÍSTIC@</h3>

    <p>
    La mayoría de los artistas tienden a tomarse en serio su papel en la vida.
    Poseen una intuición aguda y utilizan sus sentidos para explorar el mundo.
    Algunos artistas luchan contra la impulsividad, se estresan con facilidad y pueden ser impredecibles.
    </p>

    <h4>Actividades que pueden potenciar habilidades:</h4>

    <ul>
        <li>Dibujo creativo (no copiar, sino inventar).</li>
        <li>Collage con materiales variados (revistas, telas, elementos naturales).</li>
        <li>Escultura con plastilina, arcilla o materiales reciclados.</li>
        <li>Expresión corporal con música (interpretar emociones con el cuerpo).</li>
    </ul>
    `,

    "SOCIAL": `
    <h3>SOCIAL</h3>

    <p>
    Prefiere las ocupaciones y situaciones sociales en que pueda desarrollar sus actividades y habilidades preferidas y evitar las actividades que demandan las ocupaciones y situaciones realistas.
    </p>

    <p>
    Emplea sus habilidades sociales para resolver problemas en el trabajo y en otros medios.
    </p>

    <h4>Actividades que pueden potenciar habilidades:</h4>

    <ul>
        <li>Proyectos solidarios (campañas, recolección, ayuda comunitaria).</li>
        <li>Cuidado de otros (plantas, animales, compañeros más pequeños).</li>
        <li>Debates sencillos y mesas redondas.</li>
    </ul>
    `,

    "EMPRENDEDOR": `
    <h3>EMPRENDEDOR</h3>

    <p>
    Prefiere ocupaciones o situaciones arriesgadas en las que pueda desarrollar sus actividades preferidas y evitar las actividades que demandan las ocupaciones o situaciones científicas.
    </p>

    <p>
    Emplea sus habilidades emprendedoras para resolver problemas en el trabajo y en otras situaciones.
    </p>

    <h4>Actividades que pueden potenciar habilidades:</h4>

    <ul>
        <li>Diseñar un “mini negocio” (venta simbólica de productos hechos por ellos).</li>
        <li>Presentar ideas frente al grupo (“pitch” sencillo).</li>
        <li>Debates donde deban convencer con argumentos.</li>
    </ul>
    `,

    "CONVENCIONAL": `
    <h3>CONVENCIONAL</h3>

    <p>
    Es ordenado, detallista, estructurado y prefiere actividades que impliquen manejar datos, números o archivos de forma sistemática.
    </p>

    <p>
    Disfruta de las rutinas, la organización y seguir instrucciones claras, mostrando alta responsabilidad y habilidades lógicas, preferiblemente en ambientes estructurados.
    </p>

    <h4>Actividades que pueden potenciar habilidades:</h4>

    <ul>
        <li>Hacer listas de tareas y verificar su cumplimiento.</li>
        <li>Trabajos que requieran atención al detalle (dibujos técnicos, caligrafía).</li>
        <li>Resolver problemas paso a paso.</li>
    </ul>
    `
};

/* BUSCAR */
function buscar() {

    const input = document.getElementById("busqueda").value.trim();

    const resultadoDiv = document.getElementById("resultado");

    const encontrado = datos.find(persona =>
        persona.DOCUMENTO.endsWith(input)
    );

    if (encontrado) {

        resultadoDiv.innerHTML = `
            <h2>${encontrado.NOMBRE}</h2>

            <h1 style="color:#c61d34; margin-top:20px;">
                ${encontrado.RESULTADO}
            </h1>

            <div class="descripcion">
                ${significados[encontrado.RESULTADO]}
            </div>
        `;

    } else {

        resultadoDiv.innerHTML = `
            <h2>No se encontró ningún resultado</h2>
        `;
    }
}