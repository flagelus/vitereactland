function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className="container mx-auto px-6 pt-16 flex-1 text-center">
        <h2 className="text-2xl md:text-6xl lg:text-8xl uppercase">Bem vindo a</h2>
        <h2 className="text-2xl md:text-8xl lg:text-10xl font-black mb-8 uppercase">Lading Page</h2>

        <div className="text-lg md:text-2xl lg:text-3xl py-2  px-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto  mb-8 rounded-full">
          932,303 acessos
        </div>
            
            <form action="https://www.getrevue.co/profile/flaviofelix/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
          <div class="flex flex-col md:flex-row justify-center mb-4">
           
            <input className="text-xl placeholder:text-gray-400:italic py-4 px-6 md:px-10 lg:px-12
             bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 rounded-full md:rounded-tr-none 
             md:rounded-br-none mb-4 md:mb-0 outline-none" 
            placeholder="ex: uchiha.madara@konohamail.com" 
            type="email" name="member[email]"  />
         
          <input type="submit" value="Junte-se" name="member[subscribe]" 
          className="bg-primary rounded-full md:rounded-tl-none md:rounded-bl-none
          text-lg md:text-2xl py-4 px-6 md:px-10 lg:px-12 cursor-pointer hover:opacity-80 duration-160" />
          </div>
        <div className="opacity-75 italic">By subscribing, you agree with Revue’s <a target="_blank" href="https://www.getrevue.co/terms" className="hover:opacity-50 duration-150">Terms of Service</a> and  
        <a target="_blank" href="https://www.getrevue.co/privacy" className="hover:opacity-50 duration-150"> Privacy Policy</a>.</div>
          </form>
          


      </main>
      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <p>React + Vite + Tailwind por 🐢 Flávio Felix </p>
        <div className="flex-mx-6">
          <a href="#" className="mx-3 hover:opacity-60 duration-150">Sobre</a>|
          <a href="#" className="mx-3 hover:opacity-60 duration-150">Privacidade</a>|
          <a href="#" className="mx-3 hover:opacity-60 duration-150">Contato</a>|

        </div>

      </footer>
    </div>
  )
}

export default App
