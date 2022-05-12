const Contacts5 = (props) => {
    const {id, name, pictureUrl, popularity, wonEmmy, wonOscar, deleteCelebrity} = props
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>PICTURE</th>
                        <th>NAME</th>
                        <th>POPULARITY</th>
                        <th>WON OSCAR</th>
                        <th>WON EMMY</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img className="picture" src={pictureUrl} alt="celebrity"></img>
                        </td>
                        <td>{name}</td>
                        <td>{popularity}</td>
                        <td>{wonOscar
                                ? <span>🏆</span>
                                : <span>🚫</span>}</td>
                        <td>{wonEmmy
                                ? <span>🏆</span>
                                : <span>🚫</span>}</td>
                        <td><button onClick={()=>deleteCelebrity(id)}>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Contacts5