var app = new Vue({
    el: "#root",
    data: {
        indiceCustom: 0,
        variabileMesaggio: "",
        inputRicercaContatto: "",


        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                oraUltimoMesaggio: ``,
                messages: [


                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                oraUltimoMesaggio: ``,
                messages: [


                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                oraUltimoMesaggio: ``,
                messages: [

                ],
            },
            {
                name: 'Alessandro B.',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                oraUltimoMesaggio: ``,
                messages: [

                ],
            },
            {
                name: 'Alessandro L.',
                avatar: 'img/avatar_5.jpg',
                visible: true,
                oraUltimoMesaggio: ``,
                messages: [

                ],
            },
            {
                name: 'Claudia',
                avatar: 'img/avatar_6.jpg',
                visible: true,
                oraUltimoMesaggio: ``,
                messages: [


                ],
            },
            {
                name: 'Federico',
                avatar: 'img/avatar_7.jpg',
                visible: true,
                oraUltimoMesaggio: ``,
                messages: [


                ],
            },
            {
                name: 'Davide',
                avatar: 'img/avatar_8.jpg',
                visible: true,
                oraUltimoMesaggio: ``,
                messages: [

                ],
            }
        ]
    },
    methods: {
        // Selezione della chat
        chatSelection(contatti, index) {
            // Modifica del indice custom
            this.indiceCustom = index;
            this.variabileMesaggio = "";
        },

        // Pressione del tasto Enter per invio mesaggio
        keyEvent() {
            // Salvataggio del ultimo emsaggio inviato
            let indiceUltimoMesaggio = this.ultimoMesaggioInviato();
            this.contacts[this.indiceCustom].indiceUltimoMesaggio = indiceUltimoMesaggio;

            // Inizializzazione del percorso necessario per raggiungere array messages
            let percorsoMessages = this.contacts[this.indiceCustom].messages;

            // Inizializzazione Dell'orario del singolo mesaggio inviato
            let variabileOra = this.temporizzazione();

            percorsoMessages.push({
                date: variabileOra,
                status: "sent",
                message: this.variabileMesaggio

            });

            // Svuotamento del campo input mesaggi
            this.variabileMesaggio = "";

            // Temporizzazione della risposta al mesaggio
            setTimeout(function () {
                console.log(percorsoMessages)
                percorsoMessages.push({
                    date: variabileOra,
                    status: "ricived",
                    message: "Ok"
                });
            }, 2000)

            this.contacts[this.indiceCustom].oraUltimoMesaggio = variabileOra;
        },

        // Rimozione del measggio con il DropDown
        removeMessage(index) {
            this.contacts[this.indiceCustom].messages.splice(index, 1)
        },

        // Creazione del ora e minuto
        temporizzazione() {
            var now = dayjs().format('H:mm');
            return now

        },

        // Funzione per avere sempre l'ultimo mesaggio dell'array messages
        ultimoMesaggioInviato() {
            let lastMes = this.contacts[this.indiceCustom].messages.length
            return lastMes
        },

        // Funzione per Ricerca fra la lista dei contatti
        ricercaContatti() {
            this.contacts.forEach((element) => {

                if (element.name.includes(this.inputRicercaContatto)) {
                    element.visible = true;
                } else {
                    element.visible = false;
                }
            });
        }
    }
})




