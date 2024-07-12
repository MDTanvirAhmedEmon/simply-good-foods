"use server"

export const registerUser = async (data) => {
    const res = await fetch(`https://simply-good-foods-server.vercel.app/signup`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify(data),
        cache: "no-store"
    });
    const userinfo = await res.json();
    return userinfo;
}