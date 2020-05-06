const server = require("./server");

server.listen(process.env.PORT || 8080, () => {
  console.log("ON");
});

// INSERT INTO aluno (codigo, ra, nome , vd turma) VALUES(null, 2741,"diogo",1)

// INSERT INTO aluno VALUES(null, 2741,"diogo",1)
