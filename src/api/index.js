import axios from "axios";

export const getTopHeadlines = ({page, pageSize, category = '', country = 'us', q = ''}) => (
    axios.get(`https://newsapi.org/v2/top-headlines?page=${page}&pageSize=${pageSize}&apiKey=d5e1e884a10242acbb195d295bae343f${country && `&country=${country}`}${category && `&category=${category}`}${q && `&q=${q}`}`)
)