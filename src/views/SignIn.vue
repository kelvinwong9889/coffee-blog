<template>
    <v-cotainer>
        <v-layout justify-center column fill-height>
            <v-layout row xs-12 justify-center align-center my-5>
                <v-flex xs9 sm7 md4 mt-5>
                    <v-form class="radius-form white pa-4 elevation-15">
                        <h1 class="text-xs-center">Sign in</h1>

                        <v-text-field
                            type="text"
                            prepend-icon="person"
                            label="Username"
                            autofocus
                        ></v-text-field>
                            
                        <v-text-field
                            type="password"
                            prepend-icon="lock"
                            label="Password"
                        ></v-text-field>

                        <v-btn
                            to="/about"
                            color="primary"
                            block
                        >Sign In</v-btn>
                    </v-form>
                </v-flex>
            </v-layout>

            <v-layout column xs12 align-center>
                <v-flex>
                    <router-link to="/forgotPassword" class="white--text body-2">Forgot your password?</router-link>
                    <span class="white--text title"> | </span>
                    <router-link to="/eatWhat" class="white--text body-2">Make a lunch choice?</router-link>
                </v-flex>
            </v-layout>
        </v-layout>
    </v-cotainer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.radius-form {
    border-radius: 8px 8px 8px 8px;
}
</style>
