export default function UserCard(props) {
    console.log(props.data);
    
    return (
        <div className="user-card">
            <h1> {props.data.name.first} profile </h1>
            <img className="user-img" src={props.data.picture.large}/>
            <h3>{props.data.name.title} {props.data.name.first} {props.data.name.last}</h3>
            <p>Age: {props.data.dob.age}</p>
            <p>{props.data.phone}</p>
            <p>{props.data.location.street.number} {props.data.location.street.name}, {props.data.location.city}, {props.data.location.state}, {props.data.location.country}, {props.data.location.postcode}</p>
            <p>{props.data.email}</p>
            <button onClick={props.refresh} id="refresh-btn">Refresh</button>
        </div>
    );
}
