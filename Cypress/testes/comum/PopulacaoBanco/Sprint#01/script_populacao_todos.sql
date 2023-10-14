/* INSERTS GERAL TODOS MÓDULOS */

USE athlantic;

INSERT INTO `administradores`(`ADM_ID`, `ADM_NOME`, `ADM_SENHA`, `ADM_EMAIL`) 
VALUES (1,'Administrador 1','123','adm@adm.com');
INSERT INTO `administradores` (`ADM_NOME`, `ADM_SENHA`, `ADM_EMAIL`) 
VALUES ('Vini Vitto', 'BarataTonta01', 'vinivitto@hotmail.com');

INSERT INTO `atleticas`(`ATL_ID`, `ATL_NOME`, `ATL_LEMA`, `ATL_ATIVO`, `ATL_DESCRICAO`, `ATL_LOGO`, `ATL_INSTITUICAO_ENSINO`, `FK_ADMINISTRADORES_ADM_ID`)
VALUES (1,'Atletica 1','Atletica 1 Lema',1,'Atletica 1 Desc','logo','IFSP','1');
INSERT INTO `atleticas` (`ATL_NOME`, `ATL_LEMA`, `ATL_ATIVO`, `ATL_DESCRICAO`, `ATL_LOGO`, `ATL_INSTITUICAO_ENSINO`, `FK_ADMINISTRADORES_ADM_ID`) 
VALUES ('Associação Atlética Acadêmica Arthur Chiodi', 'Venha ser um Lagarto Doido', '1', 'A Atlética Arthur Chiodi tem como objetivos representar os estudantes dos cursos superiores, proporcionar a integração e socialização entre os estudantes de todos os semestres, promover eventos, montar equipes esportivas para campeonatos e dar voz e apoio aos alunos em questões que envolvem a Instituição de Ensino.' , 'https://www.sbv.ifsp.edu.br/images/2023/LogoAtletica.jpeg', 'Instituto Federal de São Paulo - Campus São João da Boa Vista', '1');

INSERT INTO `modalidades_esportivas`(`MDE_ID`, `MDE_TIPO_DE_ESPORTE`, `MDE_NOME`, `MDE_GENERO`) 
VALUES (1,'0','Fut','0');
INSERT INTO `modalidades_esportivas` (`MDE_TIPO_DE_ESPORTE`, `MDE_NOME`, `MDE_GENERO`) 
VALUES ('1', 'Futsal', '1');
INSERT INTO `modalidades_esportivas` (`MDE_TIPO_DE_ESPORTE`, `MDE_NOME`, `MDE_GENERO`) 
VALUES ('1', 'Basquete', '1');

INSERT INTO `equipes`(`EQP_ID`, `EQP_TREINADOR`, `FK_ATLETICAS_ATL_ID`, `FK_MODALIDADES_ESPORTIVAS_MDE_ID`) 
VALUES (1,'Breno',1,1);

INSERT INTO `usuarios`(`USU_ID`, `USU_SENHA`, `USU_INSTITUICAO_ENSINO`, `USU_ATIVO`, `USU_FOTO`, `USU_NOME`, `USU_DESCRICAO`, `USU_EMAIL`,`FK_ATLETICAS_ATL_ID`, `FK_EQUIPES_EQP_ID`) 
VALUES (1,'pass','IFSP',1,'foto','User 1','User desc','user@user.com',1,1);
INSERT INTO `usuarios` (`USU_ID`, `USU_SENHA`, `USU_INSTITUICAO_ENSINO`, `USU_ATIVO`, `USU_FOTO`, `USU_NOME`, `USU_DESCRICAO`, `USU_EMAIL`, `USU_SUSPENSO`, `FK_ATLETICAS_ATL_ID`, `FK_EQUIPES_EQP_ID`) 
VALUES (NULL, 'senha123', 'IFSP', '1', NULL, 'gustavo', 'eu mesmo', 'gustavo_eu@gmail.com', NULL, '1', '1');
INSERT INTO `usuarios` (`USU_ID`, `USU_SENHA`, `USU_INSTITUICAO_ENSINO`, `USU_ATIVO`, `USU_FOTO`, `USU_NOME`, `USU_DESCRICAO`, `USU_EMAIL`, `USU_SUSPENSO`, `FK_ATLETICAS_ATL_ID`, `FK_EQUIPES_EQP_ID`) 
VALUES (NULL, 'laiso123', 'IFSP', '1', NULL, 'lais oliveira', 'eu mesmo', 'lais_oliveira@gmail.com', NULL, '1', '1');

