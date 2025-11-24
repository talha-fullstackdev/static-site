import getUserData from '@/apiCall/userDataApi'
import React from 'react'
const UserPage = async ({ params }) => {
    const { id } = await params;

    const data = await getUserData();
    const userInfo = data[id - 1];

    return (
        <div>
            <p><strong>id: {userInfo.id}</strong></p>
            <p><strong>Name:</strong> {userInfo.name}</p>
            <p><strong>UserName:</strong> {userInfo.username}</p>
             <p><strong>Email:</strong> {userInfo.email}</p> 
            <p><strong>Address:</strong> 
                {userInfo.address.street}, {userInfo.address.city}
            </p>
        </div>
    )
}

export default UserPage
export const generateStaticParams = async () => {
    const data = await getUserData();
    return data.map((user) => ({ id: user.id.toString() }));
}