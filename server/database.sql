CREATE DATABASE mytasklist;

CREATE TABLE todolist (
	id SERIAL PRIMARY KEY,
	taskDetails VARCHAR (250),
	status VARCHAR(1) DEFAULT 'N'
);

INSERT INTO todolist (taskDetails, status)
VALUES ('do laundry', 'N'), ('clean kitchen', 'N'), ('call mom', 'N'), ('grocery shopping', 'N');

