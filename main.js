var app = new Vue({
    el: "#root",
    data: {
        indiceCustom: 0,
        variabileMesaggio: "",
        inputRicercaContatto: "",
        variabile: 0,
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [

                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [


                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [

                ],
            },
            {
                name: 'Alessandro B.',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                messages: [

                ],
            },
            {
                name: 'Alessandro L.',
                avatar: 'img/avatar_5.jpg',
                visible: true,
                messages: [

                ],
            },
            {
                name: 'Claudia',
                avatar: 'img/avatar_6.jpg',
                visible: true,
                messages: [


                ],
            },
            {
                name: 'Federico',
                avatar: 'img/avatar_7.jpg',
                visible: true,
                messages: [


                ],
            },
            {
                name: 'Davide',
                avatar: 'img/avatar_8.jpg',
                visible: true,
                messages: [

                ],
            }
        ]
    },
    methods: {
        iniziaChat(contatti, index) {
            this.indiceCustom = index;
            this.variabileMesaggio = "";
        },
        keyEvent() {
            let rafa = this.contacts[this.indiceCustom].messages;
            
            rafa.push({
                date: "",
                status: "sent",
                message: this.variabileMesaggio

            });
            console.log(this.contacts[this.indiceCustom].messages)

            this.variabileMesaggio = "";
            setTimeout(function () {
                console.log(rafa)
                rafa.push({
                    date: "--",
                    status: "ricived",
                    message: "Ok"

                });
            }, 2000)
        },
        removeMessage(index) {
            this.contacts[this.indiceCustom].messages.splice(index, 1)
        },

    }
})




