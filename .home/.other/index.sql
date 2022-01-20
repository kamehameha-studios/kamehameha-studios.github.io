CREATE TABLE new_users (
  id INTEGER PRIMARY KEY, 
  username TEXT, 
  password REAL
);

CREATE TABLE other_users (
  id INTEGER PRIMARY KEY, 
  username TEXT, 
  password REAL, 
  email REAL, 
  real_name TEXT
);
INSERT INTO new_users VALUES (
  1, 
  "Bosco", 
  "opP4^yu86HhjK"
);
