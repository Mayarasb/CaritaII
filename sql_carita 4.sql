CREATE DATABASE carita

create table Parceiro(
nome varchar(50) not null,
endereco varchar(50) not null,
telefone varchar (15) not null,
email varchar (50) not null,
CNPJ bigint not null, --dudiva
arquivos varchar (200) not null, 
ID_P int identity (1,1) not null,
constraint Pk_Parceiro primary key (ID_P),
)

create table Usuario(
tipo varchar(15) not null,
nome varchar(50) not null,
telefone varchar(15) not null,
email varchar(50) not null,
CPF_U varchar(15) not null,
ID_U int identity (1,1) not null,
constraint Pk_Usuario Primary key (CPF_U),
constraint Fk_Usuario Foreign key (ID_U) references Parceiro (ID_P) --receita de bolo
)

create table Noticia(
ID_N int identity (1,1) not null,
texto varchar (5000) not null, 
fotos varchar (100) not null,
link varchar (50) not null,
CPF_N varchar (15) not null,
constraint Pk_Noticia primary key (ID_N),
constraint Fk_Noticia foreign key (CPF_N) references Usuario (CPF_U)
)

create table Log_pi(
Data_log date, 
hora time,
CPF_pi varchar (15) not null,
duracao_acesso time,
COD_log int identity (1,1) not null,
constraint Pk_log_pi primary key (COD_log),
)

create table registra(
CPF_U varchar(15) not null,
COD_log int not null,
constraint Fk_Usuario_registra foreign key (CPF_U) references Usuario (CPF_U), 
constraint Fk_log_pi foreign key (COD_log) references Log_pi 
)

create table instituicao(
nome varchar (50) not null,
CNPJ bigint not null,
endereco varchar (100) not null,
telefone varchar (15) not null,
email varchar (50) not null,
data_instituicao date not null,
pix int,
foto varchar (50),
tipo varchar (15) not null,
AreaDeAtucao varchar (15) not null,
descricao varchar (100) not null,
CEP varchar (15) not null,
arquivos varchar (100) not null,
site_instituicao varchar (100) not null,
CPF_U varchar(15) not null,
constraint Pk_instituicao primary key (CNPJ),
constraint Fk_usuario_CPF foreign key (CPF_U) references Usuario (CPF_U)
)

create table pontos_arrecadacao(
CNPJ bigint not null,
nome varchar (50) not null,
endereco varchar (100) not null,
Cod_Ponto int identity (1,1) not null, --duvida
CEP varchar (15) not null,
telefone varchar (15) not null,
email varchar (50) not null,
foto varchar (50),
horario time not null,
arquivos varchar (100) not null,
CPF_U varchar(15) not null,
ID_P int,
constraint Pk_pontos_arrecadacao primary key (Cod_Ponto),
constraint Fk_instituicao_CNPJ foreign key (CNPJ) references Instituicao (CNPJ), 
constraint Fk_Usuario_CPF_Ponto foreign key (CPF_U) references Usuario (CPF_U), 
constraint Fk_parceiros_ID foreign key (ID_P) references Parceiro (ID_P)
)


