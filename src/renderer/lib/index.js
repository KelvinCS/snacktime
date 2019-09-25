import path from 'path';
import * as url from 'url';

const isDevelopment = process.env.NODE_ENV !== 'production';

export function getStatic(asset, isIcon = false) {
  if (isDevelopment && !isIcon) {
    return url.resolve(window.location.origin, asset);
  }
  return path.resolve(__static, asset);
}
