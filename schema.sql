create database movies;
use movies;
create table movies(
     movie_id int primary key not null auto_increment,
     title text
);
insert into movies (title) values ('Mean Girl');
insert into movies (title) values ('Hackers');
insert into movies (title) values ('The Grey');
insert into movies (title) values ('Sunshine');
insert into movies (title) values ('Ex Machina');