INSERT INTO `autoridades` (`FK_MODALIDADE_ESPORTIVA_ID`, `ATD_CERTIFICACAO`, `ATD_TELEFONE`, `ATD_IDENTIFICACAO_FISCAL`, `ATD_NOME`, `ATD_EMAIL`, `ATD_FUNCAO`) 
VALUES ('1', '24124124145', '(14) 99774-5222', '023.885.170-28', 'Guilherme Moreira', 'guilherme@gmail.com', 'Bandeirinha');

INSERT INTO `requisicoes_usuarios` (`REQ_ID`, `REQ_NOME_USUARIO`, `REQ_SENHA`, `REQ_EMAIL`, `REQ_CONFIRMAR_SENHA`, `FK_ATLETICAS_ATL_ID`) 
VALUES ('1', 'João', 'EXEMPLO123', 'joao@gmail.com', 'EXEMPLO123', '1');
INSERT INTO `requisicoes_usuarios` (`REQ_ID`, `REQ_NOME_USUARIO`, `REQ_SENHA`, `REQ_EMAIL`, `REQ_CONFIRMAR_SENHA`, `FK_ATLETICAS_ATL_ID`) 
VALUES ('2', 'Luana', 'EXEMPLO123', 'luana@gmail.com', 'EXEMPLO123', '1');
INSERT INTO `requisicoes_usuarios` (`REQ_ID`, `REQ_NOME_USUARIO`, `REQ_SENHA`, `REQ_EMAIL`, `REQ_CONFIRMAR_SENHA`, `FK_ATLETICAS_ATL_ID`) 
VALUES ('3', 'Marcos', 'EXEMPLO123', 'marcos@gmail.com', 'EXEMPLO123', '1');
INSERT INTO `requisicoes_usuarios` (`REQ_ID`, `REQ_NOME_USUARIO`, `REQ_SENHA`, `REQ_EMAIL`, `REQ_CONFIRMAR_SENHA`, `FK_ATLETICAS_ATL_ID`) 
VALUES ('4', 'Paulo', 'EXEMPLO123', 'paulo@gmail.com', 'EXEMPLO123', '1');
INSERT INTO `requisicoes_usuarios` (`REQ_ID`, `REQ_NOME_USUARIO`, `REQ_SENHA`, `REQ_EMAIL`, `REQ_CONFIRMAR_SENHA`, `FK_ATLETICAS_ATL_ID`) 
VALUES ('5', 'henrique', 'EXEMPLO123', 'henrique@gmail.com', 'EXEMPLO123', '1');
INSERT INTO `requisicoes_usuarios` (`REQ_ID`, `REQ_NOME_USUARIO`, `REQ_SENHA`, `REQ_EMAIL`, `REQ_CONFIRMAR_SENHA`, `FK_ATLETICAS_ATL_ID`) 
VALUES ('6', 'pedro', 'EXEMPLO123', 'pedro@gmail.com', 'EXEMPLO123', '1');
INSERT INTO `requisicoes_usuarios` (`REQ_ID`, `REQ_NOME_USUARIO`, `REQ_SENHA`, `REQ_EMAIL`, `REQ_CONFIRMAR_SENHA`, `FK_ATLETICAS_ATL_ID`) 
VALUES ('7', 'proença', 'EXEMPLO123', 'proença@gmail.com', 'EXEMPLO123', '1');
INSERT INTO `requisicoes_usuarios` (`REQ_ID`, `REQ_NOME_USUARIO`, `REQ_SENHA`, `REQ_EMAIL`, `REQ_CONFIRMAR_SENHA`, `FK_ATLETICAS_ATL_ID`) 
VALUES ('8', 'manuel', 'EXEMPLO123', 'manuel@gmail.com', 'EXEMPLO123', '1');
INSERT INTO `requisicoes_usuarios` (`REQ_ID`, `REQ_NOME_USUARIO`, `REQ_SENHA`, `REQ_EMAIL`, `REQ_CONFIRMAR_SENHA`, `FK_ATLETICAS_ATL_ID`) 
VALUES ('9', 'diogo', 'EXEMPLO123', 'diogo@gmail.com', 'EXEMPLO123', '1');
INSERT INTO `requisicoes_usuarios` (`REQ_ID`, `REQ_NOME_USUARIO`, `REQ_SENHA`, `REQ_EMAIL`, `REQ_CONFIRMAR_SENHA`, `FK_ATLETICAS_ATL_ID`) 
VALUES ('10', 'Manoel', 'EXEMPLO123', 'manoel@gmail.com', 'EXEMPLO123', '1');

