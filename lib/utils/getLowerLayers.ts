import LAYERS from "../constants/LAYERS";

const getLowerLayers = (layer: string) => {
  if (LAYERS.includes(layer)) {
    return LAYERS.slice(LAYERS.indexOf(layer) + 1);
  } else {
    return [];
  }
};

export default getLowerLayers;
