import { basePath } from '../next.config';

export const getNextRenderIndex = (renderIndex, lastDataIndex) => {
  const nextIndex = renderIndex + 1;
  if (nextIndex > lastDataIndex) return 0;
  return nextIndex;
}

export const getPrevRenderIndex = (renderIndex, lastDataIndex) => {
  const nextIndex = renderIndex - 1;
  if (nextIndex < 0) return lastDataIndex;
  return nextIndex;
}

export const splitContentString = (string) => {
  return String(string).split(',');
}

export const buildImagePath = (src) => {
  return `${basePath}${src}`
}
