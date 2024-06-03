import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const userAPI = createApi({
    reducerPath: "userApi",
    baseQuery:fetchBaseQuery({
        baseUrl: "/api/v1/user"
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query:(user)=>({
                url:"/new",
                method:"POST",
                body:user,
            })
        }),
        getUser: builder.mutation({
            query: (user)=>({
                url: `${id}`,
                method:"GET",
                body:user,
            })
        })
    })

})

// export const getUser = async ( id) =>{
//     try {
//         const { data } = await axios.get(`http://localhost:4000/api/v1/user/${id}`)
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// }

export const { useLoginMutation, useGetUserMutation} = userAPI