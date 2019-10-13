<template>
    <div>
        <Nav />
        <div class="chat">
            <h2 v-if="ready">Chat Group</h2>
            <h2 v-else>Välkommen</h2>
            <hr>
            <div v-for="mess in messages" :key="mess.sent">
                <div class="msg-row" :class="mess.user==user?'right':'left'" :title="formatDate(mess.sent)" v-if="mess.type=='message'">
                    <div class="msg-wrap">
                        <div class="msg-box">
                            <p class="user">{{ mess.user }}</p>
                            <p class="msg">{{ mess.message }}</p>
                        </div>
                        <p class="msg-time">
                            {{ formatTime(mess.sent) }}
                        </p>
                    </div>
                </div>
                <div v-else-if="mess.type=='join'||mess.type=='left'" :class="mess.type=='join'?'joined':'dced'">
                    <p :title="formatDate(mess.sent)">{{ formatTime(mess.sent) }} {{ mess.user }} {{ mess.message }}</p>
                </div>
            </div>
            <div v-if="ready">
                <form @submit.prevent="sendMessage">
                    <label for="message">Message:</label>
                    <input type="text" v-model="message">
                    <button type="submit">Send</button>
                </form>
                <br>
                <button @click="getMessages">{{ fetching ? "Hämtar meddelanden... Vänligen vänta" : "Klicka här för att hämta hem tidigare meddelanden." }}</button>
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
            fetching: false,
            ready: false,
            duplicate: false,
            user: '',
            message: '',
            messages: [],
            socket: io('http://localhost:8300')
        }
    },
    methods: {
        formatTime(milliseconds) {
            let d = (milliseconds) ? new Date(milliseconds) : new Date();

            return ('0' + d.getHours()).slice(-2) + ":" +
                    ('0' + d.getMinutes()).slice(-2);
        },
        formatDate(milliseconds) {
            let d = (milliseconds) ? new Date(milliseconds) : new Date();

            return d.getFullYear() + "-" +
                ('0' + (d.getMonth() + 1)).slice(-2) + "-" +
                ('0' + d.getDate()).slice(-2) + " " +
                ('0' + d.getHours()).slice(-2) + ":" +
                ('0' + d.getMinutes()).slice(-2) + ":" +
                ('0' + d.getSeconds()).slice(-2);
        },
        joinChat(e) {
            e.preventDefault();
            if (this.user !== "") {
                this.socket.emit('check-username', {
                    user: this.user,
                    sent: new Date().getTime()
                });
            }
        },
        sendMessage(e) {
            let data = {
                user: this.user,
                message: this.message,
                sent: new Date().getTime(),
                type: "message"
            }

            e.preventDefault();
            if (this.message !== "") {
                this.socket.emit('client-sends', data); // Send to server -> server socket.broadcast.emit
                this.messages.push(data); // If the above was returned as a io.emit this isnt needed but this saves some network traffic.
                this.message = '';
            }
        },
        getMessages() {
            this.fetching = true;
            this.socket.emit('get-messages');
        },
    },
    mounted() {
        this.socket.on('server-sends', (data) => {
            if (this.ready) {
                this.messages.push(data)
            }
        });
        this.socket.on('username-result', (check) => {
            this.ready = check;
            this.duplicate = !check;
        });
        this.socket.on('all-messages', (data) => {
            this.messages = data;
            this.fetching = false;
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

p {
    font-size: 1em;
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

.msg-row {
    margin: 0.6em 0;
}

.msg-wrap {
    display: inline-block;
    padding: 0.5em 0.25em;
    min-width: 200px;
    max-width: 80%;
}

.msg-box {
    padding: 0.75em;
    border-radius: 0.25em;
    background-color: rgb(36, 38, 49);
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

.right .msg-time {
    text-align: left;
}

.joined,
.dced {
    text-align: center;
}

.joined {
    color: rgb(80, 250, 132);
}

.dced {
    color: rgb(250, 80, 80);
}

.msg-time {
    font-family: monospace;
    font-size: 1em;
    text-align: right;
}

</style>