"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const games_routes_1 = __importDefault(require("./routes/games.routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)()); // Use this after the variable declaration
app.use('/api', games_routes_1.default);
app.listen(3001);
console.log("Server port", 3001);
