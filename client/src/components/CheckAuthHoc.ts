export default function checkAuthHoc(componentName) {
  return {
    name: componentName,
    mounted() {
      // bus.$emit("off:loading");
    },
    render(h) {
      // return h(ListComponent);
    },
  };
}
