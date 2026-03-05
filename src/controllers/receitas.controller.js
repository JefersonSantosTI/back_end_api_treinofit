import obterRespostaReceitas from '../services/openai.service.js'


export const perguntaReceita = async (req, res) => {
    try {
        const { mensagens } = req.body

        if (!mensagens || mensagens.length === 0) {
            return res.status(400).json({
                erro: "É obrigatório enviar mensagens"
            })
        }

        const resposta = await obterRespostaReceitas(mensagens)

        res.json({ resposta })

    } catch (err) {
        res.status(500).json({
            erro: "Erro ao processar sua pergunta, tente novamente"
        })
    }
}

 