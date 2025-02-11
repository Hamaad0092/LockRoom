import { test, expect, request } from '@playwright/test';

test('Register API Test', async ({}) => {
    const apiContext = await request.newContext();
    const response = await apiContext.post('https://lockroom-backend-staging-bd8ee8065d38.herokuapp.com/users/register', {
        data: {
            first_name: "flow",
            last_name: "guest",
            email: "flow009297@gmail.com",
            phone: "+923120409712",
        },
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const responseBody = await response.json();

    expect(response.status()).toBe(201); 
    expect(responseBody).toHaveProperty('userId'); 
    expect(responseBody.email).toBe('flow009297@gmail.com'); 
    expect(responseBody).toHaveProperty('token'); 

    console.log('User registered successfully:', responseBody);
});
