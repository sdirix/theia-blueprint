const path = require("node:path");

module.exports = {
  packagerConfig: {
    appId: "eclipse.theiablueprint",
    applicationName: "TheiaBlueprint",
    asar: false,
    extraResources: "../../plugins"
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "TheiaBlueprint",
        iconUrl: "resources/icons/WindowsLauncherIcon/TheiaBluePrint.ico",
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
      config: {
        icon: "resources/icons/MacLauncherIcon/512-512-2.icns",
      },
    },
    {
      name: "@electron-forge/maker-deb",
      config: {
        icon: "resources/icons/LinuxLauncherIcon/512-512.png",
        options: {
          description: "This is Theia Blueprint"
        }
      },
    },
  ]
};
