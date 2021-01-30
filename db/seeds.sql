USE employees;
INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Sanitation');
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150200, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 150000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4),
    ('Janitor', 40000, 5),
    ('Porter', 40000, 5);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Jane', 'Doe', 10, NULL),
    ('Rebecca', 'Law', 3, NULL),
    ('Samantha', 'Randal', 4, NULL),
    ('Jason', 'Borne', 5, NULL),
    ('Daniel', 'Garret', 6, NULL),
    ('Mia', 'George', 7, NULL),
    ('Jennifer', 'Smith', 9, NULL),
    ('Emma', 'Stone', 7, NULL),
    ('Bat', 'Man', 2, NULL),
    ('Gene', 'Gerry', 3, NULL),
    ('Ronald', 'Reagan', 4, NULL),
    ('Jimmy', 'Carter', 5, NULL),
    ('Dairy', 'Queen', 6, NULL),
    ('Jerimiah', 'Doe', 7, NULL),
    ('Jack', 'Daniels', 8, NULL),
    ('Steve', 'Carrel', 4, NULL),
    ('Jimmy', 'Buffet', 4, NULL);

