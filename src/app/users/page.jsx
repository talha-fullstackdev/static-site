import getUserData from "@/apiCall/userDataApi"
import Link from "next/link";
const Users = async () => {
    const users = await getUserData();
  return (
    <div>
        <h1 className="text-2xl font-bold mb-4"></h1>
        {users.map((user,index)=>(
            <div key={index} className="">
                <Link href={`users/${user.id}`}>{user.username}</Link>
            </div>
        ))}
    </div>
  )
}

export default Users