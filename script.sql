CREATE DATABASE db_appfrei;

USE db_appfrei;

CREATE TABLE tb_cadastro(
id_cadastro         INT PRIMARY KEY AUTO_INCREMENT,
nm_usuario          VARCHAR(30) NOT NULL,
sb_usuario          VARCHAR(30) NOT NULL,
nr_cpf_usuario      DECIMAL(11) NOT NULL UNIQUE,
em_usuario          VARCHAR(100) NOT NULL UNIQUE,
dt_nascimento       DATE NOT NULL,
ds_senha            VARCHAR(30) NOT NULL
);

CREATE TABLE tb_pre_inscricao(
id_pre_inscricao        INT PRIMARY KEY AUTO_INCREMENT,
nm_aluno                VARCHAR(60) NOT NULL,
em_aluno                VARCHAR(100) NOT NULL UNIQUE,
nr_tel_aluno            DECIMAL(11) NOT NULL,
dt_nascimento_aluno     DATE NOT NULL,
sx_aluno                VARCHAR(9) NOT NULL,
nr_cpf_aluno            DECIMAL(11) NOT NULL UNIQUE,
cm_conheceu             VARCHAR(30) NOT NULL,
vl_renda_familiar       DECIMAL(10,2) NOT NULL,
qt_pessoas_residencia   INT NOT NULL,
ds_escolaridade         VARCHAR(30) NOT NULL,
tp_escola               VARCHAR(30) NOT NULL,
nm_escola               VARCHAR(60) NOT NULL,
op_primeira             VARCHAR(30) NOT NULL,
op_segunda              VARCHAR(30),
bl_confirmado           BOOL NOT NULL,
cd_verificacao          DECIMAL(4) NOT NULL UNIQUE,
id_cadastro             INT NOT NULL,
FOREIGN KEY (id_cadastro) REFERENCES tb_cadastro(id_cadastro)
);

CREATE TABLE tb_cursos(
id_curso            INT PRIMARY KEY AUTO_INCREMENT,
nm_curso            VARCHAR(30) NOT NULL,
tp_curso            VARCHAR(10) NOT NULL,
qt_carga_horaria    INT NOT NULL,
ds_curso            LONG NOT NULL,
nr_idade_minima     INT NOT NULL,
nr_idade_maxima     INT NOT NULL,
ds_escolaridade_min VARCHAR(15) NOT NULL,
ds_mercado          VARCHAR(200) NOT NULL,
ds_periodos         VARCHAR(30) NOT NULL,
vl_contribuicao     DECIMAL(3,2) NOT NULL,
lk_video_apresenta  LONG  NOT NULL,
im_curso            LONGBLOB  NOT NULL
);

CREATE TABLE tb_acompanhamento(
id_acompanhamento       INT PRIMARY KEY AUTO_INCREMENT,
op_primeira             VARCHAR(30) NOT NULL,
op_segunda              VARCHAR(30) NOT NULL,
cd_verificacao          DECIMAL(4) NOT NULL,
bl_pre_inscrito         BOOL NOT NULL,
bl_taxa_paga            BOOL NOT NULL,
bl_aluno_aprovado       BOOL NOT NULL,
dt_pagamento            DATETIME NOT NULL,
id_pre_inscricao        INT NOT NULL,
FOREIGN KEY (id_pre_inscricao) REFERENCES tb_pre_inscricao(id_pre_inscricao)
);

CREATE TABLE tb_faq(
id_faq              INT PRIMARY KEY AUTO_INCREMENT,
nm_pergunta         VARCHAR(255) NOT NULL,
ds_resposta         VARCHAR(500) NOT NULL
);

CREATE TABLE tb_admin(
id_admin            INT PRIMARY KEY AUTO_INCREMENT,
nm_admin          VARCHAR(30) NOT NULL UNIQUE,
em_admin          VARCHAR(100) NOT NULL UNIQUE,
ds_senha            VARCHAR(30) NOT NULL
)