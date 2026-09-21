/* =========================
   ELEMENTOS
========================= */

const iniciarBtn =
    document.getElementById("iniciarBtn");

const inicio =
    document.getElementById("inicio");

const contenido =
    document.getElementById("contenido");

const proceso =
    document.getElementById("proceso");

const resultado =
    document.getElementById("resultado");

const estado =
    document.getElementById("estado");

const progreso =
    document.getElementById("progreso");

const porcentaje =
    document.getElementById("porcentaje");

const playBtn =
    document.getElementById("playBtn");

const anteriorBtn =
    document.getElementById("anteriorBtn");

const siguienteBtn =
    document.getElementById("siguienteBtn");

const musicaEstado =
    document.getElementById("audioStatus");

const lineaProgreso =
    document.getElementById("lineaProgreso");

const lineaTiempo =
    document.getElementById("lineaTiempo");

const tiempoActual =
    document.getElementById("tiempoActual");

const duracion =
    document.getElementById("duracion");

const portada =
    document.getElementById("portada");

const tituloCancion =
    document.getElementById("tituloCancion");

const artistaCancion =
    document.getElementById("artistaCancion");

const artistasDetectados =
    document.getElementById("artistasDetectados");

const particulas =
    document.getElementById("particulas");



/* =========================
   CANCIONES
========================= */

const canciones = [

    {
        titulo: " BLESSD ❌ KRIS R | POLOS OPUESTOS REMIX ☯️ ",

        artista: "Blessd & Kris R",

        artistas: [

            {
                nombre: "Blessd",
                foto: "./fotos/blessd.jpg"
            },

            {
                nombre: "Kris R",
                foto: "./fotos/kris.jpg"
            }

        ],

        audio: "./cancion/blessd.mp3",

        portada: "./fotos/album.jpg",

        color: "#b70cc7"
    },


    {
        titulo: "BLESSD ❌ JUSTIN QUILES ❌ LENNY TAVAREZ | 💥 MEDALLO",

        artista: "Blessd",

        artistas: [

            {
                nombre: "Blessd",
                foto: "./fotos/blessd.jpg"
            }

        ],

        audio: "./cancion/medallo.mp3",

        portada: "./fotos/medallo.jpg",

        color: "#328fe0"
    },


    {
        titulo: " KRIS R - MIL D AURA 💫 ",

        artista: "Kris R",

        artistas: [

            {
                nombre: "Kris R",
                foto: "./fotos/kris.jpg"
            }

        ],

        audio: "./cancion/mildeaura.mp3",

        portada: "./fotos/mildeaura.jpg",

        color: "#6b21a8"
    },


    {
        titulo: " Ryan Castro - Q' Hubo Bebé 👸",

        artista: "Ryan Castro",

        artistas: [

            {
                nombre: "Ryan Castro",
                foto: "./fotos/ryan.jpg"
            }

        ],

        audio: "./cancion/qhubobb.mp3",

        portada: "./fotos/qhubobb.jpg",

        color: "#991b1b"
    },


    {
        titulo: " Feid - Feliz Cumpleaños Ferxxo ",

        artista: "Feid",

        artistas: [

            {
                nombre: "Feid",
                foto: "./fotos/feid.jpg"
            }

        ],

        audio: "./cancion/ferxo.mp3",

        portada: "./fotos/ferxo.jpg",

        color: "#15803d"
    }

];



/* =========================
   VARIABLES
========================= */

let indiceActual = 0;



/* =========================
   AUDIO
========================= */

const musica =
    new Audio();

musica.volume = 0.5;

musica.preload =
    "metadata";



/* =========================
   CARGAR CANCIÓN
========================= */

function cargarCancion(indice) {

    const cancion =
        canciones[indice];


    musica.src =
        cancion.audio;


    musica.load();


    tituloCancion.textContent =
        cancion.titulo;


    artistaCancion.textContent =
        cancion.artista;


    portada.style.opacity =
        "0";


    setTimeout(() => {

        portada.src =
            cancion.portada;

        portada.alt =
            cancion.titulo;

        portada.style.opacity =
            "1";

    }, 200);


    cambiarColor(
        cancion.color
    );


    mostrarArtistas(
        cancion.artistas
    );


    lineaProgreso.style.width =
        "0%";


    tiempoActual.textContent =
        "0:00";


    duracion.textContent =
        "0:00";

}



/* =========================
   MOSTRAR ARTISTAS
========================= */

function mostrarArtistas(artistas) {

    artistasDetectados.innerHTML = "";


    artistas.forEach(
        (artista) => {

            const tarjeta =
                document.createElement(
                    "div"
                );


            tarjeta.classList.add(
                "artista"
            );


            tarjeta.innerHTML = `

                <div class="avatar">

                    <img
                        src="${artista.foto}"
                        alt="${artista.nombre}"
                    >

                </div>


                <div class="artista-info">

                    <strong>
                        ${artista.nombre}
                    </strong>

                    <small>
                        Artista detectado ✓
                    </small>

                </div>

            `;


            artistasDetectados.appendChild(
                tarjeta
            );

        }
    );

}



/* =========================
   CAMBIAR COLOR
========================= */

function cambiarColor(color) {

    document.body.style.background =
        `
        radial-gradient(
            circle at top,
            ${color},
            #121212 45%,
            #080808
        )
        `;

}



/* =========================
   INICIAR PRUEBA
========================= */

