'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Students', [
      {
        firstName: 'Марк',
        lastName: 'Безрукавый',
        secondName: 'Валериевич',
        dateOfBirthday: '12/03/1998',
        birthPlace: 'Кривой Рог',
        passportSeries: 'АО',
        passportNumber: '0588788',
        passportDate: '12/03/1998',
        addressIndex: '12465',
        addressRegion: 'Днепропетроская',
        addressArea: 'Терновской',
        addressCity: 'Кривой Рог',
        addressStreet: '23 лютого',
        addressHouse: '22',
        addressFlat: '11',
        phone: '0965431147',
        studentTicket: '219687621654',
        beneficiaries: false,
        motherId: 1,
        fatherId: 2
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Students', null, {});
  }
};