import "../content/badge.css";

import { BADGE_ID } from "../utils/constants";

export function injectBadge(): void {

    if(document.getElementById(BADGE_ID))
        return;

    const badge = document.createElement("div");

    badge.id = BADGE_ID;

    badge.innerText = "CUE";

    document.body.appendChild(badge);

}