INSERT INTO `requisicoes_atleticas` (`REQ_ID`, `REQ_NOME_USUARIO`, `REQ_INSTITUICAO_ENSINO`, `REQ_SENHA`, `REQ_EMAIL`, `REQ_CONFIRMAR_SENHA`, `REQ_NOME_ATLETICA`, `REQ_LOGO_ATLETICA`, `REQ_DESCRICAO_ATLETICA`, `FK_ADMINISTRADORES_ADM_ID`) 
VALUES ('3', 'Arnaldo', 'IFSP TESTE 1', 'EXEMPLO123', 'ifsp@gmail.com', 'EXEMPLO123', 'IFSP TESTE 1', NULL, 'TESTE TESTE 1', NULL);
INSERT INTO `requisicoes_atleticas` (`REQ_ID`, `REQ_NOME_USUARIO`, `REQ_INSTITUICAO_ENSINO`, `REQ_SENHA`, `REQ_EMAIL`, `REQ_CONFIRMAR_SENHA`, `REQ_NOME_ATLETICA`, `REQ_LOGO_ATLETICA`, `REQ_DESCRICAO_ATLETICA`, `FK_ADMINISTRADORES_ADM_ID`) 
VALUES ('4', 'Breno', 'IFSP TESTE 2', 'EXEMPLO123', 'ifsp@gmail.com', 'EXEMPLO123', 'IFSP TESTE 2', NULL, 'TESTE TESTE 1', NULL);
INSERT INTO `requisicoes_atleticas` (`REQ_ID`, `REQ_NOME_USUARIO`, `REQ_INSTITUICAO_ENSINO`, `REQ_SENHA`, `REQ_EMAIL`, `REQ_CONFIRMAR_SENHA`, `REQ_NOME_ATLETICA`, `REQ_LOGO_ATLETICA`, `REQ_DESCRICAO_ATLETICA`, `FK_ADMINISTRADORES_ADM_ID`) 
VALUES ('5', 'Marcos', 'IFSP TESTE 3', 'EXEMPLO123', 'ifsp@gmail.com', 'EXEMPLO123', 'IFSP TEST 3', NULL, 'TESTE TESTE 1', NULL);

INSERT INTO `patrocinadores` (`PTS_TELEFONE`, `PTS_SITE_URL`, `PTS_CPF_CNPJ`, `PTS_PESSOA_FISICA`, `PTS_DATA_CADASTRO`, `PTS_NOME`, `PTS_EMAIL`, `PTS_ATIVO`) 
VALUES ('(19) 99782-4392', 'setoguchi.com', '893.153.750-68', '1', '2023-08-04', 'Alberto Setoguchi Júnior', 'albertosetoguchi@gmail.com', '1');
INSERT INTO `patrocinadores` (`PTS_TELEFONE`, `PTS_SITE_URL`, `PTS_CPF_CNPJ`, `PTS_PESSOA_FISICA`, `PTS_DATA_CADASTRO`, `PTS_NOME`, `PTS_EMAIL`, `PTS_ATIVO`) 
VALUES ('(11) 94965-2704', 'CaduJn.com', '363.333.308-84', '1', '2023-05-02', 'Carlos Eduardo Rincon Junior', 'caduzin20@gmail.com', '1');

