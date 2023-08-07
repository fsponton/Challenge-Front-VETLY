import axios from "axios"

export default async function loginUser(form) {
    try {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3003/login',
            data: form
        })
        return response.data
    } catch (err) {
        return err.response.data
    }
}