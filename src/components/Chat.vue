<template>
    <div>
        <Nav />
        <div class="chat">
            <h2 v-if="ready">Chat Group</h2>
            <h2 v-else>Välkommen</h2>
            <hr>
            <div v-for="mess in messages" :key="mess.sent.time">
                <div :class="mess.user==user?'right':'left'" :title="mess.sent.full" class="message" v-if="mess.type=='message'">
                    <div>
                        <div>
                            <p class="user">{{ mess.user }}</p>
                            <p class="mess">{{ mess.message }}</p>
                        </div>
                        <p class="message-time">
                            {{ mess.sent.time }}
                        </p>
                    </div>
                </div>
                <div v-else-if="mess.type=='join'" class="joined">
                    <p :title="mess.sent.full">{{ mess.sent.time }} {{ mess.user }} joined the chat </p>
                </div>
            </div>
            <div v-if="ready">
                <form @submit.prevent="sendMessage">
                    <label for="message">Message:</label>
                    <input type="text" v-model="message">
                    <button type="submit">Send</button>
                </form>
            </div>
            <div v-else>
                <form @submit.prevent="joinChat">
                    <label for="user" v-if="duplicate">Namnet är upptaget prova ett annat.</label>
                    <label for="user" v-else>Namn:</label>
                    <input type="text" v-model="user">
                    <button type="submit">Join</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client';
import Nav from './Nav.vue'
export default {
    name: 'Chat',
    components: {
        Nav,
    },
    data() {
        return {
            ready: false,
            duplicate: false,
            user: '',
            message: '',
            messages: [],
            socket: io('https://chat.liiinder.me')
        }
    },
    methods: {
        getTime() {
            const d = new Date()

            return {
                time: d.toLocaleTimeString('sv-SE'),
                full: d.toLocaleString('sv-SE')
            }
        },
        joinChat(e) {
            e.preventDefault();
            if (this.user !== "") {
                this.socket.emit('check-username', {
                    user: this.user,
                    sent: this.getTime()
                });
            }
        },
        sendMessage(e) {
            let data = {
                user: this.user,
                message: this.message,
                sent: this.getTime(),
                type: "message"
            }

            e.preventDefault();
            if (this.message !== "") {
                this.socket.emit('client-sends', data); // Send to server -> server socket.broadcast.emit
                this.messages.push(data); // If the above was returned as a io.emit this isnt needed but this saves some network traffic.
                this.message = '';
            }
        }
    },
    mounted() {
        this.socket.on('server-sends', (data) => {
            if (this.ready) {
                this.messages.push(data)
            };
        });
        this.socket.on('username-result', (check) => {
            this.ready = check;
            this.duplicate = !check;
        });
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

hr {
    margin-bottom: 1em;
}

form {
    margin-top: 2em;
}

label {
    margin-right: 1em;
}

input,
button {
    background-color: rgb(36, 38, 49);
    padding: 0.5em 0.8em;
    color: #ddd;
    border: 1px solid #ddd;
    border-collapse: collapse;
}

.chat {
    color: #ddd;
    font-family: 'Courier New', Courier, monospace;
    background-color: rgb(40, 42, 54);
    min-height: 300px;
    padding: 0.5em;
    border-left: 0.2em solid rgb(80, 250, 132);
    border-bottom: 1px solid rgb(80, 250, 132);
}

.message div {
    display: inline-block;
    padding: 0.5em 0.25em;
    min-width: 200px;
    max-width: 80%;
}

.message div div {
    border-radius: 0.25em;
    background-color: rgb(36, 38, 49);
}

.message div p {
    padding: 0;
    margin: 0;
}

p {
    font-size: 1em;
}

.user {
    color: rgb(80, 250, 132);
    font-size: 1.2em;
    font-weight: bold;
}

.user::after {
    content: ":";
    color: rgb(241, 250, 127);
}

.right {
    text-align: right;
}

.right .message-time {
    text-align: left;
}

.joined {
    text-align: center;
}

.message-time {
    font-family: monospace;
    font-size: 1em;
    text-align: right;
}

</style>