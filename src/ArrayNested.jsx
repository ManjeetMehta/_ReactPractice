function ArrayNested() {
    const collegeData = [
        {
            name : 'ABC College',
            location : 'City A',
            website : 'www.abccollege.com',
            student : [
                { name: 'Alice', age: 20, address: { city: 'City X', state: 'State Y' } },
                { name: 'Bob', age: 22, address: { city: 'City Z', state: 'State W' } },
                { name: 'Charlie', age: 21, address: { city: 'City A', state: 'State B' } }
            ]
        },
        {
            name : 'XYZ University',
            location : 'City B',
            website : 'www.xyzuniversity.com',
            student : [
                { name: 'David', age: 23, address: { city: 'City B', state: 'State C' } },
                { name: 'Eve', age: 21, address: { city: 'City D', state: 'State E' } },
                { name: 'Frank', age: 22, address: { city: 'City F', state: 'State G' } }
            ]
        },
        {
            name : 'PQR Institute',
            location : 'City C',
            website : 'www.pqrinstitute.com',
            student : [
                { name: 'Grace', age: 20, address: { city: 'City C', state: 'State H' } },
                { name: 'Henry', age: 22, address: { city: 'City C', state: 'State H' } },
                { name: 'Ivy', age: 21, address: { city: 'City C', state: 'State H' } }
            ]
        }
    ];

    return (
        collegeData.map((college, index) => (
            <div key={index}>
                <h2>{college.name}</h2>
                <p>Location: {college.location}</p>
                <p>Website: {college.website}</p>
                <p>Students:</p>
                <ul>
                    {college.student.map((student, studentIndex) => (
                        <li key={studentIndex}>
                            <span>{student.name}</span> - <span>{student.age}</span>
                            <p>Address: {student.address.city}, {student.address.state}</p>
                        </li>
                    ))}
                </ul>
            </div>
        ))
    )
}

export default ArrayNested;