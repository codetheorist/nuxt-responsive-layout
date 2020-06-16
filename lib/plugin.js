export default (ctx, inject) => {
  // Create new axios instance
  const layout = {};

  // Inject axios to the context as $axios
  ctx.$layout = layout;
  inject("layout", layout);
};
