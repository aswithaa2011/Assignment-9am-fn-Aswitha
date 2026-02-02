// function App() {
//   return (
//     <div>
//       <h1>My name is Aswitha</h1>
//     </div>
//   );
// }

// const App= ()=>(
//   <h1>my name is Aswitha</h1>
// )

// import Profile from "./profile";

// function App(){
//   return(
//     <div>
//       <Profile name="Aswitha" course="FS" age="23" />
//     </div>
//   )

// }

// export default App;

// import ProductItem from "./ProductItem";

// function ProductList(){

//   return(
//     <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px",justifyItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",gap:"25px"}}>
//       <h2>Product List </h2>
//       <ProductItem name="laptop" price={50000}/>
//             <ProductItem name="mobile" price={25000}/>
//                    <ProductItem name="Headphones" price={30000}/>


//     </div>
//   )

// }

// export default ProductList;

import DashboardCard from "./DashboardCard";
function Dashboard(){
    return(
        <div style={{display:"flex", gap:"20px"}}>
            <DashboardCard title="users" value="25"/>
               <DashboardCard title="sales" value="75"/>
                  <DashboardCard title="Orders" value="7 5"/>

        </div>
    )
}

export default Dashboard;




