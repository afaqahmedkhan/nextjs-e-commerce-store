import { Nav, NavLink } from "@/components/Nav";

/**
 * dynamic as we don't need caching in admin pages
 * we always want latest changes here
 */
export const dynamic = "force-dynamic"

export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){

    return <>
    <Nav>
        <NavLink href={"/admin"}>
            Dashboard
        </NavLink>
        <NavLink href={"/admin/products"}>
            Products
        </NavLink>
        <NavLink href={"/admin/users"}>
            Customers
        </NavLink>
        <NavLink href={"/admin/orders"}>
            Sales
        </NavLink>
        </Nav>
    <div className="container my-6">{children}</div>
    </>

}