const Footer = ()=>{
    const currentYear = new Date().getFullYear();
 return (
    <footer>
        <p>Developed by Henry. <link href="www.henmanit.com"></link>All Right Reserved © {currentYear}</p>
    </footer>
 )
}
export default Footer;