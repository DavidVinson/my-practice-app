const date = Date.now();

export const DUMMY_DATA = [
  {
    id: "1",
    firstName: "David",
    lastName: "Vinson",
    isPI: false,
    isActive: true,
    createDate: date,
  },
  {
    id: "2",
    firstName: "Heather",
    lastName: "Vinson",
    isPI: false,
    isActive: true,
    createDate: date,
  },
  {
    id: "3",
    firstName: "Sloan",
    lastName: "Johnson",
    isPI: true,
    isActive: true,
    createDate: date,
  },
  {
    id: "4",
    firstName: "Marcia",
    lastName: "Johnson",
    isPI: true,
    isActive: true,
    createDate: date,
  },
];

export function getAllPerson() {
  return DUMMY_DATA;
}

export function getPersonById(id) {
  return DUMMY_DATA.find((p) => p.id === id);
}
