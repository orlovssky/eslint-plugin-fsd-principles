import LAYER from "../constants/LAYER";

const layers = Object.values(LAYER);

const getUpperLayers = (layer: LAYER): LAYER[] => {
  if (layers.includes(layer)) {
    return layers.slice(0, layers.indexOf(layer));
  } else {
    return [];
  }
};

export default getUpperLayers;
