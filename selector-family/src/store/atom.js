import { atomFamily, selectorFamily } from "recoil"
import axios from "axios"

export const todoAtomFamily = atomFamily({
    key: "todoAtomFamily",
    default: selectorFamily({
        key: "todoAtomSelectorFamily",
        get: param => {
            return async ({ get }) => {
                const response = await axios.get(`https://sum-server.100xdevs.com/todo?id=${param}`)
                return response.data.todo
            }
        }
    })
})