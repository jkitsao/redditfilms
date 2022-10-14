import axios from 'axios'
export const getComments = async (baseUrl) => {
    const res = await axios.get(baseUrl)
    alert(JSON.stringify(res, null, 2))
    return res.data
}