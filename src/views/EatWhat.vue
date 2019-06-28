<template>
    <v-container>
        <v-layout justify-center column fill-height>
            <v-layout row xs12 align-center mt-2>
                <v-flex mt-5 class="text-xs-center white--text">
                    <div class="headline">What you want to eat what?</div>
                    <div class="subheading">Let's random choose!!!</div>
                </v-flex>
            </v-layout>

            <v-layout row xs-12 justify-center mt-4>
                <v-flex xs9 sm7 md4>
                    <v-card class="radius white pa-3 pt-4 elevation-15">
                        <v-text-field
                            type="text"
                            prepend-icon="restaurant"
                            label="Restaurant Name"
                            autofocus
                            v-model="restaurantName"
                        >
                            <template slot="append">
                                <v-btn fab flat small class="restaurant-btn" color="success" :hidden="this.restaurantName.length === 0" @click="clearText()">
                                    <v-icon>clear</v-icon>
                                </v-btn>
                            </template>

                            <template slot="append-outer">
                                <v-btn fab small class="restaurant-btn" color="success" @click="addRestaurant()">
                                    <v-icon>add</v-icon>
                                </v-btn>
                            </template>
                        </v-text-field>
                    </v-card>
                </v-flex>
            </v-layout>

            <v-layout row xs-12 justify-center mt-2 v-if="this.restaurantList.length > 0">
                <v-flex xs9 sm7 md4>
                    <v-card class="radius pa-3 elevation-15">
                        <v-list v-for="(restaurant, index) in restaurantList" :key="index">
                            <v-list-tile>
                                <v-list-tile-content>{{ restaurant }}</v-list-tile-content>
                                <v-list-tile-action>
                                    <v-btn fab flat small class="red--text restaurant-btn">
                                        <v-icon>clear</v-icon>
                                    </v-btn>
                                </v-list-tile-action>
                            </v-list-tile>
                            <v-divider></v-divider>
                        </v-list>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            restaurantName: '',
            restaurantList: []
        }
    },
    methods: {
        clearText() {
            this.restaurantName = '';
        },
        addRestaurant() {
            this.restaurantList.push(this.restaurantName);
            this.restaurantName = '';
        },
        deleteRestaurant() {
            this.restaurantList
        }
    }
}
</script>

<style scoped>
.restaurant-btn {
    margin: -15px 0px;
}

.radius {
    border-radius: 8px 8px 8px 8px;
}
</style>
