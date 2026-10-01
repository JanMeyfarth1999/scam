
        const errorSound = new Audio("error.mp3");

        function startPrank() {
            errorSound.play();

            for (let i = 0; i < 1000; i++) {

                setTimeout(function () {

                    let fenster = document.createElement("div");

                    fenster.className = "fakeWindow";

                    fenster.style.left =
                        Math.random() * (window.innerWidth - 220) + "px";

                    fenster.style.top =
                        Math.random() * (window.innerHeight - 100) + "px";

                    fenster.innerHTML = `
                        <h3>⚠️ FEHLER VIRENSCHUTZ AUSGEFALLEN!!!!</h3>
                        <p>Gefundene Viren ${i + 1}</p>
                    `;

                    document.body.appendChild(fenster);

                    if ((i + 1) % 60 === 0) {
                        errorSound.currentTime = 0;
                        errorSound.play();
                    }

                }, i * 50);
            }
        }