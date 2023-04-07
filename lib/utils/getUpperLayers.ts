import LAYERS from "../constants/LAYERS";
import layers from "../static/layers";

const getUpperLayers = (layer: LAYERS): LAYERS[] => {
  if (layers.includes(layer)) {
    return layers.slice(0, layers.indexOf(layer));
  } else {
    return [];
  }
};

export default getUpperLayers;
