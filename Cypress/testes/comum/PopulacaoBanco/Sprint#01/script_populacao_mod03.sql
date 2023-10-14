USE athlantic;

INSERT INTO `athlantic`.`patrocinadores` (`PTS_TELEFONE`, `PTS_SITE_URL`, `PTS_CPF_CNPJ`, `PTS_PESSOA_FISICA`, `PTS_DATA_CADASTRO`, `PTS_NOME`, `PTS_EMAIL`, `PTS_ATIVO`) VALUES ('(19) 99782-4392', 'setoguchi.com', '893.153.750-68', '1', '2023-08-04', 'Alberto Setoguchi Júnior', 'albertosetoguchi@gmail.com', '1');

INSERT INTO `athlantic`.`patrocinadores` (`PTS_TELEFONE`, `PTS_SITE_URL`, `PTS_CPF_CNPJ`, `PTS_PESSOA_FISICA`, `PTS_DATA_CADASTRO`, `PTS_NOME`, `PTS_EMAIL`, `PTS_ATIVO`) VALUES ('(11) 94965-2704', 'CaduJn.com', '363.333.308-84', '1', '2023-05-02', 'Carlos Eduardo Rincon Junior', 'caduzin20@gmail.com', '1');

INSERT INTO `athlantic`.`fornecedores` (`FOR_NOME`, `FOR_DESCRICAO`, `FOR_CONTATO`, `FOR_ENDERECO`, `FOR_ATIVO`) VALUES ('AB Confecções', 'Confecção de camisetas personalizadas', '1938118500', 'R. Francisco Franco de Godoy Bueno, 801 - Lot. Cidade Nova, Mogi Guaçu - SP, 13845-180', '1');

INSERT INTO `athlantic`.`fornecedores` (`FOR_NOME`, `FOR_DESCRICAO`, `FOR_CONTATO`, `FOR_ENDERECO`, `FOR_ATIVO`) VALUES ('Canecas&CIA', 'Confecção de canecas personalizadas', '1621547890', 'R. Seu Jorge, 354, São João da Boa Vista - SP, 13330-130', '1');

INSERT INTO `athlantic`.`produtos` (`PRO_NOME`, `PRO_DESCRICAO`, `PRO_QUANTIDADE`, `PRO_STATUS`, `PRO_EXCLUSIVIDADE`, `PRO_EXCLUIDO`, `FK_FORNECEDORES_FOR_ID`) VALUES ('Camiseta V2023 Tamanho M', 'Camiseta Coleção Verão 2023 Tamanho M', '50', 'Ativo', '0', '0', '1');

INSERT INTO `athlantic`.`produtos` (`PRO_NOME`, `PRO_DESCRICAO`, `PRO_QUANTIDADE`, `PRO_STATUS`, `PRO_EXCLUSIVIDADE`, `PRO_EXCLUIDO`, `FK_FORNECEDORES_FOR_ID`) VALUES ('Caneca V2023', 'Caneca 2023', '50', 'Ativo', '0', '0', '2');

INSERT INTO `athlantic`.`administradores` (`ADM_NOME`, `ADM_SENHA`, `ADM_EMAIL`) VALUES ('Vini Vitto', 'BarataTonta01', 'vinivitto@hotmail.com');

INSERT INTO `athlantic`.`atleticas` (`ATL_NOME`, `ATL_LEMA`, `ATL_ATIVO`, `ATL_DESCRICAO`, `ATL_LOGO`, `ATL_INSTITUICAO_ENSINO`, `FK_ADMINISTRADORES_ADM_ID`) VALUES ('Associação Atlética Acadêmica Arthur Chiodi', 'Venha ser um Lagarto Doido', '1', 'A Atlética Arthur Chiodi tem como objetivos representar os estudantes dos cursos superiores, proporcionar a integração e socialização entre os estudantes de todos os semestres, promover eventos, montar equipes esportivas para campeonatos e dar voz e apoio aos alunos em questões que envolvem a Instituição de Ensino.' , 'https://www.sbv.ifsp.edu.br/images/2023/LogoAtletica.jpeg', 'Instituto Federal de São Paulo - Campus São João da Boa Vista', '1');

INSERT INTO `athlantic`.`eventos_sociais` (`EVS_PRECO`, `EVS_DATAEVENTO`, `EVS_TIPOENTRADA`, `EVS_DESCRICAO`, `EVS_IMAGEMPROMOCIONAL`, `EVS_NOME`, `EVS_ENDERECOEVENTO`, `FK_ATLETICAS_ATL_ID`) VALUES ('20.00', '2023/06/22', '1', 'QUEM NÃO AMA UMA FESTA JUNINA?
ARRAIÁ DA FEDERAL
venham curtir uma noite com a gente!!
- Venham a caráter 
- Open cooler 
- Ás 21h no dia 22/06', 'https://www.instagram.com/p/CtT5Z0WriHo/','ARRAIÁ DA FEDERAL', 'Rua da festa, 20', '1');

INSERT INTO `athlantic`.`patrocinios` (`PAT_IMAGEM`, `PAT_DATAFINAL`, `PAT_DATAINICIAL`, `PAT_VALOR`, `PAT_NOME`, `PAT_DESCRICAO`, `FK_ATLETICAS_ATL_ID`, `FK_PATROCINADORES_PTS_ID`) VALUES ('https://img1.gratispng.com/20180613/yhj/kisspng-winnipeg-transit-logo-management-business-sponsorship-5b21a6bdc58167.041907261528932029809.jpg', '2024-08-18', '2022-08-18', '100.00', 'CaduJn', 'Patrocínio com o CaduJn', '1', '2');