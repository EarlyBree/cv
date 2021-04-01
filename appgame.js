function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerDistance: 0,
            hippoDistance: 0,
            currendRound: 0,
            winner: null,
            logMessages: []
        }
    },
    methods: {
        playerClimb() {
            this.currendRound++;
            const climbValue = getRandomValue(5, 12);
            this.playerDistance += climbValue;
            this.logMessages.unshift("Player climbs: " + climbValue)
            this.hippoClimb();
        },
        hippoClimb() {
            this.currendRound++;
            const climbValue = getRandomValue(8, 14);
            this.logMessages.unshift("Hippo climbs: " + climbValue)
            this.hippoDistance += climbValue;
        },
        playerJump() {
            this.currendRound++;
            const climbValue = getRandomValue(12, 20);
            this.playerDistance += climbValue;
            this.logMessages.unshift("Player jumps: " + climbValue)
            this.hippoClimb();
        },
        startGame() {
            this.playerDistance = 0,
                this.hippoDistance = 0,
                this.currendRound = 0,
                this.winner = null,
                this.logMessages = []
        }


    },
    computed: {
        playerClimbStyle() {
            if (this.playerDistance > 100) {
                return { width: "100%" }
            }
            return { width: this.playerDistance + "%" };
        },
        hippoClimbStyle() {
            if (this.hippoDistance > 100) {
                return { width: "100%" }
            }
            return { width: this.hippoDistance + "%" };
        },
        mayUseJump() {
            if (this.winner === true) {
                return true; }
            else { return this.currendRound % 3 !== 0; }
        }

    },
    watch: {
        playerDistance(value) {
            if (value >= 100 && this.hippoDistance >= 100) {
                this.logMessages.unshift("It´s a draw")
                this.winner = true;
            } else if (value >= 100) {
                this.logMessages.unshift("Player wins")
                this.winner = true;
            }

        },
        hippoDistance(value) {
            if (value >= 100 && this.playerDistance >= 100) {
                this.logMessages.unshift("It´s a draw")
                this.winner = true;
            } else if (value >= 100) {
                this.logMessages.unshift("Hippo wins")
                this.winner = true;
            }

        }

    }
});
app.mount("#game");
