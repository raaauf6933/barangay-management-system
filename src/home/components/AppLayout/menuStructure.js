export const createMenuStructure = () => {
  return [
    {
      name: "home",
      label: "Home",
      position: "left",
      url: "/",
    },
    {
      name: "our_barangay",
      label: "Our Barangay",
      position: "left",
      children: [
        {
          name: "mission_vision",
          label: "Mission and Vision",
          url: "/mission_vision",
        },
        {
          name: "barangay_officials",
          label: "Barangay Officials",
          url: "/barangay_officials",
        },
      ],
    },
    {
      name: "portal",
      label: "Portal",
      position: "right",
      url: "/portal",
    },
  ];
};
