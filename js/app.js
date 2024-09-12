/**Ejemplo basico de promise */
let promesa = () => {
  return new Promise((resolve, reject) => {
    let exito = false;

    if (exito) {
      resolve("Promese cumplida");
    } else {
      reject("Promesa rechazada");
    }
  });
};

/* promesa()
  .then((res) => console.log(res))
  .catch((error) => console.log(error)); */

/**Ejemplo con objetos DE CALLBACK */

const estudiantes = [
  { id: 1, nombre: "Gabriel" },
  { id: 2, nombre: "Maria" },
  { id: 3, nombre: "Ana" },
  { id: 4, nombre: "Juan" },
  { id: 5, nombre: "Valen" },
];

const notas = [
  { id: 1, nota: 10 },
  { id: 2, nota: 9 },
  { id: 3, nota: 8 },
];

function getEstudiantePorId(id, callback) {
  const estudiante = estudiantes.find((e) => e.id === id);

  if (estudiante) {
    callback(null, estudiante);
  } else {
    callback(`El estudiante con id: ${id} NO existe`);
  }
}
function getNotaPorId(id, callback) {
  const nota = notas.find((n) => n.id === id);

  if (nota) {
    callback(null, nota);
  } else {
    callback(`El estudiante con id: ${id} NO posee ninguna nota`);
  }
}

let idBuscado = 4;

/* getEstudiantePorId(idBuscado, (error, estudiante) => {
  if (error) return console.log(error);

  getNotaPorId(idBuscado, (error, nota) => {
    if (error) return console.log(error);

    console.log(
      `El estudiante ${estudiante.nombre} tiene la nota: ${nota.nota}`
    );
  });
}); */

/**Callback a Promise primera parte*/

function getEstudiantePorIdPromise(id) {
  const estudiante = estudiantes.find((e) => e.id === id);

  return new Promise((resolve, reject) => {
    if (estudiante) {
      resolve(estudiante);
    } else {
      reject(`El estudiante con id: ${id} NO existe`);
    }
  });
}
function getNotaPorIdPromise(id) {
  const nota = notas.find((e) => e.id === id);

  return new Promise((resolve, reject) => {
    if (nota) {
      resolve(nota);
    } else {
      reject(`El estudiante con id: ${id} NO posee ninguna nota`);
    }
  });
}
/* let buscado = 4;
getEstudiantePorIdPromise(buscado)
  .then((estudiante) => {
    getNotaPorIdPromise(buscado)
      .then((nota) =>
        console.log(`El estudiante ${estudiante.nombre} tiene: ${nota.nota}`)
      )
      .catch((error) => console.log(error));
  })
  .catch((error) => console.log(error)); */

/**Async await */

function getEstudiantePorIdAsync(id) {
  const estudiante = estudiantes.find((e) => e.id === id);

  return new Promise((resolve, reject) => {
    if (estudiante) {
      resolve(estudiante);
    } else {
      reject(`El estudiante con id: ${id} NO existe`);
    }
  });
}
function getNotaPorIdAsync(id) {
  const nota = notas.find((e) => e.id === id);

  return new Promise((resolve, reject) => {
    if (nota) {
      resolve(nota);
    } else {
      reject(`El estudiante con id: ${id} NO posee ninguna nota`);
    }
  });
}

let global = {};
async function getStudent(id) {
  try {
    let estudiante = await getEstudiantePorIdAsync(id);
    let nota = await getNotaPorIdAsync(id);

    return {
      nombre: estudiante.nombre,
      nota: nota.nota,
    };
  } catch (error) {
    console.log(error);
  }
}

async function main(id) {
  global = await getStudent(id);
  if (global) {
    console.log(global);
  }
}

main(10);
//console.log(global);
