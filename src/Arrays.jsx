function Arrays() {
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
            {
                userData.map((user) => (
                    <div key={user.id}>
                        hello {user.name} your email is {user.email} and your age is {user.age}
                    </div>
                ))
            }
        </div>
    );
}

export default Arrays;