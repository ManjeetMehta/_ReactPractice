// function Users(data) {
//     console.log(data.name);
//   return (
//     <div>
//         <h1>Users, {data.name}</h1>
//         </div>
//   )
// }


// function Users({name, age, email}){
//     return (
//         <div>
//             <h2>Users, {name}</h2>
//             <h2>Age, {age}</h2>
//             <h2>Email, {email}</h2>
//         </div>
//     )
// }


function Users({user}){
    return (
        <div>
            <hr />
            <h2>Users, {user.name}</h2>
            <h2>Age, {user.age}</h2>
            <h2>Email, {user.email}</h2>
            <hr />
        </div>
    )
}   

export default Users;