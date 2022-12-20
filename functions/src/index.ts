import {https} from "firebase-functions";
import {add, apply, cancel} from "./shifts";

exports.addShift = https.onCall(add);
exports.applyShift = https.onCall(apply);
exports.cancelShift = https.onCall(cancel);