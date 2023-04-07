import LAYERS from "../constants/LAYERS";
import layers from "../static/layers";

const getLowerLayers = (layer: LAYERS): LAYERS[] => {
  if (layers.includes(layer)) {
    return layers.slice(layers.indexOf(layer) + 1);
  } else {
    return [];
  }
};

export default getLowerLayers;
