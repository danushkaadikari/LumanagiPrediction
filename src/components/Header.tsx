import { useContext } from "react";

import MenuBar from "../assets/images/menu-bar.svg";
import WhiteLogo from "../assets/images/header-logo-white.svg";
import Button from "../UI/Button";
import { MetmaskContext } from "../contexts/MetmaskContextProvider";

export function Header() {
  const handleBuySell = () => {
    console.log("clicked on buy & sell");
  };
  const { connectHandler, account } = useContext(MetmaskContext);

  return (
    <>
      <div className="flex items-center mt-5 mb-10 w-screen px-20">
        <div className="w-2/3 flex items-center">
          <img src={MenuBar} alt="menu-bar" className="max-w-full" />
          <a className="w-full h-full" href="https://lumanagi.com">
            <img src={WhiteLogo} alt="logo" className="max-w-full ml-4 w-60 " />
          </a>
        </div>
        <div className="flex justify-end w-1/3 space-x-4">
          <Button
            color="default"
            onClick={handleBuySell}
            label="Buy & Sell"
            customStyle="!text-white border-white border border-opacity-50"
            title="Coming Soon!!"
            disabled={true}
          />
          <Button
            onClick={connectHandler}
            label={!!account ? account : "Connect Wallet"}
            color="default"
            disabled={!!account}
            customStyle="w-40 text-ellipsis overflow-hidden whitespace-nowrap"
            title={account ? account : ""}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
