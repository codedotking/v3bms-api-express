"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.set("port", process.env.PORT || 3000);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(app.get("port"), () => {
    console.log(`port ${app.get("port")}`);
});
