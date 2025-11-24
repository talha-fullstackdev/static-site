// import React from 'react'

// const ApiDataPage = async () => {
// const response = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'}); // no store mean get fresh data on every request 
// const data = await response.json()

//   return (
//     <div>
//       <h1>user data</h1>
//       {data.map((item)=>(
//         <div className="">
//           <p>{item.userId}</p>
//           <p>{item.id}</p>
//           <p>{item.title}</p>
//           <p>{item.body}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default ApiDataPage
import React from 'react'

const ApiDataPage = async () => {
const response = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'force-cache'}); // STATIC build time fetch
const data = await response.json()

  return (
    <div>
      <h1>user data</h1>
      {data.map((item)=>(
        <div className="">
          <p>{item.userId}</p>
          <p>{item.id}</p>
          <p>{item.title}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}

export default ApiDataPage