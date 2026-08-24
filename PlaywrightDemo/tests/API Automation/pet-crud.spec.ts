import { test, expect } from '@playwright/test';

test('Pet CRUD Operations', async ({ request }) => {

  const baseURL = 'https://petstore.swagger.io/v2';

  // Dynamically generated unique ID every time and gives current timestamp in milliseconds.
  const petId = Date.now();

  const originalName = `PlaywrightPet_${petId}`;

  const updatedName = `${originalName}_Updated`;


  // =========================================================
  // CREATE - POST
  // =========================================================

  const createResponse = await request.post(
    `${baseURL}/pet`,
    {
      data: {
        id: petId,

        category: {
          id: 1,
          name: 'Dogs'
        },

        name: originalName,

        photoUrls: [
          'https://example.com/pet.jpg'
        ],

        tags: [
          {
            id: 1,
            name: 'Playwright'
          }
        ],

        status: 'available'
      }
    }
  );

  expect(createResponse.ok()).toBeTruthy();

  expect(createResponse.status()).toBe(200);

  const createBody = await createResponse.json();

  expect(createBody.id).toBe(petId);

  expect(createBody.name).toBe(originalName);

  /*
//printing the data
console.log('===== POST - CREATE =====');
console.log('Status:', createResponse.status());
console.log('Pet ID:', createBody.id);
console.log('Pet Name:', createBody.name);
*/


  // =========================================================
  // READ - GET
  // =========================================================

  const getResponse = await request.get(
    `${baseURL}/pet/${petId}`
  );

  expect(getResponse.ok()).toBeTruthy();

  expect(getResponse.status()).toBe(200);

  const getBody = await getResponse.json();

  expect(getBody.id).toBe(petId);

  expect(getBody.name).toBe(originalName);

  /*
  console.log('===== GET - READ =====');
  console.log('Status:', getResponse.status());
  console.log('Pet ID:', getBody.id);
  console.log('Pet Name:', getBody.name);
  */


  // =========================================================
  // UPDATE - PUT
  // =========================================================

  const updateResponse = await request.put(
    `${baseURL}/pet`,
    {
      data: {
        id: petId,

        category: {
          id: 1,
          name: 'Dogs'
        },

        name: updatedName,

        photoUrls: [
          'https://example.com/pet.jpg'
        ],

        tags: [
          {
            id: 1,
            name: 'Playwright'
          }
        ],

        status: 'available'
      }
    }
  );

  expect(updateResponse.ok()).toBeTruthy();

  expect(updateResponse.status()).toBe(200);

  const updateBody = await updateResponse.json();

  expect(updateBody.id).toBe(petId);

  expect(updateBody.name).toBe(updatedName);

  /*
  console.log('===== PUT - UPDATE =====');
  console.log('Status:', updateResponse.status());
  console.log('Pet ID:', updateBody.id);
  console.log('Updated Name:', updateBody.name);
  
  // =========================================================
  // PATCH - PARTIAL UPDATE
  // =========================================================

  const patchResponse = await request.patch(
    `${baseURL}/pet/${petId}`,
    {
      data: {
        name: 'NewPetName'
      }
    }
  );

  expect(patchResponse.ok()).toBeTruthy();

  const patchBody = await patchResponse.json();

  expect(patchBody.name).toBe('NewPetName');
*/


  // =========================================================
  // DELETE
  // =========================================================

  const deleteResponse = await request.delete(
    `${baseURL}/pet/${petId}`
  );

  expect(deleteResponse.ok()).toBeTruthy();

  expect(deleteResponse.status()).toBe(200);


  // =========================================================
  // VERIFY DELETE
  // =========================================================

  const deletedPetResponse = await request.get(
    `${baseURL}/pet/${petId}`
  );

  expect(deletedPetResponse.status()).toBe(404);
  
/*
console.log('===== DELETE =====');
console.log('Status:', deleteResponse.status());
console.log('Pet ID:', petId);
console.log('Pet Name:', originalName);
*/


});