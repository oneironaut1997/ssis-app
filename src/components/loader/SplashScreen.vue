<template>
    <v-row justify="center" class="splash-sreen__row">
        <v-dialog
            v-model="splash"
            fullscreen
            hide-overlay
            class="v-dialog-splash"
            transition="dialog-top-transition"
        >
            <div class="splash-screen-logo__hldr">
                <img
                class="splash-screen__logo"
                :src="$PRXConfig().staticUrl('ssis-logo.png')"
                width="200px"
                height="auto"
                >
            </div>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        data () {
            return {
                splash: false,
            }
        },
        mounted() {
            setTimeout(() => {
                this.splash = false;
                document.querySelector('.splash-sreen__row').style.display = 'none';
                // Destroy Splash After 4 seconds
            }, 3000);
        }
    }
</script>