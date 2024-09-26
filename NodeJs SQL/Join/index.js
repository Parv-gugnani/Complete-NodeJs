var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass",
  database: "mydb",
});

//main
// var qry = `
// SELECT
//    m.member_id,
//    m.name AS member,
//    c.committee_id,
//    c.name AS committee
// FROM
//    members m
// INNER JOIN committees c ON c.name = m.name;
// `;

//left
// var qry = `
// SELECT
//    m.member_id,
//    m.name AS member,
//    c.committee_id,
//    c.name AS committee
// FROM
//    members m
// LEFT JOIN committees c USING(name);
// `;

//right
var qry = `
SELECT 
   m.member_id, 
   m.name AS member, 
   c.committee_id, 
   c.name AS committee
FROM
   members m
RIGHT JOIN committees c on c.name = m.name;
`;

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(qry, function (err, results) {
    if (err) throw err;
    results.forEach((row) => {
      console.log(JSON.stringify(row));
    });
  });

  con.end();
});
