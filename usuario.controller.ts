import { Request, Response } from 'express'
import { UsuarioService } from './usuario.service'

class UsuarioController {
    async create(req: Request, res: Response) {
        const usuario = await new UsuarioService().create(req.body)
        return res.json(usuario)
    }
}

export default new UsuarioController()