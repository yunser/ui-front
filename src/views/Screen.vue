<template>
    <my-page title="设备信息查看">
        <div class="common-container">
            <ui-article>
                <table v-if="data">
                    <tr>
                        <th>屏幕分辨率</th>
                        <td>{{ data.rate }}</td>
                    </tr>
                </table>
            </ui-article>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                data: null
            }
        },
        mounted() {
            this.data = {
                rate: screen.width + ' × ' + screen.height
            }
        }
    }
</script>

<style scoped>
</style>
