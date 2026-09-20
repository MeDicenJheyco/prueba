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

const musicaEstado =
    document.getElementById("audioStatus");

const lineaProgreso =
    document.getElementById("lineaProgreso");

const tiempoActual =
    document.getElementById("tiempoActual");

const duracion =
    document.getElementById("duracion");

const particulas =
    document.getElementById("particulas");


/* =========================
   MÚSICA
========================= */

const musica =
    new Audio("./cancion/blessd.mp3");

musica.volume = 0.5;


/* =========================
   INICIAR PRUEBA
========================= */

iniciarBtn.addEventListener("click", () => {

    inicio.style.display = "none";

    contenido.classList.remove("oculto");


    estado.textContent =
        "Inicializando reproductor...";

    actualizarProgreso(20);


    setTimeout(() => {

        estado.textContent =
            "Detectando artista: Kris R...";

        actualizarProgreso(45);

    }, 1000);


    setTimeout(() => {

        estado.textContent =
            "Detectando artista: Blessd...";

        actualizarProgreso(65);

    }, 2000);


    setTimeout(() => {

        estado.textContent =
            "Comprobando reproducción de audio...";

        actualizarProgreso(85);


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

        proceso.classList.add("oculto");

        resultado.classList.remove("oculto");

        crearParticulas();

    }, 4700);

});


/* =========================
   PLAY / PAUSA
========================= */

playBtn.addEventListener("click", () => {

    if (musica.paused) {

        musica.play();

        playBtn.textContent =
            "❚❚";

        musicaEstado.textContent =
            "● Audio reproduciéndose";

    } else {

        musica.pause();

        playBtn.textContent =
            "▶";

        musicaEstado.textContent =
            "● Audio pausado";

    }

});


/* =========================
   DURACIÓN
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
   PROGRESO DE LA CANCIÓN
========================= */

musica.addEventListener(
    "timeupdate",
    () => {

        if (!musica.duration) {

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
   CANCIÓN TERMINADA
========================= */

musica.addEventListener(
    "ended",
    () => {

        playBtn.textContent =
            "▶";

        musicaEstado.textContent =
            "● Audio terminado";

    }
);


/* =========================
   CONVERTIR TIEMPO
========================= */

function convertirTiempo(segundos) {

    if (isNaN(segundos)) {

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
   PROGRESO DE LA PRUEBA
========================= */

function actualizarProgreso(valor) {

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


    for (
        let i = 0;
        i < 30;
        i++
    ) {

        setTimeout(() => {

            const particula =
                document.createElement("div");


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
                Math.random() * 100 + "vw";


            particula.style.bottom =
                "-30px";


            particula.style.fontSize =
                (
                    Math.random() * 20 +
                    15
                ) + "px";


            particula.style.color =
                "#1ed760";


            particula.style.zIndex =
                "1";


            particula.style.transition =
                "transform 5s linear, opacity 5s linear";


            particulas.appendChild(
                particula
            );


            setTimeout(() => {

                particula.style.transform =
                    "translateY(-110vh) rotate(360deg)";

                particula.style.opacity =
                    "0";

            }, 50);


            setTimeout(() => {

                particula.remove();

            }, 5500);


        }, i * 120);

    }

}