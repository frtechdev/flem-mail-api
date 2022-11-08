import { mailTransporter, prisma } from "services";
import { getAnexos } from "utils";

/**
 *
 * @param {*} appSource nome da aplicação de origem da solicitação
 * @param {*} data dados pertinentes ao email a ser enviado:
 *
 * contato - email do contato
 *
 * remetente - remetente do email
 *
 * assunto - assunto do email
 *
 * html - conteúdo (corpo) do email
 *
 * id - ID do objeto de referência do email
 *
 * anexosId - ID dos objetos dos anexos
 *
 * @returns {Promise} Promise contendo os dados dos emails enviados
 */
async function sendMailPortalPPE(appSource, data) {
  const mailsToCatalog = new Array().concat(
    ...data.map(({ contatos, ...mail }) =>
      contatos.map((cont) => ({ ...mail, ...cont }))
    )
  );

  // ADICIONA OS EMAILS AO BD
  const catalogMailsOnBd = await prisma.$transaction(
    mailsToCatalog.map(({ contato, remetente, assunto, html, id, anexosId }) =>
      prisma.mails.create({
        data: {
          appSource,
          from: `${remetente.nome} <${remetente.email}>`,
          to: contato,
          content: html,
          subject: assunto,
          attachmentsId: anexosId,
          referenceObjId: id,
        },
      })
    )
  );

  // ENVIA OS EMAILS EM FILA, BASEADO EM UM ARRAY DE PROMISE,
  //  COM OS DADOS LISTADOS ANTERIORMENTE
  const mailStatus = await Promise.all(
    catalogMailsOnBd.map(
      async ({ id, to, from, subject, content: html, attachmentsId }) => {
        if (attachmentsId) {
          const parsedAttachments = JSON.parse(attachmentsId);
          const anexos = await Promise.all(
            parsedAttachments.map(({ id }) => getAnexos(appSource, id))
          );

          return mailTransporter.sendMail({
            to,
            from,
            subject,
            html,
            messageId: id,
            attachments: anexos,
          });
        }

        return mailTransporter.sendMail({
          to,
          from,
          subject,
          html,
          messageId: id,
        });
      }
    )
  );

  return mailStatus;
}

export default sendMailPortalPPE;
