create database movies;
use movies;
create table movies(
     movie_id int primary key not null auto_increment,
     title text
);
insert into movies (title) values ('API Mean Girl');
insert into movies (title) values ('API Hackers');
insert into movies (title) values ('API The Grey');
insert into movies (title) values ('API Sunshine');
insert into movies (title) values ('API Ex Machina');