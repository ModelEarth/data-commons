// See https://observablehq.com/framework/config for documentation.
export default {
  // The project’s title; used in the sidebar and webpage titles.
  title: "Data Commons",
  head: '<link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon"><script type="text/javascript" src="/localsite/js/localsite.js?showheader=true"></script>',
  footer: '<style>#observablehq-footer{margin-top:40px;border-top:1px solid #ccc;padding-top:10px;}</style>Built with <a href="https://observablehq.com" target="_blank">Observable</a> and <a href="https://DataCommons.org" target="_blank">Google Data Commons</a> by our <a href="/projects/">Model.earth Project Team</a>.',

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  pages: [],
  pagesX: [
    {name: "1. Great Jobs", path: "/jobs"},
    {name: "2. Healthy Food", path: "/food"},
    {name: "3. Excellent Health", path: "/health"},
    {name: "4. Quality Education", path: "/education"},
    {name: "5. Gender Equality", path: "/opportunity"},
    {name: "6. Clean Water", path: "/water"},
    {name: "7. Energy", path: "/energy"},
    {name: "8. Vibrant Economies", path: "/economy"},
    {name: "9. Local Innovation", path: "/innovation"},
    {name: "10. Inclusion", path: "/inclusion"},
    {name: "11. Biodiversity", path: "/biodiversity"},
    {name: "12. Conservation", path: "/conservation"},
    {name: "13. Air and Climate", path: "/air"},
    {name: "14. Aquatic Life", path: "/aquatic"},
    {name: "15. Abundant Wildlife", path: "/wildlife"},
    {name: "16. Peace and Justice", path: "/peace"},
    {name: "17. Partnerships", path: "/partners"},
    {name: "18. Balanced Budgets", path: "/balanced"},
    {name: "19. Fast Reliable Transit", path: "/transit"},
    {name: "20. High Speed Internet", path: "/internet"},
    {name: "21. Expanding Livable Zones", path: "/space"},
  ],

  // Some additional configuration options and their defaults:
  // theme: "default", // try "light", "dark", "slate", etc.
  // header: "header", // what to show in the header (HTML)
  // footer: "Built with Observable.", // what to show in the footer (HTML)
  // toc: true, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  // root: "docs", // path to the source root for preview
  // output: "dist", // path to the output root for build
  // search: true, // activate search
};
