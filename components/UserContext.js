/******
 * Authors :  Alexis LEGRAS, Alexis LEPRESLE, Loick LEPREVOST, Matthis RIVAT et Pierre LE CORFF
 * Date :  2019/2020
 * Description : CvCreator, DUT Informatique 
******/
import { createContext } from 'react';

const UserContext = createContext({
  sectionSelect: "À Propos",
  colorHeaderInitial: "#00c4a7",
  colorContentInitial: "whitesmoke",
  pictureSizeInitial: "is-96x96",
  policeInitial: `Arial`,
  espacementInitial: `12`,
  
  policeSizeTitleInitial: `12`,
  policeSizeSubTitleInitial: `10`,
  policeSizeContentInitial: `8`,
  policeSizeTitleNameInitial: `15`,

  isLogInitial: false,
  idInitial: false,
  sectionaboutLateralInitial: `left`,
  espacementLateralInitial: "140",
  updatesectionSelect: changeValue => { },
  updateformValue: changeValue => { },
})



export default UserContext;