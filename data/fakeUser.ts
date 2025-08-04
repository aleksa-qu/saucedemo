import { faker } from '@faker-js/faker';

faker.seed(123);

export const generateFakeUser = () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  zipCode: faker.location.zipCode(),
});
