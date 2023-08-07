import axios from "axios"

export default async function registerUser(form) {
    try {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3003/new_user',
            data: form
        })
        return response.data
    } catch (err) {
        return err.response.data
    }
}