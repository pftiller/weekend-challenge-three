CREATE DATABASE myTaskList;

CREATE TABLE todolist (
	id SERIAL PRIMARY KEY,
	taskDetails VARCHAR (250),
	status VARCHAR(1) DEFAULT '0'
);

INSERT INTO todolist (taskDetails, status)
VALUES ('do laundry', '0'), ('clean kitchen', '0'), ('call mom', '0'), ('grocery shopping', '0');

SELECT * FROM todolist WHERE status='0';