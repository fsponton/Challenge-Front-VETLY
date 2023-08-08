import axios from "axios"

export default async function getInfoUser(email) {
    try {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3003/get_user',
            data: { email }
        })
        return response.data
    } catch (err) {
        return err.response.data
    }
}