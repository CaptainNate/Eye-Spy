import { clientsClaim } from "workbox-core";
import { precacheAndRoute } from "workbox-precaching";

clientsClaim();

/* eslint-disable-next-line no-restricted-globals */
self.skipWaiting();

/* eslint-disable-next-line no-restricted-globals */
precacheAndRoute(self.__WB_MANIFEST);