import LAYERS from "../constants/LAYERS";

const getUpperLayers = (layer: string) => {
  if (LAYERS.includes(layer)) {
    return LAYERS.slice(0, LAYERS.indexOf(layer));
  } else {
    return [];
  }
};

export default getUpperLayers;
