import LAYERS from "constants/LAYERS";

export const getLowerLayers = (layer: string) => {
  if (LAYERS.includes(layer)) {
    return LAYERS.slice(LAYERS.indexOf(layer) + 1);
  } else {
    return [];
  }
};

export const getUpperLayers = (layer: string) => {
  if (LAYERS.includes(layer)) {
    return LAYERS.slice(0, LAYERS.indexOf(layer));
  } else {
    return [];
  }
};
