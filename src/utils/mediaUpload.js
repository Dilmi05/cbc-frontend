import { createClient } from '@supabase/supabase-js';

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZydHhpdWFvd2t1dWpla3NvaW5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzNTQ2ODAsImV4cCI6MjA3MDkzMDY4MH0.5ZUOAnoIZNjzDVtSmqko5Au-A6HotMbsaOfBzzF47gE`

const urlnew = "https://vrtxiuaowkuujeksoini.supabase.co"
   
const supabase = createClient(urlnew, key)

export default async function uploadMediaToSupabase(file) {


    return new Promise((resolve, reject) => {
        if(file== null ){
            reject("File not added")
        }

         
  let fileName = file.name
  const extension = fileName.split(".")[fileName.split(".").length - 1]


    
   const timestamp = new Date().getTime()
   fileName = timestamp +file.name+ "." + extension


    supabase.storage.from("images").upload(fileName, file, {
    cacheControl: "3600",
    upsert: false
  }).then(()=>{
     const publicUrl =supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
     resolve(publicUrl)
  }).catch((err)=>{
    reject(err);
  })
    })

}