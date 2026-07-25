function College(props) {
    console.log(props);
    return (
        <div>
            <h1>{props.collegeNames}</h1>
        </div>
    );
}

export default College;