import { Router } from 'express'
import UsuarioController from './src/usuarios/usuario.controller'

const routes = Router()
routes.get('/health-check')
routes.post('/usuarios', UsuarioController.create)

export {
    routes
}