<template>
    <nav class="navigation">
        <nav>
            <button v-for="route in routes" @click="goToPath(route)">
                <span>{{route.title}}</span>
            </button>
        </nav>
    </nav>
</template>

<script>
    import scrollTo from "../../shared/scroll-to";
    export default {
        props : ['routes', 'current'],
        methods : {
            goToPath(route) {
                const id = '#' + route.title.toLowerCase();
                const elm = document.querySelector(id);
                // scrollTo(elm, 600, 'easeInOutCubic', function(){
                //     console.log('done');
                // });
                history.pushState(null, route.path, route.path);
                    this.$dispatch( 'page', route.path );
                }
            },
            done() {
                console.log('done');
            },
            ready() {
                var self = this;
                window.onpopstate = function(event) {
                    self.goToPath({
                    path: location.pathname
                });
            }
        }
    }
</script>
