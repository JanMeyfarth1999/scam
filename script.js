
        function startPrank() {

            for (let i = 0; i < 70; i++) {

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

                }, i * 50);
            }
        }