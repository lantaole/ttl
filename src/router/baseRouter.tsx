import LoginViews from "../views/loginViews"
import AdminViews from "../views/admin/adminViews"
//基础路由
const  baseRouter = [
    {
        path: "/",
        element: <LoginViews />
    },
    {
        path: "/admin/*",
        element: <AdminViews/>,
        children: [
            {

            }
        ]
    }
]

export default baseRouter