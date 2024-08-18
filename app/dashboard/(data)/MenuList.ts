import { Home, History, CreditCard, Settings } from "lucide-react";

const MenuList = [
    {
        name: "Home",
        icon: Home,
        path: '/dashboard'
    },
    {
        name: "History",
        icon: History,
        path: '/dashboard/history'
    },
    {
        name: "Billing",
        icon: CreditCard,
        path: '/dashboard/billing'
    },
    {
        name: "Settings",
        icon: Settings,
        path: '/dashboard/settings'
    }
];

export default MenuList;