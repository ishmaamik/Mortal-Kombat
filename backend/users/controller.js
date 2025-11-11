import SupabaseInstance from "../config/supabaseClient.js"

export const createUser=async(req, res)=>{
    try{
    const userData= req.body
    const {data, error}= await SupabaseInstance
                                .from("users")
                                .insert([userData])
                                .select()
    if(error) throw new Error(error.message)

    res.send(data)
    }
    catch(error){
        console.log(error)
    }
}

export const fetchUsers=async()=>{
    try{
    const {data, error}= await SupabaseInstance
                                    .from("users")
                                    .select("*")
    if(error) throw new Error(error.message)
    return data
    }
    catch(error){
        console.log(error)
    }
}

export const fetchUsersByEmail=async(email)=>{
    try{
        const {data, error}= await SupabaseInstance.from("users").select().eq("email", email)

        if(error) throw new Error(error.message)
        return data;
    }
    catch(error){
        console.log(error)
    }
}

export const deleteUser= async(id)=>{
    const {error}= await SupabaseInstance.from("users").delete().eq("id", id)
    
    if(error) throw new Error(error.message)
    return {message:"User deleted successfully"}
}

export const updateUser= async(id, updates)=>{
    try{
        const {data, error}= await SupabaseInstance.from("users").update(updates).eq("id", id).select()

        if(error) throw new Error(error.message)
        return data
    }
    catch(error){

    }
}