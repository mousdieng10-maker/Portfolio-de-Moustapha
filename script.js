import {call, callAll} from './call.js';
import {hide, show} from './trans.js';

const hiddenNav = call("#hiddenMenu");
const bars = call(".fa-bars");
const clickables = callAll(".clickable");
const back = call("#back");
hide(hiddenNav);

bars.onclick = function() {
    if (hiddenNav.style.display === "none") {
        show(hiddenNav);
        document.body.style.overflow = "hidden";
        for(const clickable of clickables) {
            clickable.onclick = function() {
                hide(hiddenNav);
                document.body.style.overflow = "auto";
            }
            back.onclick = function() {
                hide(hiddenNav);
                document.body.style.overflow = "auto";
            }
        }
    } 
    else {
        hide(hiddenNav);
        document.body.style.overflow = "auto";
    }
}

