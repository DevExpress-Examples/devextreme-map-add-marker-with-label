window.Application9 = window.Application9 || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    DevExpress.devices.current({ platform: "generic" });

    Application9.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Application9,
        navigationType: Application9.config.navigationType,
        navigation: Application9.config.navigation
    });
    Application9.app.router.register(":view/:id", { view: "home", id: undefined });

    Application9.app.navigate();
});
