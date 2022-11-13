const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            email: [],
        };
    },
    methods: {
        getApi() {
            for (let i = 0; i < 10; i++) {
                axios.get(this.apiUrl)
                    .then(list => {
                        this.email.push(list.data.response);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
    },
    mounted() {
        this.getApi();
    },
}).mount('#app');