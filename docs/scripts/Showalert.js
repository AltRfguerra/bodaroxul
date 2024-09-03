"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showAlert = showAlert;
// scripts/Showalert.js

function showAlert(message) {
  console.log('Alert should show:', message);
  alert('You clicked on: ' + message);
}