Vue.createApp({
    data() {
        return {
            stringInput: "",
            amount: null,
            DuplicatedString: ""
        }
    },
    methods: {
        duplicateString(stringInput, amount) {
            this.DuplicatedString = "";
            if (amount < 0){
                this.DuplicatedString = "Please use a positive number, number given " + this.amount + ", is not valid";
            }
            else{
                for(let i = 0; i < amount; i++){
                    this.DuplicatedString = this.DuplicatedString += stringInput;
                }
            }

        }
    }
}).mount("#app")