INSERT INTO `fornecedores` (`FOR_NOME`, `FOR_DESCRICAO`, `FOR_CONTATO`, `FOR_ENDERECO`, `FOR_ATIVO`) 
VALUES ('AB Confecções', 'Confecção de camisetas personalizadas', '1938118500', 'R. Francisco Franco de Godoy Bueno, 801 - Lot. Cidade Nova, Mogi Guaçu - SP, 13845-180', '1');
INSERT INTO `fornecedores` (`FOR_NOME`, `FOR_DESCRICAO`, `FOR_CONTATO`, `FOR_ENDERECO`, `FOR_ATIVO`) 
VALUES ('Canecas&CIA', 'Confecção de canecas personalizadas', '1621547890', 'R. Seu Jorge, 354, São João da Boa Vista - SP, 13330-130', '1');

INSERT INTO `produtos` (`PRO_NOME`, `PRO_DESCRICAO`, `PRO_QUANTIDADE`, `PRO_STATUS`, `PRO_EXCLUSIVIDADE`, `PRO_EXCLUIDO`, `FK_FORNECEDORES_FOR_ID`) 
VALUES ('Camiseta V2023 Tamanho M', 'Camiseta Coleção Verão 2023 Tamanho M', '50', 'Ativo', '0', '0', '1');
INSERT INTO `produtos` (`PRO_NOME`, `PRO_DESCRICAO`, `PRO_QUANTIDADE`, `PRO_STATUS`, `PRO_EXCLUSIVIDADE`, `PRO_EXCLUIDO`, `FK_FORNECEDORES_FOR_ID`) 
VALUES ('Caneca V2023', 'Caneca 2023', '50', 'Ativo', '0', '0', '2');

