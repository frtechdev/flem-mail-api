import axiosClient from "axios";

// SERVIÇO DE CONEXÃO AXIOS PARA UPLOAD NA API DE ARQUIVOS
export const fileService = axiosClient.create({
  baseURL: `${process.env.NEXT_API_FILE_UPLOAD}`,
  timeout: 30000,
});
