import { ApiResponse } from "../../models/shared/apiResponse";
import { UsuarioFormAgregar } from "../../models/usuario/usuario";
import { ConstantsRoutes } from "../../utils/constants/constantsRoutes";
import { post } from "../../utils/services/api-client.service";

export class UsuarioService {

  //Funcion que llama al api con los parametros: formulario y url del api
  public addUsuario(form: UsuarioFormAgregar): Promise<ApiResponse<string>> {
    return post<UsuarioFormAgregar>(ConstantsRoutes.USUARIO_ADD, form);
  }
  
}
