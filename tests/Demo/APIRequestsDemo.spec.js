import {test, expect} from "@playwright/test"
import { ok } from "assert"
import { request } from "http"

//make a GET request test
test('API GET test', async ({request})=> {

    const response = await request.get('https://reqres.in/api/users/2')
    expect(response.status()).toBe(200)

})


//make a POST request test
test('API POST test', async ({request})=> {

    const response = await request.post('https://reqres.in/api/users',{
        
    })
    expect(response.status()).toBe(200)

})

//make PUT request test

