CREATE DATABASE IF NOT EXISTS turnpoint_db;
USE turnpoint_db;

CREATE TABLE FundingSources (
	Id int not null auto_increment,
    Name varchar(20) not null,
    primary key (Id)
);

INSERT INTO FundingSources(Name)
VALUES ("NDIS"),("HCP"),("CHSP"),("DVA"),("HACC");

CREATE TABLE Clients (
	Id int not null auto_increment,
    FirstName varchar(20) not null,
    LastName varchar(20) not null,
    DOB date not null,
    PrimaryLanguage varchar(20) not null,
    SecondaryLanguage varchar(20) null,
    PrimaryFundingSourceId int not null,
    primary key (Id),
    CONSTRAINT FK_FundingSourceClient FOREIGN KEY (PrimaryFundingSourceId)
    REFERENCES FundingSources(Id)
);

INSERT INTO Clients(FirstName, LastName, DOB, PrimaryLanguage, SecondaryLanguage, PrimaryFundingSourceId)
VALUES 	("Paul", "Adams", DATE("1989-06-15"), "english", null, 1),
		("Jessica", "Boyle", DATE("1963-11-01"), "english", null, 1),
        ("Steve", "Williams", DATE("1938-10-02"), "french", "english", 1);
