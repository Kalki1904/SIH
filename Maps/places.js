// Data for Jharkhand Tourist Places
const places = [
  {
    id: "dassam-fall",
    name: "Dassam Falls",
    category: "Waterfalls",
    coords: { top: "59%", left: "45%" },
    img: "https://imgs.search.brave.com/lOl8Wlo92PWbxVqlyOcMUQbLrp0BTa-uwHa0Ln4ti_o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hay1k/LnRyaXBjZG4uY29t/L2ltYWdlcy8wd3cw/czEyMDAwOHlkeTJw/NDc4OTFfV18xNDQw/XzgxMF9RODAud2Vi/cD9wcm9jPXNvdXJj/ZS90cmlwJnByb2M9/c291cmNlL3RyaXA",
    desc: "A scenic waterfall near Ranchi, perfect for nature walks and photography."
  },
  {
    id: "hundru-fall",
    name: "Hundru Falls",
    category: "Waterfalls",
    coords: { top: "58%", left: "48%" },
    img: "https://imgs.search.brave.com/80fmldjRcQ0bw8gb9_dDAegnKOTyJECdoNfx2RKR54k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcx/LmFkdmlzb3IudHJh/dmVsL2ZzNDQweDQ0/MHB4LUh1bmRydV9G/YWxsc18xMS5qcGc",
    desc: "One of the highest waterfalls in Jharkhand, offering breathtaking natural beauty."
  },
  {
    id: "jonha-fall",
    name: "Jonha Falls",
    category: "Waterfalls",
    coords: { top: "60%", left: "50%" },
    img: "https://imgs.search.brave.com/XomR_NonfSSMjUY2KlTcR_PbcSflG1wgSLGH0ngCJDo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MDcvODMvNDUvZjUv/am9uaGEtZmFsbHMu/anBn",
    desc: "Also known as Gautamdhara Falls, popular for its serene surroundings."
  },
  {
    id: "baidyanath-temple",
    name: "Baba Baidyanath Temple",
    category: "Temples",
    coords: { top: "30%", left: "68%" },
    img: "https://imgs.search.brave.com/EnsYhGwZOLOfNz4w3ot7qPcc4gOgWzQmqpqPJiRMZP0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMyLnRyaXBvdG8u/Y29tL21lZGlhL2Zp/bHRlci90c3QvaW1n/LzEwNDI0MzMvVHJp/cERvY3VtZW50LzE1/OTkxMzUzNDVfMTU5/OTEzNTM0MjMzNy5q/cGcud2VicA",
    desc: "One of the twelve Jyotirlingas in India, attracting thousands of devotees every year."
  },
  {
    id: "betla-park",
    name: "Betla National Park",
    category: "Wildlife",
    coords: { top: "62%", left: "38%" },
    img: "https://imgs.search.brave.com/vg-R9c0__Xn6Y1-AkHgNktl0YDrA_R4hvJAz8Nd-FHY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaXRl/Lm91dGxvb2tpbmRp/YS5jb20vdHJhdmVs/bGVyL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE3LzA0L2JldGxh/MV9GSS02NDB4MzYw/LmpwZw",
    desc: "Famous for its wildlife and forests, located in Palamu district."
  },
  {
    id: "patratu-valley",
    name: "Patratu Valley",
    category: "Hills",
    coords: { top: "55%", left: "44%" },
    img: "https://imgs.search.brave.com/2aUIctSqm45QqVSiXVAkwlLr6mpy2zKC5C2e8TQkC4w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMyLnRyaXBvdG8u/Y29tL21lZGlhL2Zp/bHRlci90c3QvaW1n/LzE3NzY2MTgvU3Bv/dERvY3VtZW50LzE1/NzQyMTgyNjFfMTU3/NDIxODI0MzIyOC5q/cGcud2VicA",
    desc: "A picturesque valley near Ranchi, famous for its winding roads and stunning views."
  },
  {
    id: "dalma-national",
    name: "Dalma Wildlife Sanctuary",
    category: "Wildlife",
    coords: { top: "58%", left: "52%" },
    img: "https://imgs.search.brave.com/Bim44vJbssgw7iKd_qdzhzD_X_i9FAaMZ_V9Q0RjX4E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL3YyL2Nv/bXAvamFtc2hlZHB1/ci9sNC8wNjU3cHg2/NTcueDY1Ny4xNDEy/MjMxODAyMjEudzNs/NC9jYXRhbG9ndWUv/ZGFsbWEtd2lsZGxp/ZmUtc2FuY3R1YXJ5/LWphbXNoZWRwdXIt/aG8tamFtc2hlZHB1/ci10b3VyaXN0LWF0/dHJhY3Rpb24tczI3/dW84dnluNi5qcGc_/dz0zODQwJnE9NzU",
    desc: "Famous for elephants, deer, and rich biodiversity, located near Jamshedpur in East Singhbhum."
  }
];

//top=-14 left=-22