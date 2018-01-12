import header from './header'
import footer from './footer'
import page from './page'
import row from './row'
import nav from './nav'

export default {
    install: function (Vue) {
        Vue.component('ui-header', header)
        Vue.component('ui-footer', footer)
        Vue.component('ui-page', page)
        Vue.component('ui-row', row)
        Vue.component('ui-nav', nav)
    }
}
