import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Address from "@/components/Address.vue";
import Confirm from "@/components/Confirm.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/address",
        name: "Address",
        component: Address,
    },
    {
        path: "/confirm",
        name: "Confirm",
        component: Confirm,
    }
];

export default routes;