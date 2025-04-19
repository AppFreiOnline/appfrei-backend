CREATE DATABASE db_appfrei;

use db_appfrei;

CREATE TABLE tb_cadastro(
id 				int primary key auto_increment,
nm_usuario 		varchar(30) not null,
sbn_usuario 	varchar(30) not null,
cpf_usuario 	decimal(11) not null,
email_usuario 	varchar(100) not null,
dt_nascimento 	date not null,
senha 			varchar(30) not null
);

CREATE TABLE tb_preInscricao(
id 				int primary key auto_increment,
nm_aluno 		varchar(60) not null,
email_aluno 	varchar(100) not null,
tel_aluno 		decimal(11) not null,
dt_nascimento 	date not null,
sx_aluno 		varchar(8) not null,
cpf_aluno 		decimal(11) not null,
cm_conheceu 	varchar(30) not null,
renda 			decimal(3,2) not null,
qtd_pessoas 	int not null,
escolaridade 	varchar(30) not null,
tp_escola 		varchar(30) not null,
nm_escola 		varchar(60) not null,
pr_opcao 		varchar(30) not null,
sg_opcao 		varchar(30) not null,
confirmado 		bool not null,
cod_verificacao decimal(4) not null,
id_cadastro 	int not null,
foreign key (id_cadastro) references tb_cadastro(id)
);

CREATE TABLE tb_cursos(
id 					int primary key auto_increment,
nm_curso 			varchar(30) not null,
tp_curso 			varchar(10) not null,
cg_horaria 			int not null,
descricao 			long not null,
idade_min 			int not null,
idade_max 			int not null,
escolaridade_min 	varchar(15),
contribuicao 		decimal(3,2),
link_video 			long,
url_imagem 			longblob
);

CREATE TABLE tb_acompanhamento(
id 					int primary key auto_increment,
pr_opcao 			varchar(30) not null,
sg_opcao 			varchar(30) not null,
cod_verificacao 	decimal(4) not null,
pre_inscrito 		bool not null,
taxa_paga 			bool not null,
aluno_aprovado 		bool not null,
dt_pagamento 		datetime not null,
id_preInscricao 	int not null,
foreign key (id_preInscricao) references tb_preInscricao(id)
);

CREATE TABLE tb_faq(
id 				int primary key auto_increment,
nm_pergunta 	varchar(255),
ds_resposta   	varchar(500)
);