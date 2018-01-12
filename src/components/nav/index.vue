<template>
    <nav class="page-nav">
        <ui-list>
            <ui-list-item title="首页" to="/">
                <ui-icon slot="left" value="grade"/>
            </ui-list-item>
            <ui-list-item title="规范" to="/standard">
                <ui-icon slot="left" value="grade"/>
            </ui-list-item>
            <ui-list-item title="组件" :open="menuOpen" toggleNested>
                <ui-icon slot="left" value="grade"/>
                <ui-list-item title="CSS 组件" slot="nested" to="/css">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="Badge" slot="nested" to="badge">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="Pager" slot="nested" to="pager">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="Button" slot="nested" to="button">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="Form" slot="nested" to="form">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="Nav" slot="nested" to="nav">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
            </ui-list-item>
            <ui-list-item title="开发" :open="menuOpen" toggleNested>
                <ui-icon slot="left" value="grade"/>
                <ui-list-item title="网页" slot="nested" to="/web">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="Android" slot="nested" to="/android">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="iOS" slot="nested" to="/ios">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
            </ui-list-item>
            <ui-list-item title="下载" :open="menuOpen" toggleNested>
                <ui-icon slot="left" value="grade"/>
                <ui-list-item title="素材" slot="nested" to="/resource">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="原型" slot="nested" to="/prototype">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="设计图" slot="nested" to="/design">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
            </ui-list-item>
            <ui-list-item title="关于" to="/about">
                <ui-icon slot="left" value="send"/>
            </ui-list-item>
        </ui-list>
        <ui-list v-if="categories.length">
            <mu-sub-header>清单</mu-sub-header>
            <ui-list-item :title="category.name" :to="`/categories/${category.id}`"
                          v-for="category in categories" :key="category.id"></ui-list-item>
        </ui-list>
        <ui-dialog :dialogClass="['list-dialog']" :open="dialog" title="新建清单" @close="close">
            <ui-text-field v-model="name" hintText="清单名称"/>
            <ui-flat-button slot="actions" @click="close" primary label="取消"/>
            <ui-flat-button slot="actions" primary @click="save" label="保存"/>
        </ui-dialog>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                menuOpen: false,
                categories: [],
                dialog: false,
                name: ''
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.categories = this.$storage.get('categories')
                if (!this.categories) {
                    this.categories = []
                }
            },
            save() {
                this.dialog = false

                this.categories.push({
                    id: '' + new Date().getTime(),
                    name: this.name
                })
                this.$storage.set('categories', this.categories)
                this.name = ''
            },
            open () {
                this.dialog = true
            },
            close () {
                this.dialog = false
            }
        }
    }
</script>

<style>
    .list-dialog {
        width: 300px;
    }
    .page-nav {
        position: absolute;
        top: 0;
        width: 256px;
        bottom: 0;
        border-right: 1px solid #eee;
    }
    .bottom-list {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }
</style>
