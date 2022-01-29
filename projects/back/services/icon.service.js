const { nativeImage } = require('electron');
const path = require('path');
const { LOGO_64_PX_PATH } = require('../constants/paths');

class IconService {
  nativeIcon = nativeImage.createFromPath(path.join(__dirname, LOGO_64_PX_PATH));
}

module.exports = new IconService();
