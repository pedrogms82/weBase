export interface Usuario {
    Token: any;
    Nombre: string;
    Apellidos: string;
    Email: string;
    Empresa: string;
    isLogged: boolean;
}

export interface LoginResponse {
  success: boolean;
  userario: Usuario;
  token: string;
}
