/**
 * vue-bundle.js - the main vue bundle including vue (standalone) and common components used across the app
 *
 * 
 * VUE BUILD & INSTANCING COMPONENTS
 *
 *   Components should be designed in a way that they are *instanced* by Javascript into the page.
 *
 *   For example, the mobile nav is not generated unless user click/tap the hamburger icon, only then
 *   the mobile nav component is instanced and generated into the page.
 *
 *   Why?
 *   
 *   - Speed:          components are pre-compiled.
 *       
 *   - Optimization:   eventually, we will want to switch to the runtime-only build of Vue, to
 *                     further reduce page load. The run-time-only can not parse templates found
 *                     in the html pages.
 *
 *   - Future:         in the future, if we want to switch some parts of the site to a SPA
 *                     like functionality, this will be much easier.
 *
 *
 * EXPORTING COREJS
 *
 *   CoreJS is meant to be a small collection of utlity for dom manipulation. It is used by
 *   Vue components. It can also be used by the inline Javascript code output in the php
 *   templates.
 *
 *
 * DONT USE '$' 
 *
 *   CoreJS is NOT exported as '$' because that would be a nightmare if we have to refactor.
 *   (ie. grep ... will return hundreds of matches)
 *
 *   It is exported as 'CoreJS'. For convenience inline JS can assign to '$$', not '$'. This
 *   won't match anything else in the project.
 *
 *     var $$ = CoreJS;
 * 
 * 
 * NOTES
 *
 *   For vue-loader
 *
 *   $ npm install vue@2.1.6 --save
 *   
 */

// Vue : bundle "standalone" build with the components
import Vue from 'vue'
import CoreJS from './lib/coreJS.js'

// turn off annoying messages 
Vue.config.productionTip = false
Vue.config.devtools = false;

// include site-wide mobile navigation in the root bundle (for the landing page)
import KoohiiAside     from 'components/Aside.js'
import KoohiiNavMenu   from 'components/KoohiiNavMenu.js'

// make available to the Vue instance used in the web app's pages (non-SPA)
window.Vue = Vue

// export our DOM library for inline Javascript code
window.CoreJS = CoreJS

// namespace for our front-end assets
window.Koohii = {
  UX: {
    KoohiiAside,
    KoohiiNavMenu
  }
}
