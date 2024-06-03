export default function Home() {
  return (
    <main className="">
      <div className="bg-gray-400 ">
        <h2 className="font-bold text-white text-3xl text-center">
          Red Product
        </h2>
        <div className="">
          <form action="">
            <h3 className="text-white text-center">
              Connectez vous en tant que Admin
            </h3>
            <div className="block">
              <input
                type="email"
                placeholder="Entrez votre adresse email"
                className="block"
                required
              />
              <input
                type="password"
                placeholder="Entrez votre mot de passe"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
