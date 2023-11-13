import {Router} from 'express';
import {Prisma, PrismaClient} from "@prisma/client";
import {DefaultArgs} from "@prisma/client/runtime/library";



const router:Router = Router();
const prisma:PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs> = new PrismaClient()

router.get('/games', async (req, res) =>{
    const games: {id: number; location: string; date: Date; teamLocal:string ; teamAway: string; image: string| null; type:number ;}[] = await prisma.game.findMany()
    res.status(200).send(games)
})

router.post('/games', async (req, res) => {
    const newGame: {id: number; location: string; date: Date; teamLocal:string; teamAway:string; image: string| null; type:number ;} = await prisma.game.create({
        data:req.body
    })
    res.json(newGame)
})

router.get('/games/:id', async(req, res) =>{
    const game: {id: number; location: string; date: Date; teamLocal: string; teamAway: string; image: string| null; type:number ;} | null = await prisma.game.findUnique({
        where:{
            id: +req.params.id
        }
    })
    return res.status(200).json(game)
})

router.delete('/games/:id', async (req, res) => {
    const game: {id: number; location: string; date: Date; teamLocal:string; teamAway:string; image: string| null; type:number ;} = await prisma.game.delete({
        where:{
            id: +req.params.id
        }
    })

    return res.status(200).json(game)
})

router.put('/games/:id', async(req, res) => {
    const game: {id: number; location: string; date: Date; teamLocal: string; teamAway: string; image: string| null; type:number ;} = await prisma.game.update({
        where:{
            id: +req.params.id
        },
        data:req.body
    })
    return res.status(200).json(game)
})

export default router;