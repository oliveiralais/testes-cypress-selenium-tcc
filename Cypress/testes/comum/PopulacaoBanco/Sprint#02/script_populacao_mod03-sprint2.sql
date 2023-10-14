INSERT INTO `athlantic`.`patrocinadores` (`PTS_TELEFONE`, `PTS_SITE_URL`, `PTS_CPF_CNPJ`, `PTS_PESSOA_FISICA`, `PTS_DATA_CADASTRO`, `PTS_NOME`, `PTS_EMAIL`, `PTS_ATIVO`) VALUES ('(19) 99782-4392', 'setoguchi.com', '893.153.750-68', '1', '2023-08-04', 'Alberto Setoguchi Júnior', 'albertosetoguchi@gmail.com', '1');

INSERT INTO `athlantic`.`patrocinadores` (`PTS_TELEFONE`, `PTS_SITE_URL`, `PTS_CPF_CNPJ`, `PTS_PESSOA_FISICA`, `PTS_DATA_CADASTRO`, `PTS_NOME`, `PTS_EMAIL`, `PTS_ATIVO`) VALUES ('(11) 94965-2704', 'CaduJn.com', '363.333.308-84', '1', '2023-05-02', 'Carlos Eduardo Rincon Junior', 'caduzin20@gmail.com', '1');

INSERT INTO `athlantic`.`fornecedores` (`FOR_NOME`, `FOR_DESCRICAO`, `FOR_CONTATO`, `FOR_ENDERECO`, `FOR_ATIVO`) VALUES ('AB Confecções', 'Confecção de camisetas personalizadas', '1938118500', 'R. Francisco Franco de Godoy Bueno, 801 - Lot. Cidade Nova, Mogi Guaçu - SP, 13845-180', '1');

INSERT INTO `athlantic`.`fornecedores` (`FOR_NOME`, `FOR_DESCRICAO`, `FOR_CONTATO`, `FOR_ENDERECO`, `FOR_ATIVO`) VALUES ('Canecas&CIA', 'Confecção de canecas personalizadas', '1621547890', 'R. Seu Jorge, 354, São João da Boa Vista - SP, 13330-130', '1');

INSERT INTO `athlantic`.`produtos` (`PRO_NOME`, `PRO_DESCRICAO`, `PRO_QUANTIDADE`, `PRO_STATUS`, `PRO_EXCLUSIVIDADE`, `PRO_EXCLUIDO`, `FK_FORNECEDORES_FOR_ID`) VALUES ('Camiseta Atletica 2023', 'Camisa DryFit perfeita para todo Lagarto Doido.', '50', 'Ativo', '1', '0', '1');

INSERT INTO `athlantic`.`produtos` (`PRO_NOME`, `PRO_DESCRICAO`, `PRO_QUANTIDADE`, `PRO_STATUS`, `PRO_EXCLUSIVIDADE`, `PRO_EXCLUIDO`, `FK_FORNECEDORES_FOR_ID`) VALUES ('Caneca V2023', 'Caneca 2023', '50', 'Ativo', '1', '0', '2');

INSERT INTO `athlantic`.`produtos` (`PRO_NOME`, `PRO_DESCRICAO`, `PRO_QUANTIDADE`, `PRO_STATUS`, `PRO_EXCLUSIVIDADE`, `PRO_EXCLUIDO`, `FK_FORNECEDORES_FOR_ID`) VALUES ('Tirante Verde', 'Tirante verde vendido avulso', '50', 'Ativo', '1', '0', '2');

INSERT INTO `athlantic`.`administradores` (`ADM_NOME`, `ADM_SENHA`, `ADM_EMAIL`) VALUES ('VictorBarsanele', '@p4ssW0rd', 'victor.barsanele@gmail.com');

INSERT INTO `athlantic`.`atleticas` (`ATL_NOME`, `ATL_LEMA`, `ATL_ATIVO`, `ATL_DESCRICAO`, `ATL_LOGO`, `ATL_INSTITUICAO_ENSINO`, `FK_ADMINISTRADORES_ADM_ID`) VALUES ('Associação Atlética Acadêmica Arthur Chiodi', 'Venha ser um Lagarto Doido', '1', 'A Atlética Arthur Chiodi tem como objetivos representar os estudantes dos cursos superiores, proporcionar a integração e socialização entre os estudantes de todos os semestres, promover eventos, montar equipes esportivas para campeonatos e dar voz e apoio aos alunos em questões que envolvem a Instituição de Ensino.' , 'https://www.sbv.ifsp.edu.br/images/2023/LogoAtletica.jpeg', 'Instituto Federal de São Paulo - Campus São João da Boa Vista', '1');

INSERT INTO `athlantic`.`usuarios` (`USU_ID`, `USU_SENHA`, `USU_INSTITUICAO_ENSINO`, `USU_ATIVO`, `USU_FOTO`, `USU_NOME`, `USU_DESCRICAO`, `USU_EMAIL`, `USU_SUSPENSO`, `FK_ATLETICAS_ATL_ID`, `FK_EQUIPES_EQP_ID`) VALUES (NULL, 'P@ssword', 'IFSP', '1', 'NULL', 'TESTE01', 'Teste01', 'teste@gmail.com', NULL, '1', NULL);

INSERT INTO `athlantic`.`eventos_sociais` (`EVS_PRECO`, `EVS_DATAEVENTO`, `EVS_TIPOENTRADA`, `EVS_DESCRICAO`, `EVS_IMAGEMPROMOCIONAL`, `EVS_NOME`, `EVS_ENDERECOEVENTO`, `FK_ATLETICAS_ATL_ID`) VALUES ('20.00', '2023/06/22', '1', 'QUEM NÃO AMA UMA FESTA JUNINA?
ARRAIÁ DA FEDERAL
venham curtir uma noite com a gente!!
- Venham a caráter 
- Open cooler 
- Ás 21h no dia 22/06', 'https://www.instagram.com/p/CtT5Z0WriHo/','ARRAIÁ DA FEDERAL', 'Rua da festa, 20', '1');