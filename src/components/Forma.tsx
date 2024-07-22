import { useState,FormEvent } from "react";
import { User } from "../types/User";
import { validate } from "../utils/validate";

function Forma() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [agree,setAgree] = useState(false);

    const [errors,SetErrors] = useState<User | null>(null);

    const handleSubmit = (e:FormEvent)=> {
      e.preventDefault();

      SetErrors(null);

      const data: User = {
        name,
        email,
        agree,
      };
      
      const validateErrors =  validate (data)

      if(Object.keys(validateErrors).length > 0 ) {
        SetErrors(validateErrors);
        return;
      }

      setName("");
      setEmail("");
      setAgree(false);
      
    }
    

    return (
      <form className="flex flex-col gap-3" onSubmit={handleSubmit} >
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="name">Nome</label>
          <input type="text"  placeholder="Digite o seu nome" className="rounded-lg px-2 py-2 text-sm placeholder:text-sm placeholder:text-stone-400"
            value={name}  onChange={(e) => setName(e.target.value)}
          />
          {errors?.name &&<small className= "text-xs text-red-500 mt-1">{errors?.name}</small>}
        </div>

        <div className="flex flex-col">
          <label className="text-sm" htmlFor="email">Email</label>
          <input  type="email" placeholder="Insira o seu melhor e-mail" className="rounded-lg px-2 py-2 text-sm placeholder:text-sm placeholder:text-stone-400"
           value={email}  onChange={(e) => setEmail(e.target.value)}
          />
            {errors?.email &&<small className= "text-xs text-red-500 mt-1">{errors?.email}</small>}
          
        </div>

        <div  className="flex flex-col">

          <a href="#" className="text-xs underline mb-2">Leia os termos</a>

        <div className="flex items-center gap-2">
            <input type="checkbox"  checked={agree}  onChange={(e) => setAgree(e.target.checked)}/>
            <label className="text-sm"  htmlFor="agree">Concordo com os termos</label>
        </div>
          {errors?.agree &&<small className= "text-xs text-red-500 mt-1">{errors?.agree}</small>}
        </div>

        <button type="submit" className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 text-white rounded-lg">Cadastrar</button>
      </form>
    )
  }
  
  export default Forma
  