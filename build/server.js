"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get('/', (req, res) => {
    res.json({ msg: "Hola mundo" });
});
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
    console.log(`Escuchando ${PORT}`);
});
//# sourceMappingURL=server.js.map