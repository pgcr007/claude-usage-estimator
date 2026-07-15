import { Logger } from "../utils/logger";

import { injectBadge } from "./injector";

import { startObserver } from "./observer";

Logger.log("Claude page detected");

injectBadge();

startObserver();