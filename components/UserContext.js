import { createContext } from 'react';


const UserContext = createContext({
  sectionSelect: "À Propos",
  colorHeaderInitial: "#00c4a7",
  colorContentInitial: "whitesmoke",
  pictureSizeInitial: "is-96x96",
  policeInitial: `Arial`,
  policeSizeInitial: `12`,
  espacementInitial: `3`,
  isLogInitial: false,
  idInitial: false,
  sectionaboutLateralInitial: `left`,

  updatesectionSelect: changeValue => { },
  updateformValue: changeValue => { },
})



export default UserContext;