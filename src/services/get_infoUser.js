import axios from "axios"

export default async function getInfoUser(email) {
    try {
        console.log("EMAILLL", typeof email)
        const response = await axios({
            method: 'get',
            url: 'http://localhost:3003/get_user',
            data: { email }
        })
        return response.data
    } catch (err) {
        return err.response.data
    }
}