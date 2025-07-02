import FooterWeb from "@/components/website/FooterWeb";
import NavbarWeb from "@/components/website/NavbarWeb";

export default function WebsiteLayout({ children }) {
  return (
   
   <>
   <NavbarWeb/>
        {children}
        <FooterWeb/>

        </>

  );
}