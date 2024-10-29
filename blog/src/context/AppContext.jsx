import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";


export const AppContext = createContext()

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)

    async function fetchBlogPosts(page = 1, tag = null, category = null) {
        setLoading(true);
        let url = `${baseUrl}get-blogs?page=${page}`;
    
        if (tag) {
            url += `&tag=${tag}`;
        }
    
        if (category) {
            url += `&category=${category}`;
        }
    
        try {
            const result = await fetch(url);
            if (!result.ok) {
                throw new Error(`HTTP error! Status: ${result.status}`);
            }
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error("Error in fetching data:", error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
    
        setLoading(false);
    }
    
    
    
    

    function handlPageChange(page) {
        setPage(page)
        fetchBlogPosts(page)
    }

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlPageChange
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}  