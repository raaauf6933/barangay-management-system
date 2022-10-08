export const createMenuStructure = () => {
  return [
    {
      name: "home",
      label: "Home",
      position: "right",
      url: "/",
    },
    {
      name: "barangay_officials",
      label: "Barangay Officials",
      position: "right",
      url: "/barangay_officials",
    },
    {
      name: "contact_us",
      position: "right",
      label: "Contact Us",
      url: "/contact_us",
    },
    {
      name: "portal",
      label: "Portal",
      position: "right",
      url: "/portal",
    },
  ];
};
