import usuarioModel from './usuario.schema'

export class UsuarioService {

    async create(usuario: any) {
        const createdUsuario = usuarioModel.create(usuario)

        return createdUsuario
    }
}
