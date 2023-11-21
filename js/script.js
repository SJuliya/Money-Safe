import {financeControl} from "./financeControl.js";
import {reportControl} from "./reportControl.js";
import {datalistControl} from "./datalistControl.js";

const init = () => {
    financeControl();
    reportControl();
    datalistControl();
};

init();

