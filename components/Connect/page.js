import React from "react";
import {createThirdwebClient} from "thirdweb";
import {ThirdwebProvider, ConnectButton} from "thirdweb/react";
import {createWallet} from "thirdweb/wallets";

const client = createThirdwebClient({clientId: "173c7eeee7a6ad6230b6b9249c522986"});
const wallets = [createWallet("io.metamask"), createWallet("app.phantom")];
const Connect = () => {
  return (
    <ThirdwebProvider>
      <ConnectButton
        client={client}
        wallets={wallets}
      />
    </ThirdwebProvider>
  );
};

export default Connect;
