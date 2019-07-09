/* eslint-disable import/prefer-default-export */
function isVideoFile(file: File) {
  const videoExtensions = ['.mp4', '.mkv', '.avi'];

  return videoExtensions.some(extension => file.name.endsWith(extension));
}

export { isVideoFile };
