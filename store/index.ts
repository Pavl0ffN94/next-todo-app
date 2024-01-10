import { getAllPosts, getPostsBySearch } from '@/services/getPosts'
import {createWithEqualityFn} from 'zustand/traditional'

interface UsePosts {
    posts: any[],
    loading: boolean,
    getAllPosts: ()=> Promise<void>,
    getPostsBySearch: (value:string)=> Promise<void>,
}

export const usePosts = createWithEqualityFn<UsePosts>()((set)=>({
    posts: [],
    loading: false,
    getAllPosts: async ()=>{
        set({loading:true})
        const posts = await getAllPosts()
        set({posts, loading:false})
    },
    getPostsBySearch: async (search) => {
        set({loading:true})
        const posts = await getPostsBySearch(search)
        set({posts, loading:false})
    }
}))