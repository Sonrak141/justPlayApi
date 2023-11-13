"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
router.get('/games', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const games = yield prisma.game.findMany();
    res.status(200).send(games);
}));
router.post('/games', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newGame = yield prisma.game.create({
        data: req.body
    });
    res.json(newGame);
}));
router.get('/games/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = yield prisma.game.findUnique({
        where: {
            id: +req.params.id
        }
    });
    return res.status(200).json(game);
}));
router.delete('/games/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = yield prisma.game.delete({
        where: {
            id: +req.params.id
        }
    });
    return res.status(200).json(game);
}));
router.put('/games/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = yield prisma.game.update({
        where: {
            id: +req.params.id
        },
        data: req.body
    });
    return res.status(200).json(game);
}));
exports.default = router;
