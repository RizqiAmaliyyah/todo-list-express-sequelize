"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("todos", [
      {
        username: "Tapioka",
        tittle: "todo 1",
        description: "Beli tepung",
        startTime: new Date(),
        status: "false",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Minyak",
        tittle: "todo 2",
        description: "Beli minyak makan",
        startTime: new Date(),
        status: "false",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Minum",
        tittle: "todo 3",
        description: "Beli galon besar dua",
        startTime: new Date(),
        status: "false",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Lauk",
        tittle: "todo 4",
        description: "Beli untuk makan malam",
        startTime: new Date(),
        status: "false",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Tidur",
        tittle: "todo 5",
        description: "Tidur nomor satu, yang lain nanti dulu",
        startTime: new Date(),
        status: "true",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todos", null, {});
  },
};