iniciarBtn.addEventListener(
    "click",
    () => {

        inicio.style.display =
            "none";


        contenido.classList.remove(
            "oculto"
        );


        estado.textContent =
            "Inicializando reproductor...";


        actualizarProgreso(20);



        setTimeout(() => {

            estado.textContent =
                "Detectando artistas...";

            actualizarProgreso(40);

        }, 1000);



        setTimeout(() => {

            estado.textContent =
                "Comprobando archivos de audio...";

            actualizarProgreso(60);

        }, 2000);



        setTimeout(() => {

            estado.textContent =
                "Comprobando reproducción de audio...";

            actualizarProgreso(85);


            indiceActual = 0;


            cargarCancion(
                indiceActual
            );


            musica.play()
                .then(() => {

                    musicaEstado.textContent =
                        "● Audio reproduciéndose";

                    playBtn.textContent =
                        "❚❚";

                })
                .catch(() => {

                    musicaEstado.textContent =
                        "● Audio listo";

                });

        }, 3000);



        setTimeout(() => {

            actualizarProgreso(100);

            estado.textContent =
                "Prueba completada.";

        }, 4000);



        setTimeout(() => {

            proceso.classList.add(
                "oculto"
            );


            resultado.classList.remove(
                "oculto"
            );


            crearParticulas();

        }, 4700);

    }
);



/* =========================
   PLAY / PAUSA
========================= */

playBtn.addEventListener(
    "click",
    () => {

        if (
            musica.paused
        ) {

            musica.play()
                .then(() => {

                    playBtn.textContent =
                        "❚❚";

                    musicaEstado.textContent =
                        "● Audio reproduciéndose";

                });

        } else {

            musica.pause();


            playBtn.textContent =
                "▶";


            musicaEstado.textContent =
                "● Audio pausado";

        }

    }
);



/* =========================
   SIGUIENTE
========================= */

siguienteBtn.addEventListener(
    "click",
    () => {

        siguienteCancion();

    }
);


function siguienteCancion() {

    indiceActual++;


    if (
        indiceActual >=
        canciones.length
    ) {

        indiceActual = 0;

    }


    cargarCancion(
        indiceActual
    );


    musica.play()
        .then(() => {

            playBtn.textContent =
                "❚❚";

            musicaEstado.textContent =
                "● Audio reproduciéndose";

        })
        .catch(() => {

            musicaEstado.textContent =
                "● Audio listo";

        });


    crearParticulas();

}



/* =========================
   ANTERIOR
========================= */

anteriorBtn.addEventListener(
    "click",
    () => {

        indiceActual--;


        if (
            indiceActual < 0
        ) {

            indiceActual =
                canciones.length - 1;

        }


        cargarCancion(
            indiceActual
        );


        musica.play()
            .then(() => {

                playBtn.textContent =
                    "❚❚";

                musicaEstado.textContent =
                    "● Audio reproduciéndose";

            })
            .catch(() => {

                musicaEstado.textContent =
                    "● Audio listo";

            });

    }
);



/* =========================
   CANCIÓN TERMINADA
========================= */

musica.addEventListener(
    "ended",
    () => {

        siguienteCancion();

    }
);



/* =========================
   METADATA
========================= */

musica.addEventListener(
    "loadedmetadata",
    () => {

        duracion.textContent =
            convertirTiempo(
                musica.duration
            );

    }
);



/* =========================
   PROGRESO
========================= */

musica.addEventListener(
    "timeupdate",
    () => {

        if (
            !musica.duration
        ) {

            return;

        }


        const porcentajeAudio =
            (
                musica.currentTime /
                musica.duration
            ) * 100;


        lineaProgreso.style.width =
            porcentajeAudio + "%";


        tiempoActual.textContent =
            convertirTiempo(
                musica.currentTime
            );

    }
);



/* =========================
   CLICK EN BARRA
========================= */

lineaTiempo.addEventListener(
    "click",
    (evento) => {

        if (
            !musica.duration
        ) {

            return;

        }


        const ancho =
            lineaTiempo.clientWidth;


        const posicion =
            evento.offsetX;


        const porcentaje =
            posicion / ancho;


        musica.currentTime =
            porcentaje *
            musica.duration;

    }
);



/* =========================
   CONVERTIR TIEMPO
========================= */

function convertirTiempo(
    segundos
) {

    if (
        isNaN(segundos)
    ) {

        return "0:00";

    }


    const minutos =
        Math.floor(
            segundos / 60
        );


    const segundosRestantes =
        Math.floor(
            segundos % 60
        );


    return (
        minutos +
        ":" +
        segundosRestantes
            .toString()
            .padStart(2, "0")
    );

}



/* =========================
   PROGRESO DE PRUEBA
========================= */

function actualizarProgreso(
    valor
) {

    progreso.style.width =
        valor + "%";


    porcentaje.textContent =
        valor + "%";

}



/* =========================
   PARTÍCULAS
========================= */

function crearParticulas() {

    const simbolos = [
        "♪",
        "♫",
        "✦",
        "✧"
    ];


    const colorActual =
        canciones[
            indiceActual
        ].color;


    for (
        let i = 0;
        i < 20;
        i++
    ) {

        setTimeout(() => {

            const particula =
                document.createElement(
                    "div"
                );


            particula.textContent =
                simbolos[
                    Math.floor(
                        Math.random() *
                        simbolos.length
                    )
                ];


            particula.style.position =
                "fixed";


            particula.style.left =
                Math.random() *
                100 +
                "vw";


            particula.style.bottom =
                "-30px";


            particula.style.fontSize =
                (
                    Math.random() *
                    20 +
                    15
                ) +
                "px";


            particula.style.color =
                colorActual;


            particula.style.zIndex =
                "1";


            particula.style.transition =
                `
                transform 5s linear,
                opacity 5s linear
                `;


            particulas.appendChild(
                particula
            );


            setTimeout(() => {

                particula.style.transform =
                    `
                    translateY(-110vh)
                    rotate(360deg)
                    `;


                particula.style.opacity =
                    "0";

            }, 50);


            setTimeout(() => {

                particula.remove();

            }, 5500);


        }, i * 120);

    }

}