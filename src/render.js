const videoSelectBtn = document.getElementById('videoSelectBtn')
videoSelectBtn = getVideoSources;

const { desktopCapturer, remote } = require('electron');
const { Menu } = remote;

// Get the available video sources
async function getVideoSources() {
  const inputSources = await desktopCapturer.getSources({
    types: ['window', 'screen']
  });

  const videoOptionsMenus = Menu.buildFromTemplate(
    inputSources.map(source => {
      return {
        label: source.name,
        click: () => selectSource(source)
      };
    })
  );

  videoOptionsMenus.popup();
}