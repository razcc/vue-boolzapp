var app = new Vue({
    el: "#root",
    data: {
        indiceCustom: 0,
        indiceCustom2: 0,
        variabileMesaggio: "",
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
            this.variabileMesaggio= "";
        },
        keyEvent() {           
            this.timingFunction()
        },

        timingFunction(){
            setTimeout(function(){
                this.contacts[this.indiceCustom].messages.push({
                    date: "--",
                    status: "sent",
                    message: this.variabileMesaggio
                });
                console.log( this.contacts[this.indiceCustom].messages)
            },1000)
        },
    }
})
s
