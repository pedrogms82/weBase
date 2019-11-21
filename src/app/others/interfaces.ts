export interface Usuario {
    Token: any,
    Nombre: String,
    Apellidos: String,
    Email: String,
    Empresa: String,
    isLogged: boolean
}

export interface LoginResponse {
  success: boolean,
  userario: Usuario,
  token: string
}
