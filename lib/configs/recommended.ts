export default {
  plugins: ["fsd-principles"],
  rules: {
    "fsd-principles/lower-layer-isolation": "error",
    "fsd-principles/same-layer-slice-isolation": "error",
  },
};