INSERT INTO `eventos_sociais` (`EVS_PRECO`, `EVS_DATAEVENTO`, `EVS_TIPOENTRADA`, `EVS_DESCRICAO`, `EVS_IMAGEMPROMOCIONAL`, `EVS_NOME`, `EVS_ENDERECOEVENTO`, `FK_ATLETICAS_ATL_ID`) 
VALUES ('20.00', '2023/06/22', '1', 'QUEM NÃO AMA UMA FESTA JUNINA?
ARRAIÁ DA FEDERAL
venham curtir uma noite com a gente!!
- Venham a caráter 
- Open cooler 
- Ás 21h no dia 22/06', 'https://www.instagram.com/p/CtT5Z0WriHo/','ARRAIÁ DA FEDERAL', 'Rua da festa, 20', '1');
INSERT INTO `eventos_sociais` (`EVS_PRECO`,`EVS_DATAEVENTO`,`EVS_TIPOENTRADA`,`EVS_DESCRICAO`,`EVS_IMAGEMPROMOCIONAL`,`EVS_NOME`,`EVS_ENDERECOEVENTO`,`FK_ATLETICAS_ATL_ID`) 
VALUES (20,'2023-10-31',1,'Festa de Halloween Outubro 2023','20231001_195940_0c6f1ad0-aaee-494d-a26b-3fc10eb9528b.png','Halloween 2023','Rua da festa, 20',1);

INSERT INTO `eventos_esportivos` (`EVE_ID`,`EVE_PRECO`,`EVE_DATAEVENTO`,`EVE_TIPOENTRADA`,`EVE_DESCRICAO`,`EVE_IMAGEMPROMOCIONAL`,`EVE_NOME`,`EVE_ENDERECOEVENTO`,`FK_ATLETICAS_ATL_ID`) 
VALUES (1,NULL,'2023-10-07',NULL,'Campeonato \"Torneio InterAtleticas\" Outubro 2023',NULL,'TIAS 2023','IFSP sbv',NULL);

INSERT INTO `patrocinios` (`PAT_IMAGEM`, `PAT_DATAFINAL`, `PAT_DATAINICIAL`, `PAT_VALOR`, `PAT_NOME`, `PAT_DESCRICAO`, `FK_ATLETICAS_ATL_ID`, `FK_PATROCINADORES_PTS_ID`) 
VALUES ('https://img1.gratispng.com/20180613/yhj/kisspng-winnipeg-transit-logo-management-business-sponsorship-5b21a6bdc58167.041907261528932029809.jpg', '2024-08-18', '2022-08-18', '100.00', 'CaduJn', 'Patrocínio com o CaduJn', '1', '2');

INSERT INTO `comentarios` (`CMT_TIPO_POSTAGEM`,`CMT_FK_ID_POSTAGEM`,`CMT_CURTIDAS`,`CMT_TEXTO`,`FK_USUARIOS_USU_ID`) 
VALUES (1,1,0,'Que foto incrível! Adoro a paisagem de fundo, você arrasa sempre!',1);
INSERT INTO `comentarios` (`CMT_TIPO_POSTAGEM`,`CMT_FK_ID_POSTAGEM`,`CMT_CURTIDAS`,`CMT_TEXTO`,`FK_USUARIOS_USU_ID`) 
VALUES (1,1,0,'Estou muito orgulhoso(a) de você por alcançar isso!',1);
INSERT INTO `comentarios` (`CMT_TIPO_POSTAGEM`,`CMT_FK_ID_POSTAGEM`,`CMT_CURTIDAS`,`CMT_TEXTO`,`FK_USUARIOS_USU_ID`) 
VALUES (1,1,0,'Você merece todo sucesso do mundo!',1);
INSERT INTO `comentarios` (`CMT_ID`, `CMT_TIPO_POSTAGEM`, `CMT_FK_ID_POSTAGEM`, `CMT_CURTIDAS`, `CMT_TEXTO`, `FK_USUARIOS_USU_ID`) 
VALUES (NULL, '1', '2', '0', 'Joga demais mano', '1');
INSERT INTO `comentarios` (`CMT_ID`, `CMT_TIPO_POSTAGEM`, `CMT_FK_ID_POSTAGEM`, `CMT_CURTIDAS`, `CMT_TEXTO`, `FK_USUARIOS_USU_ID`) 
VALUES (NULL, '1', '2', '0', 'Devia ir pro real madrid seloco', '1');

INSERT INTO `denuncias` (`DNC_DESCRICAO`,`DNC_TIPO_DENUNCIA`,`DNC_FK_ID_COMENTARIO_POSTAGEM`,`DNC_MOTIVO`,`DNC_DATA`,`FK_USUARIOS_USU_ID`) 
VALUES ('Tem muitas publicações iguais a essas',1,1,4,'2023-08-21',1);
INSERT INTO `denuncias` (`DNC_DESCRICAO`,`DNC_TIPO_DENUNCIA`,`DNC_FK_ID_COMENTARIO_POSTAGEM`,`DNC_MOTIVO`,`DNC_DATA`,`FK_USUARIOS_USU_ID`) 
VALUES ('Isso parece um golpe. Eles estão promovendo produtos falsos para enganar as pessoas.',1,1,4,'2023-08-21',1);
INSERT INTO `denuncias` (`DNC_DESCRICAO`,`DNC_TIPO_DENUNCIA`,`DNC_FK_ID_COMENTARIO_POSTAGEM`,`DNC_MOTIVO`,`DNC_DATA`,`FK_USUARIOS_USU_ID`) 
VALUES ('Isso é claramente spam e não deve estar aqui. Vou relatar.',1,1,0,'2023-08-21',1);

INSERT INTO `postagens_geral` (`PST_DESCRICAO`, `PST_CURTIDAS`, `PST_DATA`, `PST_IMAGEM`, `PST_ID`, `FK_USUARIOS_USU_ID`) 
VALUES ('Futebol muito legal haha', '0', '2023-12-05', '20230904_093847_7af6a3cb-b0d6-4a6e-930d-5841ad842316.jpeg', NULL, '1');
INSERT INTO `postagens_geral` (`PST_DESCRICAO`, `PST_CURTIDAS`, `PST_DATA`, `PST_IMAGEM`, `PST_ID`, `FK_USUARIOS_USU_ID`) 
VALUES ('moto muito incrivel haha', '4', '2023-09-30', '20230930_102100_6c5977b3-11bc-4733-9057-3469e182095c.jpg', NULL, '1');
INSERT INTO `postagens_geral` (`PST_DESCRICAO`, `PST_CURTIDAS`, `PST_DATA`, `PST_IMAGEM`, `PST_ID`, `FK_USUARIOS_USU_ID`) 
VALUES ('Futebol muito legal haha', '0', '2023-12-05', '20230904_093847_7af6a3cb-b0d6-4a6e-930d-5841ad842316.jpeg', NULL, '3');





