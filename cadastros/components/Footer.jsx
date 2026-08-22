function Footer() {
  return (
    <footer className="bg-[#030A1C] w-screen text-white p-5 md:p-10">
      <div className="flex items-center justify-between">
        <img src="../assets/favoWLogo.png" alt="Favo Logo" className="h-2 md:h-4" />
        <p className="text-xs text-gray-400">&copy; Todos os direetos reservados. {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;