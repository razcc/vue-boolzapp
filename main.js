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
        iniziaChat(contatti, index) {
            this.indiceCustom = index;
            this.variabileMesaggio = "";
        },
        keyEvent() {
           
            let indiceUltimoMesaggio = this.ultimoMesaggioInviato()
            this.contacts[this.indiceCustom].indiceUltimoMesaggio = indiceUltimoMesaggio
            console.log( this.contacts[this.indiceCustom])

            let percorsoMessages = this.contacts[this.indiceCustom].messages;
            let variabileOra = this.temporizzazione(); 

            percorsoMessages.push({
                date: variabileOra,
                status: "sent",
                message: this.variabileMesaggio

            });
            console.log(this.contacts[this.indiceCustom].messages)

            this.variabileMesaggio = "";

            setTimeout(function () {
                console.log(percorsoMessages)
                percorsoMessages.push({
                    date: variabileOra,
                    status: "ricived",
                    message: "Ok"

                });
            }, 2000)
            
            console.log(variabileOra)
            this.contacts[this.indiceCustom].oraUltimoMesaggio = this.temporizzazione();
            
            

            
        },
        removeMessage(index) {
            this.contacts[this.indiceCustom].messages.splice(index, 1)
            
        },
        temporizzazione(){
            var now = dayjs().format('H:mm');
            return now
            
        },
        ultimoMesaggioInviato(){
            let lastMes =  this.contacts[this.indiceCustom].messages.length
            return lastMes
        },
        ricercaContatti(){
            this.contacts.forEach((element) => {

                if(element.name.includes(this.inputRicercaContatto)){
                    element.visible= true;
                }else{
                    element.visible= false;
                }

                
            })
        }
    }
})




