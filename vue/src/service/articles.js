import axios from "@/service/axios.js"

const ArticleService = {
    articles(){
        return axios.get('/articles')
    }
}
export default ArticleService
