const app2 = Vue.createApp({
    data() {
        return {
            thisbuttonclicked: true,
            firstbutton: false,
            secondbutton: false,
            thirdbutton: false
        }
    },
    methods: {
        bclick() {
            this.thisbuttonclicked = !this.thisbuttonclicked;
        },
        firstclick() {
            this.firstbutton = !this.firstbutton;
        },
        secondclick() {
            this.secondbutton = !this.secondbutton;
        },
        thirdclick() {
            this.thirdbutton = !this.thirdbutton
        }

    },
    computed: {
        selectClass(thisbuttonclicked) {
            if (this.thisbuttonclicked === true) {
                return "hike-text1"
            } else {
                return "hike-text2"
            }

        },
        firstrotate(firstbutton) {
            if (this.firstbutton === false) {
                return "turnaround"
            } else {
                return "turnaround2"
            }

        },
        secondrotate(secondbutton) {
            if (this.secondbutton === false) {
                return "turnaround"
            } else {
                return "turnaround2"
            }

        },
        thirdrotate(thirdbutton) {
            if (this.thirdbutton === false) {
                return "turnaround"
            } else {
                return "turnaround2"
            }

        }
    },

});
app2.mount("#features")

