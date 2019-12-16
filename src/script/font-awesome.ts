import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { VueConstructor } from 'vue';
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from '@fortawesome/vue-fontawesome';
import {
  faCopy,
  faShareSquare,
  faCheckCircle
} from '@fortawesome/free-regular-svg-icons';

library.add(faCopy, faShareSquare, faCheckCircle);

export default function(Vue: VueConstructor) {
  Vue.component('fa', FontAwesomeIcon);
  Vue.component('fal', FontAwesomeLayers);
  Vue.component('falt', FontAwesomeLayersText);

  dom.watch();
}
