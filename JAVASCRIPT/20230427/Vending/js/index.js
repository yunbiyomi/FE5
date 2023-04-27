import ColaGenerator from "./classes/colaCenerator.js";
import VendingMachineEvents from "./classes/vendingMachineEvents.js";

const colaGenerator = new ColaGenerator();
const vendingMachineEvents = new VendingMachineEvents();

await colaGenerator.setup();
vendingMachineEvents.bindEvent();