<template>
    <nav class="navigation">
        <button v-for="route in routes" @click="goToPath(route)">
            <span>{{route.title}}</span>
        </button>
    </nav>
</template>

<script>
    export default {
        props : ['routes', 'current'],
        methods : {
            goToPath(route) {
                history.pushState(null, route.path, route.path);
                    this.$dispatch( 'page', route.path );
                }
            },
            ready() {
                var self = this;
                window.onpopstate = function(event) {
                    self.goToPath({
                    path: location.pathname
                });
            }
        }
    };
</script>
