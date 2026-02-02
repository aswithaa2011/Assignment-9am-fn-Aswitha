function DashboardCard(props){
    return(  <div style={{
      border: "1px solid #ddd",
      padding: "20px",
      width: "200px"
    }}>

        <h3>{props.title}</h3>
        <p>{props.value}</p>
    </div>
    )
}

export default DashboardCard;