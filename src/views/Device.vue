<template>
    <my-page title="屏幕尺寸大全">
        <div class="table-box">
            <!-- <header class="table-header"></header> -->
            <table>
                <div class="table-header">
                    <div class="tr">
                        <div class="my-container">
                            <div class="th col-type">类型</div>
                            <div class="th col-name">设备名称</div>
                            <div class="th col-os">操作系统</div>
                            <div class="th col-size">尺寸 <small>in</small></div>
                            <div class="th col-ppi">PPI</div>
                            <div class="th col-rate">纵横比</div>
                            <div class="th col-dp">宽 × 高 <small>dp</small></div>
                            <div class="th col-px">宽 × 高 <small>px</small></div>
                            <div class="th col-dpi">密度 <small>dpi</small></div>
                        </div>
                    </div>
                </div>
                <div class="table-body">
                    <div class="tr" v-for="item in list" @click="viewItem(item)">
                        <div class="my-container">
                            <div class="td col-type">
                                <ui-icon value="smartphone" color="#4285f4" title="手机" v-if="item.type === 'phone'" />
                                <ui-icon value="tablet" color="#34a853" title="平板" v-else-if="item.type === 'tablet'" />
                                <ui-icon value="watch" color="#4e4e4e" title="手表" v-else-if="item.type === 'watch'" />
                                <ui-icon value="laptop" color="#ea4335" title="电脑" v-else-if="item.type === 'pc'" />
                                <ui-icon value="tv" color="#4285f4" title="屏幕" v-else />
                                <!-- <div v-else>{{ item.type | type }}</div> -->
                            </div>
                            <div class="td col-name">{{ item.name }}</div>
                            <div class="td col-os">{{ item.os }}</div>
                            <div class="td col-size">{{ item.size }}</div>
                            <div class="td col-ppi">{{ item.ppi }}</div>
                            <div class="td col-rate">{{ item.rate }}</div>
                            <div class="td col-dp">{{ item.dp }}</div>
                            <div class="td col-px">{{ item.px }}</div>
                            <div class="td col-dpi">
                                {{ item.dpi }}
                                <small>{{ item.dpi2 }}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </table>
        </div>
        <ui-drawer class="info-box" right :open="open" @close="toggle()">
            <ui-appbar :title="device.name" v-if="device">
                <ui-icon-button icon="close" slot="right" @click="open = false" />
            </ui-appbar>
            <div class="header">
            </div>
            <div class="body" v-if="device">
                <p>设备名称：{{ device.name }}</p>
                <p>操作系统：{{ device.os }}</p>
                <p>尺寸：{{ device.size }} in</p>
                <p>纵横比：{{ device.rate }}</p>
                <p>长 × 高：{{ device.dp }} dp</p>
                <p>长 × 高：{{ device.px }} Px</p>
                <p>PPI：{{ device.ppi }}</p>
            </div>
        </ui-drawer>
    </my-page>
</template>

<script>
    import list from '../util/data'

    export default {
        data () {
            return {
                list: list,
                device: null,
                open: false
            }
        },
        mounted() {
            this.device = this.list[0]
        },
        methods: {
            viewItem(item) {
                this.device = item
                this.open = true
            },
            toggle () {
                this.open = !this.open
            }
        },
        filters: {
            type(value) {
                switch (value) {
                    case 'phone':
                        return '手机'
                    case 'tablet':
                        return '平板'
                    case 'pc':
                        return '电脑'
                    case 'watch':
                        return '手表'
                    case 'monitor':
                        return '显示器'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.table-box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}
.table-header {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 56px;
    padding-right: 16px;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.tr {
    width: 100%;
}
.table-body {
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
    .tr {
        cursor: pointer;
        &:hover {
            background-color: #f9f9f9;
        }
        overflow: hidden;
    }
}
.my-container {
    display: flex;
    height: 56px;
    align-items: center;
    width: 981px;
    max-width: 981px;
    margin: 0 auto;
    padding: 0 16px;
    min-width: 981px;
    overflow: hidden;
}
table {
    display: block;
    .td,
    .th {
        // padding: 0 16px;
        // height: 56px;
    }
}
.col-type {
    width: 64px;
}
.col-name {
    width: 280px;
}
.col-os {
    width: 80px;
}
.col-size {
    width: 64px;
}
.col-ppi {
    width: 64px;
}
.col-rate {
    width: 80px;
}
.col-dp {
    width: 120px;
}
.col-px {
    width: 120px;
}
@media all and (max-width: 946px) {
    .col-ppi {
        display: none;
    }  
}
@media all and (max-width: 906px) {
    .col-dpi {
        display: none;
    }  
}
@media all and (max-width: 794px) {
    .col-px {
        display: none;
    }  
}
@media all and (max-width: 665px) {
    .col-dp {
        display: none;
    }  
}
@media all and (max-width: 564px) {
    .col-rate {
        display: none;
    }  
}
@media all and (max-width: 628px) {
    .col-size {
        display: none;
    }  
}
@media all and (max-width: 428px) {
    .col-os {
        display: none;
    }  
}
</style>
