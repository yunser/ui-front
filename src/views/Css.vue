<template>
    <ui-page title="CSS 组件">
        <article>
            <p>CSS 组件是纯 CSS 的组件，不依赖 JavaScript。</p>
            <h2>Button</h2>
            <div class="demo-box">
                <ui-row>

                </ui-row>
            </div>
            <p></p>
        </article>
    </ui-page>
</template>

<script>
    export default {
        data () {
            return {
                version: ''
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
    .demo-box {
        border: 1px solid #ccc;
        padding: 16px;
    }
</style>
