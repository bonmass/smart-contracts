import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BonMassModule = buildModule("BonMass", (m) => {
  const BonMass = m.contract("BonMass");

  return { BonMass };
});

export default BonMassModule;
