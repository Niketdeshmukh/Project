import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";

export default async function () {
  // testnet fanfurry contract
  let fanAddress =
    "juno16g5u456scj4ctdfupzklfn3s60gf4mrkkhlc06hszxetthx69w3svch6hf";
  let rpcEndpoint = "https://rpc.uni.juno.deuslabs.fi"; // Juno testnet
  let cosmClient = await CosmWasmClient.connect(rpcEndpoint);
  let fanInfo = await cosmClient.queryContractSmart(fanAddress, {
    all_club_ownership_details: {},
  });
  // console.log("FanFurry info", fanInfo);
  return fanInfo;
}

// start().then(() => {
//   console.log("Done.");
// });
