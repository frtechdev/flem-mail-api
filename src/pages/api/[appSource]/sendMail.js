import { sendMailPortalPPE } from "controllers/sendMailControllers";
import nc from "next-connect";

// Handler do NextConnect
export default nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(405).json("Method Not Allowed");
  },
}).post(mailHandler(req, res));


/**
 * Handler da requisição POST para o envio do email
 * @param {*} req HTTP Request
 * 
 * appSource - nome da aplicação de origem da solicitação.
 * O nome da aplicação define os destinos da rota.
 * 
 * @param {*} res HTTP Response
 * @returns {*} Resposta HTTP contendo os dados dos emails enviados
 */
export async function mailHandler(req, res) {
  try {
    const { appSource } = req.query;
    switch (appSource) {
      case "Portal_PPE":
        const response = await sendMailPortalPPE(appSource, req.body);
        return res.status(200).json(response);
      default:
        const err = new Error("METHOD NOT ALLOWED");
        err.status = 405;
        console.log(err);
        return res
          .status(err.status || 405)
          .json(`flem-mail-api: ${err.message}`);
    }
  } catch (error) {
    res.status(500).json(JSON.stringify(error));
  }
}
