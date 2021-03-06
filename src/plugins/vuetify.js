import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: colors.blue.darken1,
                secondary: colors.yellow.lighten5,
                accent: colors.deepOrange.base
            }
        }
    }
});
