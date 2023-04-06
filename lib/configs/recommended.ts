export default {
  plugins: ["fsd-principles"],
  rules: {
    "fsd-principles/lower-layer-isolation": "error",
    "fsd-principles/same-layer-slice-isolation": "error",
    "fsd-principles/relative-import": "error",
    "fsd-principles/public-import": "error",
    "fsd-principles/index-naming": "error",
  },
};
