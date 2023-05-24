import { Outlet } from "react-router-dom"
function Admin() {
    return (
        <>
            <div>
                <h1>Admin</h1>
                <Outlet></Outlet>
            </div>
        </>
    )
}
export default Admin