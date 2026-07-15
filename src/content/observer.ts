import { Logger } from "../utils/logger";

export function startObserver(): void {

    const observer = new MutationObserver(() => {

        Logger.log("DOM Updated");

    });

    observer.observe(document.body,{

        childList:true,

        subtree:true

    });

}