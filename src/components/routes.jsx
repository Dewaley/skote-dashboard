import Wallet from "../pages/Wallet";
import BuyOrSell from "../pages/BuyOrSell";
import Exchange from "../pages/Exchange";
import Lending from "../pages/Lending";
import Calendar from "../pages/Calendar";
import FileManager from "../pages/FileManager";

const routes = [
  {
    index: true,
    element: <Wallet />,
  },
  {
    path: "buy-sell",
    index: false,
    element: <BuyOrSell />,
  },
  {
    path: "exchange",
    index: false,
    element: <Exchange />,
  },
  {
    path: "lending",
    index: false,
    element: <Lending />,
  },
  {
    path: "orders",
    index: false,
    element: <Lending />,
  },
  {
    path: "kyc-application",
    index: false,
    element: <Lending />,
  },
  {
    path: "ico-landing",
    index: false,
    element: <Lending />,
  },
  {
    path: "calendar",
    index: false,
    element: <Calendar />,
  },
  {
    path: "filemanager",
    index: false,
    element: <FileManager />,
  },
];

export default routes;
