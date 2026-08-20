function Nav() {
  
  const sections=['Home', 'Funcionalidades', 'Produtividade', 'Como_Acessar', 'Sobre_Nós']
  

  return (
      <nav className="w-screen">
        <img src="" alt=""/>
         <ul className="flex gap-6 list-none">
          {sections.map(topico => (
            <li key={topico}>
              <a href={"#" + topico} className="text-gray-700 hover:text-blue-600 text-sm font-medium no-underline">
                {topico}
              </a>
            </li>
          ))}
        </ul>
    </nav>
  )
}

export default Nav