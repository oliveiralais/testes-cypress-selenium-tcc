/* INSERTS SPRINT 01 TESTES - MODULO 4 */

USE athlantic;
INSERT INTO `administradores`(`ADM_ID`, `ADM_NOME`, `ADM_SENHA`, `ADM_EMAIL`) VALUES (1,'Administrador 1','123','adm@adm.com');

INSERT INTO `atleticas`(`ATL_ID`, `ATL_NOME`, `ATL_LEMA`, `ATL_ATIVO`, `ATL_DESCRICAO`, `ATL_LOGO`, `ATL_INSTITUICAO_ENSINO`, `FK_ADMINISTRADORES_ADM_ID`)
VALUES (1,'Atletica 1','Atletica 1 Lema',1,'Atletica 1 Desc','logo','IFSP','1');
INSERT INTO `modalidades_esportivas`(`MDE_ID`, `MDE_TIPO_DE_ESPORTE`, `MDE_NOME`, `MDE_GENERO`) 
VALUES (1,'0','Fut','0');
INSERT INTO `equipes`(`EQP_ID`, `EQP_TREINADOR`, `FK_ATLETICAS_ATL_ID`, `FK_MODALIDADES_ESPORTIVAS_MDE_ID`) 
VALUES (1,'Breno',1,1);
INSERT INTO `usuarios`(`USU_ID`, `USU_SENHA`, `USU_INSTITUICAO_ENSINO`, `USU_ATIVO`, `USU_FOTO`, `USU_NOME`, `USU_DESCRICAO`, `USU_EMAIL`,`FK_ATLETICAS_ATL_ID`, `FK_EQUIPES_EQP_ID`) 
VALUES (1,'pass','IFSP',1,'foto','User 1','User desc','user@user.com',1,1);
INSERT INTO `usuarios` (`USU_ID`, `USU_SENHA`, `USU_INSTITUICAO_ENSINO`, `USU_ATIVO`, `USU_FOTO`, `USU_NOME`, `USU_DESCRICAO`, `USU_EMAIL`, `USU_SUSPENSO`, `FK_ATLETICAS_ATL_ID`, `FK_EQUIPES_EQP_ID`) VALUES (NULL, 'senha123', 'IFSP', '1', NULL, 'gustavo', 'eu mesmo', 'gustavo_eu@gmail.com', NULL, '1', '1');

INSERT INTO `comentarios` (`CMT_TIPO_POSTAGEM`,`CMT_FK_ID_POSTAGEM`,`CMT_CURTIDAS`,`CMT_TEXTO`,`FK_USUARIOS_USU_ID`) 
VALUES (1,1,0,'Que foto incrível! Adoro a paisagem de fundo, você arrasa sempre!',1);
INSERT INTO `comentarios` (`CMT_TIPO_POSTAGEM`,`CMT_FK_ID_POSTAGEM`,`CMT_CURTIDAS`,`CMT_TEXTO`,`FK_USUARIOS_USU_ID`) 
VALUES (1,1,0,'Estou muito orgulhoso(a) de você por alcançar isso!',1);
INSERT INTO `comentarios` (`CMT_TIPO_POSTAGEM`,`CMT_FK_ID_POSTAGEM`,`CMT_CURTIDAS`,`CMT_TEXTO`,`FK_USUARIOS_USU_ID`) 
VALUES (1,1,0,'Você merece todo sucesso do mundo!',1);
INSERT INTO `comentarios` (`CMT_ID`, `CMT_TIPO_POSTAGEM`, `CMT_FK_ID_POSTAGEM`, `CMT_CURTIDAS`, `CMT_TEXTO`, `FK_USUARIOS_USU_ID`) VALUES (NULL, '1', '2', '0', 'Joga demais mano', '1')
INSERT INTO `comentarios` (`CMT_ID`, `CMT_TIPO_POSTAGEM`, `CMT_FK_ID_POSTAGEM`, `CMT_CURTIDAS`, `CMT_TEXTO`, `FK_USUARIOS_USU_ID`) VALUES (NULL, '1', '2', '0', 'Devia ir pro real madrid seloco', '1')

INSERT INTO `denuncias` (`DNC_DESCRICAO`,`DNC_TIPO_DENUNCIA`,`DNC_FK_ID_COMENTARIO_POSTAGEM`,`DNC_MOTIVO`,`DNC_DATA`,`FK_USUARIOS_USU_ID`) 
VALUES ('Tem muitas publicações iguais a essas',1,1,4,'2023-08-21',1);
INSERT INTO `denuncias` (`DNC_DESCRICAO`,`DNC_TIPO_DENUNCIA`,`DNC_FK_ID_COMENTARIO_POSTAGEM`,`DNC_MOTIVO`,`DNC_DATA`,`FK_USUARIOS_USU_ID`) 
VALUES ('Isso parece um golpe. Eles estão promovendo produtos falsos para enganar as pessoas.',1,1,4,'2023-08-21',1);
INSERT INTO `denuncias` (`DNC_DESCRICAO`,`DNC_TIPO_DENUNCIA`,`DNC_FK_ID_COMENTARIO_POSTAGEM`,`DNC_MOTIVO`,`DNC_DATA`,`FK_USUARIOS_USU_ID`) 
VALUES ('Isso é claramente spam e não deve estar aqui. Vou relatar.',1,1,0,'2023-08-21',1);

INSERT INTO `postagens_geral` (`PST_DESCRICAO`, `PST_CURTIDAS`, `PST_DATA`, `PST_IMAGEM`, `PST_ID`, `FK_USUARIOS_USU_ID`) VALUES ('Futebol muito legal haha', '0', '2023-12-05', '20230904_093847_7af6a3cb-b0d6-4a6e-930d-5841ad842316.jpeg', NULL, '1');
INSERT INTO `postagens_geral` (`PST_DESCRICAO`, `PST_CURTIDAS`, `PST_DATA`, `PST_IMAGEM`, `PST_ID`, `FK_USUARIOS_USU_ID`) VALUES ('moto muito incrivel haha', '4', '2023-09-30', '20230930_102100_6c5977b3-11bc-4733-9057-3469e182095c.jpg', NULL, '1')

