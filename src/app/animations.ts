import { trigger, style, animate, transition ,state} from '@angular/animations';



export let fadein = trigger('fadein', [transition('void => *', [style({ opacity: 0 }), animate(2000)])])