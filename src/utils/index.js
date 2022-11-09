import { fileService } from "services/fileService";

/**
 * Define a rota para conseguir o arquivo específico baseado
 * em seu ID.
 * 
 * @param {*} appSource o nome da aplicação de origem que retém
 * o arquivo, ou a forma pela qual o arquivo está armazenado no Servidor.
 * @param {*} fileId o ID do arquivo.
 * @returns {Object} Objeto contendo os dados do arquivo selecionado
 */
export async function getAnexos (appSource, fileId){
  const { data, headers } = await fileService.get(
    `/${appSource}/downloadFile`,
    {
      params: {
        fileId,
      },
      responseType: "arraybuffer",
    }
  );

  return {
    filename: decodeURI(headers.filename),
    content: data,
    contentType: headers["file-content-type"],
  };
};
