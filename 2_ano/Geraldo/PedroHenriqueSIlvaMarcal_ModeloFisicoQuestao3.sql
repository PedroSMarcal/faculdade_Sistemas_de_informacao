-- TABELA TIPO COMODO

CREATE TABLE tb_tipoComodo (
IdTipo				INTEGER,
DescrTipo			VARCHAR(45),
CONSTRAINT pk_tb_tipoComodo PRIMARY KEY (IdTipo)
);

DROP TABLE tb_tipoComodo;

SELECT * FROM tb_tipoComodo;

-- TABELA COMODO

CREATE TABLE tb_comodo (
NroComodo			INTEGER,
IdTipo				INTEGER,
SituacaoComodo		VARCHAR(60),
CONSTRAINT pk_tb_comodo_NroComodo PRIMARY KEY (NroComodo),
CONSTRAINT fk_tb_comodo_Id_Tipo_tb_tipoComodo FOREIGN KEY (IdTipo)
	REFERENCES tb_tipoComodo(IdTipo)
);

DROP TABLE tb_comodo;

SELECT * FROM tb_comodo;

-- TABELA LEITO

CREATE TABLE tb_leito (
NroLeito			INTEGER,
NroComodo			INTEGER,
SituacaoLeito		VARCHAR(45),
CONSTRAINT pk_tb_leito_NroLeito PRIMARY KEY (NroLeito),
CONSTRAINT fk_tb_leito_NroComodo_tb_comodo FOREIGN KEY (NroComodo)
	REFERENCES tb_comodo(NroComodo)
);

DROP TABLE tb_leito;

SELECT * FROM tb_leito;

-- TABELA FUNCIONARIO

CREATE TABLE tb_funcionario(
MatriculaFuncionario		INTEGER,
NomeFunc					VARCHAR(45),
EndFunc						VARCHAR,
CelularFunc					VARCHAR(11),
FoneFunc					VARCHAR(11),
CONSTRAINT pk_tb_funcionarios_MatriculaFuncionario PRIMARY KEY (MatriculaFuncionario)
);

DROP TABLE tb_funcionario;

SELECT * FROM tb_funcionario;

-- TABELA ENFERMEIRO

CREATE TABLE tb_enfermeiro(
Coren				VARCHAR
)INHERITS(tb_funcionario);

DROP TABLE tb_enfermeiro;

INSERT INTO tb_enfermeiro VALUES 
(1, 'Pedro', 'Rua:Jose Cidade: Jose Estado: Sao Paulo', '16999999999', '19999999999', 'Coren');

SELECT * FROM tb_enfermeiro;

-- TABELA MEDICO

CREATE TABLE tb_medico(
CRM 				VARCHAR
)INHERITS(tb_funcionario);

DROP TABLE tb_medico;

INSERT INTO tb_medico VALUES 
(1, 'Pedro', 'Rua:Grana | Cidade: Grana | Estado: Sao Paulo', '16999999999', '19999999999', 'CMR');

SELECT * FROM tb_medico;

-- CONVENIADO

CREATE TABLE tb_planoConveniado (
CodPlano				INTEGER,
NomePlano				VARCHAR(60),
CONSTRAINT pk_tb_planoConveniado_CodPlano PRIMARY KEY (CodPlano)
);

DROP TABLE tb_planoConveniado;

SELECT * FROM tb_planoConveniado

-- PACIENTE

CREATE TABLE tb_paciente (
CodPaciente				INTEGER, 
NroLeito 				INTEGER,
MatriculaFuncionario	INTEGER,
CodPlano				INTEGER,
NomePac					VARCHAR(60),
SexoPac					CHAR(1),
DataInternamentoPac		DATE,
DataProvavelSaidaPac	DATE,
CONSTRAINT pk_tb_paciente_CodPaciente PRIMARY KEY (CodPaciente),
CONSTRAINT fk_tb_paciente_CodPlano_tb_planoConveniado FOREIGN KEY (CodPlano)
	REFERENCES tb_planoConveniado(CodPlano),
CONSTRAINT fk_tb_paciente_NroLeito FOREIGN KEY (NroLeito)
	REFERENCES tb_leito(NroLeito)
);