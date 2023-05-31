import LAYER from "../constants/LAYER";

const layers = Object.values(LAYER);

const getLowerLayers = (layer: LAYER): LAYER[] => {
  if (layers.includes(layer)) {
    return layers.slice(layers.indexOf(layer) + 1);
  } else {
    return [];
  }
};

export default getLowerLayers;
