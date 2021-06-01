const API = "https://api.spacexdata.com/v4/";

export const links = [
  {
    id: 1,
    title: "capsules",
    API: `${API}capsules`,
    headers: ["type", "status"],
  },
  {
    id: 2,
    title: "crew",
    API: `${API}crew`,
    headers: ["name", "agency"],
  },
  {
    id: 3,
    title: "rockets",
    API: `${API}rockets`,
    headers: ["name", "company"],
  },
  {
    id: 4,
    title: "starlink",
    API: `${API}starlink`,
    headers: ["object name", "launch date"],
  },
];
