import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
    manifest_version: 3,

    name: "Claude Usage Estimator",

    description:
        "Estimate Claude AI usage and conversation statistics.",

    version: "0.1.0",

    permissions: [
        "storage",
        "activeTab"
    ],

    host_permissions: [
        "https://claude.ai/*"
    ],

    action: {
        default_popup: "src/popup/popup.html"
    },

    background: {
        service_worker: "src/background/background.ts",
        type: "module"
    },

    content_scripts: [
        {
            matches: [
                "https://claude.ai/*"
            ],

            js: [
                "src/content/content.ts"
            ],

            css: [
                "src/content/content.css"
            ]
        }
    ]
});