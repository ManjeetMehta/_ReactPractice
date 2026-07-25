function Array() {
    const userData = [
        {
            id: 1,
            name: 'John Doe',
            age: 30,
            email: 'john.doe@example.com'
        },
        {
            id: 2,
            name: 'Jane Smith',
            age: 25,
            email: 'jane.smith@example.com'
        },
        {
            id: 3,
            name: 'Bob Johnson',
            age: 35,    
            email: 'bob.johnson@example.com'
        }
    ];
    return (
        <div>
            <h1>Array</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Array;