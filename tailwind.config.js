module.exports = {
  content: ["./node_modules/flowbite/**/*.js", "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
